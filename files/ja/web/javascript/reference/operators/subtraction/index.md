---
title: 減算演算子 (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**減算演算子 (`-`)** は 2 つのオペランドの間で減算し、それらの差を生成します。

{{InteractiveExample("JavaScript デモ: 減算演算子 (-)")}}

```js interactive-example
console.log(5 - 3);
// 予想される結果: 2

console.log(3.5 - 5);
// 予想される結果: -1.5

console.log(5 - "hello");
// 予想される結果: NaN

console.log(5 - true);
// 予想される結果: 4
```

## 構文

```js-nolint
x - y
```

### 引数

- `x`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 11（加算）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 12（乗算）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。

### 返値

`x` と `y` の差を表す数値または長整数です。

## 解説

`-` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値に強制変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)し、型を検査します。両オペランドが長整数になった場合、長整数の減算を実行します。そうでない場合は数値の減算を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

数値の減算を行う場合、`x - y` は `x + -y` と等価であると定義されているため、[加算](/ja/docs/Web/JavaScript/Reference/Operators/Addition)の規則が適用されます。

- いずれかのオペランドが `NaN` の場合、結果は `NaN` です。
- `Infinity - Infinity` の結果は `NaN` です。
- 数学的な結果が 0 の場合、減算が `-0 - 0` でない限り `0` が返されます。`-0 - 0` の場合は `-0` が返されます。

## 例

### 数値を用いた減算

```js
5 - 3; // 2
3 - 5; // -2
```

その他の長整数でない値は、数値に変換されます。

```js
"foo" - 3; // NaN。 "foo" は数値 NaN に変換される
5 - "3"; // 2。 "3" は数値 3 に変換される
```

### 長整数を用いた減算

```js
2n - 1n; // 1n
```

減算において、長整数と数値のオペランドを混在させることはできません。

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

長整数と長整数以外で減算を行うには、どちらかのオペランドを変換してください。

```js
2n - BigInt(1); // 1n
Number(2n) - 1; // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
