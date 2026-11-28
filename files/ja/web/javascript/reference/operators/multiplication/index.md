---
title: 乗算演算子 (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
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

### 引数

- `x`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 12 （乗算）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 13 （べき乗）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。

### 返値

`x` と `y` の積を表す数値または長整数です。

## 解説

`*` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値に強制変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)し、それらの型を検査します。両オペランドが長整数になった場合、長整数の乗算を実行します。そうでない場合は数値の乗算を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

数値の乗算を行う場合、丸め誤差を除けば、結果は通常、数学的な乗算と一致します。`Infinity` との演算も同様で、例えば `Infinity` に正の有限数を掛けても `Infinity` のままです。両オペランドの符号が同じ場合、結果の符号は正になり、異なる場合は負になります（`0` と `-0` の符号は異なります）。例外として、次のような場合があります。

- いずれかのオペランドが `NaN` の場合、結果は `NaN` です。
- 一方のオペランドが `±Infinity` で、もう一方が `±0` の場合、結果は `NaN` です（この場合、`0` は無限小の値として扱われます）。

## 例

### 数値を用いた乗算

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

### 数値以外の値との乗算

長整数以外のオペランドは数値に強制変換されます。

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

### 結合法則が成り立たない場合

演算の順序に注意してください。数学とは異なり、JavaScript の乗算は中間結果の丸めにより、常に結合的とは限りません。例えば、`a * (b * c) !== (a * b) * c` です。

```js
const a = 3;
const b = 0.1;
const c = 10;

console.log(a * b * c); // 3.0000000000000004
console.log(a * (b * c)); // 3
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
