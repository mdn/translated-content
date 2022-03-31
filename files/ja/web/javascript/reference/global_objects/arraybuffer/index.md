---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
tags:
  - ArrayBuffer
  - クラス
  - JavaScript
  - リファレンス
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.ArrayBuffer
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---
{{JSRef}}

**`ArrayBuffer`** オブジェクトは、一般的な固定長の生のバイナリーデータバッファーを表現するために使用します。

`ArrayBuffer` はバイトの配列で、他の言語ではよく「バイト配列」と呼ばれます。`ArrayBuffer` の内容を直接操作することはできません。代わりに、バッファーを特定の形式で表現する[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)または {{jsxref("DataView")}} オブジェクトのいずれかを作成して、バッファーの内容を読み書きします。

[`ArrayBuffer()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) コンストラクターは、指定した長さの `ArrayBuffer` をバイト単位で作成します。既存のデータから、たとえば、[Base64](/ja/docs/Glossary/Base64) 文字列や[ローカルファイルから](/ja/docs/Web/API/FileReader/readAsArrayBuffer)から配列バッファーを取得することもできます。

## コンストラクター

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : 新しい `ArrayBuffer` オブジェクトを作成します。

## 静的プロパティ

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 派生オブジェクトを作成する際に使用するコンストラクター関数です。

## 静的メソッド

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : `arg` が<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray">型付き配列オブジェクト</a>や {{jsxref("DataView")}} のような ArrayBuffer ビューのいずれかである場合は `true` を返します。それ以外の場合は `false` を返します。

## インスタンスプロパティ

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : `ArrayBuffer` の長さ (バイト単位) で、読み取り専用です。これは配列が構築されたときに設定され、変更することはできません。

## インスタンスメソッド

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 新しい `ArrayBuffer` に、`begin` (の位置) から `end` (の手前) までのバイトのコピーを入れて返します。`begin` または `end` のどちらかが負の値の場合は、配列の先頭からではなく、配列の末尾からの位置を指します。

## 例

### ArrayBuffer の作成

この例では、バッファーを参照する {{jsxref("Int32Array")}} ビューを持つ 8 バイトバッファーを作成します。

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `ArrayBuffer` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays) で利用できます
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
