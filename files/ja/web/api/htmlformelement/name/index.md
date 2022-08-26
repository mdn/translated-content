---
title: HTMLFormElement.name
slug: Web/API/HTMLFormElement/name
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLFormElement/name
---
## 概要

form の `name` 属性は、その `form` 要素の名前を文字列として返します。

## 構文

```
string = form.name; //取得
form.name = string; //設定
```

## 例

```js
var form1_Name = document.getElementById("form1").name;

if (form1_Name != document.form.name) {
   // browser doesn't support this form of reference
}
```

## 注意

この属性は読み書きともに可能であり、フォーム名の読取り及び設定に使用できます。

もしフォーム内に "name" と名付けられた要素を含めてしまった場合、その要素が優先され、`name` 属性でのフォームオーナーへのアクセスが出来なくなってしまいます。

Internet Explorer (IE) では、`createElement()` メソッドによって作成された要素に対する `name` 属性を用いての名前の設定 / 書換は許可されていません。

## 仕様書

- [HTML5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-name)
- [DOM Level 2 HTML: name](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-22051454)
