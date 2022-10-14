---
title: style
slug: Web/API/CSSStyleRule/style
---

{{ ApiRef() }}

### 概述

返回 一个 {{ domxref("CSSStyleDeclaration") }}接口对象，它代表了{{ DOMXref("CSSRule") }}的 [declaration block](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block)。

### 语法

```plain
styleObj = cssRule.style
```

### 例子

```js
function stilo() {
  alert(document.styleSheets[0].cssRules[0].style.cssText);
}
// 弹出 "background-color: gray;"
```

### 备注

declaration block 是样式规则中花括号内的部分（选择器就在花括号的外部）

### 相关链接

- [DOM CSS Properties](/zh-CN/CSS/CSS_Reference)

### 规范

[DOM Level 2 CSS: style](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-style)

### 浏览器兼容性

{{Compat}}
