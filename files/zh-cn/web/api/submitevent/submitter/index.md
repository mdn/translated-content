---
title: SubmitEvent.submitter
slug: Web/API/SubmitEvent/submitter
---

{{APIRef("HTML DOM")}}

在 {{domxref("SubmitEvent")}} 接口的只读属性 **`submitter`** 用于指定提交按钮或者被用来提交表单的其他元素。

## 值

一个元素，表示发送 {{domxref("HTMLFormElement.submit_event", "submit")}} 事件的表单元素。通常是 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 属性是 `submit` 的 {{HTMLElement("input")}} 元素或者 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 属性是 `submit` 的 {{HTMLElement("button")}} 元素，但它也可能是启动提交过程的其他元素。

如果提交不是由某些按钮触发的。则 `submitter` 的值是 `null`。

## 示例

完整示例代码参见 [`SubmitEvent`](/zh-CN/docs/Web/API/SubmitEvent#examples)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
