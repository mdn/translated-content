---
title: CacheStorage
slug: Web/API/CacheStorage
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`CacheStorage`** 인터페이스는 {{domxref("Cache")}} 객체들을 위한 저장소를 나타냅니다.

이 인터페이스는 다음과 같습니다.

- {{domxref("ServiceWorker")}} 또는 다른 유형의 워커, 혹은 {{domxref("window")}} 범위에서 접근할 수 있는 모든 이름이 지정된 캐시들의 마스터 디렉터리를 제공합니다(서비스 워커에서만 사용할 필요는 없습니다).
- 문자열 이름과 해당하는 {{domxref("Cache")}} 객체 간의 매핑을 유지합니다.

{{domxref("CacheStorage.open()")}} 메서드를 사용하여 {{domxref("Cache")}} 인스턴스를 얻습니다.

주어진 {{domxref("Request")}} 가 `CacheStorage` 객체가 추적하는 {{domxref("Cache")}} 객체 중 어느 곳의 키인지 확인하려면 {{domxref("CacheStorage.match()")}} 메서드를 사용합니다.

윈도우에서는 {{domxref("Window.caches")}} 속성을, 워커에서는 {{domxref("WorkerGlobalScope.caches")}} 속성을 통해 `CacheStorage` 에 접근할 수 있습니다.

> [!NOTE] 신뢰할 수 없는 출처(즉, HTTPS를 사용하지 않는 출처)에서는 `CacheStorage`가 항상 `SecurityError`로 거부됩니다(이 정의는 향후 더 복잡해질 수 있습니다). Firefox에서 테스트할 경우, Firefox DevTools 옵션/설정 메뉴에서 **Enable Service Workers over HTTP (도구 모음이 열려있을 때)** 옵션을 활성화하여 이를 우회할 수 있습니다. 또한, `CacheStorage`는 파일 시스템 접근이 필요하기 때문에 Firefox의 개인 모드에서 사용할 수 없을 수도 있습니다.

> [!NOTE] {{domxref("CacheStorage.match()")}} 는 편의 메서드입니다. 캐시 항목과 일치하는 기능은 {{domxref("CacheStorage.keys()")}} 로부터 캐시 이름 배열을 반환하고, 각 캐시를 {{domxref("CacheStorage.open()")}} 으로 연 다음, 원하는 항목을 {{domxref("Cache.match()")}} 으로 일치시킴으로써 구현할 수 있습니다.

## 인스턴스 메서드

- {{domxref("CacheStorage.match()")}}
  - : 주어진 {{domxref("Request")}} 가 `CacheStorage` 객체가 추적하는 {{domxref("Cache")}} 객체 중 어느 곳의 키인지 확인하고, 그 일치 항목을 이행하는 {{jsxref("Promise")}} 를 반환합니다.
- {{domxref("CacheStorage.has()")}}
  - : `cacheName` 에 해당하는 {{domxref("Cache")}} 객체가 존재하면 `true`를 이행하는 {{jsxref("Promise")}} 를 반환합니다.
- {{domxref("CacheStorage.open()")}}
  - : `cacheName` 에 해당하는 {{domxref("Cache")}} 객체를 이행하는 {{jsxref("Promise")}} 를 반환합니다(존재하지 않을 경우 새로운 캐시가 생성됩니다).
- {{domxref("CacheStorage.delete()")}}
  - : `cacheName` 에 해당하는 {{domxref("Cache")}} 객체를 찾아, 존재한다면 해당 객체를 삭제한 후 `true`를 이행하는 {{jsxref("Promise")}} 를 반환합니다. 만약 해당 객체가 없으면 `false`를 이행합니다.
- {{domxref("CacheStorage.keys()")}}
  - : `CacheStorage` 가 추적하는 모든 이름이 지정된 {{domxref("Cache")}} 객체에 해당하는 문자열 배열을 이행하는 {{jsxref("Promise")}} 를 반환합니다. 이 메서드를 사용하여 모든 {{domxref("Cache")}} 객체 목록을 순회할 수 있습니다.

## 예제

이 코드 스니펫은 MDN [simple service worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)에서 가져온 것으로, [실제 작동하는 simple service worker 예제](https://bncb2v.csb.app/)를 참고할 수 있습니다.

이 서비스 워커 스크립트는 {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} 이벤트가 발생할 때까지 대기한 후, 앱의 설치 과정을 처리하기 위해 {{domxref("ExtendableEvent.waitUntil","waitUntil")}} 을 실행합니다. 이 과정은 새로운 캐시를 생성하기 위해 {{domxref("CacheStorage.open")}} 을 호출하고, 그 다음 {{domxref("Cache.addAll")}} 을 사용하여 일련의 자산들을 추가하는 것으로 구성됩니다.

두 번째 코드 블록에서는 {{domxref("FetchEvent")}} 이벤트가 발생할 때까지 대기합니다. 그리고 다음과 같이 커스텀 응답을 구성합니다.

1. 요청에 대해 CacheStorage에서 일치 항목이 있는지 확인합니다. 일치 항목이 있으면 해당 항목을 응답으로 제공합니다.
2. 일치 항목이 없는 경우, 네트워크에서 요청을 가져온 다음, 첫 번째 블록에서 생성된 캐시를 열어 {{domxref("Cache.put")}} 을 사용하여 요청의 복제본을 추가합니다(`cache.put(event.request, response.clone())`).
3. 이 과정이 실패하면(예: 네트워크가 다운된 경우), 대체 응답을 반환합니다.

마지막으로, 최종적으로 구성된 커스텀 응답을 {{domxref("FetchEvent.respondWith")}} 을 사용하여 반환합니다.

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() 는 항상 resolve 됩니다.
      // 성공 시에는 response 에 값이 있습니다.
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // response 는 한 번만 사용될 수 있습니다.
            // 캐시에 복사본을 저장하기 위해 clone을 보존해야 하며,
            // 두 번째 복사본을 응답으로 사용합니다.
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
    }),
  );
});
```

다음 코드 스니펫은 서비스 워커 컨텍스트 외부에서 API를 사용하는 방법을 보여주며, `await` 연산자를 사용하여 훨씬 가독성이 높은 코드를 작성하는 예시입니다.

```js
// 캐시에서 데이터를 가져오되, 없으면 네트워크에서 가져옵니다.
async function getData() {
  const cacheVersion = 1;
  const cacheName = `myapp-${cacheVersion}`;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) {
    console.log("Retrieved cached data");
    return cachedData;
  }

  console.log("Fetching fresh data");

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);
  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
}

// 캐시에서 데이터를 가져옵니다.
async function getCachedData(cacheName, url) {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}

// 사용자의 디스크 공간을 고려하여 오래된 캐시를 삭제합니다.
async function deleteOldCaches(currentCache) {
  const keys = await caches.keys();

  for (const key of keys) {
    const isOurCache = key.startsWith("myapp-");
    if (currentCache === key || !isOurCache) {
      continue;
    }
    caches.delete(key);
  }
}

try {
  const data = await getData();
  console.log({ data });
} catch (error) {
  console.error({ error });
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [서비스 워커 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} and {{domxref("WorkerGlobalScope.caches")}}
- [Private Browsing / Incognito modes](/ko/docs/Web/API/Web_Storage_API#private_browsing_incognito_modes)
