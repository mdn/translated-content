---
title: CompositionEvent
slug: Web/API/CompositionEvent
---

{{APIRef("UI Events")}}

DOM 接口 **`CompositionEvent`** 表示用户间接输入文本（如使用输入法）时发生的事件。此接口的常用事件有{{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}} 和 {{domxref("Element/compositionend_event", "compositionend")}}

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CompositionEvent.CompositionEvent()", "CompositionEvent()")}}
  - : 创建一个新的 `CompositionEvent` 对象实例。

## 属性

_这个接口也从{{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承属性。_

- {{domxref("CompositionEvent.data")}} {{readonlyinline}}
  - : 返回触发事件的输入方法所产生的字符；取决于生成 `CompositionEvent` 对象的事件类型，结果会有所不同。
- {{domxref("CompositionEvent.locale")}} {{readonlyinline}} {{deprecated_inline}}
  - : 返回当前输入方法的场景（例如，使用输入法编辑器进行输入合成时，场景就是键盘布局）。

## 方法

_这个接口也从 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承方法。_

- {{domxref("CompositionEvent.initCompositionEvent()")}} {{deprecated_inline}}
  - : 初始化 `CompositionEvent` 对象的所有属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [compositionstart](/zh-CN/docs/Web/API/Element/compositionstart_event)
- [compositionend](/zh-CN/docs/Web/API/Element/compositionend_event)
- [compositionupdate](/zh-CN/docs/Web/API/Element/compositionupdate_event)
- [UIEvent](/zh-CN/docs/Web/API/UIEvent)
- [Event](/zh-CN/docs/Web/API/Event)
