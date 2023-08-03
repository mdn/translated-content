---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
---

{{APIRef}}

[`Обработчик события (EventHandler)`](/ru/docs/Web/API/EventHandler), который вызывается всякий раз, когда изменяется состояние свойства `readyState`. Свойство **`XMLHttpRequest.onreadystatechange`** содержит обработчик события, вызываемый когда происходит событие {{event("readystatechange")}}, всякий раз когда свойство {{domxref("XMLHttpRequest.readyState", "readyState")}} запроса {{domxref("XMLHttpRequest")}} изменяется. Колбэк-функция запускается из потока пользовательского интерфейса.

> **Предупреждение:** **Внимание:** Не должно использоваться при синхронных запросах и из исходного кода (native code).

Событие `readystatechange` не произойдёт если запрос `XMLHttpRequest` отменён методом [abort()](/ru/docs/Web/API/XMLHttpRequest/abort).

## Синтаксис

```
XMLHttpRequest.onreadystatechange = callback;
```

### Значение

- `callback` - это функция, которая будет вызываться при изменении свойства `readyState`.

## Пример

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}
