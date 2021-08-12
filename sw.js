self.addEventListener('install', e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll([
      "./",
      "./src/styles/style.css",
      "./src/styles/type-colors.css",
      "./public/Types/Bug.png",
      "./public/Types/Dark.png",
      "./public/Types/Dragon.png",
      "./public/Types/Electric.png",
      "./public/Types/Fairy.png",
      "./public/Types/Fight.png",
      "./public/Types/Fire.png",
      "./public/Types/Flying.png",
      "./public/Types/Ghost.png",
      "./public/Types/Grass.png",
      "./public/Types/Ground.png",
      "./public/Types/Ice.png",
      "./public/Types/Normal.png",
      "./public/Types/Poison.png",
      "./public/Types/Psychic.png",
      "./public/Types/Rock.png",
      "./public/Types/Steel.png",
      "./public/Types/Water.png",
      "./public/images/144x144.png",
      "./public/images/192x192.png",
      "./public/images/512x512.png",
      "./public/images/main-logo.svg"
      ])
    })
  )
})

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})