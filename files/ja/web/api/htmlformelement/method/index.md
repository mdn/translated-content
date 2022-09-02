---
title: HTMLFormElement.method
slug: Web/API/HTMLFormElement/method
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLFormElement/method
---
{{APIRef}}概要

`method` は、 フォーム送信時に使用する HTTP メソッドを取得 / 設定する。

## 構文

```
string = form.method; //取得
form.method = string; //設定
```

## 例

```js
var myform = document.forms["myform"];

myform.method = "post";
```

## 仕様書

- [DOM Level 2 HTML: method](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82545539)
