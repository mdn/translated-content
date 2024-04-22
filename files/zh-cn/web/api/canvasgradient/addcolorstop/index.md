---
title: CanvasGradient.addColorStop()
slug: Web/API/CanvasGradient/addColorStop
---

{{APIRef("Canvas")}}

**`CanvasGradient.addColorStop()`** 方法添加一个由**偏移值**和**颜色值**指定的断点到渐变。如果偏移值不在`0`到`1`之间，将抛出`INDEX_SIZE_ERR`错误，如果颜色值不能被解析为有效的 CSS 颜色值 {{cssxref("&lt;color&gt;")}}，将抛出`SYNTAX_ERR`错误。

## 语法

```js
void gradient.addColorStop(offset, color);
```

### 参数

- offset
  - : `0`到`1`之间的值，超出范围将抛出`INDEX_SIZE_ERR`错误
- color
  - : CSS 颜色值 {{cssxref("&lt;color&gt;")}}。如果颜色值不能被解析为有效的 CSS 颜色值 `<color>`，将抛出`SYNTAX_ERR`错误。

## 示例

### 使用 `addColorStop` 方法

一个使用{{domxref("CanvasGradient")}}对象的`addColorStop` 方法的简单例子

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

编辑以下代码可看到画布变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
var gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0,"green");
gradient.addColorStop(1,"white");
ctx.fillStyle = gradient;
ctx.fillRect(10,10,200,100);</textarea
>
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

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('使用 addColorStop 方法', 700, 360) }}

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义 {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
