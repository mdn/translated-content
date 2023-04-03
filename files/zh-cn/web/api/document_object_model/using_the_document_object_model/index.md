---
title: 使用 W3C DOM Level 1 核心
slug: Web/API/Document_object_model/Using_the_Document_Object_Model
original_slug: Web/API/Document_Object_Model/Using_the_W3C_DOM_Level_1_Core
---

W3C 的 Dom Level 1 核心是一个用于修改文档内容树的强大的对象模型。它被所有主流浏览器支持着，包括火狐浏览器和微软 IE 浏览器。它是网页脚本编程的强大基础。

## 什么是内容树？

很多 HTML 作者认为 HTML 是平面的东西 -- 一堆文字被标签包围在中间。当然还有比这个更多的内容。任何 HTML 文档（或者说任何 SGML 文档或者 XML 文档) 是一个树状结构。比如，以下的文档和树状结构是相似的 (虽然不是完全一致 -- 更多信息请参考 [whitespace in the DOM](/zh-CN/docs/Whitespace_in_the_DOM)):

```html
<html>
<head>
  <title>My Document</title>
</head>
<body>
  <h1>Header</h1>
  <p>Paragraph</p>
</body>
</html>
```

![image:Using_the_W3C_DOM_Level_1_Core-doctree.jpg](using_the_w3c_dom_level_1_core-doctree.jpg)

当 Mozilla 解析文档的时候，它首先构建一个内容树然后用它来显示这个文档。

用于描述树状结构的术语通常出现在 DOM Level 1 的核心中。我上面画的每一个方块都是这个树的一个节点。节点上面的线条表示父子关系：上面的父节点，而位于下方的是子节点。位于一个父节点下面的两个子节点是相邻的。类似地，我们可以指代祖先和后代。（不过，表亲们太乱了。）

## DOM Level 1 核心能让我们做什么？

W3C 的 DOM Level 1 允许你随意改变内容树。其功能之强大足以从零构建出任何 HTML 文档。它允许作者在任何时候，都可以通过脚本来修改文档里的任何内容。这是网页制作者通过 JavaScript 动态改变 DOM 的最简单途径。在版本较旧的浏览器里，使用 JavaScript 都是通过访问全局对象 `document` 属性来得到文档。文档对象实现了 W3C 的 DOM Level 1 规定的[文档接口](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document)。

## 一个简单的示例

假设作者改变上面文档的头部内容，并且使用两段段落取代一段段落。实现代码如下：

### HTML

```html
<body>
<input type="button" value="Change this document." onclick="change()">
<h2>Header</h2>
<p>Paragraph</p>
</body>
```

### JavaScript

```js
  function change() {
    // document.getElementsByTagName("H2") returns a NodeList of the <h2>
    // elements in the document, and the first is number 0:

    var header = document.getElementsByTagName("H2").item(0);
    // the firstChild of the header is a Text node:
    header.firstChild.data = "A dynamic document";
    // now the header is "A dynamic document".

    var para = document.getElementsByTagName("P").item(0);
    para.firstChild.data = "This is the first paragraph.";

    // create a new Text node for the second paragraph
    var newText = document.createTextNode("This is the second paragraph.");
    // create a new Element to be the second paragraph
    var newElement = document.createElement("P");
    // put the text in the paragraph
    newElement.appendChild(newText);
    // and put the paragraph on the end of the document by appending it to
    // the BODY (which is the parent of para)
    para.parentNode.appendChild(newElement);
  }
```

{{ EmbedLiveSample('一个简单的示例', 800, 300) }}

可以看完整的[示例代码](/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/using_the_w3c_dom_level_1_core-doctree.jpg)。

## 想学习更多？

现在您已经熟悉了 DOM 的基本概念，有一个文档解释了 [DOM Level 1 的基本方法](/zh-CN/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)的基本方法。这是本文的补充。

也可以查看 W3C 的 [DOM Level 1 核心规范文档](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html)。尽管是正式的规范文档，但十分清晰易于理解。其对于网页制作者主要有用的内容是描述不同的 DOM 对象及其所有属性和方法。可以继续阅读我们其他关于[DOM 的文档](/zh-CN/docs/DOM)。

**Original Document Information**

- Author(s): L. David Baron \<dbaron at dbaron dot org>
- Copyright Information: © 1998-2005 by individual mozilla.org contributors; content available under a [Creative Commons license](http://www.mozilla.org/foundation/licensing/website-content.html)
