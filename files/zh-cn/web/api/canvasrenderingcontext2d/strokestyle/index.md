---
title: CanvasRenderingContext2D.strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
---

{{APIRef}}

**`CanvasRenderingContext2D.strokeStyle`** 是 Canvas 2D API 描述画笔（绘制图形）颜色或者样式的属性。默认值是 `#000` (black)。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.strokeStyle = color;
ctx.strokeStyle = gradient;
ctx.strokeStyle = pattern;
```

### 选项

- `color`
  - : {{domxref("DOMString")}} 字符串，可以转换成 CSS {{cssxref("&lt;color&gt;")}} 值。
- `gradient`
  - : {{domxref("CanvasGradient")}} 对象（线性渐变或放射性渐变）。
- `pattern`
  - : {{domxref("CanvasPattern")}} 对象（可重复的图片）。

## 示例

### 使用 `strokeStyle` 属性设置不同的颜色

这是一段简单的代码片段，使用 `strokeStyle` 属性设置不同的颜色。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);</textarea>
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

### `strokeStyle` 例子

这个例子使用 `strokeStyle 属性改变图形轮廓线的颜色。`我们使用 {{domxref("CanvasRenderingContext2D.arc", "arc()")}} 绘制圆形来代替正方形。

```js
var ctx = document.getElementById('canvas').getContext('2d');
for (var i=0;i<6;i++){
  for (var j=0;j<6;j++){
    ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' +
                      Math.floor(255-42.5*j) + ')';
    ctx.beginPath();
    ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

结果如下显示：

{{EmbedLiveSample("A_strokeStyle_example", "180", "180", "https://mdn.mozillademos.org/files/253/Canvas_strokestyle.png")}}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

- 在基于 WebKit- 和 Blink- 的浏览器中，除了此属性外，还实现了一个不标准的并且不赞成使用的方法 `ctx.setStrokeColor()` 。

  ```js
  setStrokeColor(color, optional alpha);
  setStrokeColor(grayLevel, optional alpha);
  setStrokeColor(r, g, b, a);
  setStrokeColor(c, m, y, k, a);
  ```

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
