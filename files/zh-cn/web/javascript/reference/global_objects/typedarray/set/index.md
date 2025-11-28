---
title: TypedArray.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("TypedArray")}} 实例的 **`set()`** 方法用于将多个值存入类型化数组中，这些值会从指定的数组中读取。

{{InteractiveExample("JavaScript 演示：TypedArray.prototype.set()")}}

```js interactive-example
// 创建一个以字节为单位指定大小的 ArrayBuffer
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

// 从索引 3 开始将这些值复制到数组中
uint8.set([1, 2, 3], 3);

console.log(uint8);
// 预期输出：Uint8Array [0, 0, 0, 1, 2, 3, 0, 0]
```

## 语法

```js-nolint
set(array)
set(array, targetOffset)

set(typedarray)
set(typedarray, targetOffset)
```

### 参数

- `array`
  - : 要复制其值的源数组。源数组中的所有值都会被复制到目标数组中，除非源数组的长度加上目标偏移量超过目标数组的长度，在这种情况下会抛出异常。
- `typedarray`
  - : 如果源数组是类型化数组，这两个数组可能共享同一个底层 {{jsxref("ArrayBuffer")}}；此时 JavaScript 引擎会智能地将缓冲区中源范围的数据**复制**到目标范围。
- `targetOffset` {{optional_inline}}
  - : 指定在目标数组中开始写入源数组值的偏移位置。如果省略此参数，则默认为 0（即源数组将从索引 0 开始覆盖目标数组中的值）。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("RangeError")}}
  - : 在以下情况之一中会抛出该错误：
    - 由于 `targetOffset` 过大，`array` 或者 `typedarray` 的长度过长，导致元素将被存储到类型化数组的末尾之外。
    - `targetOffset` 为负数。

## 示例

### 使用 set()

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.set` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
