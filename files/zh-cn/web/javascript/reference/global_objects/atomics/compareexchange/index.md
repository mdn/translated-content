---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
---

{{JSRef}} {{SeeCompatTable}}

**`Atomics.compareExchange()`** 静态方法会在数组的值与期望值相等的时候，将给定的替换值替换掉数组上的值，然后返回旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

## 语法

```plain
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### 参数

- `typedArray`
  - : 一个共享的整型 typed array。例如 {{jsxref("Int8Array")}}，{{jsxref("Uint8Array")}}，{{jsxref("Int16Array")}}，{{jsxref("Uint16Array")}}，{{jsxref("Int32Array")}}，或 {{jsxref("Uint32Array")}}。
- `index`
  - : `typedArray` 的索引。
- `expectedValue`
  - : 用于比较的值。
- replacementValue
  - : 将要替换上的值。

### 返回值

给定位置的旧值（`typedArray[index]`）。

### 错误

- 假如 `typedArray` 不是允许的整型之一，则抛出 {{jsxref("TypeError")}}。
- `假如 typedArray` 不是一个贡献的 typed array，则抛出 {{jsxref("TypeError")}}。
- 如果 `index` 超出了 `typedArray 的边界，则抛出` {{jsxref("RangeError")}}。

## 示例

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
