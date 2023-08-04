---
title: Atomics.or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
---

{{JSRef}}

静态方法 **`Atomics.or()`** 用数组中指定位置的值进行一次按位或运算，并返回未计算时数组中指定位置处的值。这个 atomic 操作保证了在修改后的值被写回之前没有其他的写入操作发生。

{{EmbedInteractiveExample("pages/js/atomics-or.html")}}

## Syntax

```plain
Atomics.or(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个共享的 int 数组，类型为 {{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}} 或 {{jsxref("Uint32Array")}}。
- `index`
  - : `typedArray` 中要进行按位或运算的索引。
- `value`
  - : 要进行按位或运算的数。

### 返回值

`typedArray[index]` 处运算前的值。

### 异常

- 若 `typedArray` 不是一个可用的 int 类型，则抛出一个 {{jsxref("TypeError")}} 异常。
- 若 `typedArray` 不是一个共享的数组类型，则抛出一个 {{jsxref("TypeError")}} 异常。
- 若 `index` 索引超出了 `typedArray` 的大小，则抛出一个 {{jsxref("RangeError")}} 异常。

## 详情

当 `a` 或者 `b` 为 1 时，按位或运算结果为 1。或运算真值表如下：

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

例如，让 `5 & 1` 进行按位或运算的结果是 `0101` ，也就是十进制的 5：

```plain
5  0101
1  0001
   ----

5  0101
```

## 示例

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // returns 2, the old value
Atomics.load(ta, 0); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关文档

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}
