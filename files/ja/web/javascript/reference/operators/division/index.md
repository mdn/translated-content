---
title: 除算演算子 (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**除算演算子 (`/`)** は、左のオペランドを被除数とし、右のオペランドを除数としたオペランド同士の除算結果を生成します。

{{InteractiveExample("JavaScript デモ: 除算演算子 (/)")}}

```js interactive-example
console.log(12 / 2);
// 予想される結果: 6

console.log(3 / 2);
// 予想される結果: 1.5

console.log(6 / "3");
// 予想される結果: 2

console.log(2 / 0);
// 予想される結果: Infinity
```

## 構文

```js-nolint
x / y
```

## 解説

`/` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値型に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への変換)し、それらの型を検査します。両オペランドが長整数になった場合、長整数の除算を実行します。そうでない場合は数値除算を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

長整数の除算では、結果は両オペランドの商を0方向に切り捨てた値となり、余りは破棄されます。除数 `y` が `0n` の場合、{{jsxref("RangeError")}} が発生します。これは数値除算で 0 を割ると `Infinity` または `-Infinity` を返すのに対し、長整数には無限大の概念が存在しないためです。

## 例

### 基本的な除算

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
```

長整数以外の値は数値に変換されます。

```js
5 / "2"; // 2.5
5 / "foo"; // NaN
```

### 長整数を使用した除算

```js
1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n

2n / 0n; // RangeError: BigInt division by zero
```

除算で長整数と数値オペランドが混在させることはできません。

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

長整数と長整数以外による除算を行うには、どちらかのオペランドを変換してください。

```js
2n / BigInt(2); // 1n
Number(2n) / 2; // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
