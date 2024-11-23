---
title: ShadowRoot：pointerLockElement 属性
slug: Web/API/ShadowRoot/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

{{domxref("ShadowRoot")}} 接口的 **`pointerLockElement`** 只读属性提供在指针锁定时作为鼠标事件目标的元素集。如果指针处于锁定等待中、指针没有被锁定或目标元素在另外一棵树中，则该属性为 `null`。

## 值

{{domxref("Element")}} 或 `null`。

## 示例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pleElem = shadow.pointerLockElement;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/zh-CN/docs/Web/API/Pointer_Lock_API)
