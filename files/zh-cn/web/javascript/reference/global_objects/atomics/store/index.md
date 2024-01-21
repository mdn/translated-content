---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`Atomics.store()`** 静态方法将给定的值存储在数组中的指定位置，并返回该值。

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## 语法

```js-nolint
Atomics.store(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。{{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}}、{{jsxref("Uint32Array")}}、{{jsxref("BigInt64Array")}} 或 {{jsxref("BigUint64Array")}} 之一。
- `index`
  - : `typedArray` 中的要存储 `value` 的位置。
- `value`
  - : 要存储的数字。

### 返回值

已存储的值。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 store()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
