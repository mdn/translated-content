---
title: EventTarget
slug: Web/API/EventTarget
---

{{APIRef("DOM")}}

`EventTarget` 接口由可以接收事件、并且可以创建侦听器的对象实现。换句话说，任何事件目标都会实现与该接口有关的这三个方法。

{{domxref("Element")}} 及其子项、{{domxref("document")}} 和 {{domxref("window")}} 是最常见的事件目标，但其他对象也可以是事件目标。比如 {{domxref("XMLHttpRequest")}}、{{domxref("AudioNode")}} 和 {{domxref("AudioContext")}} 等等。

许多事件目标（包括 `element`、`document` 和 `window`）都支持通过 `onevent` 特性和属性设置[事件处理程序](/zh-CN/docs/Web/Events/Event_handlers)。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("EventTarget.EventTarget()","EventTarget()")}}
  - : 创建一个新的 `EventTarget` 对象实例。

## 方法

- {{domxref("EventTarget.addEventListener()")}}
  - : 在 `EventTarget` 上注册特定事件类型的事件处理程序。
- {{domxref("EventTarget.removeEventListener()")}}
  - : `EventTarget` 中删除事件侦听器。
- {{domxref("EventTarget.dispatchEvent()")}}
  - : 将事件分派到此 `EventTarget`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件参考](/zh-CN/docs/Web/Events)——站点中列出的事件
- [事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Event")}} 接口
