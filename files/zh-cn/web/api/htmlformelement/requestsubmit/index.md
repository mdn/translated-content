---
title: HTMLFormElement.requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
page-type: web-api-instance-method
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLFormElement
  - Input
  - Method
  - button
  - form
  - requestSubmit
  - submit
translation_of: Web/api/HTMLFormElement/requestSubmit
---
{{APIRef("HTML DOM")}}

{{domxref("HTMLFormElement")}} 的 **`requestSubmit()`** 方法请求时，使用一个指定的提交按钮提交表单。

## 语法

```js
requestSubmit()
requestSubmit(submitter)
```

### 参数

- `submitter` {{optional_inline}}

  - : 提交按钮，其属性描述了提交表单的方式。{{HTMLElement("input")}} 或 {{HTMLElement("button")}} 元素的 `type` 属性是 `submit`。

  如果你省略了 `submitter` 参数，表单元素自身会做为 submitter 使用。

### 返回值

无 （{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果指定的 `submitter` 不是一个提交按钮则抛出。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果指定的 `submitter` 不是调用 `requestSubmit()` 的表单成员则抛出。submitter 必须是一个表单元素的后代或者必须具有引用表单的 {{htmlattrxref("form", "input")}} 属性。

## 使用说明

显而易见的问题是：当我们一开始就有 {{domxref("HTMLFormElement.submit", "submit()")}} 方法，为什么这个方法会存在?

答案是简单的。`submit()` 提交表单，但是仅此而已。在另一方面，`requestSubmit()` 像点击了提交按钮一样。表单的内容被验证并且表单只有被成功验证时提交。一旦表单被提交，{{domxref("HTMLFormElement.submit_event", "submit")}} 事件就会被发送回表单对象。

## 示例

在下面的示例中，如果可用，表单试图使用 `requestSubmit()` 发送请求提交表单。如果一个找到有 `main-submit` 的 ID 的提交按钮，则用于提交表单。否则，表单提交时不携带 `submitter` 参数，所以直接由表单自己提交。

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
