---
title: Document：pointerlockchange 事件
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

**`pointerlockchange`** 事件在指针被锁定/解锁时触发。

事件处理器可以使用 {{domxref("Document.pointerLockElement")}} 来确定指针是否被锁定，如果是，则确定哪个元素被锁定。

此事件不可取消，也不会冒泡。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("pointerlockchange", (event) => {});

onpointerlockchange = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

使用 `addEventListener()`：

```js
addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("指针被锁定到：", document.pointerLockElement);
  else {
    console.log("指针未锁定");
  }
});
```

使用 `onpointerlockchange` 事件处理器属性：

```js
document.onpointerlockchange = (event) => {
  if (document.pointerLockElement)
    console.log("指针被锁定到：", document.pointerLockElement);
  else {
    console.log("指针未锁定");
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Pointer Lock API](/zh-CN/docs/Web/API/Pointer_Lock_API)
