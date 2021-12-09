---
title: MouseEvent.screenY
slug: Web/API/MouseEvent/screenY
tags:
  - API
  - 参考
  - 属性
  - 鼠标
  - 鼠标事件
translation_of: Web/API/MouseEvent/screenY
---
{{APIRef("DOM Events")}}

**`screenX`** 是 {{domxref("MouseEvent")}} 的只读属性，提供鼠标在全局（屏幕）中的水平坐标（偏移量）。

## 返回值

一个双精度浮点数。早期版本的规范定义将其一个整数值的像素数。有关详细信息，请参见浏览器兼容性部分。

## 示例

这个例子展示了当触发 {{Event("mousemove")}} 事件时鼠标的坐标。

### HTML

```html
<p>Move your mouse to see its position.</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### 结果

{{EmbedLiveSample("Example")}}

## 规范

{{Specifications}}

### 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent")}}
- {{domxref("MouseEvent.screenX","screenX")}}
- {{domxref("MouseEvent.clientX","clientX")}} / {{domxref("MouseEvent.clientY", "clientY")}}
