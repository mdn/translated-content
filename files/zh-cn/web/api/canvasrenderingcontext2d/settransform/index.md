---
title: CanvasRenderingContext2D：setTransform() 方法
slug: Web/API/CanvasRenderingContext2D/setTransform
l10n:
  sourceCommit: 64da72bde2b9863a4d1194ce725ded62c5c90679
---

{{APIRef}}

**`CanvasRenderingContext2D.setTransform()`** 方法用于使用单位矩阵重新设置（覆盖）当前的变换并调用变换，此变换由方法的变量进行描述。这使你能够对上下文进行缩放、旋转、平移（移动）和倾斜操作。

> [!NOTE]
> 另请参阅 {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} 方法；它不会覆盖当前的变换矩阵，而是将其与给定的矩阵相乘。

## 语法

```js-nolint
setTransform(a, b, c, d, e, f)
setTransform(matrix)
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

这个变换矩阵在绘制在画布上的每个点所表示的列向量的左边进行乘法运算，从而得到在画布上使用的最终坐标。

### 参数

`setTransform()` 方法有两种可以接受的参数类型。较旧的类型由几个参数组成，代表要设置的变换矩阵的各个组成部分：

- `a`（`m11`）
  - : 矩阵的第一行第一列的单元格。
- `b` (`m12`)
  - : 矩阵的第二行第一列的单元格。
- `c` (`m21`)
  - : 矩阵的第一行第二列的单元格。
- `d` (`m22`)
  - : 矩阵的第二行第二列的单元格。
- `e` (`m41`)
  - : 矩阵的第一行第三列的单元格。
- `f` (`m42`)
  - : 矩阵的第二行第三列的单元格。

或者，你可以传递一个单一的参数，该参数是一个包含上述属性值的对象。属性名是属性键，如果两个同义名都存在（例如 `m11` 和 `a`），它们必须是相同的数值，否则会抛出 {{jsxref("TypeError")}}。使用对象形式允许省略一些参数——`a` 和 `d` 默认为 `1`，而其余默认为 `0`。

如果一个点原始坐标为 <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math>，那么经过变换后，它的坐标将变为 <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math>。这意味着：

- `e` 和 `f` 控制上下文的水平和垂直平移。
- 当 `b` 和 `c` 为 `0` 时，`a` 和 `d` 控制上下文的水平和垂直缩放。
- 当 `a` 和 `d` 为 `1` 时，`b` 和 `c` 控制上下文的水平和垂直倾斜。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 倾斜形状

此示例同时在垂直方向（`.2`）和水平方向（`.8`）对一个矩形进行了倾斜变换。缩放和平移保持不变。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### 结果

{{ EmbedLiveSample('倾斜形状', 700, 180) }}

### 检索和传递 DOMMatrix 对象

在下面的例子中，我们有两个 `<canvas>` 元素。我们对第一个 `<canvas>` 的上下文应用了变换，使用了 `setTransform()` 的第一种类型，并在其上绘制了一个正方形，然后使用 `CanvasRenderingContext2D.getTransform()` 方法从中检索矩阵。

接着，我们直接将检索到的矩阵应用到第二个 `<canvas>` 的上下文中，通过将 `DOMMatrix` 对象直接传递给 `setTransform()`（即第二种类型），并在其上绘制了一个圆形。

#### HTML

```html
<!-- 第一个画布（ctx1） -->
<canvas width="240"></canvas>
<!-- 第二个画布（ctx2） -->
<canvas width="240"></canvas>
```

#### CSS

```css
canvas {
  border: 1px solid black;
}
```

#### JavaScript

```js
const canvases = document.querySelectorAll("canvas");
const ctx1 = canvases[0].getContext("2d");
const ctx2 = canvases[1].getContext("2d");

ctx1.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
console.log(storedTransform);

ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();
```

#### 结果

{{ EmbedLiveSample('检索和传递 DOMMatrix 对象', "100%", 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
