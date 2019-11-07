workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting(true);
workbox.core.clientsClaim(true);

workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL('/index.html')
);