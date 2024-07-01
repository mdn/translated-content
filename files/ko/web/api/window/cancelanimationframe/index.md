---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
---

{{APIRef}}

**`window.cancelAnimationFrame()`** 메소드는 이전에 {{domxref("window.requestAnimationFrame()")}} 을 호출하여 스케줄된 애니메이션 프레임 요청을 취소합니다.

## 구문

```js
window.cancelAnimationFrame(requestID);
```

### Parameters

- `requestID`
  - : 요청된 콜백 {{domxref("window.requestAnimationFrame()")}} 을 호출하여 반환된 ID 값.

## 예시

```js
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime; // Firefox 에서만 지원됨. 다른 브라우저에서는 Date.now() 같은 것을 사용할 수 있음.

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + "px";
  if (progress < 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

cancelAnimationFrame(myReq);
```

## 브라우저 호환성

{{Compat}}

## 명세

{{Specifications}}

## 함께 보기

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.requestAnimationFrame()")}}
