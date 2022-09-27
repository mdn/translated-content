---
title: window.cancelAnimationFrame
slug: Web/API/Window/cancelAnimationFrame
---

{{APIRef}}

## 概要

{{domxref("window.requestAnimationFrame()")}} の呼び出しによりスケジュールされたフレームアニメーションのリクエストをキャンセルします。

## 構文

```
window.cancelAnimationFrame(requestID);
```

### 引数

- `requestID`
  - : コールバックがリクエストした {{domxref("window.requestAnimationFrame()")}} の呼び出しにより返された ID 値。

## 例

```js
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // Firefox のみでサポート。他のブラウザーでは代わりに Date.now() などを使用してください。

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

cancelAnimationFrame(myReq);
```

## ブラウザーの実装状況

{{Compat("api.Window.cancelAnimationFrame")}}

## 仕様

- {{spec("http://www.w3.org/TR/animation-timing/#cancelAnimationFrame", "Timing control for script-based animations: cancelAnimationFrame", "WD")}}

## 関連情報

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.requestAnimationFrame()")}}
