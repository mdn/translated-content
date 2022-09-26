---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

**`DataView`** 视图是一个可以从 二进制{{jsxref("ArrayBuffer")}} 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的[字节序](/zh-CN/docs/Glossary/Endianness)问题。

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## 语法

```plain
new DataView(buffer [, byteOffset [, byteLength]])
```

### 参数

- `buffer`
  - : 一个 已经存在的{{jsxref("ArrayBuffer")}} 或 {{jsxref("SharedArrayBuffer")}} {{experimental_inline}} 对象，`DataView` 对象的数据源。
- `byteOffset` {{optional_inline}}
  - : 此 `DataView` 对象的第一个字节在 buffer 中的字节偏移。如果未指定，则默认从第一个字节开始。
- `byteLength` {{optional_inline}}
  - : 此 DataView 对象的字节长度。如果未指定，这个视图的长度将匹配 buffer 的长度。

### 返回值

一个表示指定数据缓存区的新`DataView` 对象。（这句话也许不是非常有助于说明清楚）

你可以把返回的对象想象成一个二进制字节缓存区 array buffer 的“解释器”——它知道如何在读取或写入时正确地转换字节码。这意味着它能在二进制层面处理整数与浮点转化、字节顺序等其他有关的细节问题。

### 异常

- `{{jsxref("RangeError")}}`
  - : 如果 `byteOffset` 或者 `byteLength` 参数的值导致视图超出了 buffer 的结束位置就会抛出此异常。
    例如，假设 buffer（缓冲对象）是 16 字节长度，`byteOffset` 参数为 8，`byteLength` 参数为 10，这个错误就会抛出，这是因为结果视图试图超出 buffer 对象的总长度 2 个字节。

## 描述

### Endianness（字节序）

需要多个字节来表示的数值，在存储时其字节在内存中的相对顺序依据平台架构的不同而不同，参照 {{Glossary("Endianness")}}。而使用 DataView 的访问函数时，不需要考虑平台架构中所使用的是哪种字节序。

```js
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* 设置值时，使用小端字节序 */);
  // Int16Array 使用系统字节序（由此可以判断系统字节序是否为小端字节序）
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // 返回 true 或 false
```

### 64 位整数值

因为 JavaScript 目前不包含对 64 位整数值支持的标准，所以 `DataView` 不提供原生的 64 位操作。作为变通，您可以实现自己的 `getUint64()` 函数，以获得精度高达 {{jsxref("Number.MAX_SAFE_INTEGER")}} 的值，可以满足某些特定情况的需求。

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // 将 64 位整数值分成两份 32 位整数值
  const left =  dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset+4, littleEndian);

  // 合并两个 32 位整数值
  const combined = littleEndian? left + 2**32*right : 2**32*left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precision may be lost');

  return combined;
}
```

或者，如果需要填满 64 位，可以创建一个 {{jsxref("BigInt")}}。此外，尽管原生 BigInt 要比用户端的库中模拟的 BigInt 快得多，但在 JavaScript 中，BigInt 总是比 32 位整数慢得多，这是因为 BigInt 的大小是可变的。

```js
const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // 将 64 位整数值分成两份 32 位整数值
  const left = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian)>>>0);
  const right = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian)>>>0);

  // 合并两个 32 位整数值并返回
  return littleEndian ? (right<<bigThirtyTwo)|left : (left<<bigThirtyTwo)|right;
}
```

## 属性

所有 `DataView` 实例都继承自 {{jsxref("DataView.prototype")}}，并且允许向 DataView 对象中添加额外属性。

{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/DataView/prototype', '属性')}}

## 方法

{{page('zh-CN/Web/JavaScript/Reference/Global_Objects/DataView/prototype', '方法')}}

## 示例

```js
var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性提示

从 FireFox 40 开始，DataView 对象需要通过 {{jsxref("Operators/new", "new")}} 操作符来构造。如果不使用 `new` 而是直接将 `DataView()` 作为函数调用的话，会抛出 {{jsxref("TypeError")}} 异常。

```js example-bad
var dv = DataView(buffer, 0);
// 抛出异常，错误信息翻译为：禁止在不用 new 的情况下直接调用 DataView 的构造函数。
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## 请参阅

- [jDataView](https://github.com/jDataView/jDataView)：DataView 的垫片（polyfill）库，使其能够用于所有浏览器及 Node.js 环境。同时，该库还对 DataView 进行了一些扩展。
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
