---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`ArrayBuffer`** オブジェクトは、一般的な生のバイナリーデータバッファーを表現するために使用します。

これはバイトの配列で、他の言語ではよく「バイト配列」と呼ばれます。`ArrayBuffer` の内容を直接操作することはできません。代わりに、バッファーを特定の形式で表現する[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)または {{jsxref("DataView")}} オブジェクトのいずれかを作成して、バッファーの内容を読み書きします。

[`ArrayBuffer()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) コンストラクターは、指定した長さの `ArrayBuffer` をバイト単位で作成します。既存のデータから、たとえば、[Base64](/ja/docs/Glossary/Base64) 文字列や[ローカルファイル](/ja/docs/Web/API/FileReader/readAsArrayBuffer)から配列バッファーを取得することもできます。

`ArrayBuffer` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

## 解説

### ArrayBuffer のサイズ変更

`ArrayBuffer` オブジェクトは `maxByteLength` オプションを指定して {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} コンストラクターを呼び出すことで、サイズを変更することができるようになります。`ArrayBuffer` がサイズ変更可能かどうか、またその最大サイズを知るには、それぞれ {{jsxref("ArrayBuffer/resizable", "resizable")}} と {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} のプロパティにアクセスすれば分かります。サイズ変更可能な `ArrayBuffer` には、 {{jsxref("ArrayBuffer/resize", "resize()")}} を呼び出して新しいサイズを割り当てることができます。新しいバイトは 0 に初期化されます。

これらの機能により、`ArrayBuffer` のサイズ変更がより効率的になります。そうしないと、新しいサイズのバッファーのコピーを持たなければなりません。また、この点で JavaScript が WebAssembly と同等になります（WASM の線形メモリーは [`WebAssembly.Memory.prototype.grow()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) でサイズ変更が可能です）。

### ArrayBuffer の移譲

`ArrayBuffer` オブジェクトは、[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)や[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)など、異なる実行コンテキスト間で[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用して移譲することができます。これは、`ArrayBuffer` を[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)として {{domxref("Worker.postMessage()")}} または {{domxref("ServiceWorker.postMessage()")}} の呼び出しに渡すことで実現されます。純粋な JavaScript では、 {{jsxref("ArrayBuffer/transfer", "transfer()")}} または {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} メソッドを使用して、ある `ArrayBuffer` から他へメモリーの所有権を移すこともできます。

`ArrayBuffer` が移譲されると、元のコピーは分離状態になります。これは、そのコピーが使用できなくなるということです。いかなる時点においても、基盤となるメモリーに実際にアクセスできる `ArrayBuffer` のコピーは一つだけです。分離されたバッファーには以下のような挙動になります。

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} は 0 になります（そのバッファーと、関連付けられた型付き配列ビューの両方で）。
- {{jsxref("ArrayBuffer/resize", "resize()")}} や {{jsxref("ArrayBuffer/slice", "slice()")}} などのメソッドを呼び出すと、{{jsxref("TypeError")}} が発生します。関連付けれれ多型付き配列ビューのメソッドも、同様に `TypeError` が発生します。

`ArrayBuffer` が分離されているかどうかは、 {{jsxref("ArrayBuffer/detached", "detached")}} プロパティで確認することができます。

## コンストラクター

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : 新しい `ArrayBuffer` オブジェクトを作成します。

## 静的プロパティ

- [`ArrayBuffer[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : 派生オブジェクトを作成する際に使用するコンストラクター関数です。

## 静的メソッド

- {{jsxref("ArrayBuffer.isView()")}}
  - : `arg` が[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)や {{jsxref("DataView")}} のような ArrayBuffer ビューのいずれかである場合は `true` を返します。それ以外の場合は `false` を返します。

## インスタンスプロパティ

これらのプロパティは `ArrayBuffer.prototype` で定義されており、すべての `ArrayBuffer` インスタンスで共有されます。

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : `ArrayBuffer`のサイズをバイト単位で指定します。これは配列の構築時に設定され、`ArrayBuffer` がサイズ変更可能な場合にのみ {{jsxref("ArrayBuffer.prototype.resize()")}} メソッドを使用して変更することができます。
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`ArrayBuffer` インスタンスの場合、初期値は {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}} コンストラクターです。
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : 読み取り専用です。`ArrayBuffer` が既に分離されている（移譲済みである）場合は `true`、そうでなければ `false` を返し案す。
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : 読み取り専用で、`ArrayBuffer` のサイズを変更できる最大長をバイト数で指定します。これは配列が構築される際に設定され、変更することはできません。
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : 読み取り専用です。`ArrayBuffer` のサイズを変更できる場合は `true` を、変更できない場合は `false` を返します。
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"ArrayBuffer"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : `ArrayBuffer` を指定したサイズ（バイト単位）にサイズ変更します。
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 新しい `ArrayBuffer` に、`begin` （の位置）から `end` （の手前）までのバイトのコピーを入れて返します。`begin` または `end` のどちらかが負の値の場合は、配列の先頭からではなく、配列の末尾からの位置を指します。
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : このバッファーと同じバイト内容を持つ新しい `ArrayBuffer` を作成し、その後このバッファーを切り離します。
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : このバッファーと同じバイト内容を持つ、新しいリサイズ不可能な `ArrayBuffer` を作成し、その後でこのバッファーを分離します。

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

- [`ArrayBuffer` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
