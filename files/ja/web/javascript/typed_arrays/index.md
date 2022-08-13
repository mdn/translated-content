---
title: JavaScript 型付き配列
slug: Web/JavaScript/Typed_arrays
tags:
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Typed_arrays
---
{{JsSidebar("Advanced")}}

**JavaScript の型付き配列**は配列状のオブジェクトであり、生のバイナリーデータにアクセスする手段を提供します。すでにご存知のとおり、{{jsxref("Array")}} オブジェクトは動的に拡大または縮小され、任意の JavaScript 値を持つことができます。JavaScript エンジンは、これらの配列を高速化するために最適化を実施します。

しかしながら、オーディオやビデオの操作、WebSocket を使った生データへのアクセスなどの機能が加わり、Web アプリケーションがどんどん強力になるにつれて、JavaScript コードで型付き配列を用いて生データを高速に簡単に操作できると便利な場面があることが分かってきました。そこで、型付き配列の登場です。JavaScript の型付き配列の各エントリは、8 ビットの整数から 64 ビットの浮動小数点数まで、いくつかのサポートされている形式のうちの 1 つの生のバイナリー値です。

ただし、型付き配列を通常の配列と*混同してはいけません*。型付き配列に対して {{jsxref("Array.isArray()")}} を呼び出すと `false` を返します。また、通常の配列では使用できるが型付き配列ではサポートされないメソッドがあります (例えば push や pop)。

## バッファとビュー: 型付き配列の構造

最大限の柔軟性と効率性を達成するために、JavaScript の型付き配列では **バッファ** と **ビュー** に実装を分けています。バッファ ({{jsxref("ArrayBuffer")}} オブジェクトで実装) は、データの塊を表すオブジェクトです。これは特に形式がなく、またその中身にアクセスする手段を提供しません。バッファに格納されている情報にアクセスするには、ビューを使用することが必要です。ビューはコンテキスト (データの種類、開始位置のオフセット、要素の数) を提供し、データを実際の型付き配列に返します。

![Typed arrays in an ArrayBuffer](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}} は、一般的な固定長のバイナリーデータのバッファを示すために使用するデータ型です。`ArrayBuffer` の内容物を直接操作することはできません。代わりにバッファを特定の形式で表現し、またバッファの内容物を読み書きするために使用する、型付き配列のビューまたは {{jsxref("DataView")}} を作成します。

### 型付き配列のビュー

型付き配列のビューは自身を表現する名称を持ち、`Int8`、`Uint32`、`Float64` などの一般的な数値型のビューを提供します。特別な型付き配列のビューとして `Uint8ClampedArray` があります。これは、値を 0 から 255 の間に制限します。例えば [Canvas のデータ処理](/ja/docs/Web/API/ImageData)に役立ちます。

| 型                                       | 値の範囲                          | サイズ (バイト数) | 説明                                                           | Web IDL 型            | 同等の C 型                     |
| ---------------------------------------- | --------------------------------- | ----------------- | -------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` から `127`                 | 1                 | 8 ビット 2 の補数方式の符号付き整数値                          | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` から `255`                    | 1                 | 8 ビット 符号なし整数値                                        | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` から `255`                    | 1                 | 8 ビット 符号なし整数値 (切り詰め)                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` から `32767`             | 2                 | 16 ビット 2 の補数方式の符号付き整数値                         | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` から `65535`                  | 2                 | 16 ビット 符号なし整数値                                       | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` から `2147483647`   | 4                 | 32 ビット 2 の補数方式の符号付き整数値                         | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` から `4294967295`             | 4                 | 32 ビット 符号なし整数値                                       | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2`×`10-38` から `3.4`×`1038`   | 4                 | 32 ビット IEEE 浮動小数点数 (7 桁の有効数字 例：`1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5.0`×`10-324` から `1.8`×`10308` | 8                 | 64 ビット IEEE 浮動小数点数 (16 桁の有効数字 例：`1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-263` から `263-1`               | 8                 | 64 ビット 2 の補数方式の符号付き整数値                         | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` から `264-1`                  | 8                 | 64 ビット 符号なし整数値                                       | `bigint`              | `uint64_t (unsigned long long)` |

### DataView

{{jsxref("DataView")}} は、任意のデータをバッファに読み書きするための getter/setter API を提供する、ローレベルインターフェイスです。これは、例えばさまざまな型のデータを扱う場合に役立ちます。型付き配列のビューは、プラットフォームのネイティブのバイトオーダ ({{Glossary("Endianness")}}) になります。`DataView` では、バイトオーダを制御できます。デフォルトはビッグエンディアンですが、getter/setter メソッドでリトルエンディアンに設定できます。

## 型付き配列を使用する Web API

これらは、型付き配列を利用する API の例です。他にもありますが、常に追加されています。

- [`FileReader.prototype.readAsArrayBuffer()`](</ja/docs/Web/API/FileReader#readAsArrayBuffer()> "Web/API/FileReader#readAsArrayBuffer()")
  - : `FileReader.prototype.readAsArrayBuffer()` メソッドは、指定した [`Blob`](/ja/docs/Web/API/Blob "DOM/Blob") または [`File`](/ja/docs/Web/API/File "DOM/File") の内容物の読み取りを開始します。
- [`XMLHttpRequest.prototype.send()`](</ja/docs/Web/API/XMLHttpRequest#send()> "Web/API/XMLHttpRequest#send()")
  - : `XMLHttpRequest` のインスタンスの `send()` メソッドが、型付き配列と {{jsxref("ArrayBuffer")}} オブジェクトを引数としてサポートしました。
- [`ImageData.data`](/ja/docs/Web/API/ImageData)
  - : これは `0` から `255` の間の整数値である、RGBA データを持つ一次元配列を表す {{jsxref("Uint8ClampedArray")}} です。

## 例

### バッファと合わせてビューを使用する

始めにバッファの作成が必要であり、ここでは 16 バイト固定長とします:

```js
let buffer = new ArrayBuffer(16);
```

これで、全体が 0 で初期化されたメモリー領域ができました。しかし、そのバッファに対してできることはあまりありません。バッファが実際に 16 バイトの大きさであることを確認する程度のことはできます:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

このバッファで実際の作業を行う前に、ビューを作成しなければなりません。バッファ内のデータを 32 ビット符号付き整数値の配列として扱うビューを作成してみましょう:

```js
let int32View = new Int32Array(buffer);
```

この時点で配列のフィールドへ、通常の配列と同じようにアクセスすることが可能になります:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

これは配列を値 `0`, `2`, `4`, `6` の 4 つのエントリ (4 つのエントリが各 4 バイトで、合計 16 バイト) で埋めます。

### 同一のデータに対する複数のビュー

同一のデータに対して複数のビューを作成できることを考えると、それらは実に興味深いものになります。例えば、前出のコードの続きを以下のようにします:

```js
let int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log('Entry ' + i + ': ' + int16View[i]);
}
```

ここでは、同一のバッファを既存の 32 ビット値のビューと共有する 16 ビット整数値のビューを作成して、バッファ内の値すべてを 16 ビット整数値として出力しています。すると、`0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` という出力を得ます。

ここで一歩進みましょう。以下のコードについて考えてみてください:

```js
int16View[0] = 32;
console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);
```

このコードの出力は `"Entry 0 in the 32-bit array is now 32"` になります。言い換えると、2 つの配列は同じデータバッファを異なる形式で取り扱う単純なビューであるということです。同様のことを、任意の[ビュー型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects "JavaScript typed arrays/ArrayBufferView#Typed array subclasses")で行うことができます。

### 複合データ構造を扱う

1 つのバッファを、バッファ内において異なるオフセットで始まり、またタイプが異なる複数のビューと結びつけることで、複数の種類のデータを持つデータオブジェクトを取り扱うことが可能になります。これにより、例えば [WebGL](/ja/docs/Web/WebGL "WebGL") の複合データ構造、データファイル、[js-ctypes](/ja/docs/Mozilla/js-ctypes "js-ctypes") を使用する際に必要な C 構造体を取り扱うことが可能になります。

以下の C 構造体について考えてみましょう:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

このような形式のデータを含むバッファは、以下のようにアクセスできます:

```js
let buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

let idView = new Uint32Array(buffer, 0, 1);
let usernameView = new Uint8Array(buffer, 4, 16);
let amountDueView = new Float32Array(buffer, 20, 1);
```

例えば、合計金額には `amountDueView[0]` でアクセスできます。

> **Note:** **注記:** C 構造体における[データ構造の配置](http://en.wikipedia.org/wiki/Data_structure_alignment)は機種依存です。これらのデータ埋め込みの違いに注意および配慮してください。

### 通常の配列に転換する

型付き配列を処理した後は、{{jsxref("Array")}} プロトタイプの利点を享受するため通常の配列に変換することが、有用な場合があります。これは {{jsxref("Array.from")}} を使用する、あるいは `Array.from` がサポートされていなければ以下のコードを使用して実現できます。

```js
let typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
```

## 仕様

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.Int8Array")}}

## 関連情報

- [Getting `ArrayBuffer`s or typed arrays from _Base64_-encoded strings](/ja/docs/Web/JavaScript/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [`StringView` – a C-like representation of strings based on typed arrays](/ja/docs/Code_snippets/StringView "/ja/docs/Web/JavaScript/Typed_arrays/StringView")
- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [Typed Arrays: Binary Data in the Browser](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- [Endianness](/ja/docs/Glossary/Endianness)
