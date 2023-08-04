---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
---

{{APIRef("Service Workers API")}}

Свойство интерфейса {{domxref("ServiceWorker")}} **`state`**, доступное только для чтения является строкой, показывающей текущее состояние данного Service Worker. Его возможные значения: `installing`, `installed,` `activating`, `activated` и `redundant`.

## Синтаксис

```
someURL = ServiceWorker.state
```

### Значение

Определение {{domxref("ServiceWorkerState")}} ([см. спецификацию](http://slightlyoff.github.io/ServiceWorker/spec/service_worker/#service-worker-state-enum))

## Примеры

Это фрагмент кода из [примера событий Service Worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([демо](https://googlechrome.github.io/samples/service-worker/registration-events/)). Данный код возвращает значение [`ServiceWorker.state`](/ru/docs/Web/API/ServiceWorker/state) при каждом изменении состояния.

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

## Спецификации

{{Specifications}}

## Поддержка в браузерах

{{Compat}}
