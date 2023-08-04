---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
---

{{APIRef("UI Events")}}

**`screenX`** 是 {{domxref("MouseEvent")}} 的只读属性，提供鼠标在全局（屏幕）中的水平坐标（偏移量）。

> **备注：** 在多屏显示的环境下，水平对齐的屏幕将被视为单个设备，因此 `screenX` 值的范围将增加到屏幕的组合宽度。

## 值

一个双精度浮点数（`double`）。

早期版本的规范将该值定义为整数值的像素数。

## 示例

这个示例展示了当触发 {{domxref("Element/mousemove_event", "mousemove")}} 事件时鼠标的坐标。

### HTML

```html
<p>移动鼠标以查看其坐标。</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);
function logKey(e) {
  screenLog.innerText = `
    屏幕坐标 X/Y: ${e.screenX}, ${e.screenY}
    客户端坐标 X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### 结果

{{EmbedLiveSample("示例")}}

### 路由事件

当你在窗口、文档或其他较大的元素上捕获事件时，可以获取事件的坐标（例如点击事件）然后作出正确的处理，如下所示：

```js
function checkClickMap(e) {
  if (e.screenX < 50) doRedButton();
  if (50 <= e.screenX && e.screenX < 100) doYellowButton();
  if (e.screenX >= 100) doRedButton();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenY","screenY") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
