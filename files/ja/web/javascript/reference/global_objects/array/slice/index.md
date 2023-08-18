---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`slice()`** メソッドは、配列の一部を `start` から `end` （`end` は含まれない）までの範囲で、選択した新しい配列オブジェクトに[シャローコピー](/ja/docs/Glossary/Shallow_copy)して返します。ここで `start` と `end` はその配列に含まれる項目の添字を表します。元の配列は変更されません。

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## 構文

```js
slice();
slice(start);
slice(start, end);
```

### 引数

- `start` {{optional_inline}}

  - : 取り出しの開始位置を示す 0 から始まる位置です。

    負の位置を使って、列の末尾からのオフセットを指定することができます。`slice(-2)` は列の最後の 2 つの要素を取り出します。

    `start` が指定されなかった場合、 `slice` は位置 `0` から開始します。

    `start` が列の位置の範囲よりも大きい場合は、空の配列が返されます。

- `end` {{optional_inline}}

  - : 返される配列から除外される最初の要素の位置です。 `slice` は `end` 自体は含めず、その直前まで取り出します。例えば、 `slice(1,4)` は 2 番目から 4 番目までの要素 (位置がそれぞれ 1, 2, 3 番目の要素) を取り出します。

    負の位置を使って、列の終わりからのオフセットとして指定することができます。 `slice(2,-1)` は列の 3 番目から、最後から 2 番目までの要素を取り出します。

    `end` が省略された場合、 `slice` は列の最後 (`arr.length`) までを取り出します。

    `end` がシーケンスの長さを超えた場合も、`slice` はシーケンスの最後 (`arr.length`) までを取り出します。

### 返値

取り出された要素を含む新しい配列です。

## 解説

`slice` は元の配列を変更せず、元の配列から要素を[シャローコピー](/ja/docs/Glossary/Shallow_copy)した新しい配列を返します。元の配列の要素は以下のように返される配列にコピーされます。

- (実際のオブジェクトではない) オブジェクトの参照については、`slice` はオブジェクトの参照を新しい配列にコピーします。元の配列も新しい配列も同じオブジェクトを参照します。参照されたオブジェクトが修正された場合、その変更は新しい配列と元の配列の両方に現れます。
- ({{jsxref("String")}}, {{jsxref("Number")}}, {{jsxref("Boolean")}} オブジェクトではなく) 文字列、数値、論理値では、`slice` は値を新しい配列にコピーします。一方の配列の文字列や数値に変更を加えても、他の配列に影響はしません。

一方の配列に新しい要素が追加されても、他方の配列に影響はしません。

## 例

### 既存の配列の一部を返す

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
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

// myCar, newCar と両方の要素から参照されている myHonda の color の
//  値を書きだす。
console.log("myCar = ", myCar);
console.log("newCar = ", newCar);
console.log("myCar[0].color = ", myCar[0].color);
console.log("newCar[0].color = ", newCar[0].color);

// myHonda の色を変える。
myHonda.color = "purple";
console.log("The new color of my Honda is ", myHonda.color);

// 両方の要素から参照されている myHonda の color を書き出す。
console.log("myCar[0].color = ", myCar[0].color);
console.log("newCar[0].color = ", newCar[0].color);
```

このスクリプトの出力は次の様になります。

```
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### 配列風オブジェクト

`slice` メソッドを呼び出すことで、配列風オブジェクトやコレクションを新しい配列に変換することができます。メソッドをオブジェクトに {{jsxref("Function.prototype.bind", "bind")}} するだけです。配列風オブジェクトの一例として、{{jsxref("Functions/arguments", "arguments")}} が挙げられます。以下に例を示します。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

結合 (Binding) は {{jsxref("Function")}} の {{jsxref("Function.prototype.call", "call()")}} メソッドを用いて行うことができますし、`[].slice.call(arguments)` を `Array.prototype.slice.call` の代わりに使って減らすこともできます。

いずれにせよ、{{jsxref("Function.prototype.bind", "bind")}} を使用することで簡略化することができます。

```js
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
