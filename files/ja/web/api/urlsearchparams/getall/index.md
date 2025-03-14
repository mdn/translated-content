---
title: "URLSearchParams: getAll() メソッド"
short-title: getAll()
slug: Web/API/URLSearchParams/getAll
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ApiRef("URL API")}}

**`getAll()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、指定された検索パラメーターに関連付けられたすべての値を配列として返します。

{{availableinworkers}}

## 構文

```js-nolint
getAll(name)
```

### 引数

- `name`
  - : 返すパラメーターの名前。

### 返値

文字列の配列です。

## 例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 2 つ目の foo パラメーターを追加します。
params.append("foo", 4);

console.log(params.getAll("foo")); // ["1","4"] を表示します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
