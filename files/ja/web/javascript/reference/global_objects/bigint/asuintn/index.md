---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
---

{{JSRef}}

**`BigInt.asUintN`** 静的メソッドは、 BigInt 値を符号なし整数に丸め、その値を返します。

{{InteractiveExample("JavaScript デモ: BigInt.asUintN()", "taller")}}

```js interactive-example
const U64_CEIL = 2n ** 64n;

console.log(BigInt.asUintN(64, U64_CEIL - 1n));
// 18446744073709551615n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asUintN(64, U64_CEIL));
// 0n (wraps to zero)
console.log(BigInt.asUintN(64, U64_CEIL + 1n));
// 1n
console.log(BigInt.asUintN(64, U64_CEIL * 2n));
// 0n (wraps on multiples)
console.log(BigInt.asUintN(64, U64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## 構文

```js
BigInt.asUintN(bits, bigint);
```

### 引数

- `bits`
  - : 整数の大きさのために利用できるビット数。
- `bigint`
  - : 指定されたビット数に収めるよう丸める整数値。

## 返値

`bigint` を 2^`bits` で割った剰余の値の符号なし整数です。

## 例

### 64ビットの範囲に収める

`BigInt.asUintN()` メソッドは、64ビットの数値の範囲に収めるのに便利です。

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// オーバーフローするのでゼロになる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asIntN()")}}
