---
title: "Element: ariaDescription 属性"
short-title: ariaDescription
slug: Web/API/Element/ariaDescription
page-type: web-api-instance-property
browser-compat: api.Element.ariaDescription
---

{{APIRef("DOM")}}

来自 {{domxref("Element")}} 界面的 **`ariaDescription`** 属性 反映了 [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) 属性的数值, 其定义了一个可以描述或注释现值的字符值。

## 值

一个字符串。

## 示例

在这个示例中，在一个拥有 `close-button` ID 的元素的 `aria-description` 属性被设为了 "A longer description of the function of this element" 的字符串。 使用 `ariaDescription` 可以更新它的值。

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
