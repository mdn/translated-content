---
title: "Element：ariaDescription 属性"
short-title: ariaDescription
slug: Web/API/Element/ariaDescription
page-type: web-api-instance-property
browser-compat: api.Element.ariaDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

来自 {{domxref("Element")}} 接口的 **`ariaDescription`** 属性反映了 [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) 属性的值，其定义了一个可以描述或注释当前元素的字符串值。

## 值

一个字符串。

## 示例

在这个示例中，拥有 `close-button` ID 的元素的 `aria-description` 属性被设置为字符串 "A longer description of the function of this element"。 使用 `ariaDescription` 可以更新该值。

```html
<button
  aria-label="Close"
  aria-description="A longer description of the function of this element"
  id="close-button">
  X
</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaDescription); // "A longer description of the function of this element"
el.ariaDescription = "A different description";
console.log(el.ariaDescription); // "A different description"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
