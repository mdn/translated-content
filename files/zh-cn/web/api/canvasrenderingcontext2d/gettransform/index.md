---
title: CanvasRenderingContext2D：getTransform() 方法
slug: Web/API/CanvasRenderingContext2D/getTransform
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.getTransform()`** 方法用于获取当前被应用到上下文的变换矩阵。

## 语法

```js-nolint
getTransform()
```

### 参数

无。

### 返回值

一个 {{domxref("DOMMatrix")}} 对象。

变换矩阵的描述如下：

<!-- prettier-ignore-start -->
<math display="block"><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math>
<!-- prettier-ignore-end -->

> [!NOTE]
> 返回的对象不是实时的，所以更新它不会影响当前的变换矩阵，同时更新当前的变换矩阵不会影响已经返回的 `DOMMatrix`。

## 示例

在以下示例中，我们有两个 {{htmlelement("canvas")}} 元素。我们使用 {{domxref("CanvasRenderingContext2D.setTransform()")}} 设置为第一个画布应用变换，并在上面绘制了一个矩形，然后通过 `getTransform()` 获取矩阵。

然后我们通过将 `DOMMatrix` 对象直接传给 `setTransform()`，以直接将获取到的矩阵应用到第二个画布，并在上面绘制一个圆。

### HTML

```html
<canvas width="240"></canvas> <canvas width="240"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
}
```

### JavaScript

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

### 结果

{{ EmbedLiveSample('示例', "100%", 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
