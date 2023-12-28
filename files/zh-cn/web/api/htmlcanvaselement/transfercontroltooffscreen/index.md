---
title: HTMLCanvasElement.transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
---

{{APIRef("Canvas API")}}

方法 **`HTMLCanvasElement.transferControlToOffscreen()`** 将控制转移到一个在主线程或者 web worker 的 {{domxref("OffscreenCanvas")}} 对象上。

## 语法

```js-nolint
transferControlToOffscreen()
```

### 返回值

一个 {{domxref("OffscreenCanvas")}} 对象。

## 样例

```js
var htmlCanvas = document.createElement("canvas");
var offscreen = htmlCanvas.transferControlToOffscreen();
var gl = offscreen.getContext("webgl");

// ... some drawing using the gl context ...

// Push frames back to the original HTMLCanvasElement
gl.commit();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口 {{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
