---
title: Document：copy 事件
slug: Web/API/Document/copy_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`copy`** 事件会在用户通过浏览器的用户界面发起复制操作时触发。

该事件的原始目标是复制操作的预期目标 {{domxref("Element")}}。你可以在 {{domxref("Document")}} 接口上监听该事件，以便在捕获或冒泡阶段处理该事件。有关此事件的详细信息，请参阅 [Element：copy 事件](/zh-CN/docs/Web/API/Element/copy_event)页面。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## 事件类型

{{domxref("ClipboardEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ClipboardEvent")}}

## 示例

要在用户从网页复制数据到剪贴板时收到通知，你可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 将处理器添加到你的 {{domxref("Document")}} 实例，就像这样：

```js
document.addEventListener("copy", (event) => {
  /* 会话已关闭 */
});
```

或者，也可以使用 `Document.oncopy` 事件处理器属性来为 `copy` 事件建立一个处理器：

```js
document.oncopy = (event) => {
  /* 会话已关闭 */
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Document/cut_event", "cut")}}、{{domxref("Document/paste_event", "paste")}}
- 以 {{domxref("Element")}} 为目标的此事件：{{domxref("Element/copy_event", "copy")}}
- 以 {{domxref("Window")}} 为目标的此事件：{{domxref("Window/copy_event", "copy")}}
