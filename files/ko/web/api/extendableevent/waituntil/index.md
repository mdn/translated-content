---
title: "ExtendableEvent: waitUntil() 메서드"
short-title: waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

**`ExtendableEvent.waitUntil()`**
메서드는 이벤트 디스패처에게 작업이 진행 중임을 알립니다. 이 메서드는
작업의 성공 여부를 감지하는 데에도 사용할 수 있습니다. 서비스 워커에서 `waitUntil()`은
프로미스가 완료될 때까지 작업이 진행 중임을, 그리고 작업이 완료되기를 원한다면
서비스 워커를 종료하지 말아야 한다는 것을 브라우저에게 알려줍니다.

[서비스 워커](/ko/docs/Web/API/ServiceWorkerGlobalScope)의 {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} 이벤트는
`waitUntil()`을 사용하여 작업이 완료될 때까지
서비스 워커를 {{domxref("ServiceWorkerRegistration.installing", "installing")}} 단계에
머무르게 합니다. `waitUntil()`에 전달된 프로미스가 거부되는 경우, install은
실패로 간주되며 설치 중인 서비스 워커가 삭제됩니다. 이것은 주로
서비스 워커가 의존하는 모든 핵심 캐시가 성공적으로 채워질 때까지
서비스 워커가 설치된 것으로 간주되지 않도록 하는 데 사용됩니다.

[서비스 워커](/ko/docs/Web/API/ServiceWorkerGlobalScope)의 {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} 이벤트는
`waitUntil()`을 사용하여 `waitUntil()`에 전달된 프로미스가 완료될 때까지
`fetch` 및 `push` 같은 기능적인 이벤트를 일시 중지합니다. 이는
서비스 워커가 데이터베이스 스키마를 업데이트하고 오래된 {{domxref("Cache", "caches")}}를 삭제할 시간을 제공하므로,
다른 이벤트가 완전히 업그레이드된 상태에 의존할 수 있습니다.

`waitUntil()` 메서드는 처음에 이벤트 콜백 내에서 호출되어야 하지만,
그 이후에는 전달된 모든 프로미스가 완료될 때까지 여러 번 호출할 수
있습니다.

## 구문

```js-nolint
waitUntil(promise)
```

### 매개변수

- `promise`
  - : 이벤트의 수명을 연장하는 {{jsxref("Promise")}} 객체.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

서비스 워커의 `install` 이벤트 내에서 `waitUntil()`을 사용하는 예제.

```js
addEventListener("install", (event) => {
  const preCache = async () => {
    const cache = await caches.open("static-v1");
    return cache.addAll(["/", "/about/", "/static/styles.css"]);
  };
  event.waitUntil(preCache());
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [서비스 워커 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
