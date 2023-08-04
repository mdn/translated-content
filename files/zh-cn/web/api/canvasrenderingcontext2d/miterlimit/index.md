---
title: CanvasRenderingContext2D.miterLimit
slug: Web/API/CanvasRenderingContext2D/miterLimit
---

{{APIRef}}

The **`CanvasRenderingContext2D.miterLimit`** 是 Canvas 2D API 设置斜接面限制比例的属性。当获取属性值时，会返回当前的值（默认值是`10.0` ）。当给属性赋值时，0、负数、 {{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 都会被忽略；除此之外都会被赋予一个新值。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.miterLimit = value;
```

### 选项

- `value`
  - : 斜接面限制比例的的数字。0、负数、{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 都会被忽略。

## 简释

```
ctx.lineJoin = "miter"  // "miter" >   "round" )   "bevel" ]
```

只有当 lineJoin 显示为 ">" 时，miterLimit 才有效。边角的角度越小，斜接长度就会越大。为了避免斜接长度过长，我们可以使用 miterLimit 属性。如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 " ] " 类型来显示

## 示例

### 使用 `miterLimit` 属性

查看 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#A_demo_of_the_miterLimit_property) 章节，获取更多信息。

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineWidth = 15;
ctx.lineTo(100, 100);
ctx.stroke();</textarea
>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{EmbedLiveSample("使用 miterLimit 属性", "400", "180", "canvas_miterlimit.png", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
