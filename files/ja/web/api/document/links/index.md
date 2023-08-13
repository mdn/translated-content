---
title: document.links
slug: Web/API/Document/links
---

{{ApiRef}}

## 概要

`links` プロパティは、文書中の、 `href` 属性の値を持つすべての {{htmlelement("area")}} 要素とアンカー要素のコレクションを返します。

## 構文

```
nodeList = document.links;
```

## 例

```js
var links = document.links;

for (var i = 0; i < links.length; i++) {
  var linkHref = document.createTextNode(links[i].href);
  var lineBreak = document.createElement("br");

  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## 仕様書

- [DOM Level 2 HTML: links](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-7068919)
