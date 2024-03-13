---
title: ServiceWorker.onstatechange
slug: Web/API/ServiceWorker/statechange_event
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

`statechange` 타입의 이벤트가 발생될 때마다 호출되는 {{domxref("EventListener")}} 속성. 기본적으로 {{domxref("ServiceWorker.state")}}가 변경되는 시점에 발생한다.

## Syntax

```js
ServiceWorker.onstatechange = function(statechangeevent) { ... }
ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )
```

## Examples

이 코드 조각은 [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)) 으로부터 가져온 것이다. 이 코드는 {{domxref("ServiceWorker.state")}}의 모든 변경 사항을 수신하고 그 값을 반환한다.

```js
var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", function (e) {
    logState(e.target.state);
  });
}
```

`statechange` 가 발생할 때, 서비스워커의 참조들이 변화할 수 있으므로 주의하라. 예시:

```js
navigator.serviceWorker.register(..).then(function(swr) {
  swr.installing.state == "installing"
  swr.installing.onstatechange = function() {
    swr.installing == null;
    // 이 시점에서, swr.waiting 또는 swr.active는 true일 것이다. 이것은 statechange 이벤트가 대기 상태이기 때문이며,
    // 그동안 잠재 상태의 워커가 waiting 상태가 될 수도 있으며 가능한 경우에는 즉시 activated 될 것이다.
  }
})
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
