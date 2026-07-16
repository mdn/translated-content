---
title: "URLPattern: hash プロパティ"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`hash`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のフラグメント部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたハッシュのパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、 コンストラクターに渡された [`baseURL` からの継承値](/ja/docs/Web/API/URLPattern/URLPattern#baseurl_からの継承値)、任意のハッシュに一致するデフォルト値 (`"*"`) のいずれかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、 `books/:id` をハッシュ部分として指定して、そのプロパティをログ出力します。
このパターンは、 `books/` で始まり、任意の文字列識別子で終わるフラグメントと一致します。

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
console.log(pattern.test("https://example.org#books/123")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
