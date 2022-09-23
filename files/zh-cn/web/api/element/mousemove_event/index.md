---
title: mousemove
slug: Web/API/Element/mousemove_event
---

{{APIRef}}

当指针设备 ( 通常指鼠标 ) 在元素上移动时，mousemove 事件被触发。

## 基本信息

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

下面的例子将使用 {{domxref("Element/mousedown_event", "mousedown")}}, `mousemove` 以及 {{domxref("Element/mouseup_event", "mouseup")}} 事件，实现一个允许用户在 HTML5 [canvas](/zh-CN/docs/Web/API/Canvas_API)绘图的功能。这个例子的功能很简单：线的粗细设置为 1，颜色始终为黑色。

当页面加载完成，我们使用变量 `myPics` 和`context`分别保存 ID 为`myPics`的 DOM 元素和接下来需要加工的的 2d 元素。

当`mousedown`事件被触发时，绘图也开始了。首先，我们将鼠标的`x`坐标和`y`坐标分别赋值给变量`x`和`y`，然后设置`isDrawing`为`true`。

当鼠标在页面上移动时，`mousemove`事件被触发。当`isDrawing`为 true 时，事件处理程序将会调用`drawLine`函数，该函数从变量`x`和`y`所指的位置开始，到现在鼠标所在的位置，画一条线。

当`drawLine()`调用结束时，我们需要把坐标赋值到`x`和`y`中。

`mouseup`事件绘制图形的最后一段，并把`x`和`y`设置为 0.通过设置 isDra

`mouseup`事件绘制图形的最后一段，并把`x`和`y`设置为 0.通过设置`isDrawing`为 false，可以停止绘制。

### HTML

```html
<h1>Drawing with mouse events</h1>
<canvas id="myPics" width="560" height="360"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}
```

### JavaScript

```js
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// The x and y offset of the canvas from the edge of the page
const rect = myPics.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
```

### 结果

{{EmbedLiveSample("示例", 640, 450)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Introduction to events](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{Event("mousedown")}}
- {{Event("mouseup")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseout")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
