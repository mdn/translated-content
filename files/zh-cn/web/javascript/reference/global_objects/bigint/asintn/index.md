---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
---

{{JSRef}}

**`BigInt.asIntN`** 静态方法将 `BigInt` 值转换为一个 -`2^(width-1)` 与 `2^(width-1)-1` 之间的有符号整数。

{{InteractiveExample("JavaScript Demo: BigInt.asIntN()")}}

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

## 语法

```plain
BigInt.asIntN(width, bigint);
```

### 参数

- `width`
  - : 可存储整数的位数。
- `bigint`
  - : 要存储在指定位数上的整数。

### 返回值

`bigint` 模 (modulo) `2^width` 作为有符号整数的值。

## 示例

### 保持在 64 位范围内

`BigInt.asIntN()` 方法对于保持在 64 位 (64-bit) 算数范围内非常有用。

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775808n
// negative because of overflow
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
