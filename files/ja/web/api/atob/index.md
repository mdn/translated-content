---
title: WindowOrWorkerGlobalScope.atob()
slug: Web/API/atob
original_slug: Web/API/WindowOrWorkerGlobalScope/atob
---

{{APIRef("HTML DOM")}}

**`WindowOrWorkerGlobalScope.atob()`** 関数は、 {{glossary("Base64")}} エンコーディングでエンコードされたデータの文字列をデコードします。 {{domxref("WindowOrWorkerGlobalScope.btoa","btoa()")}} メソッドを使用して、通信に問題が発生する可能性のあるデータをエンコードして送信し、送信した後に `atob()` メソッドを使用して再度デコードすることができます。例えば、ASCII の 0 から 31 までのコードような制御文字をエンコードして送信し、デコードすることができます。

Unicode や UTF-8 文字列の使用については、 {{domxref("WindowOrWorkerGlobalScope.btoa", "btoa()")}} の「Uncode 文字列」の節を参照してください。

## 構文

```
var decodedData = scope.atob(encodedData);
```

### 引数

- `encodedData`
  - : エンコードされたデータが入っている[バイナリ文字列](/ja/docs/Web/API/DOMString/Binary)です。

### 返値

`encodedData` をデコードしたデータを含む ASCII 文字列です。

### 例外

- {{domxref("DOMException")}} (name: `InvalidCharacterError`)
  - : `encodedData` が妥当な base64 ではない場合に発行されます。

## 例

```js
const encodedData = window.btoa('Hello, world'); // 文字列をエンコード
const decodedData = window.atob(encodedData); // 文字列をデコード
```

## ポリフィル

対応していないブラウザーでは、 <https://github.com/MaxArt2501/base64-js/blob/master/base64.js> のポリフィルを利用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`data` URIs](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- {{domxref("WindowOrWorkerGlobalScope.btoa","btoa()")}}
- [Components.utils.importGlobalProperties](/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties)
