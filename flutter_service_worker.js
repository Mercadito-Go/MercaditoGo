'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd2011733d6aa35ebcd0d0e1f8a7647f",
"assets/AssetManifest.bin.json": "f5f796dd68061e0e8bd851eae88a5219",
"assets/AssetManifest.json": "62679073510c2e0fd27028ad964aaf28",
"assets/assets/docs/preguntas_frecuentes.pdf": "08c5a1a1d7bf8ad294ed0a4dd4c33b33",
"assets/assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/fonts/Poppins-Bold.ttf": "f1f086d0ba463223ffc5d333c5ead0c7",
"assets/assets/fonts/Poppins-Medium.ttf": "aa6b524ae5a9318566acfb94b323523f",
"assets/assets/fonts/Poppins-Regular.ttf": "41ca7c5a3d735770bf47350b8d11d03a",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/images/ANTOJITOS_icono.png": "6d50568127e4cb614a6623d2eae9e564",
"assets/assets/images/backgroundmg.jpg": "16af9884262c648bb74827269947bcae",
"assets/assets/images/BEBIDAS_icono.png": "319e6d82ba6a9d2dff82f1dd0b083939",
"assets/assets/images/cat_todas.webp": "a708f990cec086ea96e5fcfcb6c61a2d",
"assets/assets/images/CERDO_icono.png": "a8245a44b298b31be921ce22da14fe8e",
"assets/assets/images/CHILES_icono.png": "b753f9ef097aff3fa619e3bab35a1338",
"assets/assets/images/dao_icon.webp": "dbce919c95aeed571b800e4efee9d3e0",
"assets/assets/images/DEFAULT_icono.png": "5ff3d51ea15343983ba12c1acfe647e8",
"assets/assets/images/DE_LA_CASA_icono.png": "9e0411b0514d3906563f34ceb20546f3",
"assets/assets/images/EMBUTIDOS_icono.png": "650fd57beef2ce33194f088a3c724452",
"assets/assets/images/empty_cart.png": "e3d52f5d01cbd85a381e487d1b6b1b05",
"assets/assets/images/ESPECIAS_icono.png": "d5db3855e323d61ad3d06652cefd7078",
"assets/assets/images/FLORES_icono.png": "0192be5bb571d73b99b9238fbc80f85c",
"assets/assets/images/FRUTAS_icono.png": "d28d98e63740719ef02b2306971aed93",
"assets/assets/images/hero_1.webp": "782a3aecafe332137ce71a9c67e082ca",
"assets/assets/images/hero_2.webp": "b751bdb1c1b8af92052849032d643909",
"assets/assets/images/hero_3.webp": "786f9afc698522adb26b32a3e2463fd3",
"assets/assets/images/infografia_directoalaolla.webp": "77d159bc716d98fd209be2246f74b2b9",
"assets/assets/images/LACTEOS_icono.png": "8f3c126deaa7ef21e8c69b8425118ba7",
"assets/assets/images/logo.png": "0c37f6247e503977af896a03b3d38b7b",
"assets/assets/images/MARISCOS_icono.png": "e2b5e7e8c92c9f1d09f62223f0f192f2",
"assets/assets/images/mercaditopacksimagen.webp": "bf6f6118454fba10a244c8e8ff4a4a31",
"assets/assets/images/MISCELANEO_icono.png": "ed58e6246d9f52c75b03b846f127acbb",
"assets/assets/images/olla_en_fuego.png": "5ff3d51ea15343983ba12c1acfe647e8",
"assets/assets/images/onboarding1.webp": "f563728cbfd04e73a2bc86f65a1630f3",
"assets/assets/images/onboarding2.webp": "ae5f223a0f2fca1aba2eeb8846b81ed1",
"assets/assets/images/onboarding3.webp": "7d38e6fcda8ee36cbda5ab72133b7d92",
"assets/assets/images/ORGANICO_SALUDABLE_icono.png": "ba81bfab666f445261c2d19d4108d6aa",
"assets/assets/images/paquetes_header.webp": "fe3287c1d771cb6d704e1a86a8a92b0a",
"assets/assets/images/PEDIDOS_ESPECIALES_icono.png": "42837a37e8b10ac6a973bc23ba4bb07b",
"assets/assets/images/placeholder.webp": "cf956080ddc65fcd65954475e638f9e7",
"assets/assets/images/POLLO_icono.png": "42b98b8a45ddc97ca4d50ab1f5a15196",
"assets/assets/images/product_placeholder.png": "e593005709351bf9899a0326c0ab1817",
"assets/assets/images/QUESOS_icono.png": "94fb2de92b45677d9ccdb0185f35c3c1",
"assets/assets/images/recetasimagen.webp": "27110cee740f447ea3a4407d3a7983bc",
"assets/assets/images/RES_icono.png": "e84dddb6fcaa73fe9f473dc4ee39cfb4",
"assets/assets/images/VERDURAS_icono.png": "403b94d6b7ad6f50ae776a3c6af51f02",
"assets/FontManifest.json": "00ca8921ad3fd1050db0c4dceb0c39e4",
"assets/fonts/MaterialIcons-Regular.otf": "69205a14c8311df64b3b71c1f99fa234",
"assets/NOTICES": "4430c0fbae20727976948fc5a79d8a76",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1e5d47a0bc1559e57273e04652e4751f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"aviso-privacidad.html": "18fd97f0e2a8ece811eb48adde4beffd",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"eliminar-cuenta.html": "dd26807ae0cbf1a3bc8c1cab59127310",
"favicon.png": "39d276a12cbc8222d7ff1d1ad3eafe39",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f7a67d74dcd4e16b4ac338b2b9c7fca9",
"icons/Icon-192.png": "007e3303ef7f05132c099e8ea74ddc06",
"icons/Icon-512.png": "4b2fcf0ed3cda89cf0260aa2e96cb135",
"icons/Icon-maskable-192.png": "007e3303ef7f05132c099e8ea74ddc06",
"icons/Icon-maskable-512.png": "4b2fcf0ed3cda89cf0260aa2e96cb135",
"index.html": "2c36742a9a2ad245aaa98af974c645cf",
"/": "2c36742a9a2ad245aaa98af974c645cf",
"main.dart.js": "cb90899f99b4b0f77a85a10079b74d73",
"manifest.json": "6a6944f12b2fa60a701712dc684f5b50",
"terminos.html": "896febb38328412a7dae2bf426fc40e3",
"version.json": "36b33a617f806212948eea04b80a9cd1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
