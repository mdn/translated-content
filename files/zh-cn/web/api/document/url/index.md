---
title: document.URL
slug: Web/API/Document/URL
---

{{ ApiRef() }}

### 概述

返回当前文档的 URL 地址

### 语法

```plain
string = document.URL
```

### 备注

`该属性的值和`DOM Level 0 中的`document.location.href` 属性的值是相等的。然而 `document.location.href` 是可写的，`document.URL` 是只读的。

{{ domxref("document.documentURI") }} 也返回与该属性相同的值，不过它在非 HTML 文档中也可以使用。

### 规范

[DOM Level 2 HTML: URL](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-46183437)
