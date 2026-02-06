self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("countdown-v1").then(cache =>
      cache.addAll([
        "/call/",
        "/call/index.html",
        "/call/icon.png",
        "/call/manifest.json"
      ])
    )
  );
});
