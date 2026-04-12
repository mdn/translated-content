---
title: "RangeError: BigInt division by zero"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "BigInt division by zero" は、{{jsxref("BigInt")}} を `0n` で割ったときに発生します。

## エラーメッセージ

```plain
RangeError: Division by zero (V8-based)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value. (Safari)
```

## エラーの種類

{{jsxref("RangeError")}}。

## エラーの原因

[除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division) や [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder) の除数が `0n` である場合に、このエラーが発生します。{{jsxref("Number")}} の計算では [`Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) が返されますが、BigInts には "infinity value" を表す値がないため、エラーになります。除算を行う前に、除数が `0n` でないことを確認してください。

## 例

### 0n による除算

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

代わりに、あらかじめ除数が `0n` かどうかを確認し、より分かりやすいエラーメッセージを出すか、`Infinity` や `undefined` などの別の値にフォールバックしてください。

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## 関連情報

- [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [剰余 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
