---
title: JavaScript の型付き配列
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript の型付き配列は配列風のオブジェクトであり、メモリーバッファー内の生のバイナリーデータを読み書きする手段を提供します。

型付き配列は、あらゆる種類の機能において配列を置き換えることを意図したものではありません。バイナリーデータを操作するための使い慣れたインターフェイスを開発者に提供します。これは、音声と映像の操作、 [WebSockets](/ja/docs/Web/API/WebSockets_API) を使用して生のデータにアクセスするなど、プラットフォームの機能とやりとりする際に役立ちます。 JavaScript の型付き配列の各項目は、対応している数多くのフォーマットのうちの 1 つで、 8 ビット整数から 64 ビット浮動小数点数までの生のバイナリー値です。

型付き配列オブジェクトは、配列と多くのメソッドを共有しており、同様の機能を持っています。しかし、型付き配列は通常の配列と混同されるべきではありません。型付き配列で {{jsxref("Array.isArray()")}} を呼び出すと、返値において `false` が返されます。さらに、通常の配列で利用できるメソッドのすべてが型付き配列で対応しているわけではありません（push や pop など）。

最大限の柔軟性と効率性を達成するために、 JavaScript の型付き配列では「バッファー」と「ビュー」に実装を分けています。バッファーは、データの塊を表すオブジェクトです。これは特に形式がなく、またその中身にアクセスする手段を提供しません。バッファーに格納されている情報にアクセスするには、[ビュー](#ビュー)を使用する必要があります。ビューはコンテキスト（データの種類、開始位置のオフセット、要素の数）を提供し、データを実際の型付き配列に返します。

![さまざまな型付き配列が、同じ基盤バッファーのビューとして表示される可能性があることを示す図。それぞれに異なる要素数値と幅が存在します。](typed_arrays.png)

## バッファー

バッファーには {{jsxref("ArrayBuffer")}} と {{jsxref("SharedArrayBuffer")}} の 2 種類があります。どちらもメモリーの範囲の低レベルな表現です。名前に "array" （配列）と付いていますが、配列とはあまり関係がありません。直接読み書きすることはできません。代わりに、バッファーは生のデータを含む一般的なオブジェクトです。バッファーによって表現されるメモリーにアクセスするには、ビューを使用する必要があります。

バッファーは次のアクションに対応しています。

- 割り当て: 新しいバッファーを作成するとすぐに、新しいメモリー範囲が割り当てられ、初期化されて `0` になります。
- コピー: {{jsxref("ArrayBuffer/slice", "slice()")}} メソッドを使用すると、各バイトを手動でコピーするためにビューを作成することなく、メモリーの一部を効率的にコピーすることができます。
- 移譲: `transfer()` および `transferToFixedLength()` メソッドを使用すると、メモリー範囲の所有権を新しいバッファーオブジェクトに移譲することができます。これは、異なる実行コンテキスト間でデータをコピーされることなく移動する際に便利です。移譲後は、元のバッファーは使用できなくなります。`SharedArrayBuffer` は移譲できません（バッファーはすでにすべての実行コンテキストで共有されているため）。
- サイズ変更: {{jsxref("ArrayBuffer/resize", "resize()")}} メソッドを使用すると、メモリー範囲をサイズ変更することができます（事前に設定した {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} の制限を超えない範囲で、より多くのメモリー領域を確保したり、一部のメモリー領域を解放したりすることができます）。 `SharedArrayBuffer` は[伸長](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)することはできますが、縮小することはできません。

`ArrayBuffer` と `SharedArrayBuffer` の違いは、前者は常に単一の実行コンテキストに所有されていることです。 `ArrayBuffer` を異なる実行コンテキストに渡すと、それは移譲され、元の `ArrayBuffer` は使用できなくなります。これにより、同時にメモリーにアクセスできる実行コンテキストは1つだけであることが保証されます。 `SharedArrayBuffer` は、異なる実行コンテキストに渡された場合でも移譲されないため、同時に複数の実行コンテキストからアクセスすることができます。 複数のスレッドが同じメモリー範囲にアクセスする場合は、競合状態が発生する可能性があるため、 {{jsxref("Atomics")}} メソッドなどの操作が役立ちます。

## ビュー

現在、主に 2 種類のビューがあります。型付き配列ビューと {{jsxref("DataView")}} です。 型付き配列は、バイナリーデータを便利に変換できる[ユーティリティメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods)を提供しています。 `DataView` はより低レベルで、データにアクセスする方法を細かく制御することができます。 2 つのビューを使用してデータを読み書きする方法は大きく異なります。

どちらのビューも {{jsxref("ArrayBuffer.isView()")}} が `true` を返します。 どちらも次のプロパティがあります。

- `buffer`
  - : ビューが参照する基盤バッファー。
- `byteOffset`
  - : ビューのバッファーの開始からのオフセット（バイト単位）。
- `byteLength`
  - : ビューの長さ（バイト単位）。

どちらのコンストラクターも、上記 3 つを別個の引数として受け入れますが、型付き配列のコンストラクターでは、 `length` をバイト数ではなく要素数として受け入れます。

### 型付き配列のビュー

型付き配列のビューは自身を表現する名称を持ち、`Int8`、`Uint32`、`Float64` などの一般的な数値型のビューを提供します。特別な型付き配列のビューとして {{jsxref("Uint8ClampedArray")}} があります。これは、値を `0` から `255` の間に制限します。例えば [Canvas のデータ処理](/ja/docs/Web/API/ImageData)に役立ちます。

| 型                              | 値の範囲                              | バイト数 | Web IDL 型            |
| ------------------------------- | ------------------------------------- | -------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 ～ 127                           | 1        | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 ～ 255                              | 1        | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 ～ 255                              | 1        | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 ～ 32767                       | 2        | `short`               |
| {{jsxref("Uint16Array")}}       | 0 ～ 65535                            | 2        | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 ～ 2147483647             | 4        | `long`                |
| {{jsxref("Uint32Array")}}       | 0 ～ 4294967295                       | 4        | `unsigned long`       |
| {{jsxref("Float32Array")}}      | `-3.4E38` ～ `3.4E38`                 | 4        | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8E308` ～ `1.8E308`               | 8        | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> ～ 2<sup>63</sup> - 1 | 8        | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 ～ 2<sup>64</sup> - 1               | 8        | `bigint`              |

すべての型付き配列のビューは、 {{jsxref("TypedArray")}} クラスによって定義されたメソッドとプロパティをすべて持っています。違いは、基礎となるデータ型とバイト単位のサイズのみです。 この点については、「[値のエンコード方式と正規化](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#値のエンコード方式と正規化)」で詳しく説明しています。

型付き配列は、原則として固定長であるため、配列の長さを変更する可能性のある配列メソッドは利用できません。これには、`pop`、`push`、`shift`、`splice`、`unshift` などがあります。 また、入れ子になった型付き配列は存在しないため、`flat`も利用できません。 さらに、 `concat` や `flatMap` などの相対メソッドも、あまり利用価値がないため利用できません。`splice` が利用できないため、 `toSpliced` も利用できません。 その他の配列メソッドはすべて、 `Array` と `TypedArray` で共有されています。

一方、 `TypedArray` には、同じバッファーを共有する複数の型付き配列の操作を最適化する、 `set` および `subarray` メソッドが存在します。 `set()` メソッドは、別の配列または型付き配列のデータを使用して、複数の型付き配列の添字を一度に設定することができます。 2 つの型付き配列が同じバッファーを共有している場合、高速なメモリー移動となるため、操作がより効率的になる可能性があります。 `subarray()` メソッドは、元の型付き配列と同じバッファーを参照する新しい型付き配列ビューを作成しますが、より狭い範囲を対象とします。

型付き配列のバッファーを直接変更せずに、その長さを変更する方法はありません。ただし、型付き配列がサイズ変更可能なバッファーを閲覧しており、固定された `byteLength` を持たない場合、それは「長さ追跡」であり、変更可能なバッファーがサイズ変更されると、自動的にバッファーに合うようにサイズ変更されます。詳細は、[サイズ変更可能なバッファーを閲覧する際の動作](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#サイズ変更可能なバッファー表示時の動作について)を参照してください。

通常の配列と同様に、[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)を使用して型付き配列の要素にアクセスすることができます。 対応するバッファー内のバイトが取得され、数値として解釈されます。 数値を使用してプロパティにアクセスする場合（または、プロパティにアクセスする際には数値は常に文字列に変換されるため、数値の文字列表現を使用する場合）、そのアクセスは型付き配列によってプロキシー化されます。 つまり、オブジェクト自体を操作することはありません。 これは、例えば次のようなことを意味します。

- 範囲外のインデックスにアクセスすると、常に `undefined` が返され、オブジェクト上のプロパティに実際にアクセスすることなく、返値においてそのプロパティがアクセスされたかのように見せかけることができます。
- そのような範囲外のプロパティに書き込もうとする試みは、何の効果も持ちません。エラーは発生しませんが、バッファーや型付き配列も変更されません。
- 型付き配列の添字は、構成可能なように、また書き込み可能なように見えますが、その属性を変更しようとする試みはすべて失敗します。

```js
const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// 例示のみを目的としています。本番コードには使用しないでください。
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// 数字以外の文字でアクセスしても動作する
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError: Cannot freeze array buffer views with elements
```

### DataView

{{jsxref("DataView")}} は、任意のデータをバッファーに読み書きするためのゲッター/セッター API を提供する、低レベルインターフェイスです。これは、例えばさまざまな型のデータを扱う場合に役立ちます。型付き配列のビューは、プラットフォームのネイティブのバイト順（[エンディアン](/ja/docs/Glossary/Endianness)を参照）になります。既定では、ビッグエンディアン（バイトが最上位ビットから最下位ビットの順に並ぶ）です。 ゲッター/セッターメソッドを使用して、バイトを最下位ビットから最上位ビットの順（リトルエンディアン）に並べ替えることもできます。

`DataView` はアラインメントを必要としません。マルチバイトの読み書きは、任意のオフセットを指定して始めることができます。セッターメソッドも同様に動作します。

次の例では、 `DataView` を使用して任意の数値のバイナリー表現を取得します。

```js
function toBinary(
  x,
  { type = "Float64", littleEndian = false, separator = " ", radix = 16 } = {},
) {
  const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
  const dv = new DataView(new ArrayBuffer(bytesNeeded));
  dv[`set${type}`](0, x, littleEndian);
  const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
    dv
      .getUint8(i)
      .toString(radix)
      .padStart(8 / Math.log2(radix), "0"),
  );
  return bytes.join(separator);
}

console.log(toBinary(1.1)); // 3f f1 99 99 99 99 99 9a
console.log(toBinary(1.1, { littleEndian: true })); // 9a 99 99 99 99 99 f1 3f
console.log(toBinary(20, { type: "Int8", radix: 2 })); // 00010100
```

## 型付き配列を使用する Web API

これらは、型付き配列を利用する API の例です。他にもありますが、常に追加されています。

- [`FileReader.prototype.readAsArrayBuffer()`](/ja/docs/Web/API/FileReader/readAsArrayBuffer)
  - : `FileReader.prototype.readAsArrayBuffer()` メソッドは、指定した [`Blob`](/ja/docs/Web/API/Blob) または [`File`](/ja/docs/Web/API/File) の内容の読み取りを開始します。
- [`fetch()`](/ja/docs/Web/API/Window/fetch)
  - : `fetch()` のオプションである [`body`](/ja/docs/Web/API/RequestInit#body) には、型付き配列または {{jsxref("ArrayBuffer")}} を入力することができ、これらのオブジェクトを {{HTTPMethod("POST")}} リクエストの内容として送信することができます。
- [`ImageData.data`](/ja/docs/Web/API/ImageData)
  - : {{jsxref("Uint8ClampedArray")}} で、`0` から `255` までの整数値で、RGBA 順にデータを格納する一次元配列を表します。

## 例

### バッファーと一緒にビューを使用

始めにバッファーの作成が必要であり、ここでは 16 バイト固定長とします。

```js
const buffer = new ArrayBuffer(16);
```

これで、全体が 0 で初期化されたメモリー領域ができました。しかし、そのバッファーに対してできることはあまりありません。例えば、バッファーが正しいサイズであることを確認できます。

```js
if (buffer.byteLength === 16) {
  console.log("はい、 16 バイトです。");
} else {
  console.log("そんな、サイズが違います！");
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

これは配列を値 `0`, `2`, `4`, `6` の 4 つのエントリー (4 つのエントリーが各 4 バイトで、合計 16 バイト) で埋めます。

### 同一のデータに対する複数のビュー

同一のデータに対して複数のビューを作成できることを考えると、それらは実に興味深いものになります。例えば、前出のコードの続きを以下のようにします。

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

ここでは、同一のバッファーを既存の 32 ビット値のビューと共有する 16 ビット整数値のビューを作成して、バッファー内の値すべてを 16 ビット整数値として出力しています。すると、`0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` という出力を得ます。

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

ここで一歩進みましょう。以下のコードについて考えてみてください。

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

このコードの出力は `"Entry 0 in the 32 ビットarray is now 32"` になります。

言い換えると、2 つの配列は同じデータバッファーを異なる形式で取り扱う単純なビューであるということです。

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

これは、どのビュー型でも実行できますが、整数を設定し、それを浮動小数点数として読み取ると、おそらく奇妙な結果を取得することになります。これは、ビットが異なる方法で解釈されるためです。

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### バッファーからテキストを読み込む

バッファーは常に数値を表すとは限りません。例えば、ファイルを読み込むとテキストデータバッファーがもらえます。このデータをバッファーから読み出すには、型付き配列を使用することができます。

次の例は、 UTF-8 のテキストを、 {{domxref("TextDecoder")}} Web API を使用して読み取ります。

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// データは手動でここに書きますが、すでにバッファーに入っているものとして処理します。
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

次の例は、 UTF-16 のテキストを、 {{jsxref("String.fromCharCode()")}} メソッドを使用して読み取ります。

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// データは手動でここに書きますが、すでにバッファーに入っているものとして処理します。
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

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

// ... データをバッファーに読み取る ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

例えば、合計金額には `amountDueView[0]` でアクセスできます。

> [!NOTE]
> C 構造体における[データ構造のアライメント](https://ja.wikipedia.org/wiki/データ構造アライメント)は機種依存です。これらのデータ埋め込みの違いに注意および配慮してください。

### 通常の配列への変換

型付き配列を処理した後は、 {{jsxref("Array")}} プロトタイプの利点を享受するため通常の配列に変換することが、有用な場合があります。これには {{jsxref("Array.from()")}} のプロトタイプを使用してください。

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
```

同様に[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用するとこうなります。

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = [...typedArray];
```

## 関連情報

- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) (hacks.mozilla.org, 2011)
- [Typed arrays - Binary data in the browser](https://web.dev/articles/webgl-typed-arrays) (web.dev, 2012)
- [エンディアン](/ja/docs/Glossary/Endianness)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
