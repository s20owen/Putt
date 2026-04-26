const APP_CACHE_VERSION = "2026.04.26-whats-new-polish";
const CACHE_NAME = `putt-mobile-cache-${APP_CACHE_VERSION}`;
const CORE_APP_SHELL = [
  "./",
  "./putt.html",
  "./custom-maps.js",
  "./manifest.json",
  "./service-worker.js",
  "./icon.svg",
  "./icon-maskable.svg",
  "./apple-launch-1125x2436.png",
  "./apple-launch-1179x2556.png"
];
const OPTIONAL_APP_SHELL = [
  "./custom-maps.json"
];

async function cacheUrls(cache, urls, { required = false } = {}) {
  const results = await Promise.all(urls.map(async url => {
    try {
      await cache.add(url);
      return { url, ok: true };
    } catch (error) {
      if (required) throw error;
      return { url, ok: false };
    }
  }));
  return results;
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cacheUrls(cache, CORE_APP_SHELL, { required: true });
      await cacheUrls(cache, OPTIONAL_APP_SHELL, { required: false });
    })
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
