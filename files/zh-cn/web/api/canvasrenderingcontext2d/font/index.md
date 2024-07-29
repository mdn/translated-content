---
title: CanvasRenderingContext2D：font 属性
slug: Web/API/CanvasRenderingContext2D/font
l10n:
  sourceCommit: 1306c224f386c6a8038a3bd115ce5637d5bd6084
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.font`** 属性指定绘制文字所使用的当前字体样式。使用和 [CSS 字体](/zh-CN/docs/Web/CSS/font)描述符相同的字符串值。

## 值

一个被解析为 CSS {{cssxref("font")}} 值的字符串。默认字体为 10 像素的无衬线体（sans-serif）。

## 示例

### 使用自定义字体

这个示例使用 `font` 属性设置了自定义的字体粗细、大小和字体家族。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
```

#### 结果

{{ EmbedLiveSample('使用自定义字体', 700, 180) }}

### 使用 CSS 字体加载 API 加载字体

借助 {{domxref("FontFace")}} API 的帮助，你可以在画布中使用字体之前显式加载字体。

```js
let f = new FontFace("test", "url(x)");

f.load().then(() => {
  // 准备在画布上下文中使用字体
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
