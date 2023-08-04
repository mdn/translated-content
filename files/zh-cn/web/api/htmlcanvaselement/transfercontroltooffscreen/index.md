---
title: HTMLCanvasElement.transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

方法 **`HTMLCanvasElement.transferControlToOffscreen()`** 将控制转移到一个在主线程或者 web worker 的 {{domxref("OffscreenCanvas")}} 对象上。

## 用法

```plain
OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()
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

## 查阅

- The interface defining this method, {{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("WebGLRenderingContext.commit()")}}
