"use strict";var precacheConfig=[["/index.html","650af6e939c988426a67933ad085cf44"],["/static/css/main.630073fc.css","690d9bb8ba035c3d45bc6d8c90d7466d"],["/static/js/main.d675ad92.js","c3fdbf729d0e2ebf52f2d282b3da7a11"],["/static/media/OpenSans-Bold.f5331cb6.ttf","f5331cb6372b6c0d8baf2dd7e200498c"],["/static/media/OpenSans-ExtraBold.49f89e34.ttf","49f89e34d03233b1f27788f75df7a40a"],["/static/media/OpenSans-Italic.bf243bcb.ttf","bf243bcbf81560535385c47725f57dfe"],["/static/media/OpenSans-Regular.d7d5d458.ttf","d7d5d4588a9f50c99264bc12e4892a7c"],["/static/media/access.b613a998.svg","b613a9985edac0ed041e463a7e14015b"],["/static/media/arrow-down.f00cd728.png","f00cd728e74eb55439e6dc90b7563f05"],["/static/media/arrow-left.eacc9a99.png","eacc9a9969dac7c62f17155d515a3be6"],["/static/media/arrow-right.d391e629.png","d391e62928a485f873a2097e65717acd"],["/static/media/arrow-up.3870ce4e.png","3870ce4e803fc06114ad6875e813b958"],["/static/media/capital.53c1a21d.svg","53c1a21dab89faf7f2d22637bb88a659"],["/static/media/community.1c8af5f7.svg","1c8af5f7e49ffe88bc7b3f298b2fb894"],["/static/media/dot.23d09408.png","23d09408cb54fbb4791e6a0f14bd0415"],["/static/media/logo.991e7e1f.svg","991e7e1f091e218b54992492389c890e"],["/static/media/operations.01a326d1.svg","01a326d18ad9ed8fa60caf18a1a68cbf"],["/static/media/react-bootstrap-carousel.21823303.eot","2182330384ebbad826821fdf8e84efe5"],["/static/media/react-bootstrap-carousel.2fe6d179.svg","2fe6d179ea5aa1ceab26113e77e13da4"],["/static/media/react-bootstrap-carousel.c746c488.woff","c746c4882df00af3b0a7a3b1616bf295"],["/static/media/react-bootstrap-carousel.f7448c04.ttf","f7448c0408e7a78012a82def0fb9e2fe"],["/static/media/responsive.d8bf7ac9.jpg","d8bf7ac9e437126b9015ab52a1f67340"],["/static/media/savings.bc5f393a.svg","bc5f393afe185a28fd4a335d03e88245"],["/static/media/slider-1.4edec708.png","4edec708dd15fe727b9a17c4c3b2f823"],["/static/media/slider-2.d2e50531.png","d2e50531f80e055b51a153bed85b4308"],["/static/media/slider-3.13ee533c.png","13ee533c9fde1d1169aa933f2606177b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});