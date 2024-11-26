---
title: CanvasRenderingContext2D：transform() 方法
slug: Web/API/CanvasRenderingContext2D/transform
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.transform()`** 方法用于将由该方法的参数所描述的矩阵与当前的变换相乘。你可以缩放、旋转、平移和倾斜上下文。

> [!NOTE]
> 还可以查看 {{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}} 方法，该方法将当前变换重置为单位矩阵，然后调用 `transform()` 方法。

## 语法

```js-nolint
transform(a, b, c, d, e, f)
```

变换矩阵的描述：<math><semantics><mrow><mo>[</mo>
<mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi>
</mtd><mtd><mi>c</mi>
</mtd><mtd><mi>e</mi>
</mtd></mtr><mtr><mtd><mi>b</mi>
</mtd><mtd><mi>d</mi>
</mtd><mtd><mi>f</mi>
</mtd></mtr><mtr><mtd><mn>0</mn>
</mtd><mtd><mn>0</mn>
</mtd><mtd><mn>1</mn>
</mtd></mtr></mtable><mo>]</mo>
</mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d
&#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>。

### 参数

- `a`（`m11`）
  - : 矩阵中第一行第一列的单元格。
- `b`（`m12`）
  - : 矩阵中第二行第一列的单元格。
- `c`（`m21`）
  - : 矩阵中第一行第二列的单元格。
- `d`（`m22`）
  - : 矩阵中第二行第二列的单元格。
- `e`（`m41`）
  - : 矩阵中第一行第三列的单元格。
- `f`（`m42`）
  - : 矩阵中第二行第三列的单元格。

如果一个点原始坐标为 <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math>，经过变换后，其坐标将变为 <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math>。这意味着：

- `e` 和 `f` 控制上下文的水平和垂直平移。
- 当 `b` 和 `c` 为 `0` 时，`a` 和 `d` 控制上下文的水平和垂直缩放。
- 当 `a` 和 `d` 为 `1` 时，`b` 和 `c` 控制上下文的水平和垂直倾斜。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 倾斜形状

这个示例将一个矩形进行了垂直（`.2`）和水平（`.8`）方向的倾斜，同时保持缩放和平移不变。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.transform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### 结果

{{ EmbedLiveSample('倾斜形状', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
