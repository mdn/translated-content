---
title: Clients.claim()
slug: Web/API/Clients/claim
---

{{SeeCompatTable}}{{APIRef("Service Worker Clients")}}

{{domxref("Clients")}} 의 **`claim()`** 메소드는 active 서비스워커가 그것의 {{domxref("ServiceWorkerRegistration.scope", "scope")}} 를 가지는 모든 클라이언트들의 {{domxref("ServiceWorkerContainer.controller", "controller")}} 로서 자신을 등록하는 것을 허용한다. 이것은 이 서비스워커가 제어하게 될 클라이언트들에 "`controllerchange`" 이벤트를 발생시킨다.

서비스워커가 최초에 등록되면, 페이지들은 다음 로드시까지 그것을 사용하지 않을 것이다. `claim()` 메소드는 그 페이지들을 즉시 제어될 수 있도록 한다. 이로 인해, 당신의 서비스워커는 네트워크 또는 다른 서비스워커를 통해 정기적으로 로드되는 페이지들을 제어하게 된다.

## Syntax

```js
await clients.claim();
```

### Parameters

None.

### Returns

A {{jsxref("Promise")}} for `void`.

## Example

다음 예시는 서비스워커의 "`activate`" 이벤트 리스너에서 `claim()` 를 사용하므로, fetch 들이 이 서비스워커를 통과하기 전에 동일한 스코프에서 로드된 클라이언트들은 다시 로드될 필요가 없다. .

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using Service Workers](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [The service worker lifecycle](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise", "Promises")}}
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - skip the service worker's waiting phase
