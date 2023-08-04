---
title: HTMLFormElement.requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLFormElement")}} 的 **`requestSubmit()`** 方法要求使用一个指定的提交按钮提交表单。

## 语法

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### 参数

- `submitter` {{optional_inline}}

  - : 提交按钮，其属性描述了提交表单的方式。可以是 `type` 属性为 `submit` 的 {{HTMLElement("input")}} 或 {{HTMLElement("button")}} 元素。

    如果你省略了 `submitter` 参数，表单元素自身会作为 submitter 使用。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果指定的 `submitter` 不是一个提交按钮则抛出该错误。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果调用 `requestSubmit()` 时指定的 `submitter` 不是表单的成员则抛出该错误。submitter 必须是一个表单元素的后代或者必须具有引用表单的 [`form`](/zh-CN/docs/Web/HTML/Element/input#form) 属性。

## 使用说明

显而易见的问题是：我们一开始就有 {{domxref("HTMLFormElement.submit", "submit()")}} 方法，为什么还要有这个方法？

答案是显而易见的。`submit()` 仅仅是提交表单。而 `requestSubmit()` 的行为就像是点击了提交按钮一样。表单的内容会被验证并且表单仅在验证通过时提交。表单在被提交后，表单对象上会触发 {{domxref("HTMLFormElement.submit_event", "submit")}} 事件。

## 示例

在下面的示例中，如果可用，会尝试使用 `requestSubmit()` 发送请求提交表单。如果一个找到有 ID 为 `main-submit` 的提交按钮，则将其用于提交表单。否则，表单提交时不携带 `submitter` 参数，所以直接由表单自己提交。

另一方面，如果 `requestSubmit()` 不是可用的，这个代码回退到调用表单的 {{domxref("HTMLFormElement.submit", "submit()")}} 方法。

```js
let myForm = document.querySelector("form");
let submitButton = myForm.querySelector("#main-submit");

if (myForm.requestSubmit) {
  if (submitButton) {
    myForm.requestSubmit(submitButton);
  } else {
    myForm.requestSubmit();
  }
} else {
  myForm.submit();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
