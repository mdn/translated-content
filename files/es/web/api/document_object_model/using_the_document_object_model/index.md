---
title: Using the W3C DOM Level 1 Core
slug: Web/API/Document_object_model/Using_the_Document_Object_Model
---

The W3C's DOM Level 1 Core is a powerful object model for changing the content tree of documents. It is supported in all major browsers including Mozilla Firefox and Microsoft Internet Explorer. It is a powerful base for scripting on the web.

## What is a content tree?

Many HTML authors may think of HTML as something flat — a bunch of text with tags in the middle. However, it is something much more than that. Any HTML document (or for that matter any SGML document or XML document) is a tree structure. For example, the following document and tree structure are similar (although not identical — see the notes on [whitespace in the DOM](/es/docs/Whitespace_in_the_DOM)):

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

When Mozilla parses a document, it builds a content tree and then uses it to display the document.

The terms used to describe trees show up often in the DOM Level 1 Core. Each of the boxes I drew in the tree above is a node in the tree. The line above a node expresses a parent-child relationship: the node on top is the parent, and the node on the bottom is the child. Two children of the same parent are therefore siblings. Similarly, one can refer to ancestors and descendants. (Cousins are too messy, though.)

## What does the DOM Level 1 Core let me do?

The W3C DOM Level 1 allows you to change the content tree _any way you want_. It is powerful enough to build any HTML document from scratch. It allows authors to change anything in the document from script, at any time. The easiest way for web page authors to change the DOM dynamically is using JavaScript. In JavaScript, the document is accessible the same way it has been in older browsers: from the `document` property of the global object. This `document` object implements the [Document interface](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document) from the W3C's DOM Level 1 spec.

## A simple example

Suppose the author wants to take the above document and change the contents of the header, and write two paragraphs instead of one. The following script would do the job:

### HTML Content

```html
<body>
  <input type="button" value="Change this document." onclick="change()" />
  <h2>Header</h2>
  <p>Paragraph</p>
</body>
```

### JavaScript Content

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

{{ EmbedLiveSample('A_simple_example', 800, 300) }}

You can see this script as [a complete example](example.html).

## How can I learn more?

Now that you are familiar with the basic concepts of the DOM, there is a document explaining the [DOM Level 1 fundamental methods](/es/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces). It is the follow-up to this document.

See also the [DOM Level 1 Core specification](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) from the W3C. It's a reasonably clear spec, although it is formal. The main thing that's useful to authors is the description of the different DOM objects and all their properties and methods. Also see our [other DOM documentation](/es/docs/DOM).

**Original Document Information**

- Author(s): L. David Baron \<dbaron at dbaron dot org>
- Copyright Information: © 1998-2005 by individual mozilla.org contributors; content available under a [Creative Commons license](http://www.mozilla.org/foundation/licensing/website-content.html)
