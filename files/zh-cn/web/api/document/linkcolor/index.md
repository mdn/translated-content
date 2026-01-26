---
title: document.linkColor
slug: Web/API/Document/linkColor
---

{{ ApiRef() }}

### 概述

{{ Deprecated_header() }} `linkColor` 用来获取和设置文档内链接元素 (\<a>) 的颜色。

### 语法

```plain
color = document.linkColor
document.linkColor = color
```

### 参数

- `color` 是一个代表颜色的字符串 (比如"red","blue"等),或者是一个 16 进制 rgb 颜色值 (比如"`#ff0000`").

### 备注

在 Mozilla Firefox 中，该属性的默认值是 blue(`或者说是#0000ee` ).

`document.linkColor`在 [DOM Level 2 HTML 中已被废弃](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).

替代方案是在链接元素上 [HTML anchor (\<a>)](/zh-CN/docs/Web/HTML/Reference/Elements/a) 使用 css {{ Cssxref("color") }} 属性，(比如`a {color:red;}`) 或者 [`:link`](https://www.w3.org/TR/CSS21/selector.html#link-pseudo-classes) 伪类 ,(比如`:link {color:red;}`).

另一种方法是使用 `document.body.link`, 该属也在[HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-link)中被废弃。

### 例子

```plain
document.linkColor = "blue";
```

### 规范

- {{domxref("document.vlinkColor")}}
- {{domxref("document.alinkColor")}}
