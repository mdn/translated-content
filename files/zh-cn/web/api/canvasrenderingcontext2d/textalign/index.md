---
title: CanvasRenderingContext2D：textAlign 属性
slug: Web/API/CanvasRenderingContext2D/textAlign
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.textAlign`** 属性用于描述绘制文本时文本的对齐方式。

对齐是相对于 {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} 方法的 `x` 值的。例如，如果 `textAlign` 是 `"center"`，那么该文本的左侧边界会是 `x - (textWidth / 2)`。

## 值

可能的值：

- `"left"`
  - : 文本左对齐。
- `"right"`
  - : 文本右对齐。
- `"center"`
  - : 文本居中对齐。
- `"start"`
  - : 文本对齐界线开始的地方（左对齐指本地从左向右，右对齐指本地从右向左）。
- `"end"`
  - : 文本对齐界线结束的地方（左对齐指本地从左向右，右对齐指本地从右向左）。

默认值是 `"start"`。

## 示例

### 一般文本对齐

这个例子演示了 `textAlign` 属性的三种“物理”值：`"left"`、`"center"` 和 `"right"`。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
canvas.width = 350;
const ctx = canvas.getContext("2d");
const x = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();

ctx.font = "30px serif";

ctx.textAlign = "left";
ctx.fillText("left-aligned", x, 40);

ctx.textAlign = "center";
ctx.fillText("center-aligned", x, 85);

ctx.textAlign = "right";
ctx.fillText("right-aligned", x, 130);
```

#### 结果

{{ EmbedLiveSample('一般文本对齐', 700, 180) }}

### 依赖方向的文本对齐

这个例子演示了 `textAlign` 属性的两个依赖方向的值：`"start"` 和 `"end"`。注意，虽然英语文本的默认方向是 `"ltr"`，但我们在这里手动指定了 {{domxref("CanvasRenderingContext2D.direction", "direction")}} 属性为 `"ltr"`。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";
ctx.direction = "ltr";

ctx.textAlign = "start";
ctx.fillText("Start-aligned", 0, 50);

ctx.textAlign = "end";
ctx.fillText("End-aligned", canvas.width, 120);
```

#### 结果

{{ EmbedLiveSample('依赖方向的文本对齐', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
