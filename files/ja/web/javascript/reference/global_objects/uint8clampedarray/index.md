---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
tags:
  - クラス
  - JavaScript
  - TypedArray
  - 型付き配列
  - ポリフィル
browser-compat: javascript.builtins.Uint8ClampedArray
translation_of: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
---
{{JSRef}}

**`Uint8ClampedArray`** は型付き配列で、 0-255 に制約される 8 ビット符号なし整数値の配列を表します。指定された値が \[0,255] の範囲を超えた場合、 0 または 255 が代わりに設定されます。整数以外を指定しようとすると、最も近い整数が設定されます。中身は `0` で初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字の構文 (すなわち、ブラケット記法) を使用するかして参照することができます。

## コンストラクター

- {{jsxref("Global_Objects/Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : 新しい `Uint8ClampedArray` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint8ClampedArray` の場合は `1` です。
- {{jsxref("TypedArray.name", "Uint8ClampedArray.name")}}
  - : コンストラクター名を文字列値で返します。`Uint8ClampedArray` の場合、 "`Uint8ClampedArray`" です。

## 静的メソッド

- {{jsxref("TypedArray.from", "Uint8ClampedArray.from()")}}
  - : 配列風オブジェクトまたは反復可能オブジェクトから新しい `Uint8ClampedArray` オブジェクトを生成します。 {{jsxref("Array.from()")}} も参照してください。
- {{jsxref("TypedArray.of", "Uint8ClampedArray.of()")}}
  - : 可変長引数で新しい `Uint8ClampedArray` オブジェクトを生成します。{{jsxref("Array.of()")}} も参照してください。

## インスタンスプロパティ

- {{jsxref("TypedArray.prototype.buffer", "Uint8ClampedArray.prototype.buffer")}}
  - : `Uint8ClampedArray` オブジェクトによって参照される {{jsxref("ArrayBuffer")}} を返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteLength", "Uint8ClampedArray.prototype.byteLength")}}
  - : `Uint8ClampedArray` の {{jsxref("ArrayBuffer")}} の先頭からの長さを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8ClampedArray.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}} の先頭からの `Uint8ClampedArray` のオフセットを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}
  - : `Uint8ClampedArray` オブジェクト内に保持されている要素の数を返します。構築時に固定され、**読み取り専用**です。

## インスタンスメソッド

- {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}
  - : 配列内で一連の配列要素をコピーします。{{jsxref("Array.prototype.copyWithin()")}} も参照してください。
- {{jsxref("TypedArray.entries", "Uint8ClampedArray.prototype.entries()")}}
  - : 配列内ですべての位置におけるキーと値の組を提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.entries()")}} も参照してください。
- {{jsxref("TypedArray.every", "Uint8ClampedArray.prototype.every()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。{{jsxref("Array.prototype.every()")}} も参照してください。
- {{jsxref("TypedArray.fill", "Uint8ClampedArray.prototype.fill()")}}
  - : 配列の先頭位置から末尾位置までのすべての要素を固定値に設定します。{{jsxref("Array.prototype.fill()")}} も参照してください。
- {{jsxref("TypedArray.filter", "Uint8ClampedArray.prototype.filter()")}}
  - : この配列のすべての要素のうち、与えられたフィルタリング関数が `true` を返すものをもつ新しい配列を生成します。{{jsxref("Array.prototype.filter()")}} も参照してください。
- {{jsxref("TypedArray.find", "Uint8ClampedArray.prototype.find()")}}
  - : 配列内の要素に与えられたテスト関数を満足するものがあったら、見つかった値を返します。見つからなければ `undefined` を返します。{{jsxref("Array.prototype.find()")}} も参照してください。
- {{jsxref("TypedArray.findIndex", "Uint8ClampedArray.prototype.findIndex()")}}
  - : 配列内の要素に与えられたテスト関数を満足するものがあったら、見つかった位置を返します。見つからなければ `-1` を返します。{{jsxref("Array.prototype.findIndex()")}} も参照してください。
- {{jsxref("TypedArray.forEach", "Uint8ClampedArray.prototype.forEach()")}}
  - : 配列内のそれぞれの要素について関数を呼び出します。{{jsxref("Array.prototype.forEach()")}} も参照してください。
- {{jsxref("TypedArray.includes", "Uint8ClampedArray.prototype.includes()")}}
  - : 型付き配列に特定の要素があるかどうかを判断し、それに応じて `true` か `false`を返します。 {{jsxref("Array.prototype.includes()")}} も参照してください。
- {{jsxref("TypedArray.indexOf", "Uint8ClampedArray.prototype.indexOf()")}}
  - : 指定された値に等しい配列内の要素の最初の (最小の) 位置を返します。見つからなかった場合、 `-1` を返します。{{jsxref("Array.prototype.indexOf()")}} も参照してください。
- {{jsxref("TypedArray.join", "Uint8ClampedArray.prototype.join()")}}
  - : 配列のすべての要素を 1 つの文字列に結合します。{{jsxref("Array.prototype.join()")}} も参照してください。
- {{jsxref("TypedArray.keys", "Uint8ClampedArray.prototype.keys()")}}
  - : 配列内ですべての位置におけるキーを提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.keys()")}} も参照してください。
- {{jsxref("TypedArray.lastIndexOf", "Uint8ClampedArray.prototype.lastIndexOf()")}}
  - : 指定された値に等しい配列内の要素の最後の (最大の) 位置を返します。見つからなかった場合、 `-1` を返します。{{jsxref("Array.prototype.lastIndexOf()")}} も参照してください。
- {{jsxref("TypedArray.map", "Uint8ClampedArray.prototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxref("Array.prototype.map()")}} も参照してください。
- {{jsxref("TypedArray.reduce", "Uint8ClampedArray.prototype.reduce()")}}
  - : アキュムレーターとこの配列のそれぞれの値に対して (左から右へ) 関数を適用し、単一の値に還元します。{{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.reduceRight", "Uint8ClampedArray.prototype.reduceRight()")}}
  - : アキュムレーターとこの配列のそれぞれの値に対して (右から左へ) 関数を適用し、単一の値に還元します。{{jsxref("Array.prototype.reduceRight()")}} も参照してください。
- {{jsxref("TypedArray.reverse", "Uint8ClampedArray.prototype.reverse()")}}
  - : 配列の要素の順番を反転させます。最初の要素は最後になり、最後の要素は最初になります。{{jsxref("Array.prototype.reverse()")}} も参照してください。
- {{jsxref("TypedArray.set", "Uint8ClampedArray.prototype.set()")}}
  - : 入力値を指定した配列から読み込み、この型付き配列内に複数の値を格納します。
- {{jsxref("TypedArray.slice", "Uint8ClampedArray.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列を返します。{{jsxref("Array.prototype.slice()")}} も参照してください。
- {{jsxref("TypedArray.some", "Uint8ClampedArray.prototype.some()")}}
  - : この配列の 1 つ以上の要素が与えられたテスト関数を満たした場合に `true` を返します。{{jsxref("Array.prototype.some()")}} も参照してください。
- {{jsxref("TypedArray.sort", "Uint8ClampedArray.prototype.sort()")}}
  - : 配列の要素をその場で並べ替え、その配列を返します。{{jsxref("Array.prototype.sort()")}} も参照してください。
- {{jsxref("TypedArray.subarray", "Uint8ClampedArray.prototype.subarray()")}}
  - : 指定された先頭と末尾の要素位置から新しい `Uint8ClampedArray` を返します。
- {{jsxref("TypedArray.values", "Uint8ClampedArray.prototype.values()")}}
  - : 配列内ですべての位置における値を提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.values()")}} も参照してください。
- {{jsxref("TypedArray.toLocaleString", "Uint8ClampedArray.prototype.toLocaleString()")}}
  - : 配列とその要素を表すローカライズされた文字列を返します。{{jsxref("Array.prototype.toLocaleString()")}} も参照してください。
- {{jsxref("TypedArray.toString", "Uint8ClampedArray.prototype.toString()")}}
  - : 配列とその要素を表す文字列を返します。{{jsxref("Array.prototype.toString()")}} も参照してください。
- {{jsxref("TypedArray.@@iterator", "Uint8ClampedArray.prototype[@@iterator]()")}}
  - : 配列内ですべての位置における値を提供する新しい*配列イテレーター*を返します。

## 例

### 様々な方法で `Uint8ClampedArray` を作成

```js
// 長さから
var uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (制約を受けた)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// 配列から
var arr = new Uint8ClampedArray([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint8ClampedArray([21, 31]);
var y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// ArrayBuffer から
var buffer = new ArrayBuffer(8);
var z = new Uint8ClampedArray(buffer, 1, 4);

// 反復可能オブジェクトから
var iterable = function*(){ yield* [1,2,3]; }();
var uintc8 = new Uint8ClampedArray(iterable);
// Uint8ClampedArray[1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Uint8ClampedArray` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays) で利用できます
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
