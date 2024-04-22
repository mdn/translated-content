---
title: Cache
slug: Web/API/Cache
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

**`Cache`** 인터페이스는 {{domxref ( "ServiceWorker")}} 의 생명주기의 일부로 캐시 된 [`Request`](http://fetch.spec.whatwg.org/#request)와 [`Response`](http://fetch.spec.whatwg.org/#response)를 나타냅니다.

도메인은 여러개의 이름이 지정된 `Cache` 객체를 가질 수 있으며 그 객체들은 {{domxref("ServiceWorker")}}가 완전히 제어합니다.{{domxref("ServiceWorker")}} 스크립트가 `Cache` 업데이트를 어떻게 컨트롤 할지에 대해서 구현해야 합니다. 명시적으로 요청하지 않으면 `Cache` 항목들은 업데이트 되지 않습니다. 삭제되지 않으면 만료되지 않습니다. {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} 을 사용하여 특정 이름으로 지정 된 `Cache` 객체를 로드하고 `Cache` 메서드를 호출하여 캐시를 유지 관리합니다.

또한 캐시 항목을 정기적으로 삭제해야 합니다. 각각의 브라우저는 {{domxref("ServiceWorker")}}가 사용할 수 있는 캐시 저장소의 양에 대해서 제한을 엄격하게 두고 있습니다. 브라우저는 디스크 공간을 관리하기 위해서 최선을 다하지만 원본에 대한 캐시 저장소를 삭제할 수 있습니다. 브라우저는 일반적으로 원본에 대한 모든 데이터를 삭제하거나 원본에 대한 모든 데이터를 삭제하지 않을 것입니다. 이름지어진 특정 캐시 버전을 확인하고 안전하게 작동할 수 있는 {{domxref("ServiceWorker")}} 버전에서만 캐시를 사용하십시오. 캐시 삭제에 대한 자세한 내용은 [Deleting old caches](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches)을 참고하세요.

> **참고:** 초기 캐시 구현(Blink 및 Gecko)은 응답이 완전히 기록될 때 {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, 그리고 {{domxref("Cache.put")}} 로 확인 됩니다. 보다 최근 사양 버전에서의 최신언어들은 응답이 여전히 스트리밍이 되는 경우에도 해당 내용이 데이터베이스에 기록되는 즉시 브라우저가 확인할 수 있습니다.

> **참고:** {{domxref("Cache.put")}}, {{domxref("Cache.add")}}, 그리고{{domxref("Cache.addAll")}} 은 오직 `GET` 요청들만 cache로 저장됩니다.

> **참고:** 캐시 API는 HTTP 캐시 헤더를 따르지 않습니다.

## 메서드

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : {{domxref("Cache")}}객체의 첫 번째 일치하는 요청과 관련된 응답으로 확인되는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : {{domxref("Cache")}} 객체에서 일치하는 모든 요청의 배열로 해석되는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : URL을 가져 와서 추출해서 결과 객체를 지정된 캐시에 추가합니다. 이는 fetch()를 호출 한 다음 Cache.put()을 사용하여 캐시에 결과를 추가하는 것과 매우 유사합니다.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : URL 배열을 가져 와서 추출하고 결과 응답 객체를 지정된 캐시에 추가합니다.
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : 요청과 응답을 모두 가져 와서 지정된 캐시에 추가합니다.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : 해당 키가 request인 {{domxref("Cache")}}를 찾고 {{domxref("Cache")}}를 삭제하고 `true` 판정인 {{jsxref("Promise")}}를 리턴합니다. {{domxref("Cache")}} 항목이 없으면 `false`를 반환합니다.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : {{domxref("Cache")}} 키 배열은 결정된 {{jsxref("Promise")}}를 리턴합니다.

## 예제

이 코드는 [service worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) 에서 가져왔습니다. (see [selective caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)). 이 코드는{{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}}을 사용하여 `font/`로 시작하는 `Content-Type` header로 `Cache`를 엽니다.

그런 다음 코드는 {{domxref("Cache.match", "Cache.match(request, options)")}}를 사용하여 캐시에 이미 일치하는 글꼴이 있는지 확인한 후 일치하는 글꼴을 반환합니다. 일치하는 글꼴이 없으면 코드는 네트워크에서 글꼴을 가져오고 {{domxref("Cache.put","Cache.put(request, response)")}}을 사용하여 가져온 리소스를 캐시합니다.

이 코드는 {{domxref("Globalfetch.fetch","fetch()")}} 연산에서 발생한 예외를 처리합니다. HTTP오류 응답(예 : 404)은 예외를 발생시키지 않습니다. 적절한 오류 코드가있는 일반 응답 객체를 리턴합니다.

또한 코드 스니펫은 {domxref ( "ServiceWorker")}}가 사용하는 캐시 버전 관리를 위한 모범 사례를 보여줍니다. 이 예에서는 캐시가 하나 밖에 없지만 동일한 접근법을 여러 캐시에 사용할 수 있습니다. 캐시의 단축 식별자를 특정 버전의 캐시 이름에 매핑합니다. 또한 이 코드는 `CURRENT_CACHES`에 이름이 지정되지 않은 모든 캐시를 삭제합니다.

> **참고:** 크롬에서, chrome://inspect/#service-workers 를 방문하여 "inspect" 를 클릭하여 [service-worker.js](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) 스크립트가 수행중인 다양한 작업에 대한 로깅 구문을 확인합니다.

```js
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: "font-cache-v" + CACHE_VERSION,
};

self.addEventListener("activate", function (event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
    return CURRENT_CACHES[key];
  });

  // Active worker won't be treated as activated until promise resolves successfully.
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log("Deleting out of date cache:", cacheName);

            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", function (event) {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    // Opens Cache objects that start with 'font'.
    caches.open(CURRENT_CACHES["font"]).then(function (cache) {
      return cache
        .match(event.request)
        .then(function (response) {
          if (response) {
            console.log(" Found response in cache:", response);

            return response;
          }
        })
        .catch(function (error) {
          // Handles exceptions that arise from match() or fetch().
          console.error("  Error in fetch handler:", error);

          throw error;
        });
    }),
  );
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Using Service Workers](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ko/docs/Web/Guide/Performance/Using_web_workers)
