---
title: 小なり (<)
slug: Web/JavaScript/Reference/Operators/Less_than
---

{{jsSidebar("Operators")}}

小なり演算子 (`<`) は、左辺のオペランドが右辺のオペランドより小さい場合は `true` を返し、それ以外の場合は `false` を返します。

{{EmbedInteractiveExample("pages/js/expressions-less-than.html")}}

## 構文

```js
x < y;
```

## 解説

オペランドは、[抽象関係比較](https://tc39.es/ecma262/#sec-abstract-relational-comparison)アルゴリズムを使用して比較されます。以下に大まかに要約します。

- 最初に、オブジェクトは [`Symbol.ToPrimitive`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) の `hint` 引数を `'number'` として使用してプリミティブに変換されます。
- 両方の値が文字列である場合、それらに含まれる Unicode コードポイントの値に基づいて、文字列として比較されます。
- それ以外の場合、 JavaScript は非数値型を数値に変換しようとします。

  - 論理値 `true` および `false` は、それぞれ 1 および 0 に変換されます。
  - `null` は 0 に変換されます。
  - `undefined` は `NaN` に変換されます。
  - 文字列は、含まれている値に基づいて変換され、数値が含まれていない場合は `NaN` として変換されます。

- いずれかの値が [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) の場合、演算子は `false` を返します。
- それ以外の場合、値は数値として比較されます。

## 例

### 文字列と文字列の比較

```js
console.log("a" < "b"); // true
console.log("a" < "a"); // false
console.log("a" < "3"); // false
```

### 文字列と数値の比較

```js
console.log("5" < 3); // false
console.log("3" < 3); // false
console.log("3" < 5); // true

console.log("hello" < 5); // false
console.log(5 < "hello"); // false

console.log("5" < 3n); // false
console.log("3" < 5n); // true
```

### 数値と数値の比較

```js
console.log(5 < 3); // false
console.log(3 < 3); // false
console.log(3 < 5); // true
```

### Number と BigInt の比較

```js
console.log(5n < 3); // false
console.log(3 < 5n); // true
```

### 論理値、null、undefined、NaN の比較

```js
console.log(true < false); // false
console.log(false < true); // true

console.log(0 < true); // true
console.log(true < 1); // false

console.log(null < 0); // false
console.log(null < 1); // true

console.log(undefined < 3); // false
console.log(3 < undefined); // false

console.log(3 < NaN); // false
console.log(NaN < 3); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [大なり演算子](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [大なりイコール演算子](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小なりイコール演算子](/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
