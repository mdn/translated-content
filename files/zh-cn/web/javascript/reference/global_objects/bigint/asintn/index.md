---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
---

{{JSRef}}

**`BigInt.asIntN`** 静态方法将 `BigInt` 值转换为一个 -`2^(width-1)` 与 `2^(width-1)-1` 之间的有符号整数。

{{EmbedInteractiveExample("pages/js/bigint-asintn.html")}}

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

## 例子

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
