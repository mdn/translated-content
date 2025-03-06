---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{JSRef}}

**`ArrayBuffer`** オブジェクトは、一般的な生のバイナリーデータバッファーを表現するために使用します。

これはバイトの配列で、他の言語ではよく「バイト配列」と呼ばれます。`ArrayBuffer` の内容を直接操作することはできません。代わりに、バッファーを特定の形式で表現する[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)または {{jsxref("DataView")}} オブジェクトのいずれかを作成して、バッファーの内容を読み書きします。

[`ArrayBuffer()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) コンストラクターは、指定した長さの `ArrayBuffer` をバイト単位で作成します。既存のデータから、たとえば、[Base64](/ja/docs/Glossary/Base64) 文字列や[ローカルファイルから](/ja/docs/Web/API/FileReader/readAsArrayBuffer)から配列バッファーを取得することもできます。

`ArrayBuffer` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

## 解説

### ArrayBuffer のサイズ変更

`ArrayBuffer` オブジェクトは `maxByteLength` オプションを指定して {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} コンストラクターを呼び出すことで、サイズを変更することができるようになります。`ArrayBuffer` がサイズ変更可能かどうか、またその最大サイズを知るには、それぞれ {{jsxref("ArrayBuffer/resizable", "resizable")}} と {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} のプロパティにアクセスすれば分かります。サイズ変更可能な `ArrayBuffer` には、 {{jsxref("ArrayBuffer/resize", "resize()")}} を呼び出して新しいサイズを割り当てることができます。新しいバイトは 0 に初期化されます。

これらの機能により、`ArrayBuffer` のサイズ変更がより効率的になります。そうしないと、新しいサイズのバッファーのコピーを持たなければなりません。また、この点で JavaScript が WebAssembly と同等になります（WASM のリニアメモリーは [`WebAssembly.Memory.prototype.grow()`](/ja/docs/WebAssembly/JavaScript_interface/Memory/grow) でサイズ変更が可能です）。

## コンストラクター

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : 新しい `ArrayBuffer` オブジェクトを作成します。

## 静的プロパティ

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 派生オブジェクトを作成する際に使用するコンストラクター関数です。

## 静的メソッド

- {{jsxref("ArrayBuffer.isView()")}}
  - : `arg` が[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)や {{jsxref("DataView")}} のような ArrayBuffer ビューのいずれかである場合は `true` を返します。それ以外の場合は `false` を返します。

## インスタンスプロパティ

これらのプロパティは `ArrayBuffer.prototype` で定義されており、すべての `ArrayBuffer` インスタンスで共有されます。

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : `ArrayBuffer`のサイズをバイト単位で指定します。これは配列の構築時に設定され、`ArrayBuffer` がサイズ変更可能な場合にのみ {{jsxref("ArrayBuffer.prototype.resize()")}} メソッドを使用して変更することができます。
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}} {{experimental_inline}}
  - : 読み取り専用で、`ArrayBuffer` のサイズを変更できる最大長をバイト数で指定します。これは配列が構築される際に設定され、変更することはできません。
- {{jsxref("ArrayBuffer.prototype.resizable")}} {{experimental_inline}}
  - : 読み取り専用。`ArrayBuffer` のサイズを変更できる場合は `true` を、変更できない場合は `false` を返します。
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`ArrayBuffer` インスタンスの場合、初期値は {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}} コンストラクターです。
- `ArrayBuffer.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"ArrayBuffer"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 新しい `ArrayBuffer` に、`begin` (の位置) から `end` (の手前) までのバイトのコピーを入れて返します。`begin` または `end` のどちらかが負の値の場合は、配列の先頭からではなく、配列の末尾からの位置を指します。
- {{jsxref("ArrayBuffer.prototype.resize()")}} {{experimental_inline}}
  - : `ArrayBuffer` を指定したサイズ（バイト単位）にサイズ変更します。

## 例

### ArrayBuffer の作成

この例では、バッファーを参照する {{jsxref("Int32Array")}} ビューを持つ 8 バイトのバッファーを作成します。

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ArrayBuffer` ポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
