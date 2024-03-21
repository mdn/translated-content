---
title: InputEvent
slug: Web/API/InputEvent
l10n:
  sourceCommit: 8ca15ba7933a738cf632a9bbf5cfd4e90d1a97b1
---

{{APIRef("UI Events")}}

**`InputEvent`** 接口表示通知用户可编辑内容更改的事件。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("InputEvent.InputEvent", "InputEvent()")}}
  - : 创建一个 `InputEvent` 对象。

## 实例属性

_接口从其父级 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承属性。_

- {{domxref("InputEvent.data")}} {{ReadOnlyInline}}
  - : 返回包含插入字符的字符串，如果更改没有插入文本（例如删除字符时）则该值为空字符串。
- {{domxref("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("DataTransfer")}} 对象，该对象包含有关要添加到可编辑内容，或从可编辑内容中删除的富文本或纯文本数据的信息。
- {{domxref("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : 返回对可编辑内容所做更改的类型，例如插入、删除或格式化文本。
- {{domxref("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : 返回一个 {{JSxRef("Boolean")}} 值，表明该事件是否在触发 {{domxref("Element/compositionstart_event", "compositionstart")}} 事件之后且触发 {{domxref("Element/compositionend_event", "compositionend")}} 事件之前触发的。

## 实例方法

_接口从其父级 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承方法。_

- {{DOMxRef('InputEvent.getTargetRanges()')}}
  - : 返回一个 {{domxref("StaticRange")}} 对象数组，如果不取消输入事件，该数组将受到 DOM 更改的影响。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`beforeinput` 事件](/zh-CN/docs/Web/API/Element/beforeinput_event)
- [`input` 事件](/zh-CN/docs/Web/API/Element/input_event)
