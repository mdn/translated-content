---
title: Document.pointerLockElement
slug: Web/API/Document/pointerLockElement
---

{{APIRef("DOM")}}

`pointerLockElement` 特性规定了如在鼠标事件中当目标被锁定时的元素集和。如果指针处于锁定等待中、指针没有被锁定，或者目标在另外一个文档中这几种情况，返回的值 `null`。

## 语法

```plain
var element = document.pointerLockElement;
```

### 返回值

An {{domxref("Element")}} or `null`.

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/zh-CN/docs/WebAPI/Pointer_Lock)
