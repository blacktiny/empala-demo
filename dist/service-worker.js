"use strict";var precacheConfig=[["/index.html","86505a91ef00258aafbb1a2305a82cda"],["/static/css/main.630073fc.css","690d9bb8ba035c3d45bc6d8c90d7466d"],["/static/js/main.2d59d84b.js","2efb346cdd14aec46bb2e44eff76676a"],["/static/media/OpenSans-Bold.f5331cb6.ttf","f5331cb6372b6c0d8baf2dd7e200498c"],["/static/media/OpenSans-ExtraBold.49f89e34.ttf","49f89e34d03233b1f27788f75df7a40a"],["/static/media/OpenSans-Italic.bf243bcb.ttf","bf243bcbf81560535385c47725f57dfe"],["/static/media/OpenSans-Regular.d7d5d458.ttf","d7d5d4588a9f50c99264bc12e4892a7c"],["/static/media/access.b613a998.svg","b613a9985edac0ed041e463a7e14015b"],["/static/media/arrow-down.f00cd728.png","f00cd728e74eb55439e6dc90b7563f05"],["/static/media/arrow-up.3870ce4e.png","3870ce4e803fc06114ad6875e813b958"],["/static/media/capital.53c1a21d.svg","53c1a21dab89faf7f2d22637bb88a659"],["/static/media/community.1c8af5f7.svg","1c8af5f7e49ffe88bc7b3f298b2fb894"],["/static/media/dot.23d09408.png","23d09408cb54fbb4791e6a0f14bd0415"],["/static/media/logo.991e7e1f.svg","991e7e1f091e218b54992492389c890e"],["/static/media/operations.01a326d1.svg","01a326d18ad9ed8fa60caf18a1a68cbf"],["/static/media/react-bootstrap-carousel.21823303.eot","2182330384ebbad826821fdf8e84efe5"],["/static/media/react-bootstrap-carousel.2fe6d179.svg","2fe6d179ea5aa1ceab26113e77e13da4"],["/static/media/react-bootstrap-carousel.c746c488.woff","c746c4882df00af3b0a7a3b1616bf295"],["/static/media/react-bootstrap-carousel.f7448c04.ttf","f7448c0408e7a78012a82def0fb9e2fe"],["/static/media/responsive.d8bf7ac9.jpg","d8bf7ac9e437126b9015ab52a1f67340"],["/static/media/savings.bc5f393a.svg","bc5f393afe185a28fd4a335d03e88245"],["/static/media/slider-1.83a43934.jpg","83a43934139400d46189a57a1181f08b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});