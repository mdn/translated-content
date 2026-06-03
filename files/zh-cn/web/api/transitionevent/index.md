---
title: TransitionEvent
slug: Web/API/TransitionEvent
---

{{APIRef("CSSOM")}} {{SeeCompatTable}}

TransitonEvent 接口指那些提供了与[过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)有关信息的事件。

## 属性

_同时也继承了父类 {{domxref("Event")}}_ 的属性。

- {{domxref("TransitionEvent.propertyName")}} {{readonlyInline}}
  - : 是一个{{domxref("DOMString")}}，代表与这个 transition 有关的 CSS 属性名。
- {{domxref("TransitionEvent.elapsedTime")}} {{readonlyInline}}
  - : 是一个 float 值，代表从这个事件触发开始，这个 transition 运行的时间（以秒为单位）。这个值不受 {{cssxref("transition-delay")}} 属性的影响。
- {{domxref("TransitionEvent.pseudoElement")}} {{readonlyInline}}
  - : 是一个以 '::' 开头的 {{domxref("DOMString")}}, 代表这个过渡运行于其上的伪元素的名字。如果这个过渡不是在一个伪元素上而是在一个元素上运行的，这个值就是一个空值''。

## 构造函数

- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}
  - : 用给定的参数创建一个 TransitionEvent 事件。

## 方法

*同时也继承了父类 {{domxref("Event")}}*的方法。

- {{domxref("TransitionEvent.initTransitionEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : 使用已经废弃的{{domxref("Document.createEvent()", "Document.createEvent(\"TransitionEvent\")")}} 方法初始化已经创建的 TransitonEvent 事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)
- CSS 属性：{{cssxref("transition")}}、{{cssxref("transition-delay")}}、{{cssxref("transition-duration")}}、{{cssxref("transition-property")}}、{{cssxref("transition-timing-function")}}。
