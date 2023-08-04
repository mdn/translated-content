---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
---

{{JSRef}} {{SeeCompatTable}}

**`Atomics.and()`** 静态方法会将给定的值与数组上的值进行按位与操作，并将结果赋值给数组，然后返回数组该位置上的旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。

{{EmbedInteractiveExample("pages/js/atomics-and.html")}}

## 语法

```plain
Atomics.and(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个共享的整型 typed array。例如 {{jsxref("Int8Array")}}，{{jsxref("Uint8Array")}}，{{jsxref("Int16Array")}}，{{jsxref("Uint16Array")}}，{{jsxref("Int32Array")}}，或 {{jsxref("Uint32Array")}}。
- `index`
  - : `按位与操作的 typedArray 的值在数组`上的索引。
- `value`
  - : 给定的按位与操作的值。

### 返回值

给定位置的旧值（`typedArray[index]`）。

### 错误

- 假如 `typedArray` 不是允许的整型之一，则抛出 {{jsxref("TypeError")}}。
- `假如 typedArray` 不是一个贡献的 typed array，则抛出 {{jsxref("TypeError")}}。
- 如果 `index` 超出了 `typedArray 的边界，则抛出` {{jsxref("RangeError")}}。

## 描述

假如 a 和 b 都是 1，那么按位与运算（a & b）仅产生 1。与操作的真值表为：

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

比如，一个按位与如 `5 & 1` 的结果是 `0001`，其十进制就是 `1`。

```plain
5  0101
1  0001
   ----

1  0001
```

## 示例

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // returns 0, the old value
Atomics.load(ta, 0); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
