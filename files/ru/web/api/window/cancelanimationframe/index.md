---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
---

{{APIRef}}

Метод **`window.cancelAnimationFrame()`** останавливает анимацию, запланированную с помощью {{domxref("window.requestAnimationFrame()")}}.

## Синтаксис

```
window.cancelAnimationFrame(requestID);
```

### Параметры

- `requestID`
  - : Значение, которое возвращает {{domxref("window.requestAnimationFrame()")}} при запросе callback.

## Примеры

```js
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime; // Поддерживается только FF. В других браузерах можно использовать Date.now().

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + "px";
  if (progress < 2000) {
    // Важно обновлять requestId при каждом запросе requestAnimationFrame
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// остановка с использованием последнего requestId
cancelAnimationFrame(myReq);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.requestAnimationFrame()")}}
