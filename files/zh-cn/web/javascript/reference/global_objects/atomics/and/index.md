---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

**`Atomics.and()`** 静态方法会将给定的值与数组指定位置上的值进行按位与运算，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{InteractiveExample("JavaScript Demo: Atomics.and()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) AND 2 (0010) = 2 (0010)
console.log(Atomics.and(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## 语法

```js-nolint
Atomics.and(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。{{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}}、{{jsxref("Uint32Array")}}、{{jsxref("BigInt64Array")}} 或 {{jsxref("BigUint64Array")}} 之一。
- `index`
  - : `typedArray` 中要进行按位与运算的位置。
- `value`
  - : 要进行按位与运算的值。

### 返回值

给定位置的旧值（`typedArray[index]`）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 描述

当且仅当 `a` 和 `b` 都为 1 时，按位与运算结果为 1。与运算的真值表如下：

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

例如，`5 & 1` 按位与运算的结果是 `0001`，也就是十进制的 1。

```plain
5  0101
1  0001
   ----

1  0001
```

## 示例

### 使用 and()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // 返回 5，即旧的值
Atomics.load(ta, 0); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
