---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: ec9fab3524d17932694856be045c9e50168821fd
---

{{JSRef}}

如果给定的预期值等于旧值，**`Atomics.exchange()`** 静态方法会用给定的值替换数组上指定位置的值，并返回该位置的旧值，无论其是否等于预期的值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{InteractiveExample("JavaScript Demo: Atomics.compareExchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2

Atomics.compareExchange(uint8, 0, 5, 4); // Returns 2
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## 语法

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。{{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}}、{{jsxref("Uint32Array")}}、{{jsxref("BigInt64Array")}} 或 {{jsxref("BigUint64Array")}} 之一。
- `index`
  - : `typedArray` 中的要替换为 `replacementValue` 的位置。
- `expectedValue`
  - : 用于检查相等性的值。
- `replacementValue`
  - : 要替换的值。

### 返回值

给定位置的旧值（`typedArray[index]`）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 compareExchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // 返回 7，即旧的值
Atomics.load(ta, 0); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
