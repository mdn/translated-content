---
title: CSSStyleRule.selectorText
slug: Web/API/CSSStyleRule/selectorText
---

{{APIRef("CSSOM") }}

## 概述

**`CSSRule.selectorText`** 属性返回 CSS 规则的选择符文本，只读。动态设置 CSS 规则，请看 [Using dynamic styling information](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information).

## 语法

```plain
string = cssRule.selectorText
```

## 例子

```js
// for cssrule: body { background-color: darkblue; }
var stylesheet = document.styleSheets[0];

alert(stylesheet.cssRules[0].selectorText); // body
```

## 说明

浏览器解析选择符的时候可能会剔除不必要的空白字符

## 标准

- [Document Object Model CSS - #CSS-CSSRuleCSS](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule)
