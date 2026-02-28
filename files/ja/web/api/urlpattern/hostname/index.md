---
title: "URLPattern: hostname プロパティ"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`hostname`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のホスト名部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたホスト名のパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、 コンストラクターに渡された [`baseURL` からの継承値](/ja/docs/Web/API/URLPattern/URLPattern#baseurl_からの継承値)、任意のホスト名に一致するデフォルト値 (`"*"`) のいずれかです。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、 `*.example.org` を `hostname` 部分として指定しています。このパターンは、`example.org` の直接のサブドメインであるホスト名すべてに一致します。

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
console.log(pattern.test("https://horses.example.org")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
