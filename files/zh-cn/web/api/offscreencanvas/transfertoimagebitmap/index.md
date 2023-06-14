---
title: OffscreenCanvas.transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`OffscreenCanvas.transferToImageBitmap()`** 方法使用`offscreenCanvas`最近渲染得到的图片创建一个{{domxref("ImageBitmap")}} 对象。

## 语法

```plain
ImageBitmap OffscreenCanvas.transferToImageBitmap()
```

### 返回值

一个{{domxref("ImageBitmap")}}对象。

## 例子

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

//一些绘制要使用 gl 前后文

offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 浏览相关

- The interface defining this method, {{domxref("OffscreenCanvas")}}
- {{domxref("ImageBitmapRenderingContext.transferImageBitmap()")}}
