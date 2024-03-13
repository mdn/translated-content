---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`ImageBitmapRenderingContext`** 接口是 canvas 的渲染上下文，它只提供了使用给定 {{domxref("ImageBitmap")}} 替换 canvas 的功能。它的上下文 ID ({{domxref("HTMLCanvasElement.getContext()")}} 或 {{domxref("OffscreenCanvas.getContext()")}} 的第一个参数) 是 `"bitmaprenderer"`。

这个接口可用于 window context 和 [worker](/zh-CN/docs/Web/API/Web_Workers_API) context.

## 方法

- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}
  - : 在与此渲染上下文相关的 canvas 中显示给定的 `ImageBitmap` 。 `ImageBitmap` 的所有权被转移到画布上。这个函数以前命名为`transferImageBitmap()`，但在规范中修改了原名字。为了避免影响之前的代码，旧名称作为别名被保留下来。

## 规范

Currently drafted as a proposal in the [OffscreenCanvas](https://wiki.whatwg.org/wiki/OffscreenCanvas) specification.

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("OffScreenCanvas")}}
