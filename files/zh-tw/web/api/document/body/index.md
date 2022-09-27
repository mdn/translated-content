---
title: Document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

回傳目前文件的 {{HTMLElement("body")}} 或 {{HTMLElement("frameset")}} 節點，如元素不存在則回傳 `null`。

## 語法

```plain
var objRef = document.body;
document.body = objRef;
```

## 範例

```js
// in HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

var aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## 備註

`document.body` is the element that contains the content for the document. In documents with `<body>` contents, returns the `<body>` element, and in frameset documents, this returns the outermost `<frameset>` element.

Though `body` is settable, setting a new body on a document will effectively remove all the current children of the existing `<body>` element.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("document.head")}}
