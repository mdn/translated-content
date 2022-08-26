---
title: HTMLFormElement.enctype
slug: Web/API/HTMLFormElement/enctype
tags:
  - Reference
  - form
translation_of: Web/API/HTMLFormElement/enctype
---
## 概要

`enctype` は form 要素のコンテンツタイプの取得 / 設定に用います。

## 構文

```
string = form.enctype // 取得

form.enctype = string // 設定
```

## 例

```js
var firstForm = document.getElementsByTagName("form")[0]; // 文書中の最初の form 要素を取得

firstForm.enctype = "application/x-www-form-urlencoded"; // 設定
alert( firstForm.enctype ); // 確認
```

## 注記

エンコーディングタイプは一般的に "application/x-www-form-urlencoded" となります。

## 仕様書

- [HTML 5, Section 4.10.19.6, Form submission](http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-fs-method)
- [DOM Level 2 HTML: enctype](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-84227810)
