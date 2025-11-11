---
title: CSSStyleRule：selectorText 属性
slug: Web/API/CSSStyleRule/selectorText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM") }}

{{domxref("CSSStyleRule")}} 接口的 selectorText 属性用于获取和设置与 `CSSStyleRule` 关联的选择器。

## 值

一个字符串。

## 示例

以下 CSS 包含一个样式规则。这将是 `document.styleSheets[0].cssRules` 返回的第一个 {{domxref("CSSRule")}}。因此，myRules[0].selectorText 返回选择器的字面字符串，在本例中是 `"h1"`。

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // 包含“h1”的字符串。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
