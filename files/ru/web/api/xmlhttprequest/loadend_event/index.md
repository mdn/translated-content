---
title: GlobalEventHandlers.onloadend
slug: Web/API/XMLHttpRequest/loadend_event
---

{{ApiRef}}

Свойство **`onloadend`** от {{domxref("GlobalEventHandlers")}} примесь {{event("Event_handlers", "event handler")}} передаёт код для вызова в момент возникновения события {{event("loadend")}} (когда процесс загрузки ресурса окончился и остановился)

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
