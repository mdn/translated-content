---
title: Document.defaultView
slug: Web/API/Document/defaultView
---

{{ ApiRef() }}

### 概述

在浏览器中，该属性返回当前 `document` 对象所关联的 [`window`](/zh-CN/DOM/window) 对象，如果没有，会返回 `null`。

### 语法

```plain
var win = document.defaultView;
```

该属性只读。

### 备注

根据 [quirksmode](http://www.quirksmode.org/dom/w3c_html.html)，IE 9 以下版本不支持 `defaultView`。

### 规范

- [HTML5: defaultView](/zh-CN/HTML/HTML5)
- [DOM Level 2 Views: defaultView](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-DocumentView-defaultView)
- [DOM Level 3 Views](http://www.w3.org/TR/DOM-Level-3-Views/) (Only developed to Working Group Note and not implemented)
