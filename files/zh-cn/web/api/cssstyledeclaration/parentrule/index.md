---
title: CSSStyleDeclaration：parentRule 属性
short-title: parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.parentRule** 只读属性返回此样式块的父级 {{domxref('CSSRule')}}，例如表示 CSS 选择器样式的 {{domxref('CSSStyleRule')}}。

## 值

包含此声明块的 CSS 规则，或者如果此 {{domxref('CSSStyleDeclaration')}} 没有附加到 {{domxref('CSSRule')}}，则为 `null`。

## 示例

以下 JavaScript 代码从 {{domxref('CSSStyleDeclaration')}} 获取父级 CSS 样式规则：

```js
const declaration = document.styleSheets[0].rules[0].style;
const rule = declaration.parentRule;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
