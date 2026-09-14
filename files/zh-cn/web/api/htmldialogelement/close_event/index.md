---
title: HTMLDialogElement：close 事件
slug: Web/API/HTMLDialogElement/close_event
---

{{ APIRef() }}

**`close`** 事件在对话框被关闭时，会在对应的 `HTMLDialogElement` 对象上被触发。

该事件不可取消，也不会冒泡。

## 语法

```js
target.onclose = functionRef;
```

### 参数

`functionRef` 是一个函数名称或[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)。该函数接受一个 {{domxref("Event")}} 对象作为它唯一的参数。

每次只能给一个对象添加 `onclose` 回调。你可能更喜欢使用 {{domxref("EventTarget.addEventListener()")}} 方法，因为它更加灵活。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML [`<dialog>`](/zh-CN/docs/Web/HTML/Reference/Elements/dialog) 元素
