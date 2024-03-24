---
title: JavaScript の型付き配列
slug: Web/JavaScript/Guide/Typed_arrays
---

{{JsSidebar("Advanced")}}

**JavaScript の型付き配列**は配列状のオブジェクトであり、生のバイナリーデータにアクセスする手段を提供します。

{{jsxref("Array")}} オブジェクトは動的に拡大または縮小され、任意の JavaScript 値を持つことができます。JavaScript エンジンは、これらの配列を高速化するために最適化を実施します。しかしながら、音声や動画の操作、WebSocket を使った生データへのアクセスなどの機能が加わり、ウェブアプリケーションがどんどん強力になるにつれて、 JavaScript コードで型付き配列を用いて生データを高速に簡単に操作できると便利な場面があることが分かってきました。そこで、型付き配列の登場です。 JavaScript の型付き配列の各要素は、 8 ビットの整数から 64 ビットの浮動小数点数まで、いくつかの対応している形式のうちの 1 つの生のバイナリー値です。

ただし、型付き配列を通常の配列と混同しては*いけません*。型付き配列に対して {{jsxref("Array.isArray()")}} を呼び出すと `false` を返します。また、通常の配列では使用できるが型付き配列では対応していないメソッドがあります（例えば push や pop）。

## バッファーとビュー: 型付き配列の構造

最大限の柔軟性と効率性を達成するために、JavaScript の型付き配列では **バッファー** と **ビュー** に実装を分けています。バッファー（{{jsxref("ArrayBuffer")}} オブジェクトで実装）は、データの塊を表すオブジェクトです。これは特に形式がなく、またその中身にアクセスする手段を提供しません。バッファーに格納されている情報にアクセスするには、ビューを使用する必要があります。ビューはコンテキスト（データの種類、開始位置のオフセット、要素の数）を提供し、データを実際の型付き配列に返します。

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}} は、一般的な固定長のバイナリーデータのバッファーを示すために使用するデータ型です。 `ArrayBuffer` の内容物を直接操作することはできません。代わりにバッファーを特定の形式で表現し、またバッファーの内容物を読み書きするために使用する、型付き配列のビューまたは {{jsxref("DataView")}} を作成します。

### 型付き配列のビュー

型付き配列のビューは自身を表現する名称を持ち、`Int8`、`Uint32`、`Float64` などの一般的な数値型のビューを提供します。特別な型付き配列のビューとして `Uint8ClampedArray` があります。これは、値を 0 から 255 の間に制限します。例えば [Canvas のデータ処理](/ja/docs/Web/API/ImageData)に役立ちます。

| 型                              | 値の範囲                                               | バイト数 | 説明                                                              | Web IDL 型            | 同等の C の型                   |
| ------------------------------- | ------------------------------------------------------ | -------- | ----------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | -128 ～ 127                                            | 1        | 8 ビット 2 の補数方式の符号付き整数値                             | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}        | 0 ～ 255                                               | 1        | 8 ビット符号なし整数値                                            | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | 0 ～ 255                                               | 1        | 8 ビット符号なし整数値（切り詰め）                                | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}        | -32768 ～ 32767                                        | 2        | 16 ビット 2 の補数方式の符号付き整数値                            | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}       | 0 ～ 65535                                             | 2        | 16 ビット符号なし整数値                                           | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}        | -2147483648 ～ 2147483647                              | 4        | 32 ビット 2 の補数方式の符号付き整数値                            | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}       | 0 ～ 4294967295                                        | 4        | 32 ビット符号なし整数値                                           | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}      | `-3.4E38` ～ `3.4E38` および `1.2E-38` が最小の正の値  | 4        | 32 ビットIEEE 浮動小数点数 (7 桁の有効数字、例えば `1.123456`)    | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}      | `-1.8E308` ～ `1.8E308` および `5E-324` が最小の正の値 | 8        | 64 ビットIEEE 浮動小数点数 (16 桁の有効数字、例えば `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> ～ 2<sup>63</sup> - 1                  | 8        | 64 ビット 2 の補数方式の符号付き整数値                            | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}    | 0 ～ 2<sup>64</sup> - 1                                | 8        | 64 ビット符号なし整数値                                           | `bigint`              | `uint64_t (unsigned long long)` |

### DataView

{{jsxref("DataView")}} は、任意のデータをバッファーに読み書きするためのゲッター/セッター API を提供する、低レベルインターフェイスです。これは、例えばさまざまな型のデータを扱う場合に役立ちます。型付き配列のビューは、プラットフォームのネイティブのバイト順 ({{Glossary("Endianness")}}) になります。`DataView` では、バイト順を制御できます。既定でははビッグエンディアンですが、ゲッター/セッターメソッドでリトルエンディアンに設定できます。

## 型付き配列を使用する Web API

これらは、型付き配列を利用する API の例です。他にもありますが、常に追加されています。

- [`FileReader.prototype.readAsArrayBuffer()`](/ja/docs/Web/API/FileReader/readAsArrayBuffer)
  - : `FileReader.prototype.readAsArrayBuffer()` メソッドは、指定した [`Blob`](/ja/docs/Web/API/Blob) または [`File`](/ja/docs/Web/API/File) の内容物の読み取りを開始します。
- [`XMLHttpRequest.prototype.send()`](/ja/docs/Web/API/XMLHttpRequest/send)
  - : `XMLHttpRequest` のインスタンスの `send()` メソッドが、型付き配列と {{jsxref("ArrayBuffer")}} オブジェクトを引数としてサポートしました。
- [`ImageData.data`](/ja/docs/Web/API/ImageData)
  - : これは `0` から `255` の間の整数値である、RGBA データを持つ一次元配列を表す {{jsxref("Uint8ClampedArray")}} です。

## 例

### バッファーと合わせてビューを使用する

始めにバッファーの作成が必要であり、ここでは 16 バイト固定長とします。

```js
const buffer = new ArrayBuffer(16);
```

これで、全体が 0 で初期化されたメモリー領域ができました。しかし、そのバッファーに対してできることはあまりありません。バッファーが実際に 16 バイトの大きさであることを確認する程度のことはできます。

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

このバッファーで実際の作業を行う前に、ビューを作成しなければなりません。バッファー内のデータを 32 ビット符号付き整数値の配列として扱うビューを作成してみましょう。

```js
const int32View = new Int32Array(buffer);
```

この時点で配列のフィールドへ、通常の配列と同じようにアクセスすることが可能になります。

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

これは配列を値 `0`, `2`, `4`, `6` の 4 つのエントリ (4 つのエントリが各 4 バイトで、合計 16 バイト) で埋めます。

### 同一のデータに対する複数のビュー

同一のデータに対して複数のビューを作成できることを考えると、それらは実に興味深いものになります。例えば、前出のコードの続きを以下のようにします。

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

ここでは、同一のバッファーを既存の 32 ビット値のビューと共有する 16 ビット整数値のビューを作成して、バッファー内の値すべてを 16 ビット整数値として出力しています。すると、`0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` という出力を得ます。

ここで一歩進みましょう。以下のコードについて考えてみてください。

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

このコードの出力は `"Entry 0 in the 32 ビットarray is now 32"` になります。

言い換えると、2 つの配列は同じデータバッファーを異なる形式で取り扱う単純なビューであるということです。同様のことを、任意の[ビュー型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)で行うことができます。

### 複合データ構造を扱う

1 つのバッファーを、バッファー内において異なるオフセットで始まり、またタイプが異なる複数のビューと結びつけることで、複数の種類のデータを持つデータオブジェクトを取り扱うことが可能になります。これにより、例えば [WebGL](/ja/docs/Web/API/WebGL_API) の複合データ構造やデータファイルを取り扱うことが可能になります。

以下の C 構造体について考えてみましょう。

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

このような形式のデータを含むバッファーは、以下のようにアクセスできます。

```js
const buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

例えば、合計金額には `amountDueView[0]` でアクセスできます。

> **メモ:** C 構造体における[データ構造の配置](http://ja.wikipedia.org/wiki/データ構造アライメント)は機種依存です。これらのデータ埋め込みの違いに注意および配慮してください。

### 通常の配列への変換

型付き配列を処理した後は、 {{jsxref("Array")}} プロトタイプの利点を享受するため通常の配列に変換することが、有用な場合があります。これは {{jsxref("Array.from()")}} を使用する、あるいは `Array.from` がサポートされていなければ以下のコードを使用して実現できます。

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
```

同様に{{jsxref("operators/spread_syntax", "スプレッド演算子", "", 1)}}を使用するとこうなります。

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = [...typedArray];
```

または、 `Array.from()` に対応していない場合は次のコードを使用するとこうなります。

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.prototype.slice.call(typedArray);
```

## 関連情報

- [Base64 でエンコードされた文字列から `ArrayBuffer` または型付き配列を取得](/ja/docs/Glossary/Base64#appendix_decode_a_base64_string_to_uint8array_or_arraybuffer)
- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [Typed Arrays: Binary Data in the Browser](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- [エンディアン](/ja/docs/Glossary/Endianness)
