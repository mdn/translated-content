---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
---

{{ APIRef("CSSOM") }}

**`CSSStyleRule`** 表示一条 CSS 样式规则。它实现了 {{domxref("CSSRule")}} 接口，类型的值为 `1`（`CSSRule.STYLE_RULE`）。

## 属性

- {{domxref("CSSStyleRule.selectorText")}}
  - : 返回这条规则的、文本格式的选择器，例如 `"h1,h2"`。
- {{domxref("CSSStyleRule.style")}} {{readonlyinline}}
  - : 返回这条规则的 {{domxref("CSSStyleDeclaration")}} 对象。
- {{domxref("CSSStyleRule.styleMap")}} {{readonlyinline}}
  - : 返回一个 {{domxref('StylePropertyMap')}} 对象，which provides access to the rule's property-value pairs.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
