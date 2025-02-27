---
title: ArrayBuffer() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`ArrayBuffer()`** 构造函数创建 {{jsxref("ArrayBuffer")}} 对象。

{{InteractiveExample("JavaScript Demo: ArrayBuffer Constructor", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 语法

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> **备注：** `ArrayBuffer()` 只能使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构造。尝试在没有 `new` 的情况下调用会抛出 {{jsxref("TypeError")}}。

### 参数

- `length`
  - : 要创建的数组缓冲区的大小（以字节为单位）。
- `options` {{optional_inline}}
  - : 一个对象，可以包含以下属性：
    - `maxByteLength` {{optional_inline}}
      - : 数组缓冲区可以调整到的最大大小，以字节为单位。

### 返回值

一个指定大小的新 `ArrayBuffer` 对象，其 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 属性设置为指定的 `maxByteLength`（如果指定了该值），其内容被初始化为 0。

### 异常

- {{jsxref("RangeError")}}
  - : 有下列情况之一时抛出：
    - `length` 或 `maxByteLength` 大于 {{jsxref("Number.MAX_SAFE_INTEGER")}}（≥ 2<sup>53</sup>）或者为负数。
    - `length` 大于 `maxByteLength`。

## 示例

### 创建一个 ArrayBuffer

在这个示例中，我们创建一个 8 字节的缓冲区，并使用一个 {{jsxref("Int32Array")}} 视图来引用该缓冲区：

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### 创建一个可以调整大小的 ArrayBuffer

在这个示例中，我们创建一个 8 字节的缓冲区，它可以调整到的最大长度为 16 字节，然后使用 {{jsxref("ArrayBuffer/resize", "resize()")}} 调整到 12 字节：

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> 推荐将 `maxByteLength` 设置为使用场景下最小的大小。它不应超过 `1073741824`（1GB），以减少内存溢出风险。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `ArrayBuffer` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("SharedArrayBuffer")}}
