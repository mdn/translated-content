---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

**`ArrayBuffer`** 对象用来表示通用的、固定长度的原始二进制数据缓冲区。

它是一个字节数组，通常在其他语言中称为“byte array”。你不能直接操作 `ArrayBuffer` 中的内容；而是要通过[类型化数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)或 {{jsxref("DataView")}} 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

[`ArrayBuffer()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) 构造函数创建一个以字节为单位的给定长度的新 `ArrayBuffer`。你也可以从现有的数据（例如，从 [Base64](/zh-CN/docs/Glossary/Base64) 字符串或者[从本地文件](/zh-CN/docs/Web/API/FileReader/readAsArrayBuffer)）获取数组缓冲区。

`ArrayBuffer` 是一个[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)。

## 描述

### 调整 ArrayBuffer 的大小

`ArrayBuffer` 对象可以通过在调用 {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} 构造函数时包含 `maxByteLength` 选项来使其大小可变。你可以通过访问其 {{jsxref("ArrayBuffer/resizable", "resizable")}} 和 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 属性来查询 `ArrayBuffer` 的大小是否可变以及其最大值。你可以通过调用 {{jsxref("ArrayBuffer/resize", "resize()")}} 为可变大小的 `ArrayBuffer` 分配一个新的大小。新的字节会被初始化为 0。

这些特性使得调整 `ArrayBuffer` 的大小更加高效——否则，你必须使用新的大小创建一个缓冲副本。这也使得 JavaScript 在这方面与 WebAssembly 相当（Wasm 线性内存可以使用 [`WebAssembly.Memory.prototype.grow()`](/zh-CN/docs/WebAssembly/JavaScript_interface/Memory/grow) 调整大小）。

## 构造函数

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : 创建一个新的 `ArrayBuffer` 对象。

## 静态属性

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 用于创建派生对象的构造函数。

## 静态方法

- {{jsxref("ArrayBuffer.isView()")}}
  - : 如果 `arg` 是 ArrayBuffer 视图之一，则返回 `true`，例如[类型化数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)或者{{jsxref("DataView")}}。否则返回 `false`。

## 实例属性

- `ArrayBuffer.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是 `"ArrayBuffer"` 字符串。该属性在 {{jsxref("Object.prototype.toString()")}} 中被使用。
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : `ArrayBuffer` 的只读大小（以字节为单位）。这是在数组构建时确定的，无法更改。

## 实例方法

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 返回一个新的 `ArrayBuffer`，它的内容是该 `ArrayBuffer` 从 `begin`（包括）到 `end`（不包括）字节的拷贝。如果 `begin` 或 `end` 是负数，它则指的是从数组末尾开始的索引，而不是从头开始的索引。

## 示例

### 创建 ArrayBuffer

下面的例子创建了一个 8 字节的缓冲区，并使用 {{jsxref("Int32Array")}} 视图引用它。

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中的 `ArrayBuffer` Polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError：无效的数组长度](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
