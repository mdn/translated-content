---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLFormElement/elements
---
{{ApiRef()}}

## 概要

**elements** は、form 要素に含まれるすべてのフォームコントロールを含む [`HTMLCollection`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506) を返します。

index 、または要素の [name](/ja/docs/DOM/element.name) か [id](/ja/docs/DOM/element.id) の何れかを使って個々の要素にアクセスすることができます。

## 構文

```
nodeList =HTMLFormElement.elements
```

## 例

```js
var inputs = document.getElementById("form1").elements;
var inputByIndex = inputs[2];
var inputByName = inputs["login"];
```

## 仕様書

- [HTML5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-elements)
- [DOM Level 2 HTML: elements](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76728479)
