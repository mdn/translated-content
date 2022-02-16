---
title: WebAssembly.validate()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/validate
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - validate
browser-compat: javascript.builtins.WebAssembly.validate
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/validate
---
{{JSRef}}

**`WebAssembly.validate()`** 関数は WebAssembly バイナリーコードの[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)を検証し、そのバイト列が有効な wasm モジュールか (`true`)、そうでないか (`false`) を返します。

## 構文

```js
WebAssembly.validate(bufferSource)
```

### 引数

- `bufferSource`
  - : 検証する WebAssembly バイナリーコードを含む[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)または [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

### 返値

有効な wasm モジュールであるか (`true`)、そうでないか (`false`) を示す論理値です。

### 例外

`bufferSource` が[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)または [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) でない場合、{{jsxref("TypeError")}} が発生します。

## 例

### validate の使用

以下の例 (`validate.html` の[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/validate.html)と[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html) をご確認ください) は .wasm モジュールを読み取って型付き配列に変換します。次に、 `validate()` メソッドを使用してモジュールが有効かどうかをチェックします。</p>

```js
fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(function(bytes) {
  var valid = WebAssembly.validate(bytes);
  console.log("The given bytes are "
    + (valid ? "" : "not ") + "a valid wasm module");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
