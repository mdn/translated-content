---
title: "URLSearchParams: set() メソッド"
short-title: set()
slug: Web/API/URLSearchParams/set
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ApiRef("URL API")}}

**`set()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、指定された検索パラメーターに関連付けられた値を指定された値に設定します。一致する値が複数ある場合、このメソッドは他の値を削除します。 検索パラメーターが存在しない場合、このメソッドはそれを作成します。

{{availableinworkers}}

## 構文

```js-nolint
set(name, value)
```

### 引数

- `name`
  - : 設定するパラメーターの名前。
- `value`
  - : 設定するパラメーターの値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 3 つ目のパラメーターを追加
params.set("baz", 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
