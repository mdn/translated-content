---
title: <acronym>
slug: Web/HTML/Element/acronym
---

{{deprecated_header}}

## 简介

HTML Acronym 元素 (`<acronym>)` 允许作者明确地声明一个字符序列，，它们构成一个单词的首字母缩写或简略语。

> **备注：** 该元素已从 HTML5 中移除，不应再被使用。Web 开发者应使用 {{HTMLElement("abbr")}} 元素。

## 属性

该元素除了 [global attributes](/zh-CN/docs/HTML/global_attributes), 所有其他元素的公共属性之外没有其他属性。

## DOM 接口

该元素实现了 {{domxref('HTMLElement')}} 接口。

> **备注：** 直到 Gecko 1.9.2（包含），Firefox 为这个元素实现了 {{domxref('HTMLSpanElement')}} 接口。

## 例子

```html
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only one component of the
  Internet.
</p>
```

## 默认样式

尽管这个标签的目的纯粹是为了方便作者，它的默认样式却在各个浏览器中不尽相同：

- 一些浏览器，像 Internet Explorer，赋予它和 {{HTMLElement("span")}} 元素相同的样式。
- Opera, Firefox，和 一些其他的浏览器在元素内容下方添加了一条点状的下划线。
- 一小部分浏览器不仅添加了点状下划线，而且 put it in small caps; 为避免这种样式，可以在 CSS 中添加{{cssxref('font-variant')}}`: none` 处理这种情况。

因此强烈建议 Web 作者们不要依赖默认的样式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{HTMLElement("abbr")}} HTML 元素

{{HTMLSidebar}}
