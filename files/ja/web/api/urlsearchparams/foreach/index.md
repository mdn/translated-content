---
title: "URLSearchParams: forEach() メソッド"
short-title: forEach()
slug: Web/API/URLSearchParams/forEach
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("URL API")}}

**`forEach()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドを使用すると、コールバック関数を介してこのオブジェクトに含まれるすべての値を反復処理できます。

{{availableinworkers}}

## 構文

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### 引数

- `callback`

  - : それぞれの要素に対して実行される関数で、以下の引数が渡されます。

    - `value`
      - : `URLSearchParams` オブジェクトで現在処理中の項目の値です。
    - `key`
      - : `URLSearchParams` オブジェクトで現在処理中の項目のキーです。
    - `searchParams`
      - : `forEach()` が呼び出された `URLSearchParams` オブジェクトです。

- `thisArg` {{optional_inline}}
  - : `callback` の実行中に `this` として使用される値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// 値の記録
searchParams.forEach((value, key) => {
  console.log(value, key);
});
```

結果は次のとおりです。

```plain
value1 key1
value2 key2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("URL")}} インターフェイス。
