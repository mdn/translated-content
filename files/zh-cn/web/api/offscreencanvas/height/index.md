---
title: OffscreenCanvas.height
slug: Web/API/OffscreenCanvas/height
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

设置或者获取{{domxref("OffscreenCanvas")}} 对象的高度。

## 语法

```plain
var pxl = offscreen.height;
offscreen.height = pxl;
```

## 例子

创建一个新的离屏 canvas，获取或者设置离屏 canvas 的高度：

```js
var offscreen = new OffscreenCanvas(256, 256);
offscreen.height; // 256
offscreen.height = 512;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另外参阅

- {{domxref("OffscreenCanvas")}}, 此属性所属的接口。
