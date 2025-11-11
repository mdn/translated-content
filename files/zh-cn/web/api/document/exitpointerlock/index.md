---
title: Document：exitPointerLock() 方法
slug: Web/API/Document/exitPointerLock
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Pointer Lock API")}}

{{domxref("Document")}} 接口的 **`exitPointerLock()`** 方法异步释放先前通过 {{domxref("Element.requestPointerLock")}} 请求的指针锁定。

> [!NOTE]
> 在文档上调用 **`exitPointerLock()`** 方法，在元素上调用 **`requestPointerLock()`** 方法。

要跟踪请求的成功或失败，需要监听 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} 事件和 {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} 事件。

## 语法

```js-nolint
exitPointerLock()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Element.requestPointerLock()") }}
- [指针锁定](/zh-CN/docs/Web/API/Pointer_Lock_API)
