---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`slice()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列の一部を `start` から `end` （`end` は含まれない）までの範囲で、選択した新しい配列オブジェクトに[シャローコピー](/ja/docs/Glossary/Shallow_copy)して返します。
ここで `start` と `end` はその配列に含まれる項目のインデックスを表します。元の配列は変更されません。

{{InteractiveExample("JavaScript Demo: Array.slice()", "taller")}}

```js interactive-example
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## 構文

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 引数

- `start` {{optional_inline}}
  - : 抽出を始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `start < 0` の場合、 `start + array.length` が使用されます。
    - `start < -array.length` または `start` が省略された場合は `0` が使用されます。
    - `start >= array.length` の場合、何も抽出されません。
- `end` {{optional_inline}}
  - : 抽出し終える位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `slice()` は `end` を含まず、その直前までを抽出します。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `end < 0` の場合、 `end + array.length` が使用されます。
    - `end < -array.length` の場合は `0` が使用されます。
    - `end >= array.length` または `end` が省略された場合は `array.length` が使用され、最後まですべての要素が抽出されます。
    - 正規化後に `end` が `start` より前か同じ位置になった場合、何も抽出されません。

### 返値

取り出された要素を含む新しい配列です。

## 解説

`slice()` メソッドは[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods)です。これは `this` を変更するのではなく、元の配列と同じ要素を格納した[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。

`slice()` メソッドは空のスロットを保持します。スライスされた部分が[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の場合、返す配列も疎配列になります。

`slice()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 既存の配列の一部を返す

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits には ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'] が含まれる
// citrus には ['Orange','Lemon'] が含まれる
```

### slice の使用

以下の例で、`slice` は新しい配列 `newCar` を `myCar` から生成します。両者ともオブジェクト `myHonda` への参照を含んでいます。`myHonda` の色が purple に変更されると、両方の要素がその変更を反映します。

```js
// slice を使って、myCar から newCar を生成する。
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// myHonda の色を変える。
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
```

このスクリプトの出力は次の様になります。

```plain
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### 配列以外のオブジェクトに対する slice() の呼び出し

`slice()` メソッドは `this` の `length` プロパティを読み込みます。そして、 `start` から `end` までの整数キーのプロパティを読み込み、新しく作成した配列に定義します。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // length が 3 であるので slice() から無視される
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### slice() を用いて配列風オブジェクトを配列に変換

`slice()` メソッドは {{jsxref("Function/bind", "bind()")}} や {{jsxref("Function/call", "call()")}} と共に、配列風オブジェクトを配列に変換するユーティリティメソッドを作成するためによく使われます。

```js
// slice() は第 1 引数として `this` が渡されて呼び出される
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### 疎配列に対する slice() の使用

`slice()` から返される配列は、元の配列が疎配列であれば疎配列になります。

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.slice` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
