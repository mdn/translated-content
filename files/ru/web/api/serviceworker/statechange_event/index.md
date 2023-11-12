---
title: ServiceWorker.onstatechange
slug: Web/API/ServiceWorker/statechange_event
---

{{APIRef("Service Workers API")}}

Обработчик события, вызываемый при срабатывании события `statechange`; по сути, срабатывает при изменении {{domxref("ServiceWorker.state")}}.

## Синтаксис

```
ServiceWorker.onstatechange = function(statechangeevent) { ... }
ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )
```

## Примеры

Данный фрагмент кода из [примера событий service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([демо](https://googlechrome.github.io/samples/service-worker/registration-events/)) возвращает состояние при каждом его изменении.

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

Обратите внимание, что при срабатывании `statechange`, ссылки на service worker могли измениться. Например:

```js
navigator.serviceWorker.register(..).then(function(swr) {
  swr.installing.state == "installing"
  swr.installing.onstatechange = function() {
    swr.installing == null;
    // At this point, swr.waiting OR swr.active might be true. This is because the statechange
    // event gets queued, meanwhile the underlying worker may have gone into the waiting
    // state and will be immediately activated if possible.
  }
})
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}
