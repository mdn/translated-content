---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
---

{{JSRef}}

**`Atomics.xor()`** 静态方法会在数组中给定位置进行一次按位异或操作，并返回该位置的旧值。这个原子操作保证在修改后的值被写回之前不会发生其他写操作。{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## 语法

```plain
Atomics.xor(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个共享的整型 typed array。例如 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, 或者 {{jsxref("Uint32Array")}}.
- `index`
  - : `typedArray` 中需要进行按位异或的索引位置。
- `value`
  - : 要进行按位异或的数字。

### 返回值

给定位置的旧值 (`typedArray[index]`)。

### 异常

- 假如 `typedArray` 不是允许的整型之一，则抛出 {{jsxref("TypeError")}}。
- 假如 `typedArray` 不是一个共享的整型 typed array，则抛出 {{jsxref("TypeError")}}。
- 如果 `index` 超出了 `typedArray` 的边界，则抛出 {{jsxref("RangeError")}}。

## 描述

如果 a 和 b 不同，则按位异或操作产生 1。异或操作的真值表如下：

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

例如，按位异或 `5 & 1` 将返回 `0100`，而 `0100` 是十进制为 `4` 。

```plain
5  0101
1  0001
   ----

4  0100
```

## 示例

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}
