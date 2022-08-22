---
title: HTMLFormElement.target
slug: Web/API/HTMLFormElement/target
tags:
  - Reference
  - form
translation_of: Web/API/HTMLFormElement/target
---
## 概要

フォームのアクションの対象を取得 / 設定します。

## 構文

```
string = form.target // 取得

form.target = string // 設定
```

## 例

```js
myForm.target = document.frames[1].name;
// フレームセット中の 2 番目のフレームを myForm の操作対象に設定
```

## 仕様書

- [HTML 5, Section 4.10.19.6, Form submission](http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-fs-method)
- [DOM Level 2 HTML: target](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-6512890)
