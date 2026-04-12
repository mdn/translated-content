---
title: "RangeError: BigInt negative exponent"
slug: Web/JavaScript/Reference/Errors/BigInt_negative_exponent
l10n:
  sourceCommit: 
---

JavaScript の例外 "BigInt negative exponent" は、{{jsxref("BigInt")}} を負の BigInt 値でべき乗したときに発生します。

## エラーメッセージ

```plain
RangeError: Exponent must be positive (V8-based)
RangeError: BigInt negative exponent (Firefox)
RangeError: Negative exponent is not allowed (Safari)
```

## エラーの種類

{{jsxref("RangeError")}}。

## エラーの原因

[べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation) の指数は正の値である必要があります。負の指数は底の逆数を取るため、その結果はほとんどの場合 -1 から 1 の間に収まり、`0n` に丸められてしまいます。こうした誤りを検出するため、負の指数は許可されていません。べき乗を行う前に、指数が 0 以上であることを確認してください。

## 例

### 負の BigInt を指数として使用する場合

```js example-bad
const a = 1n;
const b = -1n;
const c = a ** b;
// RangeError: BigInt negative exponent
```

代わりに、まず指数が負であるかどうかを確認し、より適切なエラーメッセージを出すか、`0n` や `undefined` などの別の値を返すようにしてください。

```js example-good
const a = 1n;
const b = -1n;
const quotient = b >= 0n ? a ** b : 0n;
```

## 関連情報

- [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
