---
title: ArrayBuffer.prototype.transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: fb236a32b20d1985b35b1c0c25ce99f2a0e0d5fe
---

{{JSRef}} {{SeeCompatTable}}

{{jsxref("ArrayBuffer")}} 实例的 **`transferToFixedLength()`** 方法创建一个不可调整大小的新 `ArrayBuffer` 对象，该对象与此缓冲区具有相同的字节内容，然后将此缓冲区分离。

## 语法

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### 参数

- `newByteLength`
  - : 新的 `ArrayBuffer` 的 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}。默认为此 `ArrayBuffer` 的 `byteLength`。
    - 如果 `newByteLength` 小于此 `ArrayBuffer` 的 `byteLength`，则“溢出的”字节将被丢弃。
    - 如果 `newByteLength` 大于此 `ArrayBuffer` 的 `maxByteLength`，则多余的字节用零填充。

### 返回值

一个新的 {{jsxref("ArrayBuffer")}} 对象。它的内容被初始化为此 {{jsxref("ArrayBuffer")}} 的内容，如果有多余的字节，则用零填充。新的 {{jsxref("ArrayBuffer")}} 总是不可调整大小的。原始 {{jsxref("ArrayBuffer")}} 被分离。

### 异常

- {{jsxref("TypeError")}}
  - : 如果此 `ArrayBuffer` 已经分离，则抛出该错误。

## 描述

和 {{jsxref("ArrayBuffer/transfer", "transfer()")}} 不同，`transferToFixedLength()` 总是创建一个不可调整大小的 `ArrayBuffer`。这意味着 `newByteLength` 可以比 `maxByteLength` 大，即使此 `ArrayBuffer` 是可调整大小的。有关更多信息，请参阅[传输 ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#传输_arraybuffer)。

## 示例

### 将可调整大小的 ArrayBuffer 转换为固定长度

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength();
console.log(buffer2.byteLength); // 8
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

通过使用 `transferToFixedLength`，`newByteLength` 可以大于原来的 `ArrayBuffer` 的 `maxByteLength`。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength(20);
console.log(buffer2.byteLength); // 20
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
