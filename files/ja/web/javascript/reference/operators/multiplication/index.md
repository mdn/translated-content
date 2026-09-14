---
title: 乗算演算子 (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**乗算演算子 (`*`)** は、オペランドの積を生成します。

{{InteractiveExample("JavaScript デモ: 乗算演算子 (*)")}}

```js interactive-example
console.log(3 * 4);
// 予想される結果: 12

console.log(-3 * 4);
// 予想される結果: -12

console.log("3" * 2);
// 予想される結果: 6

console.log("foo" * 2);
// 予想される結果: NaN
```

## 構文

```js-nolint
x * y
```

## 解説

`*` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値型に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への変換)し、それらの型を検査します。両オペランドが長整数になった場合、長整数の乗算を実行します。そうでない場合は数値の乗算を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

## 例

### 数値を用いた乗算

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

### 非数との乗算

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### 長整数を用いた乗算

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

乗算で長整数と数値のオペランドを混在させることはできません。

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

長整数と長整数以外で乗算を行うには、どちらかのオペランドを変換してください。

```js
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
