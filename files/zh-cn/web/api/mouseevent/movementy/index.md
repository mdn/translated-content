---
title: MouseEvent.movementY
slug: Web/API/MouseEvent/movementY
---

{{APIRef("DOM Events")}}

{{domxref("MouseEvent")}} 接口的 **`MouseEvent.movementY`** 只读属性提供了当前事件和上一个 {{domxref("Element/mousemove_event", "mousemove")}} 事件之间鼠标在竖直方向上的移动值。换句话说，这个值是这样计算的：`currentEvent.movementY = currentEvent.screenY - previousEvent.screenY`。

## 语法

```plain
var yShift = instanceOfMouseEvent.movementY
```

### 返回值

A number

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{ domxref("MouseEvent") }}
- [Pointer Lock](/zh-CN/docs/WebAPI/Pointer_Lock)
