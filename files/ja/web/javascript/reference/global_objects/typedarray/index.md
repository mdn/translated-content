---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**_TypedArray_** オブジェクトは、背後にある[バイナリーデータバッファー](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)の、配列風のビューを表します。 `TypedArray` という名称のグローバルプロパティがあるわけではなく、また直接 `TypedArray` コンストラクターが見えるわけではありません。代わりに、さまざまなグローバルプロパティがあり、それらの値は後述するように特定の要素の型における型付き配列のコンストラクターになります。下記のページで、それぞれの要素を持つ片引き配列で使用できる共通のプロパティやメソッドを確認できます。

{{InteractiveExample("JavaScript デモ: TypedArray Constructor")}}

```js interactive-example
// Create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// Expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// Expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
```

## 解説

`TypedArray` コンストラクター（よく `%TypedArray%` と表記されます。JavaScript プログラムに公開されるグローバルに対応するものがあるわけではないため、「個別のもの」を表すためです）は、すべての `TypedArray` のサブクラスの共通のスーパークラスとして機能します。`%TypedArray%` はすべての型付き配列のサブクラスに対してユーティリティメソッドの共通インターフェイスを提供する「抽象クラス」であると考えてください。このコンストラクターは直接公開されていません。グローバルプロパティである `TypedArray` プロパティは存在しません。`Object.getPrototypeOf(Int8Array)` などを通してのみアクセスすることができます。

`TypedArray` のサブクラス（例えば `Int8Array`）のインスタンスを作成する際、配列バッファーがメモリーに内部作成されるか、コンストラクターの引数に `ArrayBuffer` オブジェクトが指定されると、代わりにその `ArrayBuffer` を使用します。バッファーアドレスはインスタンスの内部プロパティとして保存され、`%TypedArray%.prototype` のすべてのメソッドがその配列バッファーアドレスに基づいて値を設定したり取得したりします。

### TypedArray オブジェクト

| 型                              | 値の範囲                                                   | サイズ (バイト数) | Web IDL 型            |
| ------------------------------- | ---------------------------------------------------------- | ----------------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 から 127                                              | 1                 | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 から 255                                                 | 1                 | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 から 255                                                 | 1                 | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 から 32767                                          | 2                 | `short`               |
| {{jsxref("Uint16Array")}}       | 0 から 65535                                               | 2                 | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 から 2147483647                                | 4                 | `long`                |
| {{jsxref("Uint32Array")}}       | 0 から 4294967295                                          | 4                 | `unsigned long`       |
| {{jsxref("Float16Array")}}      | `-65504` から `65504`                                      | 2                 | なし                  |
| {{jsxref("Float32Array")}}      | `-3.4E38` から `3.4E38` および `1.2E-38` （最小の正の数）  | 4                 | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8E308` から `1.8E308` および `5E-324` （最小の正の数） | 8                 | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> to 2<sup>63</sup> - 1                      | 8                 | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 to 2<sup>64</sup> - 1                                    | 8                 | `bigint`              |

### 値のエンコード方式と正規化

すべての型付き配列は `ArrayBuffer` を操作して、各要素の正確なバイト表現を見ることができますので、数値がバイナリー形式でどのようにエンコードされているかが重要です。

- 符号なし整数の配列 (`Uint8Array`, `Uint16Array`, `Uint32Array`, `BigUint64Array`) は、数値を直接バイナリーで格納します。
- 符号付き整数の配列 (`Int8Array`, `Int16Array`, `Int32Array`, `BigInt64Array`) は、数値を [2 の補数](https://ja.wikipedia.org/wiki/2の補数)を用いて格納します。
- 浮動小数点の配列 (`Float16Array`, `Float32Array`, `Float64Array`) は [IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) 浮動小数点形式を使用して数値を格納します。 [`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値のエンコーディング) のリファレンスには、正確な形式についての詳細情報があります。 JavaScript の数値は既定では倍精度浮動小数点数で、 `Float64Array` と同じ形式を使用します。 `Float32Array` で仮数に（52 ビットの代わりに）23 ビット、指数に（11 ビットの代わりに） 8 ビットを使用します。`Float16Array` で仮数に 10 ビット、指数に 5 ビットを使用します。仕様では、すべての {{jsxref("NaN")}} 値が同じビットエンコーダ方式を使用することが要求されていますが、正確なビットパターンは実装に依存することに注意してください。
- `Uint8ClampedArray` は特殊なケースです。これは `Uint8Array` と同じようにバイナリーで格納されますが、範囲外の数値を格納した場合、最上位ビットを切り捨てるのではなく、数学的な値で 0 から 255 の範囲に数値を丸めます。

`Int8Array`、`Uint8Array`、`Uint8ClampedArray` を除くすべての型付き配列は、各要素を複数のバイトを使用して格納します。これらのバイトは、最上位から最下位（ビッグエンディアン）、または最下位から最上位（リトルエンディアン）の順に並べられます。詳しい説明は[エンディアン](/ja/docs/Glossary/Endianness)を参照してください。型付き配列は常にプラットフォームネイティブのバイト順を使用します。バッファーから読み書きする際にエンディアンを指定したい場合は、代わりに {{jsxref("DataView")}} を使用してください。

これらの型付き配列に書き込む場合、表現可能な範囲外の値は正規化されます。

- すべての整数配列（`Uint8ClampedArray`を除く）は[固定幅の数値変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)を使用します。
- `Uint8ClampedArray` は、最初に数値を 0 から 255 の範囲に収めます（255 より大きい値は 255 になり、0 より小さい値は 0 になります）。そして、（切り捨てるのではなく）最も近い整数に丸めます。つまり、 2 つの整数のちょうど中間にある場合は、最も近い偶数の整数に丸めます。例えば、`0.5` は `0`、`1.5` は `2`、`2.5` は `2` となります。
- `Float16Array` および `Float32Array` では "round to even" を行い、 64 ビット浮動小数点数を 32 ビットおよび 16 ビットに変換します。これは {{jsxref("Math.fround()")}} および {{jsxref("Math.f16round()")}} で指定されたアルゴリズムと同じです。

### サイズ変更可能なバッファー表示時の動作について

[サイズ変更可能なバッファー](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#arraybuffer_のサイズ変更)のビューとして `TypedArray` を作成した場合、`TypedArray` が長さを追跡するよう構築されているかどうかにより、基盤のバッファーをサイズ変更した際に `TypedArray` のサイズに様々な影響を与えます。

3つ目の引数を除外したり、`undefined` を渡したりして、固有のサイズを持たない型付き配列を作成した場合、型付き配列は _長さ追跡_ となり、後者のサイズが変更されると、基盤となる `buffer` に合わせて自動的にサイズ変更されます。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

型付き配列を 3 つ目の `length` 引数で具体的なサイズを指定して作成した場合、後者が大きくなっても `buffer` を格納するためにサイズを変更することはありません。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0（初期値）

buffer.resize(12);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0（初期値）
```

`buffer` が縮小されるとき、見ている型付き配列が境界を越えることがあり、その場合、型付き配列の監視サイズは 0 に減少します。これは、長さ追跡を行わない型付き配列の長さが変化する唯一のケースです。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

その後、 `buffer` を再び大きくして型付き配列を元に戻せば、型付き配列のサイズは元の値に戻ります。

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

長さ追跡型の型付き配列でも、バッファーが `byteOffset` を超えて縮小された場合、同じことが起こり得る．

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 4);
// float32 は長さを追跡しますが、4 バイト目からバッファー末尾までしか
// 拡張しないので、バッファーが 4 バイトより短くなるようにリサイズされる
// と、配列の型が範囲外になってしまいます。
buffer.resize(3);
console.log(float32.byteLength); // 0
```

## コンストラクター

このオブジェクトは直接インスタンス化できません。`new` で構築しようとすると {{jsxref("TypeError")}} が発生します。

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

その代わり、{{jsxref("Int8Array")}} や {{jsxref("BigInt64Array")}} のような特定の種類の型付き配列のインスタンスを作成してください。これらのオブジェクトは、すべてコンストラクターに共通の構文を持っています。

```js-nolint
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

ここで _TypedArray_ は特定の型のコンストラクターのうちの一つを表します。

> [!NOTE]
> すべての `TypedArray` サブクラスのコンストラクターは [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使ってのみ構築することができます。`new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `typedArray`
  - : `TypedArray` のサブクラスのインスタンスを指定して呼び出されると、`typedArray` が新しい型付き配列にコピーされます。[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)以外の `TypedArray` コンストラクターでは、`typedArray` 引数には[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)以外の型付き配列のうちのいずれか（{{jsxref("Int32Array")}} など）を指定します。同様に、[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の `TypedArray` コンストラクター（{{jsxref("BigInt64Array")}} または {{jsxref("BigUint64Array")}}）では、`typedArray` 引数には[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)型のいずれかしか指定できません。`typedArray` の各値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換される。新しい型付き配列の長さは `typedArray` の引数の長さと同じになります。
- `object`
  - : `TypedArray` インスタンスでないオブジェクトで呼び出された場合、[`TypedArray.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) メソッドと同じ方法で、新しい型付き配列を生成します。
- `length` {{optional_inline}}
  - : オブジェクト以外で呼び出された場合、引数は型付き配列の長さを指定する数値として扱われます。内部配列バッファーがメモリー内に作成され、サイズは `length` に [`BYTES_PER_ELEMENT`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) バイトを乗じたものとなり、0 で満たされます。すべての引数を除外すると、`0` を `length` として使用することと同じになります。
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) または [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) インスタンスを指定し、さらに `byteOffset` および `length` 引数を付けて呼び出すと、指定したバッファーを参照する型付き配列ビューを新たに作成することができます。`byteOffset` （バイト単位）と `length` （要素数で、それぞれが [`BYTES_PER_ELEMENT`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) バイトを占めます）の引数は、型付き配列ビューが参照するメモリー範囲を指定します。両方とも省略した場合、`buffer` の全体が参照されます。`length` のみが省略された場合、`buffer` の `byteOffset` 以降の部分が表示されます。`length` が省略された場合、型付き配列は[長さ追跡](#behavior_when_viewing_a_resizable_buffer)となります。

### 例外

すべての `TypeArray` サブクラスのコンストラクターは、同じように操作します。すべてで以下のような例外を発生することがあります。

- {{jsxref("TypeError")}}
  - : 以下のいずれかの場合に発生します。
    - `typedArray` が渡されたが、現在のコンストラクターとは異なり[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)型のものであった場合、またはその逆。
    - `typedArray` が渡されたが、そのバッファーが分離されていた場合、または分離された `buffer` が直接渡された場合。
- {{jsxref("RangeError")}}
  - : 以下のいずれかの場合に発生します。
    - 新しい型付き配列の長さが長すぎる。
    - `buffer` （`length` 引数を指定しない場合）または `byteOffset` の長さが、新しい型付き配列の要素サイズの整数倍でない。
    - `byteOffset` が有効な配列インデックス（0 から 2<sup>53</sup> - 1 の間の整数）でない。
    - バッファーからビューを作成する場合、境界がバッファーの外側になる。言い換えれば、`byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength` となる。

## 静的プロパティ

これらのプロパティは `TypedArray` コンストラクターオブジェクトで定義されており、したがってすべての `TypedArray` サブクラスのコンストラクターで共有されます。

- [`TypedArray[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : 派生オブジェクトを作成するために使用されるコンストラクター関数です。

すべての `TypedArray` サブクラスには以下の静的プロパティもあります。

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : さまざまな {{jsxref("TypedArray")}} インスタンスの要素のサイズを数値で返します。

## 静的メソッド

これらのメソッドは `TypedArray` コンストラクターオブジェクトに定義されているため、すべての `TypedArray` のサブクラスのコンストラクターに共有されます。

- {{jsxref("TypedArray.from()")}}
  - : 配列風オブジェクトや反復可能オブジェクトから、新たな `TypedArray` を生成します。{{jsxref("Array.from()")}} もご覧ください。
- {{jsxref("TypedArray.of()")}}
  - : 引数に与えた値をもとに、新たな `TypedArray` を生成します。{{jsxref("Array.of()")}} もご覧ください。

## インスタンスプロパティ

これらのプロパティは `TypedArray.prototype` オブジェクトで定義されており、すべての `TypedArray` のサブクラスインスタンスで共有されています。

- {{jsxref("TypedArray.prototype.buffer")}}
  - : この型付き配列によって参照さている {{jsxref("ArrayBuffer")}} を返します。
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : 型付き配列の長さを (バイト単位で) 返します。
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : 型付き配列の {{jsxref("ArrayBuffer")}} の先頭からのオフセットを (バイト単位で) 返します。
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。`TypedArray.prototype.constructor` は隠された `TypedArray` のコンストラクター関数ですが、型付き配列のサブクラスはそれぞれ `constructor` プロパティを定義しています。
- {{jsxref("TypedArray.prototype.length")}}
  - : 型付き配列内に保持された要素の数を返します。
- `TypedArray.prototype[Symbol.toStringTag]`
  - : [`TypedArray.prototype[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値はゲッターで、型付き配列ののコンストラクター名と同じ文字列を返します。このプロパティは `this` の値が型付き配列のサブクラスのいずれでもない場合、 `undefined` を返します。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。ただし、`TypedArray` は独自の [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) メソッドを持っているので、このプロパティは[`Object.prototype.toString.call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)を `thisArg` に型付き配列を設定して呼び出差ない限り、このプロパティの使用されません。

すべての `TypedArray` のサブクラスには、以下のインスタンスプロパティもあります。

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : 様々な {{jsxref("TypedArray")}} インスタンスの要素の大きさを数値で返します。

## インスタンスメソッド

これらのメソッドは `TypedArray` プロトタイプオブジェクトに定義されているため、すべての `TypedArray` サブクラスインスタンスで共有されます。

- {{jsxref("TypedArray.prototype.at()")}}
  - : 整数値を受け取り、その位置にあるアイテムを返します。このメソッドでは負の整数を扱うことができ、最後の項目から逆向きに数えます。
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : 配列内で一連の配列要素をコピーします。 {{jsxref("Array.prototype.copyWithin()")}} も参照してください。
- {{jsxref("TypedArray.prototype.entries()")}}
  - : 配列内のすべての位置に対するキー／値の組を含む、新しい配列イテレーターを返します。 {{jsxref("Array.prototype.entries()")}} も参照してください。
- {{jsxref("TypedArray.prototype.every()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。 {{jsxref("Array.prototype.every()")}} も参照してください。
- {{jsxref("TypedArray.prototype.fill()")}}
  - : 開始位置から終了位置までのすべての要素に固定値を設定します。 {{jsxref("Array.prototype.fill()")}} も参照してください。
- {{jsxref("TypedArray.prototype.filter()")}}
  - : 与えられたフィルタリング関数が `true` を返す配列のすべての要素をもつ新しい配列を生成します。 {{jsxref("Array.prototype.filter()")}} も参照してください。
- {{jsxref("TypedArray.prototype.find()")}}
  - : 配列要素が与えられたテスト関数を満足したら、配列の値を返します。満足しなかった場合、 `undefined` を返します。 {{jsxref("Array.prototype.find()")}} も参照してください。
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : 配列要素が与えられたテスト関数を満足したら、配列のインデックスを返します。満足しなかった場合は `-1` を返します。{{jsxref("Array.prototype.findIndex()")}} も参照してください。
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : 指定されたテスト関数を満たす配列の最後の要素の値を返し、適切な要素が得られなかった場合は `undefined` を返します。{{jsxref("Array.prototype.findLast()")}} も参照してください。
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : 指定されたテスト関数を満たす配列の最後の要素のインデックスを返し、適切な要素が見つからなかった場合は `-1` を返します。{{jsxref("Array.prototype.findLastIndex()")}} も参照してください。
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : 配列内の各要素に対する関数を呼び出します。 {{jsxref("Array.prototype.forEach()")}} も参照してください。
- {{jsxref("TypedArray.prototype.includes()")}}
  - : 型付き配列にある要素が含まれているかどうか判断し、それに応じて `true` または `false` を返します。 {{jsxref("Array.prototype.includes()")}} も参照してください。
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : 指定された値に等しい配列内の要素の最初の位置を返します。見つからなかった場合は `-1` を返します。 {{jsxref("Array.prototype.indexOf()")}} も参照してください。
- {{jsxref("TypedArray.prototype.join()")}}
  - : すべての配列要素を 1 つの文字列に結合します。 {{jsxref("Array.prototype.join()")}} も参照してください。
- {{jsxref("TypedArray.prototype.keys()")}}
  - : 配列内のそれぞれの位置に対するキーを含む新しい配列イテレーターを返します。 {{jsxref("Array.prototype.keys()")}} も参照してください。
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : 指定された値と等しい配列の要素の最後の位置を返します。見つからない場合は `-1` を返します。{{jsxref("Array.prototype.lastIndexOf()")}}を確かめて下さい。
- {{jsxref("TypedArray.prototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxref("Array.prototype.map()")}} も参照してください。
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : アキュームレーターと配列のそれぞれの値（左から右へ）に対して関数を適用し、単一の値にまで縮小します。 {{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : アキュームレーターと配列のそれぞれの値（右から左へ）に対して関数を適用し、単一の値にまで縮小します。 {{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : 配列要素の順番を反転させます。 — 最初の要素は最後になり、最後の要素は最初になります。 {{jsxref("Array.prototype.reverse()")}} も参照してください。
- {{jsxref("TypedArray.prototype.set()")}}
  - : 入力値を指定した配列から読み込み、型付き配列内に複数の値を格納します。
- {{jsxref("TypedArray.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列を返します。 {{jsxref("Array.prototype.slice()")}} も参照してください。
- {{jsxref("TypedArray.prototype.some()")}}
  - : ある配列の少なくとも 1 つの要素が与えられたテスト関数を満たした場合に `true` を返します。 {{jsxref("Array.prototype.some()")}} も参照してください。
- {{jsxref("TypedArray.prototype.sort()")}}
  - : 配列の要素をソートし、その結果を返します。 {{jsxref("Array.prototype.sort()")}} も参照してください。
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : 与えられた開始位置と終了位置の要素インデックスから、新しい `TypedArray` を返します。
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : 配列と要素を表すローカライズされた文字列を返します。 {{jsxref("Array.prototype.toLocaleString()")}} も参照してください。
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : 元の配列を変更せずに、要素を逆順に並べた新しい配列を返します。
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : 元の配列を変更せずに、要素を昇順に並べた新しい配列を返します。
- {{jsxref("TypedArray.prototype.toString()")}}
  - : 配列と要素を表す文字列を返します。 {{jsxref("Array.prototype.toString()")}} も参照してください。
- {{jsxref("TypedArray.prototype.values()")}}
  - : 配列内のそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。 {{jsxref("Array.prototype.values()")}} も参照してください。
- {{jsxref("TypedArray.prototype.with()")}}
  - : 指定された位置の要素を指定された値で置き換えた新しい配列を、元の配列に変更を加えることなく返します。
- [`TypedArray.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : 配列内でそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。

## 例

### プロパティへのアクセス

配列内の要素は、標準の配列の添字構文 (すなわち、かぎ括弧を使用する表記) を使用して参照することができます。しかし、型付き配列でインデックス付きプロパティで取得または設定するときは、範囲外のインデックスでもプロパティのプロトタイプチェーンを探索しません。インデックス付きプロパティは {{jsxref("ArrayBuffer")}} を調べるのであり、オブジェクトのプロパティは探索しません。他のオブジェクト同様に、名前付きプロパティは使用できます。

```js
// 標準的な配列構文を使用して設定および取得
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// プロトタイプでインデックス付き配列を使用しても探索しない (Fx 25)
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// 名前付きプロパティも利用できる (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

### 凍結できない

空でない `TypedArray` は凍結することができません。その基盤である `ArrayBuffer` はそのバッファーの別の `TypedArray` ビューを通して変更される可能性があるためです。これはオブジェクトが純粋に凍結されることがないことを意味しています。

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset は正規化する必要がある

`ArrayBuffer` にビューとして `TypedArray` を構築した場合、`byteOffset` 引数は要素サイズの境界に配置する必要があります。言い換えれば、オフセットは `BYTES_PER_ELEMENT` の倍数でなければなりません。

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength は正規化する必要がある

`byteOffset` 引数と同様に、`TypedArray` のコンストラクターに渡される `ArrayBuffer` の `byteLength` プロパティも、コンストラクターの `BYTES_PER_ELEMENT` の倍数にする必要があります。

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(3));
// RangeError: byte length of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [型付き配列のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{domxref("TextDecoder")}}
