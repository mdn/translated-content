---
title: 캐싱
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PWASidebar}}

사용자가 웹사이트를 열고 상호작용할 때, HTML, JavaScript, CSS, 이미지, 폰트 및 앱이 명시적으로 요청한 데이터를 포함하여 웹사이트에 필요한 모든 리소스는 HTTP(S) 요청을 통해 가져옵니다. PWA의 가장 기본적인 기능 중 하나는 앱의 일부 리소스를 기기에 명시적으로 캐싱할 수 있다는 것입니다. 이를 통해 네트워크 요청 없이도 해당 리소스를 가져올 수 있습니다.

리소스를 로컬에 캐싱하면 두 가지 주요 이점이 있습니다. **오프라인 동작** 과 **반응성** 입니다.

- **오프라인 동작** : 캐싱을 통해 기기가 네트워크에 연결되지 않은 상태에서도 PWA가 어느 정도 기능을 수행할 수 있습니다.
- **반응성** : 기기가 온라인 상태라 하더라도, 네트워크 대신 캐시에서 사용자 인터페이스를 가져올 경우 PWA의 반응성이 일반적으로 훨씬 향상됩니다.

물론 주요 단점은 **최신성** 입니다. 최신 상태를 유지해야 하는 리소스에는 캐싱이 적합하지 않습니다. 또한 [POST](/ko/docs/Web/HTTP/Reference/Methods/POST) 요청과 같은 특정 유형의 요청에는 캐싱이 절대 적합하지 않습니다.

이는 리소스를 캐싱할지의 여부와 그 시점이 해당 리소스에 크게 좌우되며, PWA는 일반적으로 리소스별로 다른 전략을 채택함을 의미합니다. 본 가이드에서는 PWA의 일반적인 캐싱 전략을 살펴보고, 어떤 전략이 어떤 리소스에 적합한지 알아보겠습니다.

## 캐싱 기술 개요

PWA가 캐싱 전략을 구축할 수 있는 주요 기술은 [Fetch API](/ko/docs/Web/API/Fetch_API), [Service Worker API](/ko/docs/Web/API/Service_Worker_API), [Cache API](/ko/docs/Web/API/Cache)입니다.

### Fetch API

Fetch API는 네트워크 리소스를 가져오기 위한 전역 함수 {{domxref("Window/fetch", "fetch()")}}와 네트워크 요청 및 응답을 나타내는 {{domxref("Request")}} 및 {{domxref("Response")}} 인터페이스를 정의합니다. `fetch()` 함수는 `Request` 또는 URL을 인수로 받아 `Response`로 해결되는 {{jsxref("Promise")}}를 반환합니다.

`fetch()` 함수는 메인 앱 스레드뿐만 아니라 서비스 워커에서도 사용할 수 있습니다.

### 서비스 워커 API

서비스 워커는 PWA의 일부입니다. 앱의 메인 스레드와 분리된 자체 스레드에서 실행되는 별도의 스크립트입니다.

서비스 워커가 활성화되면, 앱이 서비스 워커가 제어하는 네트워크 리소스를 요청할 때마다 브라우저는 서비스 워커의 전역 범위에서 {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} 이벤트를 발생시킵니다. 이 이벤트는 메인 스레드에서 명시적으로 호출된 `fetch()`뿐만 아니라, 페이지 탐색 후 브라우저가 수행하는 페이지 및 하위 리소스(JavaScript, CSS, 이미지 등) 로딩을 위한 암시적 네트워크 요청 시에도 발생합니다.

서비스 워커는 `fetch` 이벤트를 수신 대기함으로써 요청을 가로채고 사용자 정의된 `Response`를 반환할 수 있습니다. 특히, 항상 네트워크로 요청하는 대신 로컬에 캐시된 응답을 반환하거나, 기기가 오프라인 상태일 때 로컬에 캐시된 응답을 반환할 수 있습니다.

### Cache API

{{domxref("Cache")}} 인터페이스는 `Request`/`Response` 쌍을 위한 지속적 저장소를 제공합니다. `Request`/`Response` 쌍을 추가 및 삭제하고, 주어진 `Request`와 일치하는 캐시된 `Response`를 조회하는 메서드를 제공합니다. 캐시는 메인 앱 스레드와 서비스 워커 모두에서 사용할 수 있으므로, 한 스레드가 응답을 추가하고 다른 스레드가 이를 검색하는 것이 가능합니다.

가장 일반적으로 서비스 워커는 `install` 또는 `fetch` 이벤트 핸들러에서 리소스를 캐시에 추가합니다.

## 리소스 캐싱 시기

PWA는 언제든지 리소스를 캐싱할 수 있지만, 실제로 대부분의 PWA는 다음 몇 가지 시점에 캐싱을 선택합니다.

- **서비스 워커의 `install` 이벤트 핸들러에서 (프리캐싱)** : 서비스 워커가 설치되면 브라우저는 서비스 워커의 전역 범위에서 {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} 이벤트를 발생시킵니다. 이때 서비스 워커는 리소스를 네트워크에서 가져와 캐시에 저장하는 방식으로 리소스를 *프리캐싱*할 수 있습니다.

  > **참고** : 서비스 워커 설치 시간은 PWA 설치 시간과 다릅니다. 서비스 워커의 `install` 이벤트는 서비스 워커가 다운로드되어 실행되는 즉시 발생하며, 이는 일반적으로 사용자가 사이트를 방문하는 즉시 발생합니다.
  >
  > 사용자가 사이트를 PWA로 설치하지 않더라도 해당 서비스 워커는 설치되고 활성화됩니다.

- **서비스 워커의 `fetch` 이벤트 핸들러에서** : 서비스 워커의 `fetch` 이벤트가 발생하면, 서비스 워커는 요청을 네트워크로 전달하고 결과 응답을 캐시할 수 있습니다. 이는 캐시에 응답이 아직 존재하지 않을 경우, 또는 캐시된 응답을 최신 버전으로 업데이트하기 위한 것입니다.

- **사용자 요청에 대한 응답 시** : PWA는 기기가 오프라인 상태일 때 사용하기 위해 리소스를 다운로드하도록 사용자에게 명시적으로 요청할 수 있습니다. 예를 들어, 음악 플레이어는 나중에 재생할 트랙을 다운로드하도록 사용자에게 요청할 수 있습니다. 이 경우 메인 앱 스레드가 리소스를 가져와 응답을 캐시에 추가할 수 있습니다. 특히 요청된 리소스가 큰 경우 PWA는 [Background Fetch API](/ko/docs/Web/API/Background_Fetch_API)를 사용할 수 있으며, 이 경우 응답은 서비스 워커가 처리하여 캐시에 추가합니다.

- **주기적으로** : [Periodic Background Sync API](/ko/docs/Web/API/Web_Periodic_Background_Synchronization_API)를 사용하여 서비스 워커는 주기적으로 리소스를 가져와 응답을 캐시할 수 있습니다. 이를 통해 기기가 오프라인 상태일 때도 PWA가 비교적 최신 응답을 제공할 수 있도록 보장합니다.

## 캐싱 전략

캐싱 전략은 리소스를 언제 캐싱할지, 캐시된 리소스를 언제 제공할지, 네트워크에서 리소스를 언제 가져올지에 대한 알고리즘입니다. 이 섹션에서는 몇 가지 일반적인 전략을 요약해 보겠습니다.

이 목록은 완전하지 않습니다. 단지 PWA가 취할 수 있는 접근 방식의 종류를 설명하기 위한 것입니다.

캐싱 전략은 오프라인 동작, 반응성, 최신성 사이의 균형을 맞춥니다. 리소스마다 요구사항이 다릅니다. 예를 들어 앱의 기본 UI는 상대적으로 정적일 수 있지만, 제품 목록을 표시할 때는 최신 데이터가 필수적일 수 있습니다. 이는 PWA가 일반적으로 리소스별로 다른 전략을 채택하며, 단일 PWA가 여기서 설명하는 모든 전략을 사용할 수도 있음을 의미합니다.

### 캐시 우선

이 전략에서는 일부 리소스를 미리 캐싱한 후, 해당 리소스에 대해서만 "캐시 우선" 전략을 구현합니다.

- 미리 캐싱된 리소스의 경우
  - 캐시에서 해당 리소스를 검색하고, 발견되면 리소스를 반환합니다.
  - 그렇지 않으면 네트워크로 요청합니다. 네트워크 요청이 성공하면 다음을 위해 리소스를 캐싱합니다.
- 그 외 모든 리소스에 대해서는 항상 네트워크로 요청합니다.

프리캐싱은 PWA가 반드시 필요로 하며, 해당 앱 버전에서 변경되지 않으며, 가능한 한 빠르게 가져와야 하는 리소스에 적합한 전략입니다. 예를 들어 앱의 기본 사용자 인터페이스가 여기에 해당합니다. 이를 프리캐싱하면 앱 실행 시 네트워크 요청 없이도 UI를 렌더링할 수 있습니다.

먼저 서비스 워커는 `install` 이벤트 핸들러에서 정적 리소스를 프리캐싱합니다.

```js
const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
```

`install` 이벤트 핸들러에서는 캐싱 작업 결과를 이벤트의 {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} 메서드에 전달합니다. 이는 어떤 이유로든 캐싱이 실패하면 서비스 워커 설치가 실패함을 의미합니다. 반대로 설치가 성공했다면 서비스 워커는 해당 리소스가 캐시에 추가되었음을 확신할 수 있습니다.

`fetch` 이벤트 핸들러는 다음과 같습니다.

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

우리는 이벤트의 {{domxref("FetchEvent.respondWith", "respondWith()")}} 메서드를 호출하여 리소스를 반환합니다. 특정 요청에 대해 `respondWith()`를 호출하지 않으면, 해당 요청은 서비스 워커가 가로채지 않은 것처럼 네트워크로 전송됩니다. 따라서 요청이 미리 캐시되지 않았다면 그냥 네트워크로 전달됩니다.

`networkResponse`를 캐시에 추가할 때는 응답을 복제하여 복사본을 캐시에 추가하고 원본을 반환해야 합니다. 이는 `Response` 객체가 스트리밍 가능하므로 한 번만 읽을 수 있기 때문입니다.

사전에 캐시된 리소스에 대해 왜 네트워크를 대체 수단으로 사용하는지 궁금할 수 있습니다. 사전에 캐시되었다면 항상 사용 가능할 거라고 확신할 수 있지 않을까요? 그 이유는 브라우저나 사용자에 의해 캐시가 지워질 가능성이 있기 때문입니다. 가능성이 낮긴 하지만, 네트워크를 대체 수단으로 사용할 수 없다면 PWA를 사용할 수 없게 될 것입니다. [캐시된 데이터 삭제](#캐시_데이터_삭제)를 참조하세요.

### 캐시 우선 및 캐시 새로고침

"캐시 우선" 방식의 단점은 응답이 캐시에 저장되면 새 버전의 서비스 워커가 설치되기 전까지 절대 새로고침되지 않는다는 점입니다.

"캐시 우선(캐시 갱신 포함)" 전략(일명 "stale while revalidate")은 "캐시 우선"과 유사하지만, 캐시 히트 후에도 항상 네트워크로 요청을 전송하고 응답을 이용해 캐시를 갱신한다는 점이 다릅니다. 이는 "캐시 우선"의 반응성을 유지하면서 (요청이 적절히 자주 이루어지는 한) 상당히 최신 응답을 얻을 수 있음을 의미합니다.

반응 속도가 중요하고, 최신성이 어느 정도 중요하지만 필수적이지 않은 경우에 적합한 선택입니다.

이 버전에서는 JSON을 제외한 모든 리소스에 대해 "캐시 우선, 캐시 새로고침" 방식을 구현합니다.

```js
function isCachable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCachable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
```

캐시는 비동기적으로(`then()` 핸들러 내에서) 업데이트되므로, 앱은 네트워크 응답을 수신하기 전에 캐시된 응답을 사용할 수 있습니다.

### 네트워크 우선

마지막으로 살펴볼 전략인 "네트워크 우선"은 캐시 우선의 반대 개념입니다. 먼저 네트워크에서 리소스를 가져오려 시도합니다. 네트워크 요청이 성공하면 응답을 반환하고 캐시를 업데이트합니다. 실패하면 캐시를 사용합니다.

이 전략은 가능한 한 최신 응답을 얻는 것이 중요하지만, 캐시된 리소스가 없는 것보다 낫다고 판단되는 요청에 유용합니다. 메시징 앱의 최근 메시지 목록이 이에 해당할 수 있습니다.

아래 예시에서는 앱의 "inbox" 경로 아래에 위치한 모든 리소스를 가져오는 요청에 "네트워크 우선" 방식을 적용합니다.

```js
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/^\/inbox/)) {
    event.respondWith(networkFirst(event.request));
  }
});
```

반드시 최신 정보가 필요한 요청도 있습니다. 이런 경우 응답이 없더라도 오래된 응답을 제공하는 것보다 낫습니다. 따라서 "네트워크 전용" 전략만이 적합합니다. 예를 들어, 앱이 사용 가능한 제품 목록을 표시할 때 목록이 최신 상태가 아니라면 사용자에게 불편을 줄 수 있습니다.

## 캐시 데이터 삭제

캐시는 저장 공간이 제한되어 있으며, 한도를 초과하면 브라우저가 앱의 캐시 데이터를 제거할 수 있습니다. 구체적인 한도와 동작은 브라우저마다 다릅니다. 자세한 내용은 [저장소 할당량 및 제거 기준](/ko/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)을 참조하세요. 실제로 캐시 데이터 제거는 매우 드문 경우입니다. 사용자는 언제든지 앱의 캐시를 지울 수도 있습니다.

PWA는 서비스 워커의 {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} 이벤트에서 캐시의 오래된 버전을 정리해야 합니다. 이 이벤트가 발생하면 서비스 워커는 이전 버전이 실행 중이지 않음을 확신할 수 있으므로 오래된 캐시 데이터는 더 이상 필요하지 않습니다.

## 같이 보기

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [Fetch API](/ko/docs/Web/API/Fetch_API)
- [저장소 할당량 및 제거 기준](/ko/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- developer.chrome.com의 [서비스 워커 캐싱 전략](https://developer.chrome.com/docs/workbox/caching-strategies-overview) (2021)
- web.dev의 [오프라인 설명서](https://web.dev/articles/offline-cookbook) (2020)
