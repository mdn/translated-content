---
title: HTMLTemplateElement.content
slug: Web/API/HTMLTemplateElement/content
tags:
  - API
  - HTML DOM
  - HTMLTemplateElement
  - プロパティ
  - リファレンス
  - ウェブコンポーネント
browser-compat: api.HTMLTemplateElement.content
translation_of: Web/API/HTMLTemplateElement/content
---
{{APIRef("Web Components")}}

**`HTMLTemplateElement.content`** プロパティは、 `<template>` 要素のテンプレートの内容 ({{domxref("DocumentFragment")}}) を返します。

## 構文

```js
var documentFragment = templateElement.content
```

## 例

```js
var templateElement = document.querySelector("#foo");
var documentFragment = templateElement.content.cloneNode(true);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTemplateElement")}}
