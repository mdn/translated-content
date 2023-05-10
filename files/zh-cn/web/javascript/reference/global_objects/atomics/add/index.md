---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
---

{{JSRef}}

**`Atomics.add()`** 静态方法会将给定的值加到数组里的某个特定位置上，并返回该位置的旧值。此原子操作保证在写上修改的值之前不会发生其他写操作。

{{EmbedInteractiveExample("pages/js/atomics-add.html")}}

## 语法

```plain
Atomics.add(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个共享的整型 typed array。例如 {{jsxref("Int8Array")}}，{{jsxref("Uint8Array")}}，{{jsxref("Int16Array")}}，{{jsxref("Uint16Array")}}，{{jsxref("Int32Array")}}，或者 {{jsxref("Uint32Array")}}。
- `index`
  - : `typedArray` 中的位置，该位置数值会被加总并更新。
- `value`
  - : 增加的数字。

### 返回值

给定位置的旧值（`typedArray[index]）`。

### 错误

- 假如 `typedArray` 不是允许的整型之一，则抛出 {{jsxref("TypeError")}}。
- `假如 typedArray` 不是一个 shared typed array 类型，则抛出 {{jsxref("TypeError")}}。
- 如果 `index` 超出了 `typedArray 的边界，则抛出` {{jsxref("RangeError")}}。

## 示例

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

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
