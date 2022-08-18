---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/slice
---
{{JSRef}}

**`slice()`** メソッドは、`start` と `end` が配列の中の項目のインデックスを表している場合、`start` から `end` まで (`end` は含まれない) で選択された配列の一部の浅いコピーを新しい配列オブジェクトに作成して返します。元の配列は変更されません。

{{EmbedInteractiveExample("pages/js/array-slice.html")}}

## 構文

```
arr.slice([start[, end]])
```

### 引数

<dl><dt><code><var>start</var></code> {{optional_inline}}</dt><dd>取り出しの開始位置を示す 0 から始まるインデックスです。</dd><dd>負のインデックスを使って、列の終わりからのオフセットを指定することができます。<code>slice(-2)</code> は列の最後の 2 つの要素を取り出します。</dd><dd><code><var>start</var></code> が指定されなかった場合、<code>slice</code> はインデックス <code>0</code> から開始します。</dd><dd><code><var>start</var></code> が列のインデックスの範囲よりも大きい場合は、空の配列が返されます。</dd><dt><code><var>end</var></code> {{optional_inline}}</dt><dd>取り出しを終える直前の位置を示す 0 から始まるインデックスです。<code>slice</code> は <code><var>end</var></code> 自体は含めず、その直前まで取り出します。例えば、<code>slice(1,4)</code> は 2 番目から 4 番目までの要素 (インデックスがそれぞれ 1, 2, 3 番目の要素) を取り出します。</dd><dd>負のインデックスを使って、列の終わりからのオフセットとして指定することができます。<code>slice(2,-1)</code> は列の 3 番目から、最後から 2 番目までの要素を取り出します。</dd><dd><code><var>end</var></code> が省略された場合、<code>slice</code> は列の最後 (<code><var>arr</var>.length</code>) までを取り出します。</dd><dd><code><var>end</var></code> がシーケンスの長さを超えた場合も、<code>slice</code> はシーケンスの最後 (<code><var>arr</var>.length</code>) までを取り出します。</dd></dl>

### 返値

取り出された要素を含む新しい配列です。

## 解説

`slice` は元の配列を変更せず、元の配列から要素をシャローコピー (1 段階の深さのコピー) した新しい配列を返します。元の配列の要素は以下のように返される配列にコピーされます。

- (実際のオブジェクトではない) オブジェクトの参照については、`slice` はオブジェクトの参照を新しい配列にコピーします。元の配列も新しい配列も同じオブジェクトを参照します。参照されたオブジェクトが修正された場合、その変更は新しい配列と元の配列の両方に現れます。
- ({{jsxref("String")}}, {{jsxref("Number")}}, {{jsxref("Boolean")}} オブジェクトではなく) 文字列、数値、真偽値では、`slice` は値を新しい配列にコピーします。一方の配列の文字列や数値に変更を加えても、他の配列に影響はしません。

一方の配列に新しい要素が追加されても、他方の配列に影響はしません。

## 例

### 既存の配列の一部を返す

```js
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### slice の使用

以下の例で、`slice` は新しい配列 `newCar` を `myCar` から生成します。両者ともオブジェクト `myHonda` への参照を含んでいます。`myHonda` の色が purple に変更されると、両方の要素がその変更を反映します。

```js
// slice を使って、myCar から newCar を生成する。
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// myCar, newCar と両方の要素から参照されている myHonda の color の
//  値を書きだす。
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// myHonda の色を変える。
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// 両方の要素から参照されている myHonda の color を書き出す。
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
```

このスクリプトの出力は次の様になります。

```
myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### 配列状オブジェクト

`slice` メソッドを呼び出すことで、配列状オブジェクトやコレクションを新しい配列に変換することができます。メソッドをオブジェクトに {{jsxref("Function.prototype.bind", "bind")}} するだけです。配列状オブジェクトの一例として、{{jsxref("Functions/arguments", "arguments")}} が挙げられます。以下に例を示します。

```js
function list() {
  return Array.prototype.slice.call(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]
```

結合 (Binding) は {{jsxref("Function.prototype")}} の {{jsxref("Function.prototype.call", "call()")}} メソッドを用いて行うことができますし、`[].slice.call(arguments)` を `Array.prototype.slice.call` の代わりに使って減らすこともできます。

いずれにせよ、{{jsxref("Function.prototype.bind", "bind")}} を使用することで簡略化することができます。

```js
let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(unboundSlice)

function list() {
  return slice(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]
```

## 仕様

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.slice', 'Array.prototype.slice')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.slice")}}

## 関連情報

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
