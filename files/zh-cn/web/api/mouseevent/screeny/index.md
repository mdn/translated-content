---
title: MouseEvent.screenY
slug: Web/API/MouseEvent/screenY
---

{{APIRef("UI Events")}}

**`screenY`** 是 {{domxref("MouseEvent")}} 的只读属性，提供鼠标在全局（屏幕）中的垂直坐标（偏移量）。

## 值

一个双精度浮点数（`double`）。

早期版本的规范定义将其一个整数值的像素数。

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

## 规范

{{Specifications}}

### 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent")}}
- {{domxref("MouseEvent.screenX","screenX")}}
- {{domxref("MouseEvent.clientX","clientX")}} / {{domxref("MouseEvent.clientY", "clientY")}}
