---
title: "URLPattern: protocol プロパティ"
short-title: protocol
slug: Web/API/URLPattern/protocol
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`protocol`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のプロトコル部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたプロトコルのパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、 コンストラクターに渡された [`baseURL` からの継承値](/ja/docs/Web/API/URLPattern/URLPattern#baseurl_からの継承値)、任意のプロトコルに一致するデフォルト値 (`"*"`) のいずれかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、`http{s}?` を `protocol` 部分として指定しています。
このパターンは、 `http` および `https` プロトコルと一致します。

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
console.log(pattern.test("https://example.com/shoes?q=baby")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
