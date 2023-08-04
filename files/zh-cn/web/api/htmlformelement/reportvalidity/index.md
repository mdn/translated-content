---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
---

{{APIRef("HTML DOM")}}

方法 **`HTMLFormElement.reportValidity()`** 返回布尔值，如果 form 表单的子表单控件满足验证限制条件，则该方法返回 `true` ，否则返回`false`。当返回 `false` 时，每个不合法的子控件的 [`invalid`](/zh-CN/docs/Web/Events/invalid) 事件将会被触发，并且验证中存在的问题会报告该用户。

## Syntax

```plain
HTMLFormElement.reportValidity()
```

### Return value

{{domxref("布尔")}}

## Example

```js
document.forms["myform"].addEventListener(
  "invalid",
  function () {
    // Optional response here
  },
  false,
);

document.forms["myform"].addEventListener(
  "submit",
  function () {
    document.forms["myform"].reportValidity();
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
