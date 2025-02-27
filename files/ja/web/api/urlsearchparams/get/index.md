---
title: "URLSearchParams: get() メソッド"
short-title: get()
slug: Web/API/URLSearchParams/get
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`get()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、指定された検索パラメーターに関連付けられた最初の値を返します。

## 構文

```js-nolint
get(name)
```

### 引数

- `name`
  - : 返すパラメーターの名前。

### 返値

指定された検索パラメーターが見つかった場合は文字列です。それ以外の場合は **`null`** です。

## 例

ページの URL が `https://example.com/?name=Jonathan&age=18` の場合、次のように 'name' および 'age' のパラメーターを解釈できます。

```js
let params = new URLSearchParams(document.location.search);
let name = params.get("name"); // 文字列 "Jonathan" です
let age = parseInt(params.get("age"), 10); // 数値 18 です
```

クエリー文字列に存在しないパラメーターを要求すると、**`null`** が返されます。

```js
let address = params.get("address"); // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
