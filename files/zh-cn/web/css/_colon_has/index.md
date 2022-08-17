---
title: ':has'
slug: Web/CSS/:has
---
{{CSSRef}}

**`:has()`** CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)代表一个元素，其给定的选择器参数（相对于该元素的 {{cssxref(":scope")}}）至少匹配一个元素。

`:has()` 伪类接受一个选择器组作为参数。在当前规范中 `:has` 并未列为[实时选择器配置](https://drafts.csswg.org/selectors/#live-profile)的一部分，意味着其不能用于样式表中，只能用于如 {{domxref("document.querySelector()")}} 的函数中。

```
/* 选择任何直接包含 <img> 子元素的 <a>  */
/* 注意，目前还没有任何浏览器支持此方法 */
/* 此伪类也未计划投入样式表中使用 */
var test = document.querySelector('a:has(> img)');
```

## 语法

{{CSSSyntax}}

## 示例

下面的选择器只会匹配直接包含 {{HTMLElement("img")}} 子元素的 {{HTMLElement("a")}} 元素：

```
a:has(> img)
```

下面的选择器只会匹配其后紧跟着 {{htmlelement("p")}} 元素的 {{HTMLElement("h1")}} 元素：

```
h1:has(+ p)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
