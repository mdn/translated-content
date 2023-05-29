---
title: window.cancelAnimationFrame
slug: Web/API/Window/cancelAnimationFrame
---

{{APIRef}}{{SeeCompatTable}}

## 概述

取消一个先前通过调用{{ domxref("window.requestAnimationFrame()") }}方法添加到计划中的动画帧请求。

## 语法

```
window.mozCancelAnimationFrame(requestID);               // Firefox
```

## 参数

- `requestID`
  - : 先前调用{{ domxref("window.requestAnimationFrame()") }}方法时返回的 ID.

## 示例

```
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // 只有 Firefox 支持 mozAnimationStartTime 属性，其他浏览器可以使用 Date.now() 来替代。

var myReq;
function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

window.cancelAnimationFrame(myReq);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ domxref("window.mozAnimationStartTime") }}
- {{ domxref("window.requestAnimationFrame()") }}
