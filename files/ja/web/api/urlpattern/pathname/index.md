---
title: "URLPattern: pathname プロパティ"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`pathname`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のパス名部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、
`/books/:id(\\d)` を `pathname` 部分として指定しています。このパターンは、 `/books/` で始まり、整数が続く URL と一致します。

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
