---
title: HTMLObjectElement：setCustomValidity() 方法
slug: Web/API/HTMLObjectElement/setCustomValidity
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLObjectElement")}} 接口的 **`setCustomValidity()`** 方法设置元素的自定义校验消息。

## 语法

```js-nolint
setCustomValidity(errorMessage)
```

### 参数

- `errorMessage`
  - : 用于校验错误的消息。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

无。

## 示例

在这个示例中，我们传入输入元素的 ID，并根据该值是缺失、过小或过大设置不同的错误消息。此外，你*必须*对同一元素调用 [reportValidity](/zh-CN/docs/Web/API/HTMLFormElement/reportValidity) 方法，否则什么事都不会发生。

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("你必须填满这个，哟！");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("我们需要一个更大的数字！");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("太大了！");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

如果没有错误，将消息设置为空字符串是至关重要的。只要错误消息不为空，表单就不会验证通过，也不会被提交。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('validityState')}}
- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.valid')}}
- {{domxref('validityState.customError')}}
