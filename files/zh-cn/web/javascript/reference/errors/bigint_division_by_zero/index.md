---
title: "RangeError: BigInt division by zero"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

当一个 {{jsxref("BigInt")}} 被 `0n` 除时，会产生 JavaScript 异常“BigInt division by zero”。

## 错误信息

```plain
RangeError: Division by zero (V8-based)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value (Safari)
```

## 错误类型

{{jsxref("RangeError")}}

## 哪里出错了？

当使用[除法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)或者[取余](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)运算符时，如果除数为 `0n` 则会触发该错误。在 {{jsxref("Number")}} 运算中，除以 `0n` 会得到 [`Infinity`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)，但在 BigInt 中不存在“Infinity”这一值，因此会抛出错误。在使用除法前，请先检查除数是否为 `0n`。

## 示例

### 被 0n 除

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

相反，应首先检查除数是否为 `0n`，并给出更友好的提示或者使用其他值，例如 `Infinity` 或 `undefined`。

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## 参见

- [`BigInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [除法（`/`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [取余（`%`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
