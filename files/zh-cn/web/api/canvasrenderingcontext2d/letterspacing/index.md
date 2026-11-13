---
title: CanvasRenderingContext2D：letterSpacing 属性
slug: Web/API/CanvasRenderingContext2D/letterSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

Canvas API 的 **`CanvasRenderingContext2D.letterSpacing`** 属性用于指定绘制文本时字母之间的间距。

这对应于 CSS 中的 [`letter-spacing`](/zh-CN/docs/Web/CSS/Reference/Properties/letter-spacing) 属性。

## 值

`letterSpacing` 属性的值以 CSS 的 {{cssxref("length")}} 数据格式的字符串表示。默认值为 `0px`。

可以使用该属性来获取或设置间距。如果设置为无效或无法解析的值，属性值将保持不变。

## 示例

在这个示例中，我们三次显示文本“Hello World”，每次使用 `letterSpacing` 属性来修改字母间距。同时，还显示了每种情况下的间距值。

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// 默认字母间距
ctx.fillText(`Hello world (默认：${ctx.letterSpacing})`, 10, 40);

// 自定义字母间距：10px
ctx.letterSpacing = "10px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 90);

// 自定义字母间距：20px
ctx.letterSpacing = "20px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 140);
```

### 结果

{{ EmbedLiveSample('示例', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
