---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
---

{{APIRef}}

**`CanvasRenderingContext2D.measureText()`** 方法返回一个关于被测量文本{{domxref("TextMetrics")}} 对象包含的信息（例如它的宽度）。

## 语法

```plain
ctx.measureText(text);
```

### 参数

- text
  - : 需要测量的{{jsxref("String")}} 。

### 返回值

{{domxref("TextMetrics")}} 对象。

## 示例

给出 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

使用下面的代码，你能得到 {{domxref("TextMetrics")}} 对象：

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var text = ctx.measureText("foo"); // TextMetrics object
text.width; // 16;
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("TextMetrics")}}
