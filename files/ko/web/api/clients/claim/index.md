---
title: "Clients: claim() 메서드"
short-title: claim()
slug: Web/API/Clients/claim
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

{{domxref("Clients")}} 인터페이스의 **`claim()`** 메서드는 활성화된 서비스 워커가 자신의 {{domxref("ServiceWorkerRegistration.scope", "scope")}} 내 모든 클라이언트의 {{domxref("ServiceWorkerContainer.controller", "controller")}}로 설정될 수 있습니다.
이렇게 하면 이 서비스 워커가 제어하는 클라이언트에서 {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}}에 "`controllerchange`" 이벤트가 트리거됩니다.

서비스 워커가 처음 등록될 때, 페이지는 다음에 로드될 때까지 해당 서비스 워커를 사용하지 않습니다.
`claim()` 메서드는 이런 페이지가 즉시 제어되도록 합니다.
이로 인해 서비스 워커가 네트워크를 통해 정기적으로 로드된 페이지나
다른 서비스 워커를 통해 로드된 페이지를 제어하게 됩니다.

## 구문

```js-nolint
claim()
```

### 매개변수

없음.

### 반환 값

`undefined`로 이행되는 {{jsxref("Promise")}}.

## 예제

다음 예제는 서비스 워커의 "`activate`" 이벤트 수신기 내에서 `claim()`을 사용하여 동일한 범위 내에서 로드된 클라이언트가 이 서비스 워커를 통해 페치를 수행하기 전에 다시 로드될 필요가 없도록 합니다.

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [서비스 워커 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [서비스 워커 수명 주기](https://web.dev/articles/service-worker-lifecycle)
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - 서비스 워커의 대기 단계 건너뛰기
