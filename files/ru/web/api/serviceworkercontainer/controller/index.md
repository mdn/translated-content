---
title: ServiceWorkerContainer.controller
slug: Web/API/ServiceWorkerContainer/controller
---

{{APIRef("Service Workers API")}}

Свойство **`controller`** интерфейса {{domxref("ServiceWorkerContainer")}} возвращает объект {{domxref("ServiceWorker")}}, в случае, если service worker активирован. Данное свойство возвращает `null`, если страница была обновлена с помощью _Shift_ + refresh или на ней отсутствует активный service worker.

## Синтаксис

```
var myController = navigator.serviceWorker.controller;
```

### Значение

Объект {{domxref("ServiceWorker")}}.

## Пример

```js
if ("serviceWorker" in navigator) {
  // Проверяем, находится ли данная страница под управлением service worker.
  if (navigator.serviceWorker.controller) {
    console.log(
      `Эта страница сейчас контролируется ${navigator.serviceWorker.controller}`,
    );
  } else {
    console.log("Эта страница не контролируется service worker.");
  }
} else {
  console.log("Данный браузер не поддерживает Service Worker API.");
}
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}
