let cacheData = "mpt-front";
let cacheDataRequests = "mpt-front-request"
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/src/assets/js/base.js",
                "/static/js/bundle.js",
                "/book",
                "/static/js/CookBook.chunk.js"
            ])
        })
    )
})


this.addEventListener('activate', event => {
    this.clients.claim();
});

//Cache de dados dinamicos
this.addEventListener('fetch', event => {
    const response = caches.match(event.request).then(res => {
        return res || fetch(event.request).then(res => {
            if (!event.request.url.startsWith('http')) {
                //skip request
            } else
                caches.open(cacheDataRequests).then(cache => {
                    if (event.request.url !== "https://httpbin.org/get") {
                        cache.put(event.request, res);
                    }
                });
            return res.clone();
        });
    });

    event.respondWith(response)

});
