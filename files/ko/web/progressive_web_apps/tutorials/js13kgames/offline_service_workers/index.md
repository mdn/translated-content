---
title: Service worker를 사용해 PWA를 오프라인에서 동작하게 만들기
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
---

{{PreviousMenuNext("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive")}}

우리는 js13kPWA의 구조와 기본적인 shell을 만들고 실행하는 것에 대해 살펴보았습니다. 이제 Service Worker를 사용해 오프라인 기능을 구현하는 방법에 대해 살펴봅시다. 이 문서에서는 [js13kPWA 예제](https://mdn.github.io/pwa-examples/js13kpwa/)([소스 코드도 있습니다](https://github.com/mdn/pwa-examples/tree/master/js13kpwa))에서 어떻게 사용되었는지와 오프라인 기능을 추가하는 방법을 살펴봅니다.

## Service worker 설명

Service Worker는 브라우저와 네트워크 사이의 가상 프록시입니다. 이는 프론트엔드 개발자들이 수년간 어려움을 겪었던 문제들을 결국 해결하였습니다(특히 웹 사이트의 자원을 적절히 캐싱하는 방법과, 사용자의 기기가 오프라인일 때 이를 사용할 수 있도록 하는 것 등).

이는 페이지의 메인 JavaScript 코드와 독립된 스레드에서 실행되며, DOM 구조에 대한 어떠한 접근도 갖지 않습니다. 이는 전통적인 웹 프로그래밍과 다른 접근법을 소개합니다. API는 비차단형(non-blocking)이며 여러 컨텍스트 사이에 커뮤니케이션을 주고 받을 수 있습니다. 여러분은 Service Worker에 어떤 작업을 전달할 수 있으며, [Promise](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) 기반 접근법을 사용해 결과가 준비될때마다 전달받을 수 있습니다.

Service Worker는 "단지" 오프라인 기능을 제공하는 것 이상으로 알림 처리, 독립된 스레드에서의 복잡한 계산 등 많은 것들을 할 수 있습니다. Service worker는 네트워크 요청을 제어하고 수정하며, 캐시로부터 반환된 커스텀 응답을 제공하거나 응답을 완전히 가공할 수도 있으므로 매우 강력합니다.

### 보안

Service Worker는 매우 강력하기때문에 안전한 컨텍스트(HTTPS를 의미)에서만 실행됩니다. 코드를 상용으로 푸시하기전에 먼저 테스트하길 원하신다면, localhost에서 테스트하거나 GitHub Pages를 설정하면 됩니다. 둘 다 HTTPS를 지원합니다.

## 오프라인 우선

"오프라인 우선" — 또는 "캐시 우선" — 패턴은 사용자에게 컨텐츠를 제공하는 가장 유명한 전략입니다. 리소스가 캐싱되었고 오프라인 사용이 가능한 경우, 서버로부터 다운로드를 시도하기전에 캐시를 먼저 반환합니다. 캐시에 없는 경우, 다음 사용을 위해 다운로드하고 캐싱합니다.

## PWA의 "점진적"

점진적인 향상으로써 제대로 구현이 되면, service worker는 오프라인 지원을 제공하여 API를 지원하는 최신 브라우저를 사용하는 사용자에게 유용하지만, 구형 브라우저를 사용하는 사람들에게도 사이트 사용에 아무런 문제가 없습니다.

## js13kPWA 앱의 Service worker

이론은 충분합니다. 소스 코드를 봅시다!

### Service Worker 등록

app.js 파일에서 새로운 Service Worker를 등록하는 코드를 살펴보는 것으로 시작할 것입니다.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

브라우저에서 Service worker API를 지원한다면, {{domxref("ServiceWorkerContainer.register()")}} 메소드를 사용해 사이트에대해 등록됩니다. 컨텐츠는 sw\.js 파일안에 있으며 등록이 성공한 후에 실행됩니다. 이것이 app.js 파일안에 있는 Service Worker 코드의 유일한 부분입니다. Service Worker에 대한 다른 모든 것들은 sw\.js 파일에 작성되어 있습니다.

### Service Worker의 수명 주기

등록이 완료되면, sw\.js 파일은 자동으로 다운로드된 후 설치되고 마지막으로 활성화됩니다.

#### 설치

API는 우리가 관심있는 주요 이벤트에 대한 이벤트 리스너를 추가할 수 있게 해줍니다. 첫 번째 것은 `install` 이벤트 입니다.

```js
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install");
});
```

`install` 리스너에서 캐시를 초기화하고 오프라인 사용을 위한 파일들을 추가할 수 있습니다. js13kPWA 앱도 정확히 그런 작업을 합니다.

먼저, 캐시 이름을 저장할 변수를 생성하고, app shell 파일들을 하나의 배열에 나열합니다.

```js
var cacheName = "js13kPWA-v1";
var appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
```

다음으로, data/games.js 파일의 컨텐츠와 함께 로딩될 이미지 링크가 두 번째 배열에 생성됩니다. 그런 다음, {{jsxref("Array.prototype.concat()")}} 함수를 사용해 두 배열을 병합합니다.

```js
var gamesImages = [];
for (var i = 0; i < games.length; i++) {
  gamesImages.push("data/img/" + games[i].slug + ".jpg");
}
var contentToCache = appShellFiles.concat(gamesImages);
```

그러면 `install` 이벤트 자체를 관리할 수 있게 됩니다.

```js
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(contentToCache);
    }),
  );
});
```

여기서 두 가지에 대한 설명이 필요합니다: {{domxref("ExtendableEvent.waitUntil")}}이 무엇을 하는지, 그리고 {{domxref("caches","Caches")}} 객체가 무엇인지.

Service worker는 `waitUntil` 안의 코드가 실행되기전까지 설치되지 않습니다. 이는 promise를 반환합니다. 설치에 약간의 시간이 걸릴 수 있으므로 완료될 때까지 기다려야하기 때문에 이 접근법이 필요합니다.

`Caches` 는 데이터를 저장할 수 있도록 주어진 Service Worker의 범위 내에서 사용할 수 있는 특별한 객체입니다. 웹 저장소는 동기적이므로 [웹 저장소](/ko/docs/Web/API/Web_Storage_API)로의 저장은 동작하지 않을 것입니다. Service Worker는 Cache API를 대신 사용합니다.

여기에 주어진 이름을 갖는 캐시를 열고 캐시에서 사용할 앱의 모든 파일을 추가하여 다음 로딩에서 사용할 수 있게됩니다(요청 URL로 식별됨).

#### 활성화

`install`과 같은 방식으로 사용되는 `activate` 이벤트도 있습니다. 이 이벤트는 일반적으로 더 이상 필요하지 않은 파일을 제거하고 앱이 끝난 후 정리하는데 사용됩니다. 우리 앱에서는 사용하지 않으므로 생략하겠습니다.

### 패치 응답

처리를 위한 `fetch` 이벤트도 있습니다. 이는 앱으로부터 HTTP 요청이 출발할 때 마다 발생합니다. 이는 요청을 가로채 커스텀 응답으로 응답할 수 있어 매우 유용합니다.
다음은 간단한 사용 예시입니다.

```js
self.addEventListener("fetch", function (e) {
  console.log("[Service Worker] Fetched resource " + e.request.url);
});
```

응답은 파일 요청, 캐시된 사본, 또는 특정 작업을 수행하는 JavaScript 코드 조각 등 원하는 어떠한것도 될 수 있습니다. 가능성은 무한합니다.

예제 앱에서 우리는 리소스가 실제로 캐시에 있는한 네트워크 대신 캐시로부터 컨텐츠를 제공합니다. 앱이 온라인이든 오프라인이든간에 이렇게 수행합니다. 파일이 캐시에 없을 경우, 이를 제공하기 전에 먼저 캐시에 추가합니다.

```js
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log("[Service Worker] Fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url,
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});
```

여기에서 우리는 리소스를 찾고 존재할 경우 응답을 반환하는 함수로 패치 이벤트에 응답합니다. 응답이 없을 경우 다른 패치 요청을 사용해 네트워크로부터 패치한 후 캐시에 응답을 저장하여 다음 요청에서 사용할 수 있도록 합니다.

{{domxref("FetchEvent.respondWith")}} 메소드가 제어를 대신합니다. 이는 앱과 네트워크 사이의 프록시 서버로서 기능하는 부분입니다. 이는 Service Worker에 의해 준비되고, 캐시로부터 가져와, 필요한 경우 수정하여 모든 요청에 대해 우리가 원하는 응답을 할 수 있게 해줍니다.

이게 다입니다! 우리 앱은 설치에서 자원을 캐싱하고 캐시로부터 이를 패치하여 전달함으로 사용자가 오프라인인 경우에도 동작합니다. 새로운 컨텐츠가 추가되면 역시 캐싱합니다.

## 업데이트

다뤄야 할 하나가 더 남았습니다. 새 자원을 포함하는 앱의 새 버전이 사용가능할 때 어떻게 Service Worker를 업그레이드하나요? 캐시 이름안의 버전 넘버가 핵심입니다.

```js
var cacheName = "js13kPWA-v1";
```

v2로 업데이트했을 때, 새 캐시에 모든 파일(새 파일들을 포함)을 추가할 수 있습니다.

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// ...

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("js13kPWA-v2").then(function (cache) {
      return cache.addAll(contentToCache);
    }),
  );
});
```

새 service worker가 백그라운드에서 설치되고 이전의 것(v1)이 사용하는 페이지가 없을 때까지 올바르게 동작합니다. 새로운 Service Worker는 그 후 활성화되고 이전의 것으로부터 페이지의 관리를 넘겨받습니다.

## 캐시 지우기

생략했던 `activate` 이벤트를 기억하시나요? 더 이상 필요하지 않은 오래된 캐시를 지우는데 사용할 수 있습니다.

```js
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheName.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
```

이는 캐시에 우리가 필요한 파일만 있도록 보장하여, 불필요한 파일을 남기지 않게 됩니다. [브라우저에서 사용가능한 캐시 공간은 제한적](/ko/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)이므로 이를 지우는 것은 우리 스스로를 위한 좋은 아이디어입니다.

## 다른 유즈 케이스

캐시로부터 파일들을 전달하는 것은 Service Worker가 제공하는 유일한 기능이 아닙니다. 복잡한 계산을 해야하는 경우, 메인 스레드로부터 이를 분리하여 worker에서 수행하도록 하고 결과가 나오는대로 받을 수 있습니다. 성능 측면에서 볼 때, 지금 당장 필요하지는 않지만 가까운 미래에 필요할 수도 있는 리소스를 미리 패치하여 실제로 그 리소스들을 필요로할 때 앱이 더 빨라집니다.

## 요약

이 문서에서는 service worker를 사용해 PWA가 오프라인에서 동작하도록 만드는 방법에 대해 간략히 살펴보았습니다. [Service Worker API](/ko/docs/Web/API/Service_Worker_API)의 개념과 사용 방법에 대한 더 자세한 내용을 배우시려면 우리의 추가 문서를 확인하시기 바랍니다.

Service Worker는 [푸시 알림](/ko/docs/Web/API/Push_API)을 처리할 때에도 사용됩니다. 이는 이어지는 문서에서 설명할 것입니다.

{{PreviousMenuNext("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive")}}
