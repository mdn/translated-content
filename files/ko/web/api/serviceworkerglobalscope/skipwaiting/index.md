---
title: ServiceWorkerGlobalScope.skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} 의 **`ServiceWorkerGlobalScope.skipWaiting()`** 메소드는 waiting 상태의 서비스 워커를 active 상태의 서비스 워커로 변경하도록 강제한다.

근본적인 서비스 워커에 대한 업데이트들이 현재의 클라이언트와 다른 모든 active 클라이언트들에게 즉시 적용되도록 하기 위해 {{domxref("Clients.claim()")}} 과 이 메소드를 사용한다.

## Syntax

```js
ServiceWorkerGlobalScope.skipWaiting().then(function () {
  //Do something
});
```

### Returns

`undefined` 로 즉시 resolve 되는 {{jsxref("Promise")}}

## Example

서비스 워커가 실행되는 동안 언제라도 `self.skipWaiting()` 는 호출될 수 있지만, 이것은 `waiting` 상태로 남아 있을 수도 있는 새롭게 설치된 서비스 워커가 있는 경우에만 영향을 줄 수 있다. 따라서, {{domxref("InstallEvent")}} 핸들러 내부에서 `self.skipWaiting()` 을 호출하는 것이 일반적이다.

다음 예시는 active 상태의 서비스 워커가 이미 존재하는지의 여부에 관계없이, 새로 설치된 서비스 워커가 `activating` 상태로 진행되도록 한다.

```js
self.addEventListener("install", function (event) {
  // skipWaiting()가 반환하는 promise는 안전하게 무시될 수 있다.
  self.skipWaiting();

  // 잠재적으로 event.waitUntil(); 내부에서
  // 서비스 워커 설치를 위해 필요한 다른 action 들을 수행하라.
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using Service Workers](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{domxref("Clients.claim()")}}
- {{jsxref("Promise", "Promises")}}
- [Using web workers](/ko/docs/Web/Guide/Performance/Using_web_workers)
