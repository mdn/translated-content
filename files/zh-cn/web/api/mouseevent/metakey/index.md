---
title: MouseEvent.metaKey
slug: Web/API/MouseEvent/metaKey
---

{{APIRef("DOM Events")}}

**`MouseEvent.metaKey`** 为只读属性，返回一个{{jsxref("Boolean", "布尔值")}}，在鼠标事件发生时，用于指示 <kbd>Meta</kbd> 键是按下状态（`true`），还是释放状态（`false`）。

> **备注：** 在 MAC 键盘上，表示 Command 键（<kbd>⌘</kbd>），在 Windows 键盘上，表示 Windows 键（<kbd>⊞</kbd>）。

## 语法

```
var metaKeyPressed = instanceOfMouseEvent.metaKey
```

### 返回值

一个布尔值。

## 示例

```js
function goInput(e) {
  // 检测 metaKey 值
  if (e.metaKey) {
    // 继续处理事件
    superSizeOutput(e);
  } else {
    doOutput(e);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ domxref("MouseEvent") }}
