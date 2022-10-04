---
title: MouseEvent.movementX
slug: Web/API/MouseEvent/movementX
---

{{APIRef("DOM Events")}}

**`MouseEvent.movementX`** 是只读属性，它提供了当前事件和上一个{{event("mousemove")}}事件之间鼠标在水平方向上的移动值。换句话说，这个值是这样计算的 : `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.

## 语法

```plain
var xShift = instanceOfMouseEvent.movementX
```

### 返回值

一个数字

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{ domxref("MouseEvent") }}
- [Pointer Lock](/zh-CN/docs/WebAPI/Pointer_Lock)
