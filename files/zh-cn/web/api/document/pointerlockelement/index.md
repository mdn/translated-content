---
title: Document：pointerLockElement 属性
slug: Web/API/Document/pointerLockElement
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 `pointerLockElement` 属性提供了指针锁定时鼠标事件的目标元素。如果指针处于锁定等待中、指针没有被锁定，或者目标在另外一个文档中，返回的值是 `null`。

## 值

一个 {{domxref("Element")}} 或 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/zh-CN/docs/Web/API/Pointer_Lock_API)
