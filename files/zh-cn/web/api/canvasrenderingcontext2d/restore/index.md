---
title: CanvasRenderingContext2D.restore()
slug: Web/API/CanvasRenderingContext2D/restore
---

{{APIRef}}

**`CanvasRenderingContext2D.restore()`** 是 Canvas 2D API 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。如果没有保存状态，此方法不做任何改变。

## 语法

```
void ctx.restore();
```

更多关于 [drawing state](/zh-CN/docs/Web/API/CanvasRenderingContext2D.save#Drawing_state) 的信息，请看 {{domxref("CanvasRenderingContext2D.save()")}}。

## 示例

### 使用 `restore` 方法

这是一段简单的代码片段，使用 `save()` 方法保存默认的状态，使用 `restore()` 进行恢复。所以，稍后你可以使用默认的状态绘制一个矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.save(); // save the default state

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

ctx.restore(); // restore to the default state
ctx.fillRect(150, 75, 100, 100);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.save();
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
ctx.restore();
ctx.fillRect(150, 75, 100, 100);</textarea>
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
- {{domxref("CanvasRenderingContext2D.save()")}}
