const APP_CACHE_VERSION = "2026.04.06";
const CACHE_NAME = `putt-mobile-cache-${APP_CACHE_VERSION}`;
const APP_SHELL = [
  "./",
  "./putt.html",
  "./custom-maps.js",
  "./custom-maps.json",
  "./manifest.json",
  "./service-worker.js",
  "./icon.svg",
  "./icon-maskable.svg",
  "./apple-launch-1125x2436.png",
  "./apple-launch-1179x2556.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("./putt.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      });
    })
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const targetUrl = new URL(event.notification?.data?.url || "./putt.html", self.location.href).href;
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(clientList => {
      const existing = clientList.find(client => client.url === targetUrl || client.url.endsWith("/putt.html"));
      if (existing) return existing.focus();
      return clients.openWindow(targetUrl);
    })
  );
});
