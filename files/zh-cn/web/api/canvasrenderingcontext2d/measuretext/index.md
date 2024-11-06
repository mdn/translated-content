---
title: CanvasRenderingContext2D：measureText() 方法
slug: Web/API/CanvasRenderingContext2D/measureText
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.measureText()`** 方法返回一个包含被测量文本相关信息（例如它的宽度）的 {{domxref("TextMetrics")}} 对象。

## 语法

```js-nolint
measureText(text)
```

### 参数

- `text`
  - : 需要测量的文本字符串。

### 返回值

{{domxref("TextMetrics")}} 对象。

## 示例

给定 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

使用下面的代码，你能得到 {{domxref("TextMetrics")}} 对象：

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("Hello world");
console.log(text.width); // 56;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("TextMetrics")}}
