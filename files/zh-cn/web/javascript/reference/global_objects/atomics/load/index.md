---
title: Atomics.load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`Atomics.load()`** 静态方法返回数组中指定位置的值。

{{EmbedInteractiveExample("pages/js/atomics-load.html")}}

## 语法

```js-nolint
Atomics.load(typedArray, index)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。{{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}}、{{jsxref("Uint32Array")}}、{{jsxref("BigInt64Array")}} 或 {{jsxref("BigUint64Array")}} 之一。
- `index`
  - : `typedArray` 中的要加载的位置。

### 返回值

给定位置的值（`typedArray[index]`）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 load()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}
