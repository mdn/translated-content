---
title: DOMImplementation.createHTMLDocument
slug: Web/API/DOMImplementation/createHTMLDocument
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

### 概述

该方法 (属于[`document.implementation`](/zh-CN/DOM/document.implementation)) 用来创建一个新的 HTML 文档。

### 语法

```plain
var doc = document.implementation.createHTMLDocument(title);
```

- `doc` 是新建的 HTML 文档。
- `title` 是 doc 中的 title 标签中的文本。

### 例子

下面的例子演示如何创建了一个新的 HTML 文档，并把它插入到当前文档的一个{{ HTMLElement("iframe") }}中。

[查看在线演示](/samples/domref/createHTMLDocument.html)

例子中的 HTML 代码如下：

```html
<body>
  <p>
    Click <a href="javascript:makeDocument()">here</a> to create a new document
    and insert it below.
  </p>
  <iframe id="theFrame" src="about:blank" />
</body>
```

例子中用 JavaScript 实现的`makeDocument()`方法如下：

```js
function makeDocument() {
  var frame = document.getElementById("theFrame");

  var doc = document.implementation.createHTMLDocument("New Document");
  var p = doc.createElement("p");
  p.innerHTML = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  // 将新建的 HTML 文档放到 iframe 中。

  var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
```

代码 4-12 行创建了一个新的 HTML 文档，并在里面插入一些内容。第 4 行 `createHTMLDocument()`构造了一个标题为"New Document"的 HTML 文档。5-6 行创建了一个段落元素并在里面插入了一些内容，8-12 行将新建的段落元素插入到 HTML 文档中。

16 行获取了 iframe 的`contentDocument` 属性。这是我们将要插入新建的 HTML 文档的地方。下面的两行将新建的 HTML 文档插入到了 iframe 的根元素中。这样，我们用 20 行代码实现了用一个新建的 HTML 文档替换 iframe 中原有文档的目的。

### 备注

新生成的 HTML 文档有如下的初始结构：

```html
<!doctype html>
<html>
  <head>
    <title>title</title>
  </head>
  <body></body>
</html>
```

译者注：

```plain
alert(document.implementation.createHTMLDocument("myTitle").documentElement.outerHTML)

//<html><head><title>myTitle</title></head><body></body></html>
```

### 规范

- [`createHTMLDocument` specification](http://www.whatwg.org/html/#dom-domhtmlimplementation-createhtmldocument)
