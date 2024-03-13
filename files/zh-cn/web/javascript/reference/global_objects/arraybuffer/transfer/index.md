---
title: ArrayBuffer.prototype.transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: fb236a32b20d1985b35b1c0c25ce99f2a0e0d5fe
---

{{JSRef}} {{SeeCompatTable}}

{{jsxref("ArrayBuffer")}} 实例的 **`transfer()`** 方法创建一个内容与该缓冲区相同的新 `ArrayBuffer` 实例，然后将当前缓冲区分离。

## 语法

```js-nolint
transfer()
transfer(newByteLength)
```

### 参数

- `newByteLength` {{optional_inline}}
  - : 新的 `ArrayBuffer` 的 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}。默认为当前 `ArrayBuffer` 的 `byteLength`。
    - 如果 `newByteLength` 小于当前 `ArrayBuffer` 的 `byteLength`，“溢出”的字节将被丢弃。
    - 如果 `newByteLength` 大于当前 `ArrayBuffer` 的 `byteLength`，剩下的字节将用零填充。
    - 如果当前的 `ArrayBuffer` 是可调整大小的，`newByteLength` 一定不能大于其 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}。

### 返回值

一个新的 {{jsxref("ArrayBuffer")}} 对象。其内容被初始化为当前 `ArrayBuffer` 的内容，如果有额外的字节。则填充为零。当且仅当当前 `ArrayBuffer` 是可调整大小的，新 `ArrayBuffer` 才是可调整大小的，在这种情况下，其 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 和当前 `ArrayBuffer` 的相同。当前 `ArrayBuffer` 将被分离。

### 异常

- {{jsxref("RangeError")}}
  - : 如果当前 `ArrayBuffer` 是可调整大小的并且 `newByteLength` 大于当前 `ArrayBuffer` 的 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}，则抛出此错误。
- {{jsxref("TypeError")}}
  - : 如果当前 `ArrayBuffer` 已经分离，则抛出此错误。

## 描述

`transfer()` 方法执行与[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)相同的操作。它将当前 `ArrayBuffer` 的字节复制到一个新的 `ArrayBuffer` 对象中，然后分离当前 `ArrayBuffer` 对象。有关更多信息，请参阅[传输 ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#传输_arraybuffer)。

`transfer()` 保留了当前 `ArrayBuffer` 的大小可调整性。如果你希望新的 `ArrayBuffer` 不可调整大小，请使用 {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} 代替。没有办法通过传输使长度固定的缓冲区变为可调整大小的缓冲区。

`transfer()` 是非常高效的，因为（引擎）实现可能以零拷贝移动或 `realloc`——没有实际数据的复制——来实现此方法。

## 示例

### 传输一个 ArrayBuffer

```js
// 创建一个 ArrayBuffer 并写入一些字节
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// 将缓冲区复制到另一个相同大小的缓冲区
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// 将缓冲区复制到一个更小的缓冲区
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// 将缓冲区复制到一个更大的缓冲区
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// 已经分离，抛出 TypeError
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### 传输一个可调整大小的 ArrayBuffer

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// 将缓冲区复制到一个更小的缓冲区
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// 将缓冲区复制到一个大小在 maxByteLength 內但更大的缓冲区
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// 将缓冲区复制到一个大小超过 maxByteLength 的更大的缓冲区
buffer3.transfer(20); // RangeError: Invalid array buffer length
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
