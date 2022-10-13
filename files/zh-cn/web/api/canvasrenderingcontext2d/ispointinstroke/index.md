---
title: CanvasRenderingContext2D.isPointInStroke()
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
---

{{APIRef}}

**`CanvasRenderingContext2D.isPointInStroke()`** 是 Canvas 2D API 用于检测某点是否在路径的描边线上的方法。

## 语法

```
boolean ctx.isPointInStroke(x, y);
boolean ctx.isPointInStroke(path, x, y);
```

### 参数

- x
  - : 检测点的 X 坐标。
- y
  - : 检测点的 Y 坐标。
- `path`
  - : {{domxref("Path2D")}} 路径。

### 返回值

- {{jsxref("Boolean")}}
  - : 一个布尔值，当这个点在路径的描边线上，则返回 true，否则返回 false。

## 示例

### 使用 `isPointInStroke` 方法

这只是一个使用 **`isPointInStroke`** 方法的简单的代码片段，用于检测一个点是否在路径的描边线上。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
console.log(ctx.isPointInStroke(10, 10)); // true
```

修改线面的代码，在线查看 canvas 的变化，并在你的[控制台](/zh-CN/docs/Tools/Browser_Console)查看日至信息：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.stroke();
console.log(ctx.isPointInStroke(10, 10)); // true</textarea>
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
