---
title: atob()
slug: Web/API/atob
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("HTML DOM")}}

**`atob()`** 関数は、 {{glossary("Base64")}} エンコーディングでエンコードされたデータの文字列をデコードします。 {{domxref("btoa","btoa()")}} メソッドを使用して、通信に問題が発生する可能性のあるデータをエンコードして送信し、送信した後に `atob()` メソッドを使用して再度デコードすることができます。例えば、ASCII の 0 から 31 までのコードような制御文字をエンコードして送信し、デコードすることができます。

Unicode や UTF-8 文字列の使用については、 {{domxref("btoa", "btoa()")}} の「Uncode 文字列」の節を参照してください。

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
const encodedData = btoa("Hello, world"); // 文字列をエンコード
const decodedData = atob(encodedData); // 文字列をデコード
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`atob` のポリフィル](https://github.com/zloirock/core-js#base64-utility-methods) は [`core-js`](https://github.com/zloirock/core-js) にあります
- [`data` URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("btoa","btoa()")}}
