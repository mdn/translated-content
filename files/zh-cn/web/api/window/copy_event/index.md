---
title: Window：copy 事件
slug: Web/API/Window/copy_event
---

{{APIRef}}

当用户通过浏览器的用户界面发起一个复制动作时，将触发 **`copy`** 事件。

该事件的原始目标是 {{domxref("Element")}}，它是复制动作的预期目标。你可以在 {{domxref("Window")}} 接口上监听这个事件，以便在捕获或冒泡阶段处理它。关于此事件的全部细节，请参见 [Element：copy 事件](/zh-CN/docs/Web/API/Element/copy_event)的页面。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## 事件类型

{{domxref("ClipboardEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ClipboardEvent")}}

## 示例

```js
window.addEventListener("copy", (event) => {
  console.log("已发起复制！");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关联事件：{{domxref("Window/cut_event", "cut")}}、{{domxref("Window/paste_event", "paste")}}
- {{domxref("Element")}} 目标上的这个事件：{{domxref("Element/copy_event", "copy")}}
- {{domxref("Document")}} 目标上的这个事件：{{domxref("Document/copy_event", "copy")}}
