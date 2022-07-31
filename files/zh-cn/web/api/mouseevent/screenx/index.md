---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
tags:
  - API
  - MouseEvent
  - Property
  - events
  - 事件
  - 参考
  - 属性
  - 鼠标
  - 鼠标事件
translation_of: Web/API/MouseEvent/screenX
---
{{APIRef("DOM Events")}}

**`screenX`** 是 {{domxref("MouseEvent")}} 的只读属性，提供鼠标在全局（屏幕）中的水平坐标（偏移量）。

> **备注：** 在多屏显示的环境下，水平对齐的屏幕将被视为单个设备，因此 `screenX` 值的范围将增加到屏幕的组合宽度。

## 语法

```js
var x = instanceOfMouseEvent.screenX
```

### 返回值

一个双精度浮点数。早期版本的规范将该值定义为整数值的像素数。有关详细信息，请参见浏览器兼容性部分。

## 示例

这个例子展示了当触发 {{Event("mousemove")}} 事件时鼠标的坐标。

#### HTML

```html
<p>Move your mouse to see its position.</p>
<p id="screen-log"></p>
```

#### JavaScript

```js
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

#### 结果

{{EmbedLiveSample("Example")}}

### 路由事件

当你在窗口、文档或其他较大的元素上捕获事件时，可以获取事件的坐标（例如：click）然后作出正确的处理，如下所示：

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
