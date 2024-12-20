---
title: CanvasRenderingContext2D：strokeText() 方法
slug: Web/API/CanvasRenderingContext2D/strokeText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 {{domxref("CanvasRenderingContext2D")}} 的 **`strokeText()`** 方法用于在指定的坐标处对文本字符串的字符进行描边（即绘制轮廓）。一个可选的参数允许指定渲染文本的最大宽度，{{Glossary("user agent", "用户代理")}}可以通过压缩文本或使用较小的字体大小来实现这一目标。

这个方法直接绘制到画布上，而不修改当前路径，因此任何后续的 {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} 或 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} 调用对它没有影响。

> [!NOTE]
> 使用 {{domxref('CanvasRenderingContext2D.fillText()', 'fillText()')}} 方法来填充文本字符，而不是仅绘制它们的轮廓。

## 语法

```js-nolint
strokeText(text, x, y)
strokeText(text, x, y, maxWidth)
```

### 参数

- `text`
  - : 一个字符串，指定要在上下文中渲染的文本字符串。文本根据 {{domxref("CanvasRenderingContext2D.font","font")}}、{{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}} 和 {{domxref("CanvasRenderingContext2D.direction","direction")}} 指定的设置进行渲染。
- `x`
  - : 绘制文本的起始点的 x 轴坐标。
- `y`
  - : 绘制文本的起始点的 y 轴坐标。
- `maxWidth` {{optional_inline}}
  - : 渲染后文本的最大宽度。如果未指定，则文本的宽度没有限制。然而，如果提供了此值，用户代理将调整字距，选择水平方向更加紧凑的字体（如果有可用的或在不损失质量的情况下生成的字体），或者缩小到更小的字体大小，以使文本适应指定的宽度。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 绘制文本轮廓

此示例使用 `strokeText()` 方法写出了单词“Hello world”的文本轮廓。

#### HTML

首先，我们需要一个用于绘制的画布。以下代码创建了一个宽度为 400 像素、高度为 150 像素的画布。

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

以下是该示例的 JavaScript 代码。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.strokeText("Hello world", 50, 90);
```

这段代码获取了对 {{HTMLElement("canvas")}} 的引用，然后获取了其 2D 图形上下文的引用。

然后，我们设置了 {{domxref("CanvasRenderingContext2D.font", "font")}} 为 50 像素高的“serif”（用户默认的 [serif](https://en.wikipedia.org/wiki/Serif) 字体），然后调用 `strokeText()` 方法在坐标 (50, 90) 处绘制文本“Hello world”的轮廓。

#### 结果

{{ EmbedLiveSample('绘制文本轮廓', 700, 180) }}

### 限制文本大小

此示例写下了单词“Hello world”，并将其宽度限制在 140 像素内。

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.strokeText("Hello world", 50, 90, 140);
```

#### 结果

{{ EmbedLiveSample('限制文本大小', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [绘制文本](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillText()")}}
