'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "63a7aa959035a3ff036f2ad38be4f1d2",
".git/config": "fa58fa0e048e373004eae5be0e6c74b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e0b6d3db7cb0dd5094f09f50e9ade641",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "463e9f00e18163d30973536e9b2575b4",
".git/logs/refs/heads/main": "33751035c9ff90ed96c2bddd5cba99f7",
".git/logs/refs/remotes/origin/main": "a51a292c650a9a57c43ae8aeaa76a3f6",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/5c82f64273d475b4da6667c4ffb79198bba4a8": "b3c037231abfd0bb2f1bd85569209d98",
".git/objects/0b/36ce45a4415e699cb39ca491db4094ec600c64": "02dfc3582f97b96aebcd549412ea3c64",
".git/objects/1e/c5d5031caa42376744326cd11d3075db9472a3": "62e469b2a7d2f3e8a2a047dc261240c8",
".git/objects/20/ecbbeefcb5df64882252518d46a5e184c70148": "90dc1c3fdaeb30111b4f3843037832d3",
".git/objects/27/ef0782429ea7eb497891e00611e59e4e9e55b9": "ddcadea4837e267cf0e70107dc897431",
".git/objects/28/4fb0cbdc688dfbd0cbac2e0b45cdc8f380b1ee": "75803ecc73515ab6a66f0a9f0bc979cb",
".git/objects/2a/893435d3401072e2c5cfc31396534d7bb92bba": "fd3013c39bb468b7db683372f8402eb5",
".git/objects/2d/ff1ee27e9a0c3a15095b282505f376858810ee": "c38f1380701f7174857afeb1a0a7dc4d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/a0f28c05571cafe1c6f8b3452ff142449af592": "15fc75c41049f6e57d13b832fc625e33",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/62dbdb7b930b442ec5cdb0bfc62636824ed3aa": "912feeb155ead9e216cf2946c21a7a5b",
".git/objects/9b/34ca6f5fd50994b8bbc5b5e738e6d535bdc273": "240a2b1e668c07dd16ddbb295265d9e5",
".git/objects/9c/ec3fb27d3b40737d3a0e34c01931b8384a2a62": "6dbae4aa2e214f9fdd906d0f6c431012",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/30fea74a9ed979485dcff839cede7fa2a0889d": "495a52233089b457279314b16211d8dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3db03b21fd8120dfcfe7175adc9e9f7bf0f570": "d95e4c5b2b75779c27ebc16deffcab04",
".git/objects/ad/dd5a578dd0f78d4bc0345231bb8212bd5312dc": "769e0cc7f8778b57c10fe05fc5200242",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b5/689325f5ae5dba524b300d7499b55a893b54b7": "5b4dfe82df92b1442b48bbf799e7de9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b6b25b8cfd04a124a86482b57ba3817fa5313e": "9f5091bcb7412182068bb6b1157af1e0",
".git/objects/c9/041d7c3cddee90445cced159177b4d1600e6ed": "f6876ebba372d01eba35601991c9f305",
".git/objects/cc/3d2174fc268c6e6ba633cc9247711b81d3839d": "36f3e0000db3b31c88436015cef74fb2",
".git/objects/d2/0d016e983aebd66ab0122ad399978a85faae5e": "44ddd1d01094a99106a654d3a57dfb16",
".git/objects/d2/73b3aad17c6d02e8cac23070e05d959a96a041": "dc7e20120459c13cce5e244601f153ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/6fa16e6afe51ecfe042ef1f15f0a46d6b7faca": "fcfb47a819cbc737b1f62a37ab7805fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/221e04230bcb33b680489d984165f090843712": "d7114d408d87045f575e66a24fbcb3f5",
".git/objects/fa/f3d7b9afac008f8191589520aaeb4bc1f45420": "5e432d414251edef1b7a1ea24b3b448e",
".git/refs/heads/main": "6139888143cf0123c98753627c586e79",
".git/refs/remotes/origin/main": "6139888143cf0123c98753627c586e79",
"assets/AssetManifest.json": "724e7793457a75d1e05835f47819ec0f",
"assets/assets/image/escort70.png": "9ca478dac9e498e0dc59a80695034e70",
"assets/assets/image/escortrally.png": "81ce8c98b3200897e7a5b3657b1d5f35",
"assets/assets/image/EVOX.png": "02cd4c52be3b21af617db6099d3b490d",
"assets/assets/image/SCIROCCO.png": "b7e5c4b180e6dcb8ae8750012c74f3af",
"assets/assets/image/stratos.png": "ace8ab010de23722cce22e17ae438300",
"assets/assets/image/WRXSTI.png": "664f84452d7125eac0083ce93231fc28",
"assets/assets/video/RaceHW.mp4": "0dc3ef5e1fe0817c076780377f906c2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ca7627d55e2bc2555932cfee9d920db0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d9db7bb82edd4e4e4b7b9f9dcc5c9e52",
"/": "d9db7bb82edd4e4e4b7b9f9dcc5c9e52",
"main.dart.js": "826d5305bcb2e097204795549733776b",
"manifest.json": "642bff79c98d8cda5746b378fb35ab35",
"version.json": "cce09669ef71b92027250790100b2a90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
