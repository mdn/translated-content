---
title: ':where()'
slug: Web/CSS/:where
---
{{CSSRef}}{{SeeCompatTable}}

**`:where()`** [CSS 伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)函数接受[选择器列表](/zh-CN/docs/Web/CSS/Selector_list)作为它的参数，将会选择所有能被该选择器列表中任何一条规则选中的元素。

`:where()` 和 {{CSSxRef(":is", ":is()")}} 的不同之处在于，`:where()` 的[优先级](/zh-CN/docs/Web/CSS/Specificity)总是为 0 ，但是 `:is()` 的优先级是由它的选择器列表中优先级最高的[选择器](/zh-CN/docs/Glossary/CSS_Selector)决定的。

## 语法

{{CSSSyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("css.selectors.where")}}

## 参见

- {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}}
- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list)
