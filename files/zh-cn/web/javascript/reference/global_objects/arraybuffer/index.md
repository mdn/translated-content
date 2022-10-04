---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

**`ArrayBuffer`** 对象用来表示通用的、固定长度的原始二进制数据缓冲区。

它是一个字节数组，通常在其他语言中称为“byte array”。

你不能直接操作 `ArrayBuffer` 的内容，而是要通过[类型数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)或 {{jsxref("DataView")}} 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html")}}

## 语法

```plain
new ArrayBuffer(length)
```

### 参数

- `length`
  - : 要创建的 `ArrayBuffer` 的大小，单位为字节。

### 返回值

一个指定大小的 `ArrayBuffer` 对象，其内容被初始化为 0。

### 异常

如果 `length` 大于 {{jsxref("Number.MAX_SAFE_INTEGER")}}（>= 2 \*\* 53）或为负数，则抛出一个 {{jsxref("RangeError")}} 异常。

## 描述

`ArrayBuffer` 构造函数用来创建一个指定字节长度的 `ArrayBuffer` 对象。

### 以现有数据获取 ArrayBuffer

- [从 Base64 字符串](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [从本地文件](</zh-CN/docs/Web/API/FileReader#readAsArrayBuffer()>)

## 属性

- `ArrayBuffer.length`
  - : ArrayBuffer 构造函数的 length 属性，其值为 1。
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : 只读属性，表示 `ArrayBuffer` 的 byte 的大小，在 ArrayBuffer 构造完成时生成，不可改变。
- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : 返回 ArrayBuffer 的构造函数。
- {{jsxref("ArrayBuffer.prototype")}}
  - : 通过 ArrayBuffer 的原型对象可以为所有 ArrayBuffer 对象添加属性。

## 方法

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : 如果参数是 ArrayBuffer 的视图实例则返回 `true`，例如 [类型数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 或 {{jsxref("DataView")}} 对象；否则返回 `false`。
- {{jsxref("ArrayBuffer.transfer", "ArrayBuffer.transfer(oldBuffer [, newByteLength])")}} {{experimental_inline}}
  - : 返回一个新的 ArrayBuffer 对象，其内容取自 `oldBuffer` 中的数据，并且根据 `newByteLength` 的大小对数据进行截取或补 0。

## ArrayBuffer 实例

所有 `ArrayBuffer` 实例都会从 {{jsxref("ArrayBuffer.prototype")}} 继承属性和方法。

### 属性

{{page('zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype','属性')}}

### 方法

{{page('zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype','方法')}}

- {{jsxref("ArrayBuffer.slice()")}} {{non-standard_inline}}
  - : 和 {{jsxref("ArrayBuffer.prototype.slice()")}} 功能相同。

## 示例

下面的例子创建了一个 8 字节的缓冲区，并使用一个 {{jsxref("Global_Objects/Int32Array", "Int32Array")}} 来引用它：

```plain
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性提醒

从 ECMAScript 2015 开始，`ArrayBuffer` 对象需要用 {{jsxref("Operators/new", "new")}} 运算符创建。如果调用构造函数时没有使用 `new`，将会抛出 {{jsxref("TypeError")}} 异常。

```js example-bad
var dv = ArrayBuffer(10);
// TypeError: calling a builtin ArrayBuffer constructor
// without new is forbidden
```

```js example-good
var dv = new ArrayBuffer(10);
```

## 相关链接

- [JavaScript 类型数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- [{{jsxref("SharedArrayBuffer")}}](zh-CN/docs/Web/JavaScript/Typed_arrays)
