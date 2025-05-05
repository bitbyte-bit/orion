self.addEventListener('install',event=>{
    console.log('service Worker Installing...');
    event.waitUntil(
        caches.open('my-cache').then(cache=>{
            return cache.addAll(['/','/index.html','/style.css','/app.js']);
        })
    );
});
self.addEventListener('fetch',event=>{
    event.respondWith(
        caches.match(event.request).then(response=>response || fetch(event.request))
    );
});