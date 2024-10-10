---
title: Document：pointerlockerror 事件
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

**`pointerlockerror`** 事件在锁定指针失败（由于技术原因或权限被拒绝）时触发。

此事件不可取消，也不会冒泡。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("pointerlockerror", (event) => {});

onpointerlockerror = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

document.addEventListener("pointerlockerror", (event) => {
  console.log("指针锁定错误");
});
```

使用 `onpointerlockerror` 事件处理器属性：

```js
document.onpointerlockerror = (event) => {
  console.log("指针锁定错误");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Pointer Lock API](/zh-CN/docs/Web/API/Pointer_Lock_API)
