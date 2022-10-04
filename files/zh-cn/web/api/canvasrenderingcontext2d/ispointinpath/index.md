---
title: CanvasRenderingContext2D.isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
---

{{APIRef}}

**`CanvasRenderingContext2D.isPointInPath()`** 是 Canvas 2D API 用于判断在当前路径中是否包含检测点的方法。

## 语法

```
boolean ctx.isPointInPath(x, y);
boolean ctx.isPointInPath(x, y, fillRule);

boolean ctx.isPointInPath(path, x, y);
boolean ctx.isPointInPath(path, x, y, fillRule);
```

### 参数

- x
  - : 检测点的 X 坐标
- y
  - : 检测点的 Y 坐标
- `fillRule`

  - : 用来决定点在路径内还是在路径外的算法。
    允许的值：

    - **`"nonzero`**": [非零环绕规则](http://en.wikipedia.org/wiki/Nonzero-rule)，默认的规则。
    - **`"evenodd"`**: [奇偶环绕原则](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : {{domxref("Path2D")}}应用的路径。

### 返回值

- {{jsxref("Boolean")}}
  - : 一个 Boolean 值，当检测点包含在当前或指定的路径内，返回 true；否则返回 false。

## 示例

### 使用 `isPointInPath` 方法

这是一段简单的代码片段，使用 `isPointInPath` 方法检查某点是否在当前的路径内。

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
console.log(ctx.isPointInPath(10, 10)); // true
```

修改下面的代码，在线查看 canvas 的变化并在你的 [控制台](/zh-CN/docs/Tools/Browser_Console) 中观察日志信息：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.stroke();
console.log(ctx.isPointInPath(10, 10)); // true</textarea>
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
