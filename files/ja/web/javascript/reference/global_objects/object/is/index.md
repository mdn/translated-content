---
title: Object.is()
short-title: is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Object.is()`** は静的メソッドで、 2 つの値が[同一値](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#object.is_を使用した同値等価性)であるかどうかを判定します。

{{InteractiveExample("JavaScript デモ: Object.is()")}}

```js interactive-example
console.log(Object.is("1", 1));
// 予想される結果: false

console.log(Object.is(NaN, NaN));
// 予想される結果: true

console.log(Object.is(-0, 0));
// 予想される結果: false

const obj = {};
console.log(Object.is(obj, {}));
// 予想される結果: false
```

## 構文

```js-nolint
Object.is(value1, value2)
```

### 引数

- `value1`
  - : 比較する 1 つ目の値。
- `value2`
  - : 比較する 2 つ目の値。

### 返値

論理値で、 2 つの引数が同一値であるかどうかを表します。

## 解説

`Object.is()` は 2 つの値が[同一値](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#object.is_を使用した同値等価性)であるかどうかを判定します。2 つの値が以下の規則の一つに当てはまる場合に同一となります。

- どちらも {{jsxref("undefined")}}
- どちらも [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)
- どちらも `true` かどちらも `false`
- どちらも同じ文字群が同じ順で並ぶ同じ長さの文字列
- どちらも同じオブジェクト（すなわち両方の値がメモリー内の同じオブジェクトを参照）
- どちらも同じ数値の[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- どちらも同じシンボル値の[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- どちらも数で、
  - どちらも `+0`
  - どちらも `-0`
  - どちらも {{jsxref("NaN")}}
  - あるいはどちらもゼロ以外で {{jsxref("NaN")}} でなく、同じ数値を持つ

`Object.is()` は [`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality) 演算子と等価ではありません。`==` 演算子は等価性比較の前に（同じ型でなければ）両辺に対して様々な型変換を適用します（結果、例えば `"" == false` は `true` と評価されます）が、`Object.is()` は両辺どちらの値にも型変換を行いません。

また、`Object.is()` は [`===`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) 演算子とも同じでも*ありません*。`Object.is()` と `===` の唯一の違いは、符号付きのゼロと `NaN` の扱です。`===` 演算子は（そして `==` 演算子も）数値 `-0` と `+0` は同じものとして扱う一方、{{jsxref("NaN")}} は異なるものとして扱います。

## 例

### Object.is() の使用

```js
// ケース 1: === を用いるのと同じ結果になる評価式
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// ケース 2: 符号付きのゼロ
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// ケース 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.is` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims による `Object.is` のポリフィル](https://www.npmjs.com/package/object.is)
- [等価性の比較と同一性](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
