---
title: ServiceWorker
slug: Web/API/ServiceWorker
---

{{APIRef("Service Workers API")}}

[Service Worker API](/ko/docs/Web/API/Service_Worker_API)의 **`ServiceWorker`** 인터페이스는 서비스 워커로의 참조를 제공합니다. 다수의 {{glossary("browsing context", "브라우징 맥락")}}(e.g. 페이지, 다른 워커, 등등)는 고유한 `ServiceWorker` 객체를 통해 동일한 서비스 워커와 연결할 수 있습니다.

`ServiceWorker` 객체는 {{domxref("ServiceWorkerRegistration.active")}} 속성과 {{domxref("ServiceWorkerContainer.controller")}} 속성으로 접근할 수 있습니다. `controller`는 활성화되어 페이지를 통제 중인 서비스 워커입니다.

`ServiceWorker` 인터페이스에서는 일련의 생명주기 이벤트(`install`, `activate`)와 기능 이벤트(`fetch`)가 발생합니다. `ServiceWorker` 객체의 생명주기는 {{domxref("ServiceWorker.state")}} 속성이 담고 있습니다.

## 속성

`ServiceWorker` 인터페이스는 부모 {{domxref("Worker")}}에서 속성을 상속합니다.

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : Returns the `ServiceWorker` serialized script URL defined as part of {{domxref("ServiceWorkerRegistration")}}. The URL must be on the same origin as the document that registers the `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : Returns the state of the service worker. It returns one of the following values: `installing`, `installed,` `activating`, `activated`, or `redundant`.

### 이벤트 처리기

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : An {{domxref("EventListener")}} property called whenever an event of type `statechange` is fired; it is basically fired anytime the {{domxref("ServiceWorker.state")}} changes.

## 메서드

`ServiceWorker` 인터페이스는 부모 {{domxref("Worker")}}에서 메서드를 상속합니다. 단, {{domxref("Worker.terminate()")}}는 예외이며 서비스 워커에서 접근할 수 없습니다.

## 예제

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the {{domxref("ServiceWorker.state")}} and returns its value.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then(function (registration) {
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
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", function (e) {
          // logState(e.target.state);
        });
      }
    })
    .catch(function (error) {
      // Something went wrong during registration. The service-worker.js file
      // might be unavailable or contain a syntax error.
    });
} else {
  // The current browser doesn't support service workers.
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook)
- [Using Service Workers](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service worker basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
