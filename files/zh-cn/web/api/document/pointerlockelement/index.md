---
title: Document：pointerLockElement 属性
slug: Web/API/Document/pointerLockElement
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 `pointerLockElement` 只读属性提供了指针锁定时鼠标事件的目标元素。如果指针处于锁定等待中、指针没有被锁定或目标元素在另外一个文档中，返回 `null`。

## 值

一个 {{domxref("Element")}} 或 `null`。

## 示例

确定一个 canvas 元素当前是否被指针锁定。

```js
if (document.pointerLockElement === canvasElement) {
  console.log("指针当前已锁定");
  // 做一些有用的响应
} else {
  console.log("指针当前已解锁");
  // 做一些有用的响应
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/zh-CN/docs/Web/API/Pointer_Lock_API)
