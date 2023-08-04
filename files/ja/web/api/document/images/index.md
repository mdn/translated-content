---
title: document.images
slug: Web/API/Document/images
---

{{ApiRef}}

## 概要

`document.images` は、現在の HTML 文書の {{domxref("Image")}} のコレクションを返します。

## 構文

```
var htmlCollection = document.images;
```

## 例

特定の src 属性値を持つ img 要素が文書中に存在する場合にのみ何らかの処理を行う例を以下に示します。

```js
var ilist = document.images;

for (var i = 0; i < ilist.length; i++) {
  if (ilist[i].src == "banner.gif") {
    // bunner.gif が存在した場合の処理
  }
}
```

## プロパティ

- `document.images.length`
  - : 文書中の画像の数を返す

## 注記

`document.images` は DOM HTML の一部であり、HTML 文書に於いてのみ動作します。

## 仕様書

- [DOM Level 2 HTML: HTMLDocument.images](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-90379117)
