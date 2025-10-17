---
title: BigInt64Array() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array
l10n:
  sourceCommit: 01ff31c3d7c6818de4b0cdd3c130ab7ccc948856
---

**`BigInt64Array()`** 构造函数用于创建 {{jsxref("BigInt64Array")}} 对象。除非显式提供初始化数据，否则其内容会被初始化为 `0n`。

## 语法

```js-nolint
new BigInt64Array()
new BigInt64Array(length)
new BigInt64Array(typedArray)
new BigInt64Array(object)

new BigInt64Array(buffer)
new BigInt64Array(buffer, byteOffset)
new BigInt64Array(buffer, byteOffset, length)
```

> [!NOTE]
> `BigInt64Array()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 关键字来构造。如果尝试在没有使用 `new` 的情况下调用它，会抛出 {{jsxref("TypeError")}} 错误。

### 参数

参见 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#参数)。

### 异常

参见 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#异常)。

## 示例

### 创建 BigInt64Array 的不同方式

```js
// From a length
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
