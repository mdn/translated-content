---
title: GlobalEventHandlers.onclose
slug: Web/API/HTMLDialogElement/close_event
---

{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

{{domxref("GlobalEventHandlers")}} mixin 的 **`onclose`** 属性是一个 {{event("Event_handlers", "event handler")}}, 用来处理发送给 {{HTMLElement("dialog")}} 元素的 {{event("close")}} 事件。

当用户关闭一个 `<dialog>` 时，`close` 事件将被触发。

> **备注：** 如果要处理 window 的关闭，使用 {{domxref("Window/beforeunload_event", "onbeforeunload")}} 或 {{domxref("Window/unload_event", "onunload")}}.

## 语法

```js
target.onclose = functionRef;
```

### 参数

`functionRef` 是一个函数名称或 [函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)。该函数接受一个 {{domxref("Event")}} 对象作为它唯一的参数。

每次只能给一个对象添加 `onclose` 回调。你可能更喜欢使用 {{domxref("EventTarget.addEventListener()")}} 方法，因为它更加灵活。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{event("close")}} 事件
- HTML {{HTMLElement("dialog")}} 元素
- 相关事件回调： {{domxref("GlobalEventHandlers.oncancel")}}
