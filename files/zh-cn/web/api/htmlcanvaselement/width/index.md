---
title: HTMLCanvasElement.width
slug: Web/API/HTMLCanvasElement/width
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.width`** 属性是一个对应 {{HTMLElement("canvas")}} 元素 CSS 像素 [`width`](/zh-CN/docs/Web/HTML/Element/canvas#width) 的正整数。当这个属性没有指定时，或者被赋予一个不合法的值，比如一个负值，默认使用 300.

这是其中之一，另一个是 {{domxref("HTMLCanvasElement.height")}}, 它们控制了 canvas 的大小尺寸。

## 语法

```plain
var pxl = canvas.width;
canvas.width = pxl;
```

## 示例

有这样一个 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

你能够通过下面的代码得到 canvas 的宽度：

```js
var canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- 另一个控制 canvas 大小的属性，{{domxref("HTMLCanvasElement.height")}}.
