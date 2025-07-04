---
title: BackgroundFetchRegistration.matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchRegistration")}} インターフェイスの **`matchAll()`** メソッドは、マッチする {{domxref("BackgroundFetchRecord")}} オブジェクトの配列を返します。

## 構文

```js-nolint
matchAll(request)
matchAll(request,options)
```

### 引数

- `request`
  - : 取得したい record の {{domxref("Request")}}。これは {{domxref("Request")}} オブジェクトまたは URL です。
- `options` {{optional_inline}}
  - : `match` 操作のオプションを指定するオブジェクトです。以下が利用可能です。
    - `ignoreSearch`
      - : URL 中のクエリー文字列を無視するかどうか指定するbool 値です。例えば `true` のとき、`http://foo.com/?value=bar` の `?value=bar` 部分はマッチ処理で無視されます。デフォルトは `false` です。
    - `ignoreMethod`
      - : bool 値です。`true` のとき、マッチ処理は {{domxref("Request")}} の `http` メソッドを検証しません。`false` (デフォルト値)の場合、`GET` と `HEAD` のみ許可されます。
    - `ignoreVary`
      - : bool 値です。`true` は [`VARY`](/ja/docs/Web/HTTP/Reference/Headers/Vary) ヘッダーを無視することを意味します。デフォルトは `false` です。

### 返値

マッチした全ての {{domxref("BackgroundFetchRecord")}} オブジェクトの配列で解決される {{jsxref("Promise")}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("BackgroundFetchRegistration.recordsAvailable","recordsAvailable")}} フラグが `false` のとき、発生します。 これは、進行中のフェッチが存在しないことを意味します。

## 例

`matchAll()` を引数なしで呼び出すことで、バックグラウンドフェッチの全ての record を取得することができます。

```js
const records = await bgFetch.matchAll();
console.log(records); // BackgroundFetchRecord オブジェクトの配列
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
