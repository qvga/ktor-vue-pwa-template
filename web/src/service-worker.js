workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting(true);
workbox.core.clientsClaim(true);

workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL('/index.html')
);


workbox.routing.registerRoute(
    new RegExp('https://unpkg.com/tachyons@4/css/tachyons.min.css'),
    new workbox.strategies.CacheFirst({
        cacheName: 'tachyons-css',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
        ],
    }),
);