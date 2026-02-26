---
title: BigInt.asIntN()
short-title: asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt.asIntN`** は静的メソッドで、長整数を符号付き整数値に丸め、その値を返します。

{{InteractiveExample("JavaScript デモ: BigInt.asIntN()")}}

```js interactive-example
const I64_CEIL = 2n ** 63n;

console.log(BigInt.asIntN(64, I64_CEIL - 1n));
// 9223372036854775807n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asIntN(64, I64_CEIL));
// -9223372036854775808n (wraps to min value)
console.log(BigInt.asIntN(64, I64_CEIL + 1n));
// -9223372036854775807n (min value + 1n)
console.log(BigInt.asIntN(64, I64_CEIL * 2n));
// 0n (wrapped around to zero)
console.log(BigInt.asIntN(64, -I64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## 構文

```js-nolint
BigInt.asIntN(bits, bigint)
```

### 引数

- `bits`
  - : 返される長整数に使用可能なビット数。0 から 2<sup>53</sup> - 1 までの整数である必要があります（両端を含む）。
- `bigint`
  - : 指定されたビット数に丸める長整数値です。

### 返値

`bigint` を `2 ** bits` で割った剰余の値の符号付き整数です。

### 例外

- {{jsxref("RangeError")}}
  - : `bits` が負または 2<sup>53</sup> - 1 より大きい場合に発生します。

## 解説

`BigInt.asIntN` メソッドは、長整数を指定されたビット数で切り捨て、結果を符号付き整数として解釈します。例えば、`BigInt.asIntN(3, 25n)` の場合、値 `25n` は `1n` に切り捨てられます。

```plain
25n = 00011001 (base 2)
          ^=== 最後の 3 ビットのみを使用
===>       001 (base 2) = 1n
```

残りの数値の最上位ビットが `1` の場合、結果は負の数となる。例えば、`BigInt.asIntN(4, 25n)` は `-7n` を返す。これは `1001` が 2 の補数表現における `-7` の符号化値であるためです。

```plain
25n = 00011001 (base 2)
         ^==== 最後の 4 ビットのみを使用
===>      1001 (base 2) = -7n
```

> [!NOTE]
> `BigInt` の値は常に 2 進数の 2 の補数形式でエンコードされます。

類似の言語 API（例：{{jsxref("Number.prototype.toExponential()")}}）とは異なり、`asIntN` は BigInt の静的プロパティであるため、BigInt 値のメソッドとしてではなく、常に `BigInt.asIntN()` として使用します。`asIntN()` を「標準ライブラリ関数」として公開することで、[asm.js との相互運用性](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)が実現されます。

## 例

### 64 ビットの範囲に収める

`BigInt.asIntN()` メソッドは、64 ビットの数値の範囲に収めるのに便利です。

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max); // 9223372036854775807n

BigInt.asIntN(64, max + 1n); // -9223372036854775808n
// 2^63 の 64 番目のビットが 1 であるため負の数
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asUintN()")}}
