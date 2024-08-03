---
title: "URLSearchParams: size プロパティ"
short-title: size
slug: Web/API/URLSearchParams/size
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

**`URLSearchParams.size`** は {{domxref("URLSearchParams")}} インターフェイスの読み取り専用のプロパティで、検索引数項目の総数を示します。

## 値

数値で、{{domxref("URLSearchParams")}} オブジェクト内の検索引数項目の総数を示します。

## 例

### 検索引数項目数の取得

検索引数項目の総数を取得するには、次のようにします。

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");
searchParams.size; // 4
```

`a` 引数が 2 回与えられますが、 `size` は 3 ではなく、与えられたすべての項目の数 (4) を返すことに注意してください。固有のキーの数を取得するには、{{jsxref("Set")}} などを使用してください。

```js
[...new Set(searchParams.keys())].length; // 3
```

### 検索引数が存在するかどうかをチェック

size` プロパティは、検索引数があるかどうかをチェックするのに便利です。

```js
const url = new URL("https://example.com?foo=1&bar=2");

if (url.searchParams.size) {
  console.log("URL has search parameters!");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("URL.searchParams")}}
- [`URLSearchParams` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
