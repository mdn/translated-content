---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
---

{{JSRef}}**`Atomics.sub()`** 静态方法在数组中的给定位置减去给定值，并返回该位置的旧值。这个原子操作保证在修改后的值被写回之前不会发生其他写操作。{{EmbedInteractiveExample("pages/js/atomics-sub.html")}}

## 语法

```plain
Atomics.sub(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个共享的整型 typed array。例如 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, 或者 {{jsxref("Uint32Array")}}.
- `index`
  - : 要被 `value` 值减去的 `typedArray` 索引位置。
- `value`
  - : 要减去的数字。

### 返回值

给定位置的旧值 (`typedArray[index]`)。

### 异常

- 假如 `typedArray` 不是允许的整型之一，则抛出 {{jsxref("TypeError")}}。
- 假如 `typedArray` 不是一个共享的整型 typed array，则抛出 {{jsxref("TypeError")}}。
- 如果 `index` 超出了 `typedArray` 的边界，则抛出 {{jsxref("RangeError")}}。

## 示例

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
