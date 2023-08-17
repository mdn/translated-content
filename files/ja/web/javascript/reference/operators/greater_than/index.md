---
title: 大なり (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
---

{{jsSidebar("Operators")}}

大なり演算子 (`>`) は、左辺のオペランドが右辺のオペランドより大きい場合は `true` を返し、それ以外の場合は `false` を返します。

{{EmbedInteractiveExample("pages/js/expressions-greater-than.html")}}

## 構文

```js
x > y;
```

## 解説

オペランドは、[抽象関係比較](https://tc39.es/ecma262/#sec-abstract-relational-comparison)アルゴリズムを使用して比較されます。このアルゴリズムの概要については、[小なり](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)演算子のドキュメントを参照して下さい。

## 例

### 文字列と文字列の比較

```js
console.log("a" > "b"); // false
console.log("a" > "a"); // false
console.log("a" > "3"); // true
```

### 文字列と数値の比較

```js
console.log("5" > 3); // true
console.log("3" > 3); // false
console.log("3" > 5); // false

console.log("hello" > 5); // false
console.log(5 > "hello"); // false

console.log("5" > 3n); // true
console.log("3" > 5n); // false
```

### 数値と数値の比較

```js
console.log(5 > 3); // true
console.log(3 > 3); // false
console.log(3 > 5); // false
```

### Number と BigInt の比較

```js
console.log(5n > 3); // true
console.log(3 > 5n); // false
```

### 論理値、null、undefined、NaN の比較

```js
console.log(true > false); // true
console.log(false > true); // false

console.log(true > 0); // true
console.log(true > 1); // false

console.log(null > 0); // false
console.log(1 > null); // true

console.log(undefined > 3); // false
console.log(3 > undefined); // false

console.log(3 > NaN); // false
console.log(NaN > 3); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [大なりイコール演算子](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小なり演算子](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)
- [小なりイコール演算子](/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
