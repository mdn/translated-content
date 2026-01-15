---
title: GlobalEventHandlers.onloadend
slug: Web/API/XMLHttpRequestEventTarget/loadend_event
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Свойство **`onloadend`** от {{domxref("GlobalEventHandlers")}} примесь [`event handler`](/ru/docs/Web/Events/Event_handlers) передаёт код для вызова в момент возникновения события [`loadend`](/ru/docs/Web/API/XMLHttpRequestEventTarget/loadend_event) (когда процесс загрузки ресурса окончился и остановился)

## Синтаксис

```
img.onloadend = funcRef;
```

При возникновении события `loadend` будет вызвана функция обработчик `funcRef`.

## Примеры

```html
<img src="myImage.jpg" />
```

```js
// 'loadstart' fires first, then 'load', then 'loadend'

image.addEventListener("load", function (e) {
  console.log("Image loaded");
});

image.addEventListener("loadstart", function (e) {
  console.log("Image load started");
});

image.addEventListener("loadend", function (e) {
  console.log("Image load finished");
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
