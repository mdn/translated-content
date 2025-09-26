---
title: TextMetrics.width
slug: Web/API/TextMetrics/width
---

{{APIRef("Canvas API")}}

只读的 **`TextMetrics.width`** 属性，包含文本先前的宽度（行内盒子的宽度），使用 CSS 像素计算。

## 示例

事先给定 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

你可以使用下面的代码得到一个 {{domxref("TextMetrics")}} 对象：

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var text = ctx.measureText("foo"); // TextMetrics object
text.width; // 16;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TextMetrics")}}
