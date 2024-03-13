---
title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`OffscreenCanvas()`**构造函数，返回一个新的 `OffscreenCanvas` 对象

## 语法

```plain
new OffscreenCanvas(width, height);
```

### 参数

- `width`
  - : 离屏 canvas 的高度
- `height`
  - : 离屏 canvas 的宽度

## 示例

创建一个离屏 Canvas 并且初始一个 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 上下文：

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{domxref("OffscreenCanvas")}}, the interface this constructor belongs to.
