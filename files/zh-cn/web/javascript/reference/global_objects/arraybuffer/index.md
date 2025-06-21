---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
l10n:
  sourceCommit: c9f7361807d9b0fbf0fcf0ccc5cc166bf33d307d
---

{{JSRef}}

**`ArrayBuffer`** 对象用来表示通用的原始二进制数据缓冲区。

它是一个字节数组，通常在其他语言中称为“byte array”。你不能直接操作 `ArrayBuffer` 中的内容；而是要通过[类型化数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)或 {{jsxref("DataView")}} 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

[`ArrayBuffer()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) 构造函数创建一个以字节为单位的给定长度的新 `ArrayBuffer`。你也可以从现有的数据（例如，从 [Base64](/zh-CN/docs/Glossary/Base64) 字符串或者[从本地文件](/zh-CN/docs/Web/API/FileReader/readAsArrayBuffer)）获取数组缓冲区。

`ArrayBuffer` 是一个[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)。

## 描述

### 调整 ArrayBuffer 的大小

`ArrayBuffer` 对象可以通过在调用 {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} 构造函数时包含 `maxByteLength` 选项来使其大小可变。你可以通过访问其 {{jsxref("ArrayBuffer/resizable", "resizable")}} 和 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 属性来查询 `ArrayBuffer` 的大小是否可变以及其最大值。你可以通过调用 {{jsxref("ArrayBuffer/resize", "resize()")}} 为可变大小的 `ArrayBuffer` 分配一个新的大小。新的字节会被初始化为 0。

这些特性使得调整 `ArrayBuffer` 的大小更加高效——否则，你必须使用新的大小创建一个缓冲副本。这也使得 JavaScript 在这方面与 WebAssembly 相当（Wasm 线性内存可以使用 [`WebAssembly.Memory.prototype.grow()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) 调整大小）。

### 传输 ArrayBuffer

`ArrayBuffer` 对象可以在不同的执行上下文之间传输，就像 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 或 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 那样，使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。这可以通过在 {{domxref("Worker.postMessage()")}} 或 {{domxref("ServiceWorker.postMessage()")}} 的调用中传入 `ArrayBuffer` 对象作为[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)来完成。在纯 JavaScript 中，也可以使用 {{jsxref("ArrayBuffer/transfer", "transfer()")}} 或 {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} 方法来转移内存的所有权。

当一个 `ArrayBuffer` 对象被传输时，它原来的副本会被*分离（detached）*，这意味着它不再可用。在任何时候，只有一个 `ArrayBuffer` 的副本实际拥有底层内存。分离的缓冲区具有以下行为：

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} 变为 0（在缓冲区和关联的类型化数组视图中）。
- 所有实例方法，比如 {{jsxref("ArrayBuffer/resize", "resize()")}} 和 {{jsxref("ArrayBuffer/slice", "slice()")}}，会在调用时抛出 {{jsxref("TypeError")}}。关联的类型化数组视图的方法也会抛出 `TypeError`。

你可以通过其 {{jsxref("ArrayBuffer/detached", "detached")}} 属性来检查 `ArrayBuffer` 是否已分离。

## 构造函数

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : 创建一个新的 `ArrayBuffer` 对象。

## 静态属性

- [`ArrayBuffer[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : 用于创建派生对象的构造函数。

## 静态方法

- {{jsxref("ArrayBuffer.isView()")}}
  - : 如果 `arg` 是 ArrayBuffer 视图之一，则返回 `true`，例如[类型化数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)或者 {{jsxref("DataView")}}。否则返回 `false`。

## 实例属性

这些属性在 `ArrayBuffer.prototype` 上定义，并由所有 `ArrayBuffer` 实例共享。

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : `ArrayBuffer` 的大小，以字节为单位。它在构造时确定，并且只有在 `ArrayBuffer` 可调整大小的情况下才能通过 {{jsxref("ArrayBuffer.prototype.resize()")}} 方法进行改变。
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `ArrayBuffer` 实例，初始值为 {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}} 构造函数。
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : 只读。如果 `ArrayBuffer` 已分离（传输），则返回 `true`，否则返回 `false`。
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : 只读，`ArrayBuffer` 可以调整到的最大字节长度。它在构造时确定，并且无法更改。
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : 只读。如果 `ArrayBuffer` 可调整大小，则返回 `true`，否则返回 `false`。
- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"ArrayBuffer"`。它用于 {{jsxref("Object.prototype.toString()")}}。

## 实例方法

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : 将 `ArrayBuffer` 调整为指定大小，以字节为单位。
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : 返回一个新的 `ArrayBuffer` 对象，其内容是从 `begin`（包含）到 `end`（不包含）的 `ArrayBuffer` 的字节内容的副本。如果 `begin` 或 `end` 为负数，则它将从数组的末尾开始计算索引，而非从数组的开头。
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : 创建一个新的 `ArrayBuffer` 对象，其内容是与此缓冲区相同的字节内容，然后分离此缓冲区。
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : 创建一个新的不可调整大小的 `ArrayBuffer` 对象，其内容与此缓冲区相同，然后分离此缓冲区。

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

- [`core-js` 中 `ArrayBuffer` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
