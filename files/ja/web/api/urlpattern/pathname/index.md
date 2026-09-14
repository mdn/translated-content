---
title: "URLPattern: pathname プロパティ"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`pathname`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のパス名部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたパス名のパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、 コンストラクターに渡された [`baseURL` からの継承値](/ja/docs/Web/API/URLPattern/URLPattern#baseurl_からの継承値)、任意のパス名に一致するデフォルト値 (`"*"`) のいずれかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、`/books/:id(\\d)` を `pathname` 部分として指定しています。
このパターンは、 `/books/` で始まり、整数が続く URL と一致します。

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // "/books/:id(\\d)"
console.log(pattern.test("https://example.com/books/8")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
