---
title: "URLPattern: search プロパティ"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`search`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL の検索引数部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡された検索引数のパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、 コンストラクターに渡された [`baseURL` からの継承値](/ja/docs/Web/API/URLPattern/URLPattern#baseurl_からの継承値)、任意の検索引数の部分に一致するデフォルト値 (`"*"`) のいずれかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、`*` を `search` 部分として指定しています。
このパターンはワイルドカードですので、任意の検索部分に一致します。

```js
const pattern = new URLPattern({
  search: "q=baby",
});
console.log(pattern.search); // "q=baby"
console.log(pattern.test("https://example.com/shoes?q=baby")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
