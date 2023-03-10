---
title: CustomEvent
slug: Web/API/CustomEvent
---

{{APIRef("DOM")}}

`CustomEvent` 接口表示由程序出于某个目的而创建的事件。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : 创建一个新的 `CustomEvent`。

## 属性

_此接口从父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("CustomEvent.detail")}} {{ReadOnlyInline}}
  - : 返回在初始化事件时传入的任何数据。

## 方法

_此接口从父接口 {{domxref("Event")}} 继承方法。_

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : 初始化一个 `CustomEvent` 对象。如果事件已经被触发，这个方法将不会起任何作用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.postMessage()")}}
- [创建和触发事件](/zh-CN/docs/Web/Events/Creating_and_triggering_events)
