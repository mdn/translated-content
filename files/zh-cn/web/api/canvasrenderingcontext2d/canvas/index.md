---
title: CanvasRenderingContext2D：canvas 属性
slug: Web/API/CanvasRenderingContext2D/canvas
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的 **`CanvasRenderingContext2D.canvas`** 属性是对与给定上下文关联的 {{domxref("HTMLCanvasElement")}} 对象的只读引用。如果没有与之关联的 {{HTMLElement("canvas")}} 元素，对象值为 {{jsxref("null")}}。

## 值

一个 {{domxref("HTMLCanvasElement")}} 对象。

## 示例

给出 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

你可以通过 `CanvasRenderingContext2D` 调用内部的 `canvas` 属性，获取 canvas 元素的引用：

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D")}} 接口
- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
