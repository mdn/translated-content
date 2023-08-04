---
title: CanvasRenderingContext2D.getTransform()
slug: Web/API/CanvasRenderingContext2D/getTransform
---

{{APIRef}}

**`CanvasRenderingContext2D.getTransform()`** 方法获取当前被应用到上下文的转换矩阵

## 语法

```
let storedTransform = ctx.getTransform();
```

### 参数

无。

### 返回值

一个 {{domxref("DOMMatrix")}} 对象

转换矩阵被这样描述： <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

> **备注：** 返回的对象不是实时的，所以更新它不会影响当前的转换矩阵，同时更新当前的转换矩阵不会影响已经返回的 `DOMMatrix`.

## 示例

在以下例子，我们有两个 {{htmlelement("canvas")}} 元素。我们使用 {{domxref("CanvasRenderingContext2D.setTransform()")}} 设置一个转换到第一个画布，并在上面画一个矩形，然后通过 `getTransform()` 获取矩阵。

然后我们将获取到的矩阵作为 `DOMMatrix` 参数传给 `setTransform()` 设置到第二个画布，并在上面画一个圆。

#### HTML

```html
<canvas width="240"></canvas> <canvas width="240"></canvas>
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

{{ EmbedLiveSample('示例', "100%", 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
