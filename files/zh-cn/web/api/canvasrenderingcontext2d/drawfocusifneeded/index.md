---
title: CanvasRenderingContext2D.drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
---

{{APIRef}}

**`CanvasRenderingContext2D.drawFocusIfNeeded()`** 是 Canvas 2D API 用来给当前路径或特定路径绘制焦点的方法，如果给定的元素获取了焦点。

## 语法

```
void ctx.drawFocusIfNeeded(element);
void ctx.drawFocusIfNeeded(path, element);
```

### 参数

- element
  - : 是否需要设置焦点的元素。
- `path`
  - : {{domxref("Path2D")}} 路径。

## 示例

### 使用 `drawFocusIfNeeded` 方法

这是一段使用 `drawFocusIfNeeded` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas">
  <input id="button" type="range" min="1" max="12">
</canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var button = document.getElementById("button");

button.focus();

ctx.beginPath();
ctx.rect(10, 10, 30, 30);
ctx.drawFocusIfNeeded(button);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas">
<input id="button" type="range" min="1" max="12">
</canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.rect(10, 10, 30, 30);
ctx.drawFocusIfNeeded(button);</textarea>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var button = document.getElementById("button");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;
button.focus();

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

{{EmbedLiveSample('Playable_code', 700, 360)}}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性注解

- \[1] 在 Gecko 28 {{geckoRelease(28)}}中，此方法通过 "`drawSystemFocusRing`" 实现，但是在 Gecko 29 {{geckoRelease(29)}}中已经改名。
- \[1] 在 Gecko 32 {{geckoRelease(32)}} 之前，此方法默认是无效的，受控于 flag "`canvas.focusring.enabled`"标识。

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
