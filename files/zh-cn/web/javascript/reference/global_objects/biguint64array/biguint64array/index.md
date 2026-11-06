---
title: BigUint64Array() 构造函数
short-title: BigUint64Array()
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array/BigUint64Array
l10n:
  sourceCommit: 86e6a39c09408844137f307b83d35eca43d5cfda
---

**`BigUint64Array()`** 构造函数用于创建 {{jsxref("BigUint64Array")}} 对象。除非显式提供初始化数据，否则其内容会被初始化为 `0n`。

## 语法

```js-nolint
new BigUint64Array()
new BigUint64Array(length)
new BigUint64Array(typedArray)
new BigUint64Array(object)

new BigUint64Array(buffer)
new BigUint64Array(buffer, byteOffset)
new BigUint64Array(buffer, byteOffset, length)
```

> [!NOTE]
> `BigUint64Array()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 来构造。如果尝试在没有使用 `new` 的情况下调用它，会抛出 {{jsxref("TypeError")}} 异常。

### 参数

参见 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#参数)。

### 异常

参见 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#异常)。

## 示例

### 创建 BigUint64Array 的不同方式

```js
// 通过长度创建
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// 通过数组创建
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// 通过另一个 TypedArray 创建
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// 通过 ArrayBuffer 创建
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 通过可迭代对象创建
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array [1n, 2n, 3n]
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
