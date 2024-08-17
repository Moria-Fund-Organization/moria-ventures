'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b60f3232f4d8d41e301cca0e44d615ff",
"assets/AssetManifest.bin.json": "0bc5a89aad53e4bdcd0a1fe03c624820",
"assets/AssetManifest.json": "110c1125f182c239c6556b85bcfeccd3",
"assets/assets/fonts/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/icons/favicon_io.zip": "9e97204ac9455a9fc73a1ba14ae2fd0a",
"assets/assets/icons/icon_calculator.svg": "df9b9374335a7babb6840a70511146d7",
"assets/assets/icons/icon_checklist.svg": "3a482bd3561f3a9d458e494148b7195b",
"assets/assets/icons/icon_growth.svg": "2ba8e12f9790d051d1701d39159944b6",
"assets/assets/icons/icon_instagram.svg": "534769a5003ac8626917230b1e19b474",
"assets/assets/icons/icon_linkedin.svg": "bcffe5644fd659d31e7b27fd17049b84",
"assets/assets/icons/icon_percent.svg": "17f4d6d9cc59f1c62bbaa12dd129f1f9",
"assets/assets/icons/icon_search.svg": "97e21271a2374fa3bee40102c8e26a37",
"assets/assets/icons/icon_strategy.svg": "71ceba7a9478b9d71258f7e2388a5582",
"assets/assets/icons/icon_twitter.svg": "29d53c41cd3a7988b41387b7a69c6b04",
"assets/assets/icons/logo_full_mv.jpg": "612c90a71ed4e5e82988d53687967810",
"assets/assets/icons/logo_full_mv.png": "cbd208b5c30e43d1028935b7b719b04a",
"assets/assets/icons/logo_full_mv.svg": "0584b156d29ccee933d8125b10b24ce6",
"assets/assets/icons/logo_full_mv_2.svg": "dc94eb3950f22b50f365cf5f9c81d313",
"assets/assets/icons/logo_mark_mf.jpg": "c0bbd92ef2c019f3f9c17062100655fc",
"assets/assets/icons/logo_mark_mf.png": "0fe114993770553d5e6a8690aa3116c6",
"assets/assets/icons/logo_mark_mf.svg": "0637a09d97972e33c5270fe96a07423c",
"assets/assets/icons/logo_mark_mv.png": "a87ea6737d61be1d84363572e1aa6f08",
"assets/assets/icons/logo_mark_mv.svg": "f8bba34948073987d591482f86cf2246",
"assets/assets/icons/pattern_bg.svg": "1537f0c5e8eefd329a18f8990a88da6e",
"assets/assets/icons/test_1.svg": "df569e665c199bd57fac3da0558bd1b6",
"assets/assets/images/hero_1.jpg": "6f9fbec81d33ed494c4000263b7ac4d1",
"assets/assets/images/hero_2.jpg": "3148c2fece7ef2f0102834fc964a6ebc",
"assets/assets/images/pattern_bg.jpg": "37bc57ef53e28aa24ff7bdce80489173",
"assets/assets/images/pattern_bg.png": "4a126d8e9fd943c1ecaa8c22781cd55c",
"assets/FontManifest.json": "a6c5849b2ced479415220c95ff6567d3",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "adc731fe97a9eaea24da73f10a10fa6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a87ea6737d61be1d84363572e1aa6f08",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "8abb9b097c1a54f15b76e49035897611",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c43d8c91cc1d9a6f6eeaa9e2de2b1a70",
"/": "c43d8c91cc1d9a6f6eeaa9e2de2b1a70",
"main.dart.js": "35e48253f1557d8c7fe4366224f2d36f",
"manifest.json": "33458c33b307728d626ec12515003fed",
"version.json": "169d515edb1284ae4b2750a689b33c64"};
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
