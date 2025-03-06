---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
---

{{JSRef}}

**`BigInt64Array`** 类型的数组代表由 64 位有符号整数组成的数组。如果需要控制字节顺序的话，请使用 {{jsxref("DataView")}} 代替。内容初始化为 `0n`。一旦建立，就可以使用对象的方法或使用标准数组索引语法（即使用中括号表示法）引用数组中的元素。

## 构造函数

- [`BigInt64Array()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array)
  - : 创建一个新的 `BigInt64Array` 对象。

## 静态属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : 返回一个元素大小的数字值。`BigInt64Array` 返回 `8` 。

## 静态方法

- {{jsxref("TypedArray.from", "BigInt64Array.from()")}}
  - : 从类数组或者可迭代对象创建一个新的 `BigInt64Array`，另请参见 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of", "BigInt64Array.of()")}}
  - : 从可变数量的参数创建一个新的 `BigInt64Array`，另请参见 {{jsxref("Array.of()")}}。

## 实例属性

- {{jsxref("TypedArray.prototype.buffer", "BigInt64Array.prototype.buffer")}}
  - : 返回被 `BigInt64Array` 引用的 {{jsxref("ArrayBuffer")}}。这在 `BigInt64Array` 对象构建时期就被锁定了，所以是**只读的**。
- {{jsxref("TypedArray.prototype.byteLength", "BigInt64Array.prototype.byteLength")}}
  - : 返回 `BigInt64Array` 从 {{jsxref("ArrayBuffer")}} 开始的长度（以字节为单位）。这在 `BigInt64Array` 对象构建时期就被锁定了，所以是**只读的**。
- {{jsxref("TypedArray.prototype.byteOffset", "BigInt64Array.prototype.byteOffset")}}
  - : 返回 `BigInt64Array` 从 {{jsxref("ArrayBuffer")}} 开始的偏移量（以字节为单位）。这在 `BigInt64Array` 对象构建时期就被锁定了，所以是**只读的**。
- {{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}}
  - : 返回 `BigInt64Array` 中被保留的元素个数。这在 `BigInt64Array` 对象构建时期就被锁定了，所以是**只读的**。

## 实例方法

_从其父接口 {{jsxref("TypedArray")}} 继承实例方法。_

## 示例

### 不同的方法去创建一个 `BigInt64Array`

```js
// From a length
var bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new BigInt64Array([21n, 31n]);
console.log(arr[1]); // 31n

// From another TypedArray
var x = new BigInt64Array([21n, 31n]);
var y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigInt64Array(buffer, 0, 4);

// From an iterable
var iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
var bigint64 = new BigInt64Array(iterable);
// BigInt64Array[1n, 2n, 3n]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
