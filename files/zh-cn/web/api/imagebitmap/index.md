---
title: ImageBitmap
slug: Web/API/ImageBitmap
---

{{APIRef("Canvas API")}}

**`ImageBitmap`** 接口表示能够被绘制到 {{HTMLElement("canvas")}} 上的位图图像，具有低延迟的特性。运用 {{domxref("Window.createImageBitmap()")}} 或 {{domxref("WorkerGlobalScope.createImageBitmap()")}} 工厂方法模式，它可以从多种源中生成。`ImageBitmap` 提供了一种异步且高资源利用率的方式来为 WebGL 的渲染准备基础结构。

## 属性

- {{domxref("ImageBitmap.height")}} {{readonlyInline}}
  - : 无符号长整型数值，表示 ImageData 的 CSS 像素单位的高度。
- {{domxref("ImageBitmap.width")}} {{readonlyInline}}
  - : 无符号长整型数值，表示 ImageData 的 CSS 像素单位的宽度。

## 方法

- {{domxref("ImageBitmap.close()")}}
  - : 释放 ImageBitmap 所相关联的所有图形资源。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.createImageBitmap()")}}
- {{domxref("WorkerGlobalScope.createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
