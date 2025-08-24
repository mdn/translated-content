---
title: "CSSStyleRule: selectorText property"
short-title: selectorText
slug: Web/API/CSSStyleRule/selectorText
page-type: web-api-instance-property
browser-compat: api.CSSStyleRule.selectorText
---

{{APIRef("CSSOM") }}

selectorText 属性是 {{domxref(“CSSStyleRule”)}} 接口的一部分，用于获取和设置与 CSSStyleRule 关联的选择器。

## 值

一个字符串。

## 例子

以下 CSS 包含一个样式规则。这将是 document.styleSheets[0].cssRules 返回的第一个 {{domxref(“CSSRule”)}}。因此，myRules[0].selectorText 返回选择器的字面字符串，在本例中是 "h1"。

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // a string containing "h1".
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
