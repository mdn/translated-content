---
title: Event.timeStamp
slug: Web/API/Event/timeStamp
---

{{APIRef("DOM")}}

Возвращает время (в миллисекундах), в котором было создано событие.

> **Примечание:**Это свойство работает только в том случае, если система событий поддерживает его для конкретного события.

## Синтаксис

```
event.timeStamp
```

### Значение

Значение - это миллисекунды, прошедшие с начала жизненного цикла текущего документа до создания события.

In newer implementations, the value is a {{domxref("DOMHighResTimeStamp")}} accurate to 5 microseconds (0.005 ms). In older implementations, the value is a {{domxref("DOMTimeStamp")}}, accurate to a millisecond.

## Example

### HTML content

```html
<p>
  Focus this iframe and press any key to get the current timestamp for the
  keypress event.
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript content

```js
function getTime(event) {
  var time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### Result

{{EmbedLiveSample("Example", "100%", 100)}}

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `event.timeStamp` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

In Firefox, you can also enabled `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
