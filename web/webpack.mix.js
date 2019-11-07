let mix = require('laravel-mix');
const WebpackBar = require('webpackbar');
const { InjectManifest } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

mix
.setPublicPath('../resources/static/')
.js('src/app.js', '../resources/static/js/app.js')
.babel('../resources/static/js/app.js', '../resources/static/js/app-e5.js')

mix.copy('src/index.html', '../resources/static/index.html');

mix.disableNotifications();

mix.webpackConfig({

    output: {
        publicPath: '' // https://github.com/GoogleChrome/workbox/issues/1534
    },
    plugins: [
        new CleanWebpackPlugin(),
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