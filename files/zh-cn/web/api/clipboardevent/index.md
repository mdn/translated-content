---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

**`ClipboardEvent`** 接口描述了与修改剪切板相关信息的事件，这些事件包括 剪切[`cut`](/zh-CN/docs/Web/API/Element/cut_event) , 复制[`copy`](/zh-CN/docs/Web/API/Element/copy_event) 和 粘贴[`paste`](/zh-CN/docs/Web/API/Element/paste_event) 事件。

## 构造函数

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : 用给定的参数创建了一个 `ClipboardEvent` 事件。

## 属性

_同样是从其父类_ _{{domxref("Event")}}_ _继承的属性。_

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : 是一个 {{domxref("DataTransfer")}} 对象，它包含了由用户发起的 [`cut`](/zh-CN/docs/Web/API/Element/cut_event) 、 [`copy`](/zh-CN/docs/Web/API/Element/copy_event) 和 [`paste`](/zh-CN/docs/Web/API/Element/paste_event) 操作影响的数据，以及它的 MIME 类型。

## 方法

*没有特定方法；从*其*父类 {{domxref("Event")}}* _继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Copy-related events: [`copy`](/zh-CN/docs/Web/API/Element/copy_event), [`cut`](/zh-CN/docs/Web/API/Element/cut_event), [`paste`](/zh-CN/docs/Web/API/Element/paste_event)
