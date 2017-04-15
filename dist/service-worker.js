"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["apple-touch-icon.png","5a66ea57b13938d3271ecb9f9ffd9fc6"],["assets/font/kongtext.png","72a811c69b2302f97b2f639c375d8407"],["assets/font/kongtext.xml","d56f1353b3e73e4dabd9fb816d1fd526"],["assets/images/launcher-icon-0-75x.png","c9460c8cd21f7515c8af6ffd7b144526"],["assets/images/launcher-icon-1-5x.png","c73763933e4e8c37fe4fa45b596f73a1"],["assets/images/launcher-icon-1x.png","3ef2b2783a4b911148a17a5565174221"],["assets/images/launcher-icon-2x.png","217b70ca808584219d50aa17b5132ef5"],["assets/images/launcher-icon-3x.png","9b051bf65ee421871bbbe3c99ed66d3d"],["assets/images/launcher-icon-4x.png","84957d382e6508a69f67985ce7e0eb3c"],["assets/images/logo.png","0b299b4242e281b1446879baa09b4286"],["assets/levels/classic.json","210c84f8d4d6b34a9cc52aa3a6429340"],["assets/sfx/death.mp3","f732fec2ad6e8937dc8530dec8128529"],["assets/sfx/death.ogg","cada90e9dae3f16c3f88bbd30b112800"],["assets/sfx/fruit.mp3","23b2ab2ae443f1fba1022a80219ecfdb"],["assets/sfx/fruit.ogg","2d0e5fe7e9ed9a7e5dbd7d785c6cd089"],["assets/sfx/ghost.mp3","85dc274dea33919ccc9e50f5ba0cdfb2"],["assets/sfx/ghost.ogg","cc77724a5651689864922ce8b5362387"],["assets/sfx/intermission.mp3","728bfc9bc63e3651ece9be7bac567fba"],["assets/sfx/intermission.ogg","749ddd637a3b711009d330eef63a6007"],["assets/sfx/intro.mp3","0ae87db54377b57c8a171e9387e95cef"],["assets/sfx/intro.ogg","952db7fdb1fd90047553dee562ad2444"],["assets/sfx/munch.mp3","21dba46c779ea135d46bb2734b4a2dcb"],["assets/sfx/munch.ogg","86b3a3e1bfe8cc36c787187543aa867e"],["assets/sfx/over.mp3","bb037c69256e23ef5b3af3d74911639e"],["assets/sfx/over.ogg","7dc44f73fe8d8a2e6e1ce7b2c801c6c6"],["assets/sfx/regenerate.mp3","5c697892bc47801be7f956ea3991d774"],["assets/sfx/regenerate.ogg","b1bd8e720db8e670468b252227e11716"],["assets/sfx/win.mp3","5d442f77fbdc6eda0d8259c8aec0f97a"],["assets/sfx/win.ogg","e6d8ca0d7cc96fd7de5ad7f1cda6106b"],["assets/sprites/apple.png","2d5c1c8ad4597780fac92b71b51ff65d"],["assets/sprites/blinky.png","a85782626ed2a431f7708bf2dba1b5b6"],["assets/sprites/cherry.png","d9a1823e90f8d3de204d62f0e7adf991"],["assets/sprites/clyde.png","7d11ec1e3e118ca2027473ce88138e4f"],["assets/sprites/dot.png","93388668be69fb47389f64999128e3cc"],["assets/sprites/inky.png","5448e69ac35d5f5d96969ae83aee38bd"],["assets/sprites/pacman.png","da2eade62aaf3aff4ee5759f7069ab53"],["assets/sprites/pinky.png","d04d78285bdaa7dd396999c3ca2c01d6"],["assets/sprites/power-pill.png","52ed0e4d3d72f8211c0e5d2775674c2f"],["assets/sprites/strawberry.png","4379fd870662e1e2e39382f61d6e6d7b"],["assets/sprites/tiles.png","8364d3d7aff0c9a3c0976e19e383fadc"],["favicon-16x16.png","44b3283d3d42104ec0888081e680548f"],["favicon-32x32.png","5c2cd17a7e5913ea43e76fa314fdd95b"],["favicon.ico","196e931448b31eef9b160fd6d9c2e9a7"],["index.html","4f2d043aea62ba693b12b5f3ec33d4f3"],["manifest.json","77bef4dd46e11f918097a90b731a89a3"],["mstile-150x150.png","799cc10d3dc054753206421b8d4be1f0"],["safari-pinned-tab.svg","0bd300a8101c97ae61c6079e8d8b9e66"],["tsconfig.game.json","50f8b6751d076f59bbca374c9b11cd2c"]],cacheName="sw-precache-v3-pacman-cache-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],t=new URL(s,self.location),n=createCacheKey(t,hashParamName,a,!1);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);s=urlsToCacheKeys.has(a);s||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});