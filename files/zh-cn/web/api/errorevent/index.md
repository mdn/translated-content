---
title: ErrorEvent
slug: Web/API/ErrorEvent
---

{{APIRef("HTML DOM")}}

**`ErrorEvent`** 事件对象在脚本发生错误时产生，它可以提供发生错误的脚本文件的文件名，以及发生错误时所在的行号等信息。

## 属性

除了从 {{domxref("Event")}} 接口继承来的属性外，还有下面这些自身属性。

- {{domxref("ErrorEvent.prototype.message")}} {{readonlyInline}}
  - : 一个{{domxref("DOMString","字符串")}}，包含了所发生错误的描述信息。
- {{domxref("ErrorEvent.prototype.filename")}} {{readonlyInline}}
  - : 一个 {{domxref("DOMString","字符串")}}，包含了发生错误的脚本文件的文件名。
- {{domxref("ErrorEvent.prototype.lineno")}} {{readonlyInline}}
  - : 一个数字，包含了错误发生时所在的行号。
- {{domxref("ErrorEvent.prototype.colno")}} {{readonlyInline}}
  - : 一个数字，包含了错误发生时所在的列号。
- {{domxref("ErrorEvent.prototype.error")}} {{readonlyInline}} {{experimental_inline}}
  - : 发生错误时所抛出的 {{jsxref("Error")}} 对象。

## 构造函数

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : 根据传入的参数构造 `ErrorEvent` 实例。

## 方法

除了从 {{domxref("Event")}} 接口继承来的方法外，没有其他方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)，最有可能引发此事件的对象
