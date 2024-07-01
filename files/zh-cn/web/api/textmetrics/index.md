---
title: TextMetrics
slug: Web/API/TextMetrics
---

{{APIRef("Canvas API")}}

在 canvas 中，**`TextMetrics`** 接口表示文本的尺寸，通过 {{domxref("CanvasRenderingContext2D.measureText()")}} 方法创建。

## 属性

- {{domxref("TextMetrics.width")}} {{readonlyInline}}
  - : **double** 类型，使用 CSS 像素计算的内联字符串的宽度。基于当前上下文字体考虑。
- {{domxref("TextMetrics.actualBoundingBoxLeft")}} {{readonlyInline}}
  - : **double** 类型，平行于基线，从{{domxref("CanvasRenderingContext2D.textAlign")}} 属性确定的对齐点到文本矩形边界左侧的距离，使用 CSS 像素计算；正值表示文本矩形边界左侧在该对齐点的左侧。
- {{domxref("TextMetrics.actualBoundingBoxRight")}} {{readonlyInline}}
  - : **double** 类型，平行于基线，从{{domxref("CanvasRenderingContext2D.textAlign")}} 属性确定的对齐点到文本矩形边界右侧的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.fontBoundingBoxAscent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.fontBoundingBoxDescent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.actualBoundingBoxAscent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的矩形边界顶部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.actualBoundingBoxDescent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的矩形边界底部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.emHeightAscent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框中 _em_ 方块顶部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.emHeightDescent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框中 _em_ 方块底部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.hangingBaseline")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框的 hanging 基线的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.alphabeticBaseline")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框的 alphabetic 基线的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.ideographicBaseline")}} {{readonlyInline}}
  - : **double** 类型，从 {{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框的 ideographic 基线的距离，使用 CSS 像素计算。

## 示例

### 基线说明

下面这个例子展示了 `TextMetrics` 对象所包含的基线。默认的基线是 `alphabeticBaseline`（字母基线）。参见 {{domxref("CanvasRenderingContext2D.textBaseline")}} 属性。

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const baselinesAboveAlphabetic = [
  "fontBoundingBoxAscent",
  "actualBoundingBoxAscent",
  "emHeightAscent",
  "hangingBaseline",
];
const baselinesBelowAlphabetic = [
  "ideographicBaseline",
  "emHeightDescent",
  "actualBoundingBoxDescent",
  "fontBoundingBoxDescent",
];
const baselines = [...baselinesAboveAlphabetic, ...baselinesBelowAlphabetic];
ctx.font = "25px serif";
ctx.strokeStyle = "red";
baselines.forEach((baseline, index) => {
  const text = `Abcdefghijklmnop (${baseline})`;
  const textMetrics = ctx.measureText(text);
  const y = 50 + index * 50;
  ctx.beginPath();
  ctx.fillText(text, 0, y);
  let lineY = y - Math.abs(textMetrics[baseline]);
  if (baselinesBelowAlphabetic.includes(baseline)) {
    lineY = y + Math.abs(textMetrics[baseline]);
  }
  ctx.moveTo(0, lineY);
  ctx.lineTo(550, lineY);
  ctx.stroke();
});
```

#### 结果

{{EmbedLiveSample('基线说明', 700, 550)}}

### 测量文本宽度

当测量一段文本的水平宽度时，由于字母倾斜/斜体导致字符的宽度可能超出其预定的宽度，因此 `actualBoundingBoxLeft` 和 `actualBoundingBoxRight` 的总和可能会比内联盒子的宽度（`width`）更大。

因此，计算 `actualBoundingBoxLeft` 和 `actualBoundingBoxRight` 的总和是一种更准确地获取文本绝对宽度的方法：

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const text = "Abcdefghijklmnop";
ctx.font = "italic 50px serif";
const textMetrics = ctx.measureText(text);
console.log(textMetrics.width);
// 459.8833312988281
console.log(
  textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft,
);
// 462.8833333333333
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 创建方法在 {{domxref("CanvasRenderingContext2D")}} 中。
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}
