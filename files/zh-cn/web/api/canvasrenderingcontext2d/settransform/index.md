---
title: CanvasRenderingContext2D.setTransform()
slug: Web/API/CanvasRenderingContext2D/setTransform
---

{{APIRef}}

**`CanvasRenderingContext2D.setTransform()`** 是 Canvas 2D API 使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。

参见 {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} 方法，这个方法不会覆盖当前的变换矩阵，会多次叠加变换。

## 语法

```
void ctx.setTransform(a, b, c, d, e, f);
```

变换矩阵的描述： <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

### 参数

- `a (m11)`
  - : 水平缩放。
- _`b (m12)`_
  - : 垂直倾斜。
- `c (m21)`
  - : 水平倾斜。
- `d (m22)`
  - : 垂直缩放。
- `e (dx)`
  - : 水平移动。
- `f (dy)`
  - : 垂直移动。

较新的类型由单个参数矩阵组成，该参数表示要设置的 2D 转换矩阵（从技术上讲，是 DOMMatrixInit 对象；任何对象只要包含上述作为属性的组件，就可以执行操作）。

## 示例

### 使用 `setTransform` 方法

这是一段使用 `setTransform` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setTransform(1,1,0,1,0,0);
ctx.fillRect(0,0,100,100);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.setTransform(1,1,0,1,0,0);
ctx.fillRect(0,0,100,100);</textarea>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 360) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
