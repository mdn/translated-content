---
title: WebGLRenderingContext.commit()
slug: Web/API/WebGLRenderingContext/commit
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

当上下文不是直接固定到一个特定的画布时，**`WebGLRenderingContext.commit()`** 方法将帧绘制到其原始的 {{domxref("HTMLCanvasElement")}} 上。

## 语法

```plain
void WebGLRenderingContext.commit()
```

## 实例

```plain
var htmlCanvas = document.createElement('canvas');
var offscreen = htmlCanvas.transferControlToOffscreen();
var gl = offscreen.getContext('webgl');

// ... 在 gl 离屏上下文中进行一些绘制 ...

// 将帧绘制到 htmlCanvas 上
gl.commit();
```

## 规范

目前在 [OffscreenCanvas](https://wiki.whatwg.org/wiki/OffscreenCanvas) 规范中作为草案。

## 浏览器兼容性

{{Compat}}

## 另请参阅

- 定义此方法的接口，{{domxref("WebGLRenderingContext")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
