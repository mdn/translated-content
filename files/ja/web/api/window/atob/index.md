---
title: "Window: atob() メソッド"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

**`atob()`** は {{domxref("Window")}} インターフェイスのメソッドで、 {{glossary("Base64")}} エンコーディングでエンコードされたデータの文字列をデコードします。 {{domxref("Window.btoa()")}} メソッドを使用して、通信に問題が発生する可能性のあるデータをエンコードして送信し、送信した後に `atob()` メソッドを使用して再度デコードすることができます。例えば、{{Glossary("ASCII")}} の 0 から 31 までのコードような制御文字をエンコードして送信し、デコードすることができます。

{{jsxref("Uint8Array.fromBase64()")}} メソッドを使用することも検討してください。このメソッドは、base64 エンコードされた文字列から `Uint8Array` オブジェクトを作成します。その結果、生のバイト列を含む文字列よりも作業しやすい、バイト配列が生成されます。

## 構文

```js-nolint
atob(encodedData)
```

### 引数

- `encodedData`
  - : {{domxref("Window.btoa()")}} によって生成されたアルファベットを使用した、base64 エンコードされた文字列です。

### 返値

`encodedData` からデコードされた生のバイト列を含むバイナリー文字列です。 JavaScript の文字列は {{glossary("UTF-16")}} でエンコードされているため、これはそれぞれの文字が 256 未満のコードポイントを持ち、 1 バイトのデータを表すことを意味します。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : `encodedData` が妥当な base64 ではない場合に発行されます。

## 例

```js
const encodedData = window.btoa("Hello, world"); // 文字列をエンコード
const decodedData = window.atob(encodedData); // 文字列をデコード
```

その他の例については、{{domxref("Window.btoa()")}} メソッドをご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`atob` のポリフィル](https://github.com/zloirock/core-js#base64-utility-methods) は [`core-js`](https://github.com/zloirock/core-js) にあります
- [`data` URL](/ja/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}: 同じメソッドですが、ワーカーのスコープのものです。
- {{domxref("Window.btoa()")}}
- {{jsxref("Uint8Array.fromBase64()")}}
