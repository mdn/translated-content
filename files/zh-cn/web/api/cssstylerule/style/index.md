---
title: style
slug: Web/API/CSSStyleRule/style
---

{{ ApiRef() }}

返回 一个 {{ domxref("CSSStyleDeclaration") }}接口对象，它代表了{{ DOMXref("CSSRule") }}的 [declaration block](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block)。

## 语法

```plain
styleObj = cssRule.style
```

## 示例

```js
function stilo() {
  alert(document.styleSheets[0].cssRules[0].style.cssText);
}
// 弹出 "background-color: gray;"
```

## 备注

declaration block 是样式规则中花括号内的部分（选择器就在花括号的外部）

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
