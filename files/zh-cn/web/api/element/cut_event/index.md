---
title: cut
slug: Web/API/Element/cut_event
---

> **警告：** This page needs to be updated to match the currently specified behaviour. In the meantime please refer to the specification: [https://www.w3.org/TR/clipboard-apis/#the-cut-action](https://www.w3.org/TR/clipboard-apis/#the-paste-action)

**`cut`** 事件在将选中内容从文档中删除并将其添加到剪贴板后触发。

如果用户尝试对不可编辑内容执行剪切操作，则`cut`事件仍会触发，但事件对象不包含任何数据。

## 基本信息

- 规范
  - : [Clipboard](http://www.w3.org/TR/clipboard-apis/#cut-event)
- 接口
  - : {{domxref("ClipboardEvent")}}
- 是否冒泡
  - : Yes
- 可取消默认行为
  - : Yes
- 目标对象
  - : {{domxref("DefaultView")}}, {{domxref("Document")}}, {{domxref("Element")}}
- 默认行为
  - : None

## 属性

| Property                               | Type                                 | Description                                  |
| -------------------------------------- | ------------------------------------ | -------------------------------------------- |
| `target` {{readonlyInline}}      | {{domxref("EventTarget")}} | 事件对象（DOM 树的顶层对象）。               |
| `type` {{readonlyInline}}        | {{domxref("DOMString")}}     | 事件的类型。                                 |
| `bubbles` {{readonlyInline}}     | {{jsxref("Boolean")}}         | 事件是否冒泡。                               |
| `cancelable` {{readonlyInline}}  | {{jsxref("Boolean")}}         | 事件是否可以取消。                           |
| clipboardData {{readonlyInline}} | {{domxref("DataTransfer")}} | 剪贴板的内容。不仅仅是文本，还有文件和图片。 |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{domxref("HTMLElement.oncut")}}
- Related events

  - {{event("copy")}}
  - {{event("paste")}}
