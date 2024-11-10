---
title: "Window: atob() メソッド"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{APIRef("HTML DOM")}}

**`atob()`** は {{domxref("Window")}} インターフェイスのメソッドで、 {{glossary("Base64")}} エンコーディングでエンコードされたデータの文字列をデコードします。 {{domxref("Window.btoa()")}} メソッドを使用して、通信に問題が発生する可能性のあるデータをエンコードして送信し、送信した後に `atob()` メソッドを使用して再度デコードすることができます。例えば、{{Glossary("ASCII")}} の 0 から 31 までのコードような制御文字をエンコードして送信し、デコードすることができます。

任意の Unicode 文字列で使用する場合は、用語集の {{Glossary("Base64")}} の項目の 「Unicode 問題」を参照してください。

## 構文

```js-nolint
atob(encodedData)
```

### 引数

- `encodedData`
  - : base64 でエンコードされたデータが入っているバイナリー文字列（すなわち、文字列のそれぞれの文字がバイナリーデータの各バイトとして扱われる文字列）です。

### 返値

`encodedData` をデコードしたデータを含む ASCII 文字列です。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : `encodedData` が妥当な base64 ではない場合に発行されます。

## 例

```js
const encodedData = window.btoa("Hello, world"); // 文字列をエンコード
const decodedData = window.atob(encodedData); // 文字列をデコード
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`atob` のポリフィル](https://github.com/zloirock/core-js#base64-utility-methods) は [`core-js`](https://github.com/zloirock/core-js) にあります
- [`data` URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("WorkerGlobalScope.atob()")}}: 同じメソッドですが、ワーカーのスコープのものです。
- {{domxref("Window.btoa()")}}
