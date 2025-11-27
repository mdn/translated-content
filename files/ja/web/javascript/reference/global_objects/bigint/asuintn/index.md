---
title: BigInt.asUintN()
short-title: asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt.asUintN()`** は静的メソッドで、長整数を符号なし整数に丸め、その値を返します。

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

```js-nolint
BigInt.asUintN(bits, bigint)
```

### 引数

- `bits`
  - : 返される長整数に使用可能なビット数。0 から 2<sup>53</sup> - 1 までの整数である必要があります（両端を含む）。
- `bigint`
  - : 指定されたビット数に丸める長整数値です。

## 返値

`bigint` の値を `2 ** bits` で割った剰余の値の符号なし整数です。

### 例外

- {{jsxref("RangeError")}}
  - : `bits` が負または 2<sup>53</sup> - 1 より大きい場合に発生します。

## 解説

`BigInt.asUintN` メソッドは、長整数を指定されたビット数で切り捨て、結果を符号なし整数として解釈します。符号なし整数は符号ビットを持たず、常に非負です。例えば、`BigInt.asUintN(4, 25n)` の場合、値 `25n` は `9n` に切り捨てられます。

```plain
25n = 00011001 (base 2)
         ^==== 最後の 4 ビットのみを使用
===>      1001 (base 2) = 9n
```

> [!NOTE]
> `BigInt` の値は常に 2 進数の 2 の補数形式でエンコードされます。

類似の言語 API（例：{{jsxref("Number.prototype.toExponential()")}}）とは異なり、`asUintN` は BigInt の静的プロパティであるため、BigInt 値のメソッドとしてではなく、常に `BigInt.asUintN()` として使用します。`asUintN()` を「標準ライブラリ関数」として公開することで、[asm.js との相互運用性](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)が実現されます。

## 例

### 64 ビットの範囲に収める

`BigInt.asUintN()` メソッドは、64 ビットの数値の範囲に収めるのに便利です。

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
