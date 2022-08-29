---
title: HTMLFormElement.action
slug: Web/API/HTMLFormElement/action
tags:
  - DOM
  - Forms
  - Reference
translation_of: Web/API/HTMLFormElement/action
---
## 概要

{{HTMLElement("form")}} 要素の action を取得 / 設定します。

## 構文

```
string = form.action; //取得
form.action = string; //設定
```

## 例

```js
form.action = "/cgi-bin/publish";
```

## 注記

フォームの action はフォームが投稿されたときサーバ上で実行されるプログラムです。このプロパティは読み書きともに可能です。

## 仕様書

- [HTML 5, Section 4.10.19.6, Form submission](http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-fs-method)
- [DOM Level 2 HTML: action](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-74049184)
