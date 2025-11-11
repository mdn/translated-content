---
title: window.cancelAnimationFrame
slug: Web/API/Window/cancelAnimationFrame
---

{{APIRef}}

**`window.cancelAnimationFrame()`** 方法取消一个先前通过调用 {{domxref("window.requestAnimationFrame()")}} 方法添加到计划中的动画帧请求。

## 语法

```js-nolint
cancelAnimationFrame(requestID)
```

### 参数

- `requestID`
  - : 先前调用 {{domxref("window.requestAnimationFrame()")}} 方法时返回的 ID。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

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
    // 在每次调用 requestAnimationFrame 时，注意更新 requestId
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// 取消操作使用的是最后一个 requestId
cancelAnimationFrame(myReq);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
