'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7d4e2f43b6c61bc5cd86665e5249e385",
"assets/AssetManifest.bin.json": "ed33fe1f49b65ffa7550596573fecfc3",
"assets/AssetManifest.json": "969d47ddc5e8bb7d295b05c62268bda0",
"assets/assets/docs/politica_devoluciones.pdf": "e598ae45b79c5496d86a83d10264d7c4",
"assets/assets/docs/politica_privacidad.pdf": "52e8778200c2cb7c2257ba85e74aef8d",
"assets/assets/docs/preguntas_frecuentes.pdf": "08c5a1a1d7bf8ad294ed0a4dd4c33b33",
"assets/assets/docs/terminosm2g.pdf": "aba77665c07102d842cb83658e8f0163",
"assets/assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/fonts/Poppins-Bold.ttf": "f1f086d0ba463223ffc5d333c5ead0c7",
"assets/assets/fonts/Poppins-Medium.ttf": "aa6b524ae5a9318566acfb94b323523f",
"assets/assets/fonts/Poppins-Regular.ttf": "41ca7c5a3d735770bf47350b8d11d03a",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/images/ANTOJITOS_icono.png": "9e371a3ed18ff002fd8f126b52e1ac12",
"assets/assets/images/backgroundmg.png": "38f66f7fef416a230f271b1255abb93a",
"assets/assets/images/BEBIDAS_icono.png": "5c84abeedb62e54fcb67d4c699015eea",
"assets/assets/images/cat_todas.png": "b0991a77946e5078579c461d3fd93d25",
"assets/assets/images/CERDO_icono.png": "bb9f2e9a67f7e81e8f0bb5202aaf5b6d",
"assets/assets/images/CHILES_icono.png": "9ade241b19ef7ad619d026758acb8e68",
"assets/assets/images/dao_icon.png": "423626162496cf42d152e9c2db27b922",
"assets/assets/images/DEFAULT_icono.png": "4efac973d6bbe93806bd133fa4090844",
"assets/assets/images/DE_LA_CASA_icono.png": "0c7c94573cfcebef11116db5a36d34a0",
"assets/assets/images/EMBUTIDOS_icono.png": "3fb607c4b1fceb580246f7811802816e",
"assets/assets/images/empty_cart.png": "e3d52f5d01cbd85a381e487d1b6b1b05",
"assets/assets/images/ESPECIAS_icono.png": "1d49a4cf7c5a1ce53d2d71a2a84ed6f5",
"assets/assets/images/FLORES_icono.png": "4c5a825c9806688e57b0c3b0799e959a",
"assets/assets/images/FRUTAS_icono.png": "954c94593c9e08f5bffcae3fd8a0cc6e",
"assets/assets/images/hero_1.png": "e3271f82580251c507e5ace25b1bd8fc",
"assets/assets/images/hero_2.png": "14dccf0480625ce889cc091640d5560d",
"assets/assets/images/hero_3.png": "d9492cf55158d62ae30854188c772c23",
"assets/assets/images/infografia_directoalaolla.png": "0313424b3df2b9e0ee3713ba04dbf1a6",
"assets/assets/images/LACTEOS_icono.png": "7297e3bd64626f3c222c9f3c5e55dc8d",
"assets/assets/images/logo.png": "0c37f6247e503977af896a03b3d38b7b",
"assets/assets/images/MARISCOS_icono.png": "037c3d1043d037fd0face1e316cee0e8",
"assets/assets/images/mercaditopacksimagen.png": "88d663172e0f7dedb14a0d4ae450ae53",
"assets/assets/images/MISCELANEO_icono.png": "510f63228c5c8aab7de4b48e42226b03",
"assets/assets/images/olla_en_fuego.png": "4efac973d6bbe93806bd133fa4090844",
"assets/assets/images/onboarding1.png": "e612cfa25aa37cd8f04265df09a60f6e",
"assets/assets/images/onboarding2.png": "db7bae289cd0d4b4327ac2f832027b8e",
"assets/assets/images/onboarding3.png": "bce407aa7aef1134f87f971fd36f28fb",
"assets/assets/images/ORGANICO_SALUDABLE_icono.png": "057133e038267300c510654c81970410",
"assets/assets/images/paquetes_header.png": "af214c729c4e1a0272825d6de6d9a04b",
"assets/assets/images/PEDIDOS_ESPECIALES_icono.png": "94f1540e4d7efc82a92f489982dfbc70",
"assets/assets/images/placeholder.png": "147cb277234703375721c322e3867d12",
"assets/assets/images/POLLO_icono.png": "428f4da3ac8812e4659e9dbfce08e520",
"assets/assets/images/product_placeholder.png": "e593005709351bf9899a0326c0ab1817",
"assets/assets/images/QUESOS_icono.png": "a2bb67dde05c1a97910f3ee5d1bce8ce",
"assets/assets/images/recetasimagen.png": "48be20d15294e7bbdd4715485b6c3886",
"assets/assets/images/RES_icono.png": "7a97fbdc902937b4b3fb345b30c326d5",
"assets/assets/images/VERDURAS_icono.png": "df6a7f6bd487a6638db3655c0f9d53a6",
"assets/FontManifest.json": "00ca8921ad3fd1050db0c4dceb0c39e4",
"assets/fonts/MaterialIcons-Regular.otf": "bec57daa1365445f92d53678089df0a0",
"assets/NOTICES": "b77940ca8e6a179f9209b92d3a5bd2d5",
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
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "39d276a12cbc8222d7ff1d1ad3eafe39",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ec9e789b66441fd6a99a2de73943da02",
"icons/Icon-192.png": "007e3303ef7f05132c099e8ea74ddc06",
"icons/Icon-512.png": "4b2fcf0ed3cda89cf0260aa2e96cb135",
"icons/Icon-maskable-192.png": "007e3303ef7f05132c099e8ea74ddc06",
"icons/Icon-maskable-512.png": "4b2fcf0ed3cda89cf0260aa2e96cb135",
"index.html": "e6fdf85734b062817f3d207c2537da8d",
"/": "e6fdf85734b062817f3d207c2537da8d",
"main.dart.js": "f9ae7845d9127d1b0998e9f5caef54e0",
"manifest.json": "af224245d8776a70baa0427f8940ecc3",
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
