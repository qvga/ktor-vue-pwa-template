let mix = require('laravel-mix');
const WebpackBar = require('webpackbar');
const { InjectManifest } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

mix
.setPublicPath('../web-dist/')
.js('src/app.js', '../web-dist/js/app.js')
.babel('../web-dist/js/app.js', '../web-dist/js/app-e5.js')

mix.copy('src/index.html', '../web-dist/index.html');
mix.copy('src/manifest.json', '../web-dist/manifest.json');

mix.disableNotifications();

mix.webpackConfig({

    output: {
        publicPath: '' // https://github.com/GoogleChrome/workbox/issues/1534
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: [],
            cleanAfterEveryBuildPatterns: ['precache-manifest*'],
        }),
        new InjectManifest({
            swSrc: 'src/service-worker.js',
            swDest: 'service-worker.js',
            importWorkboxFrom: 'local',
            globPatterns: ['*.html'],
            globDirectory: 'src/'

        }),
        new WebpackBar()
    ]

});