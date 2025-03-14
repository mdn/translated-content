---
title: "URL: searchParams プロパティ"
short-title: searchParams
slug: Web/API/URL/searchParams
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("URL API")}}

**`searchParams`** は {{domxref("URL")}} インターフェイスの読み取り専用プロパティで、URL に含まれる {{httpmethod("GET")}} デコードされたクエリー引数へのアクセスを可能にする {{domxref("URLSearchParams")}} オブジェクトを返します。

{{AvailableInWorkers}}

## 値

{{domxref("URLSearchParams")}} オブジェクト。

## 例

ページの URL が `https://example.com/?name=Jonathan%20Smith&age=18` である場合、次を使用して `name` および `age` 引数を解釈できます。

```js
let params = new URL(document.location).searchParams;
let name = params.get("name"); // 文字列 "Jonathan Smith" です。
let age = parseInt(params.get("age")); // 数値 18 です。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
