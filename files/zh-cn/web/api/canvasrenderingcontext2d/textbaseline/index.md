---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
---

{{APIRef}}

**`CanvasRenderingContext2D.textBaseline`** 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。

> 译者注：决定文字垂直方向的对齐方式。

## 语法

```
ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
```

### 选项

有效值：

- top
  - : 文本基线在文本块的顶部。
- hanging
  - : 文本基线是悬挂基线。
- middle
  - : 文本基线在文本块的中间。
- alphabetic
  - : 文本基线是标准的字母基线。
- ideographic
  - : 文字基线是表意字基线；如果字符本身超出了 alphabetic 基线，那么 ideograhpic 基线位置在字符本身的底部。
- bottom
  - : 文本基线在文本块的底部。与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。

默认值是 `alphabetic`。

## 示例

### 属性值比较

这是一段简单的代码片段，使用 `textBaseline` 属性设置不同的文本基线。

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselines = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom",
];
ctx.font = "36px serif";
ctx.strokeStyle = "red";

baselines.forEach((baseline, index) => {
  ctx.textBaseline = baseline;
  const y = 75 + index * 75;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(550, y + 0.5);
  ctx.stroke();
  ctx.fillText(`Abcdefghijklmnop (${baseline})`, 0, y);
});
```

#### 结果

{{ EmbedLiveSample('属性值比较', 700, 550) }}

### 基于同一水平线比较各个属性值

与前面的示例一样，本示例演示了各种 `textBaseline` 属性值，但在本例中，所有属性值都沿同一条线水平排列，以便更容易看到它们之间的差异。

#### HTML

```html
<canvas id="canvas" width="724" height="160"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselines = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom",
];
ctx.font = "20px serif";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(840, 100);
ctx.moveTo(0, 55);
ctx.stroke();

baselines.forEach((baseline, index) => {
  ctx.save();
  ctx.textBaseline = baseline;
  let x = index * 120 + 10;
  ctx.fillText("Abcdefghijk", x, 100);
  ctx.restore();
  ctx.fillText(baseline, x + 5, 50);
});
```

#### 结果

{{ EmbedLiveSample('基于同一水平线比较属性值的差异', 900, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}.
