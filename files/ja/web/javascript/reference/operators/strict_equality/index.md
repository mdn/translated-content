---
title: 厳密等価 (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.strict_equality
translation_of: Web/JavaScript/Reference/Operators/Strict_equality
---
{{jsSidebar("Operators")}}

厳密等価演算子 (`===`) は、二つのオペランドが等しいことを検査し、論理値で結果を返します。[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)演算子とは異なり、厳密等価演算子はオペランドの型が異なる場合、常に異なるものと判断します。

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## 構文

```js
x === y
```

## 解説

厳密等価演算子 (`===` および `!==`) は、[厳密等価比較アルゴリズム](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6)を使用して 2 つのオペランドを比較します。

- オペランドの型が異なる場合は、 `false` を返します。
- 両方のオペランドがオブジェクトである場合、同じオブジェクトを指している場合に限り `true` を返します。
- 両方のオペランドが `null` または両方のオペランドが `undefined` であった場合は `true` を返します。
- どちらかのオペランドが `NaN` であった場合は `false` を返します。
- それ以外の場合は、2 つのオペランドの値を比較します。

  - 数値型は同じ値の数値である必要があります。 `+0` と `-0` は同じ値と見なされます。
  - 文字列型は同じ文字が同じ順序で並んでいる必要があります。
  - 論理型は両方が `true` であるか両方が `false` である必要があります。
  
この演算子と[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) 演算子の最も顕著な違いは、オペランドの型が異なる場合、 `==` 演算子は比較前に同じ型に変換しようとすることです。

## 例

### オペランドが同じ型である場合の比較

```js
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true
```

### オペランドが異なる型である場合の比較

```js
console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false
```

### オブジェクトの比較

```js
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 === object2);  // false
console.log(object1 === object1);  // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Equality)
- [不等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)
- [厳密不等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
