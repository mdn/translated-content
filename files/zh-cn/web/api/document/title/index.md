---
title: Document.title
slug: Web/API/Document/title
---
{{APIRef}}

## 概述

获取或设置文档的标题。

## 语法

```
var docTitle = document.title;
```

`title` 是一个包含 `document` 标题的字符串。如果通过设置 `document.title` 将标题覆盖，则返回覆盖后的值。否则返回标签里指定的标题（参见下面的 [Notes](#notes)）。

```
document.title = newTitle;
```

`newTitle` 是文档的新标题。赋值操作影响 `document.title` 的返回值，文档的显示标题（即窗口或标签页顶部的标题栏），另外还会影响文档的 DOM，即改变 HTML 文档中 `<title>` 元素的内容。

## 示例

```js
<!DOCTYPE html>
<html>
<head>
<title>Hello World!</title>
</head>
<body>

<script>
alert(document.title); // 显示 "Hello World!"
document.title = "Goodbye World!";
alert(document.title); // 显示 "Goodbye World!"
</script>

</body>
</html>
```

## 备注

在 Gecko 中，该属性适应于 HTML、SVG、XUL 和其他文档。

对于 HTML 文档来说，`document.title` 的初始值是 `<title>` 元素的文本内容。对于 XUL 来说，它是 {{XULElem("window")}} 或其他顶级 XUL 元素的 {{XULAttr("title")}} 属性的值。

在 XUL 里，在文档完全加载之前访问 `document.title`，会有未定义行为（`document.title` 可能返回一个空字符串，并且设置 `document.title` 也无效）。

## 规范

- [DOM Level 2 HTML: document.title](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-18446827)
- [HTML5](http://www.whatwg.org/html/#document.title)
