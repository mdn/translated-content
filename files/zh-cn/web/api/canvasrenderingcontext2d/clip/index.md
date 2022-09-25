---
title: CanvasRenderingContext2D.clip()
slug: Web/API/CanvasRenderingContext2D/clip
---

{{APIRef}}

**`CanvasRenderingContext2D.clip()`** 是 Canvas 2D API 将当前创建的路径设置为当前剪切路径的方法。

## 语法

```
void ctx.clip();
void ctx.clip(fillRule);
void ctx.clip(path, fillRule);
```

### 参数

![](canvas_clipping_path.png)

- `fillRule`

  - : 这个算法判断一个点是在路径内还是在路径外。
    允许的值：

    - **`"nonzero`**": [非零环绕原则](http://en.wikipedia.org/wiki/Nonzero-rule)，默认的原则。
    - **`"evenodd"`**: [奇偶环绕原则](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 需要剪切的 {{domxref("Path2D")}} 路径。

## 示例

### 使用 `clip` 方法

这是一段简单的代码片段，使用 `clip` 方法创建剪切区域。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create clipping region
ctx.arc(100, 100, 75, 0, Math.PI*2, false);
ctx.clip();

ctx.fillRect(0, 0, 100,100);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.arc(100, 100, 75, 0, Math.PI*2, false);
ctx.clip();
ctx.fillRect(0, 0, 100,100);</textarea>
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
