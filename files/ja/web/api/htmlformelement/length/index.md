---
title: HTMLFormElement.length
slug: Web/API/HTMLFormElement/length
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLFormElement/length
---
{{ApiRef}}

## 概要

`length` は {{htmlelement("form")}} 要素内のフォームコントロールの数を返します。

## 構文

```
integer = form.length
```

## 例

```js
if (document.getElementById("form1").length > 1) {
  // more than one form control here
}
```

## 仕様書

- [DOM Level 2: length](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#HTML-HTMLFormElement-length)
