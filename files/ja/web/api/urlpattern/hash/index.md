---
title: "URLPattern: hash プロパティ"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`hash`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のフラグメント部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、 `books/:id` をハッシュ部分として指定しています。このパターンは、 `books/` で始まり、任意の文字列識別子で終わるフラグメントと一致します。

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
