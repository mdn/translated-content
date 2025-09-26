---
title: 厳密等価演算子 (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**厳密等価演算子 (`===`)** は、 2 つのオペランドが等しいことを検査し、論理値で結果を返します。[等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)演算子とは異なり、厳密等価演算子はオペランドの型が異なる場合、常に異なるものと判断します。

{{InteractiveExample("JavaScript デモ: 厳密等価演算子 (===)")}}

```js interactive-example
console.log(1 === 1);
// 予想される結果: true

console.log("hello" === "hello");
// 予想される結果: true

console.log("1" === 1);
// 予想される結果: false

console.log(0 === false);
// 予想される結果: false
```

## 構文

```js-nolint
x === y
```

## 解説

厳密等価演算子 (`===` および `!==`) は、 [IsStrictlyEqual](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#による厳密な等価性) の意味を提供します。

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
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### オペランドが異なる型である場合の比較

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### オブジェクトの比較

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [等価演算子 (`==`)](/ja/docs/Web/JavaScript/Reference/Operators/Equality)
- [不等価演算子 (`!=`)](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)
- [厳密不等価演算子 (`!==`)](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
