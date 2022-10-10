---
title: HTMLSelectElement.checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.checkValidity()`** 会检查元素是否有任何输入约束条件，并且检查值是否符合约束条件。如果值是不符合约束条件的，浏览器就会在该元素上触发一个可以撤销的 {{event("invalid")}} 事件，然后返回 `false`.

## Syntax

```js
var result = selectElt.checkValidity();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Form validation.](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)
