---
title: CanvasRenderingContext2D.fill()
slug: Web/API/CanvasRenderingContext2D/fill
---

{{APIRef}}

**`CanvasRenderingContext2D.fill()`** 是 Canvas 2D API 根据当前的填充样式，填充当前或已存在的路径的方法。采取非零环绕或者奇偶环绕规则。

## 语法

```
void ctx.fill();
void ctx.fill(fillRule);
void ctx.fill(path, fillRule);
```

### 参数

- `fillRule`

  - : 一种算法，决定点是在路径内还是在路径外。
    允许的值：

    - **`"nonzero`**": [非零环绕规则](http://en.wikipedia.org/wiki/Nonzero-rule)，默认的规则。
    - **`"evenodd"`**: [奇偶环绕规则](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 需要填充的{{domxref("Path2D")}} 路径。

## 示例

### 使用 `fill` 方法

这是一段简单的代码片段，使用 `fill` 方法填充路径。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();
```

修改下面的代码并在线查看 canvas 变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.fill();</textarea>
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

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
