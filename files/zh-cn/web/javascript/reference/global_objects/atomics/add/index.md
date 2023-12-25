---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`Atomics.add()`** 静态方法会将给定的值加到数组里的指定位置上，并返回该位置的旧值。此原子操作保证在修改的值写入之前不会发生其他写操作。

{{EmbedInteractiveExample("pages/js/atomics-add.html")}}

## 语法

```js-nolint
Atomics.add(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。例如 {{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int32Array")}} 或者 {{jsxref("Uint32Array")}}。
- `index`
  - : `typedArray` 中的要加上 `value` 的位置。
- `value`
  - : 增加的数字。

### 返回值

给定位置的旧值（`typedArray[index]`）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 add()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
