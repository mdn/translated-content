---
title: Path2D.addPath()
slug: Web/API/Path2D/addPath
---

{{APIRef("Canvas API")}}

**`Path2D.addPath()`** 是 Canvas 2D API 根据指定路径变量添加路径的方法。

## 语法

```
void path.addPath(path [, transform]);
```

### 参数

- `path`
  - : 需要添加的 {{domxref("Path2D")}} 路径。
- `transform` {{optional_inline}}
  - : {{domxref("SVGMatrix")}} 作为新增路径的变换矩阵。

## 示例

### 使用 `addPath` 方法

这是一段使用 `addPath` 方法的简单的代码片段。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create a new path with a rect
var p1 = new Path2D();
p1.rect(0,0,100,100);

// Create another path with a rect
var p2 = new Path2D();
p2.rect(0,0,100,100);

// Create transformation matrix that moves vertically 300 points to the right
var m = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
m.a = 1; m.b = 0;
m.c = 0; m.d = 1;
m.e = 300; m.f = 0;

// add the second path to the first path
p1.addPath(p2, m);

// Finally, fill the first path onto the canvas
ctx.fill(p1);
```

修改下面的代码并在线查看 canvas 的变化 (查看浏览器兼容性列表，确定你目前的浏览器是否支持这个方法)：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:220px;">
var p1 = new Path2D();
p1.rect(0,0,100,100);

var p2 = new Path2D();
p2.rect(0,0,100,100);

var m = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
m.a = 1; m.b = 0;
m.c = 0; m.d = 1;
m.e = 300; m.f = 0;

p1.addPath(p2, m);
ctx.fill(p1);</textarea>
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

{{ EmbedLiveSample('Playable_code', 700, 500) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("Path2D")}}.
