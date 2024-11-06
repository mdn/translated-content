---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
l10n:
  sourceCommit: c575deb5f1775b532360c612a85b35a5ff9525d9
---

{{APIRef}}

**`window.cancelAnimationFrame()`** メソッドは、以前に {{domxref("window.requestAnimationFrame()")}} の呼び出しによってスケジュールされたアニメーションフレームリクエストをキャンセルします。

## 構文

```js-nolint
cancelAnimationFrame(requestID)
```

### 引数

- `requestID`
  - : コールバックをリクエストした {{domxref("window.requestAnimationFrame()")}} の呼び出しによって返された ID 値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

const start = Date.now();

let myReq;

function step(timestamp) {
  const progress = timestamp - start;
  d.style.left = `${Math.min(progress / 10, 200)}px`;
  if (progress < 2000) {
    // requestAnimationFrame を呼び出すたびに requestId を更新することが重要です
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// キャンセル処理は、最後の requestId を使用します
cancelAnimationFrame(myReq);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.requestAnimationFrame()")}}
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js)
