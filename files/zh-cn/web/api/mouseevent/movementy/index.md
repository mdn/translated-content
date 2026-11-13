---
title: MouseEvent：movementY 属性
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Pointer Lock API")}}

{{domxref("MouseEvent")}} 接口的 **`movementY`** 只读属性提供了当前事件和上一个 {{domxref("Element/mousemove_event", "mousemove")}} 事件之间鼠标指针在 Y 坐标轴上的移动值。换句话说，这个值是这样计算的：`currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`。

> [!WARNING]
> 浏览器对 [`movementY` 和 {{domxref("MouseEvent.screenY", "screenY")}}](https://github.com/w3c/pointerlock/issues/42) 使用与规范定义不同的单位。根据浏览器和操作系统的不同，`movementY` 单位可能是物理像素、逻辑像素或 CSS 像素。你可能希望避免使用 movement 属性，而是计算当前客户端值（{{domxref("MouseEvent.screenX", "screenX")}}、{{domxref("MouseEvent.screenY", "screenY")}}）与之前的客户端值之间的差值。

## 值

一个数字。除 `mousemove` 事件之外，在其他任何 {{domxref("MouseEvent")}} 事件上始终为零。

## 示例

此示例使用 {{domxref("MouseEvent.movementX", "movementX")}} 和 `movementY` 记录鼠标移动量。

### HTML

```html
<p id="log">移动鼠标。</p>
```

### JavaScript

```js
function logMovement(event) {
  log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

const log = document.getElementById("log");
document.addEventListener("mousemove", logMovement);
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [Pointer Lock](/zh-CN/docs/Web/API/Pointer_Lock_API)
