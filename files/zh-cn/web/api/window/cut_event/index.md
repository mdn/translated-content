---
title: Window：cut 事件
short-title: cut
slug: Web/API/Window/cut_event
---

{{APIRef}}

当用户通过浏览器的用户界面发起一个“剪切”动作时，将触发 **`cut`** 事件。

该事件的原始目标是 {{domxref("Element")}}，它是剪切动作的预期目标。你可以在 {{domxref("Window")}} 接口上监听这个事件，以便在捕获或冒泡阶段处理它。关于此事件的全部细节，请参见 [Element：cut 事件](/zh-CN/docs/Web/API/Element/cut_event)的页面。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## 事件类型

{{domxref("ClipboardEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("ClipboardEvent")}}

## 示例

```js
window.addEventListener("cut", (event) => {
  console.log("已发起剪切！");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关联事件：{{domxref("Window/copy_event", "copy")}}、{{domxref("Window/paste_event", "paste")}}
- {{domxref("Element")}} 目标上的这个事件：{{domxref("Element/cut_event", "cut")}}
- {{domxref("Document")}} 目标上的这个事件：{{domxref("Document/cut_event", "cut")}}
