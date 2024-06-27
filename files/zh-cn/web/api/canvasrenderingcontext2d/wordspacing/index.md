---
title: CanvasRenderingContext2D.wordSpacing
slug: Web/API/CanvasRenderingContext2D/wordSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的 **`CanvasRenderingContext2D.wordSpacing`** 属性用于指定绘制文本时单词之间的间距。

该属性对应于 CSS 中的 [`word-spacing`](/zh-CN/docs/Web/CSS/word-spacing) 属性。

## 值

单词间距作为 CSS {{cssxref("length")}} 数据格式的字符串。默认值为 `0px`。

该属性可以用于获取或设置间距。如果设置为无效或无法解析的值，则属性值将保持不变。

## 示例

在以下示例中，我们通过修改 `wordSpacing` 属性来显示三次文本“Hello World”，每次都调整了间距，并显示了每种情况下的间距值。

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// 默认单词间距
ctx.fillText(`Hello world (默认：${ctx.wordSpacing})`, 10, 40);

// 自定义单词间距：10px
ctx.wordSpacing = "10px";
ctx.fillText(`Hello world (${ctx.wordSpacing})`, 10, 90);

// 自定义单词间距：30px
ctx.wordSpacing = "30px";
ctx.fillText(`Hello world (${ctx.wordSpacing})`, 10, 140);
```

### 结果

{{ EmbedLiveSample('示例', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
