---
title: Element.tagName
slug: Web/API/Element/tagName
---

{{ APIRef() }}

## 概述

返回当前元素的标签名

## 语法

```plain
elementName = element.tagName
```

- `elementName` 是一个字符串，包含了 element 元素的标签名。

## 备注

在 XML (或者其他基于 XML 的语言，比如 XHTML,xul) 文档中，`tagName 的值会`保留原始的大小写。在 HTML 文档中，`tagName`会返回其大写形式。对于元素节点来说，`tagName 属性`的值和[nodeName](/zh-CN/docs/Web/API/Node/nodeName)属性的值是相同的。

## 例子

假设给定下面的源码

```plain
<span id="born">When I was born...</span>
```

然后运行下面的脚本

```plain
var span = document.getElementById("born");
alert(span.tagName);
```

在 XHTML 中 (或者其他的 XML 格式文件中), 会弹出小写的"span".而在 HTML 中，会弹出大写的"SPAN".

## 规范

- [DOM Level 2 Core: tagName](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-104682815)
- [HTML 5: APIs in HTML documents](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
