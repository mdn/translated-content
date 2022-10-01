---
title: ':has()'
slug: Web/CSS/:has
---

{{CSSRef}}

**`:has()`** CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)代表一个元素，其给定的选择器参数（相对于该元素的 {{cssxref(":scope")}}）至少匹配一个元素。

## 语法

```
:has( <相对选择器列表> )
```

## 描述

`:has()` 伪类使用相对选择器列表作为参数。

## 示例

### 匹配直接包含 \<img> 元素的 \<a> 元素

下面的选择器只会匹配直接包含 {{HTMLElement("img")}} 子元素的 {{HTMLElement("a")}} 元素：

```css
a:has(> img)
```

### 匹配其后紧跟着 \<p> 元素的 \<h1> 元素

下面的选择器只会匹配其后紧跟着 {{HTMLElement("p")}} 元素的 {{HTMLElement("h1")}} 元素：

```css
h1:has(+ p)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`:scope`](/zh-CN/docs/Web/CSS/:scope)
