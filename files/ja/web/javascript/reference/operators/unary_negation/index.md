---
title: 単項マイナス演算子 (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**単項マイナス演算子 (`-`)** はオペランドの前に置かれ、符号を反転します。

{{InteractiveExample("JavaScript デモ: 単項マイナス演算子 (-)")}}

```js interactive-example
const x = 4;
const y = -x;

console.log(y);
// 予想される結果: -4

const a = "4";
const b = -a;

console.log(b);
// 予想される結果: -4
```

## 構文

```js-nolint
-x
```

## 解説

`-` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。最初の[オペランドを数値に型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への変換)を行い、その型を検査します。オペランドが長整数になった場合は長整数の符号反転を実行し、そうでない場合は数値の符号反転を実行します。

## 例

### 数値の符号を反転

```js
const x = 3;
const y = -x;
// y is -3; x is 3
```

### 数値以外の符号を反転

単項マイナス演算子は、数値でないものを数値に変換することができます。

```js
const x = "4";
const y = -x;

// y = -4
```

長整数は、単項マイナス演算子を使用して符号を反転することができます。

```js
const x = 4n;
const y = -x;

// y is -4n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
