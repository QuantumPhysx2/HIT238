var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + 'CACHE_VERSION';
var urlsToCache = [
  "index.html",
  "css/Style.css",
  "main.js"
];

self.addEventListener("install", function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log("Opened cache");
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if (response) {
					console.log("Offline Fetch Success! Your page now works offline");
					return response;
				}
			return fetch(event.request);
			}
		)
	);
});