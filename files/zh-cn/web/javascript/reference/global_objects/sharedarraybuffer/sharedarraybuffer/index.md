---
title: SharedArrayBuffer() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

> **备注：** `SharedArrayBuffer` 构造函数可能并不总是全局可用的，除非满足某些[安全要求](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements)。

**`SharedArrayBuffer()`** 构造函数创建 {{jsxref("SharedArrayBuffer")}} 对象。

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer Constructor", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 语法

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> **备注：** `SharedArrayBuffer()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 来调用。不带 `new` 调用会抛出 {{jsxref("TypeError")}}。

### 参数

- `length`
  - : 要创建的数组缓冲区大小，以字节为单位。
- `options` {{optional_inline}}
  - : 一个对象，包含以下属性：
    - `maxByteLength` {{optional_inline}}
      - : 该共享数组缓冲区可以调整到的最大大小，以字节为单位。

### 返回值

一个指定大小的新 `SharedArrayBuffer` 对象，如果指定了 `maxByteLength`，则其 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} 属性被设置为指定的值。其内容被初始化为 0。

## 示例

### 总是使用 new 运算符来创建 SharedArrayBuffer

`SharedArrayBuffer` 构造函数必须使用 `new` 运算符来构造。将 `SharedArrayBuffer` 构造函数作为函数，不通过 `new` 调用会抛出 {{jsxref("TypeError")}}。

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// 不带 new 调用是不行的
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### 增大可增大的 SharedArrayBuffer

在这个示例中，我们创建了一个 8 字节的缓冲区，其可增大到的最大长度为 16 字节，然后 {{jsxref("SharedArrayBuffer/grow", "grow()")}} 它到 12 字节：

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> 推荐设置 `maxByteLength` 为使用场景下最低的大小，不要超过 `1073741824`（1GB）以减小内存溢出风险。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
