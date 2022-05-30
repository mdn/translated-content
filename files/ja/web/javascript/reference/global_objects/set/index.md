---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - クラス
  - ECMAScript 2015
  - グローバルオブジェクト
  - JavaScript
  - オブジェクト
  - リファレンス
  - set
  - Polyfill
browser-compat: javascript.builtins.Set
translation_of: Web/JavaScript/Reference/Global_Objects/Set
---
{{JSRef}}

**`Set`** オブジェクトは、{{Glossary("Primitive", "プリミティブ値")}}やオブジェクト参照を問わず、あらゆる型で多数の一意の値を格納することができます。

## 解説

`Set` オブジェクトは値のコレクションです。挿入順に要素を反復することができます。 `Set` に**重複する値は格納出来ません**。 `Set` 内の値はコレクション内で一意になります。

### 値の等価性

`Set` オブジェクト内の各値は一意でなければならないので、値の等価性が調べられます。初期の ECMAScript では `===` 演算子とは違うアルゴリズムが用いられていました。特に `+0` (厳密に言えば `-0` と等価です) と `-0` が区別されていた点は重要です。しかしこの振る舞いは ECMAScript 2015 で変更されました。[ブラウザーの互換性](#ブラウザーの互換性)の "Key equality for -0 and 0" を参照してください。

また、 {{jsxref("NaN")}} と {{jsxref("undefined")}} も Set 内に格納できます。`NaN` は (`NaN !== NaN` として扱われますが) `NaN` と同じと扱われます。

### 性能

`Set` の [`has`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/has) メソッドは、値が `Set` オブジェクト内にあるかどうかをチェックします。これは、以前に `Set` オブジェクトに追加された要素のほとんどを確認するよりも平均すると高速なアプローチを使用します。特に、 `Array` オブジェクトの `length` が `Set` オブジェクトの `size` と等しい場合、平均して [`Array.prototype.includes`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) メソッドより速くなります。

## コンストラクター

- {{jsxref("Set/Set", "Set()")}}
  - : 新しい `Set` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : 派生オブジェクトを生成するために使用されるコンストラクター関数です。

## インスタンスプロパティ

- {{jsxref("Set.prototype.size")}}
  - : `Set` オブジェクト内の値の数を返します。

## インスタンスメソッド

- {{jsxref("Set.add", "Set.prototype.add(<var>value</var>)")}}
  - : `value` を `Set` オブジェクトに追加します。`Set` オブジェクトを返します。
- {{jsxref("Set.prototype.clear()")}}
  - : すべての要素を `Set` オブジェクトから取り除きます。
- {{jsxref("Set.delete", "Set.prototype.delete(<var>value</var>)")}}
  - : `value` に関連した要素を取り除き、要素の削除に成功したかどうかを示す論理値を返します。 `Set.prototype.has(value)` はその後は `false` を返します。
- {{jsxref("Set.has", "Set.prototype.has(<var>value</var>)")}}
  - : `Set` オブジェクト内に引数で与えられた値をもつ要素が存在するかどうかを示す論理値を返します。

### 反復処理メソッド

- {{jsxref("Set.prototype.@@iterator()", "Set.prototype[@@iterator]()")}}
  - : `Set` オブジェクト内の各要素の**値**を挿入順に返す、新しい反復子オブジェクトを返します。
- {{jsxref("Set.prototype.values()")}}
  - : `Set` オブジェクト内の各要素の**値**を挿入順に返す、新しい反復子オブジェクトを返します。
- {{jsxref("Set.prototype.values", " Set.prototype.keys()")}}
  - : {{jsxref("Set.prototype.values()")}} の別名です。
- {{jsxref("Set.prototype.entries()")}}

  - : `Set` オブジェクト内の各要素を **`[value, value]` の配列**の形で挿入順で返す、新しい反復子オブジェクトを返します。

    これは {{jsxref("Map")}} オブジェクトと似ていますが、それぞれの項目の _key_ が `set` では _value_ と同じになります。

- {{jsxref("Set.forEach", "Set.prototype.forEach(<var>callbackFn</var>[, <var>thisArg</var>])")}}
  - : `Set` オブジェクト内に存在する各値に対して、挿入順に一度ずつ `callbackFn` を呼びます。`thisArg` 引数が指定された場合、それぞれの `callbackFn` の呼び出しにおいて `this` の値として使用されます。

## 例

### Set オブジェクトの使用

```js
const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o は別なオブジェクトを参照しているので、これは良い

mySet1.has(1)              // true
mySet1.has(3)              // false。 3 はセットに追加されないため
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // セットから 5 を取り除く
mySet1.has(5)       // false。 5 は削除された

mySet1.size         // 4。 1 つの値を削除したばかりであるため

console.log(mySet1)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome
```

### Set の反復処理

```js
// セット内のアイテムを反復処理
// アイテムのログ出力順: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item)

// アイテムのログ出力順: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.keys()) console.log(item)

// アイテムのログ出力順: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.values()) console.log(item)

// アイテムのログ出力順: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// （ここではキーと値は同じ）
for (let [key, value] of mySet1.entries()) console.log(key)

// Set オブジェクトを Array オブジェクトに Array.from で変換
const myArr = Array.from(mySet1) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// HTML 文書内であれば以下のものも動作する
mySet1.add(document.body)
mySet1.has(document.querySelector('body')) // true

// Set と Array の間の変換
const mySet2 = new Set([1, 2, 3, 4])
mySet2.size                    // 4
[...mySet2]                    // [1, 2, 3, 4]

// 交差する様子をシミュレートすることができる
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))

// 差をシミュレートすることができる
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))

// セット内の項目を forEach() で反復処理
mySet2.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// 4
```

### 基本的な集合演算の実装

```js
function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

// 例
const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3])
const setC = new Set([3, 4, 5, 6])

isSuperset(setA, setB)          // returns true
union(setA, setC)               // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC)        // returns Set {3, 4}
symmetricDifference(setA, setC) // returns Set {1, 2, 5, 6}
difference(setA, setC)          // returns Set {1, 2}
```

### Array オブジェクトとの関係

```js
let myArray = ['value1', 'value2', 'value3']

// 通常の Set コンストラクターを使用して、 Array を Set に変換
let mySet = new Set(myArray)

mySet.has('value1')     // returns true

// スプレッド演算子を使って、集合を配列に変換
console.log([...mySet]) // myArray と全く同じ Array が表示されます。
```

### 配列から重複した要素を取り除く

```js
// 配列から重複する要素を取り除くために使用

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
```

### 文字列との関係

```js
let text = 'India'

const mySet = new Set(text)  // Set(5) {'I', 'n', 'd', 'i', 'a'}
mySet.size  // 5

// 大文字と小文字の区別して重複を削除
new Set("Firefox")  // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set("firefox")  // Set(6) { "f", "i", "r", "e", "o", "x" }
```

### Set を使用して、リスト中の値の一意姓を保証

```js
const array = Array
  .from(document.querySelectorAll('[id]'))
  .map(function(e) {
      return e.id
  });

const set = new Set(array);
console.assert(set.size == array.length);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
