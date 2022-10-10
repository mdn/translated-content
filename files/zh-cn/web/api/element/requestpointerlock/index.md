---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
---

{{ APIRef("DOM") }}{{ seeCompatTable }}

**`Element.requestPointerLock()`** 方法允许您异步地请求将鼠标指针锁定在指定元素上。

若想追踪请求成功还是失败，则需要在 {{domxref("Document")}} 级别监听 {{event("pointerlockchange")}} 和 {{event("pointerlockerror")}} 事件。

## 语法

```plain
instanceOfElement.requestPointerLock();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/Web/API/Pointer_Lock_API)
