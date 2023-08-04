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

- {{jsxref("TypedArray.copyWithin", "BigInt64Array.prototype.copyWithin()")}}
  - : 复制数组中的数组元素序列。另请参见 {{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.entries", "BigInt64Array.prototype.entries()")}}
  - : 返回一个新的迭代器（_array iterator_）对象，该对象包含数组中每个索引的键/值对。另请参见 {{jsxref("Array.prototype.entries()")}}。
- {{jsxref("TypedArray.every", "BigInt64Array.prototype.every()")}}
  - : 测试数组中的所有元素是否通过函数提供的测试。另请参见 {{jsxref("Array.prototype.every()")}}。
- {{jsxref("TypedArray.fill", "BigInt64Array.prototype.fill()")}}
  - : 用静态值填充从起始索引到结束索引的数组的所有元素。另请参见 {{jsxref("Array.prototype.fill()")}}。
- {{jsxref("TypedArray.filter", "BigInt64Array.prototype.filter()")}}
  - : 使用提供的筛选函数为其返回 `true` 的数组的所有元素创建一个新数组。另请参见 {{jsxref("Array.prototype.filter()")}}。
- {{jsxref("TypedArray.find", "BigInt64Array.prototype.find()")}}
  - : 如果数组中的元素满足提供的测试函数，则返回数组中找到的值；如果未找到，则返回 `undefined`。另请参见 {{jsxref("Array.prototype.find()")}}。
- {{jsxref("TypedArray.findIndex", "BigInt64Array.prototype.findIndex()")}}
  - : 如果数组中的元素满足提供的测试函数，则返回数组中找到的索引；如果未找到，则返回 `-1`。另请参见 {{jsxref("Array.prototype.findIndex()")}}。
- {{jsxref("TypedArray.forEach", "BigInt64Array.prototype.forEach()")}}
  - : 为数组中的每个元素调用函数。另请参见 {{jsxref("Array.prototype.forEach()")}}。
- {{jsxref("TypedArray.includes", "BigInt64Array.prototype.includes()")}}
  - : 确定类型化数组是否包含某个元素，并根据需要返回 `true` 或 `false` 。另请参见 {{jsxref("Array.prototype.includes()")}}。
- {{jsxref("TypedArray.indexOf", "BigInt64Array.prototype.indexOf()")}}
  - : 返回数组中元素的第一个（最小）索引，等于指定值；如果找不到，则返回 `-1`。另请参见 {{jsxref("Array.prototype.indexOf()")}}。
- {{jsxref("TypedArray.join", "BigInt64Array.prototype.join()")}}
  - : 将数组的所有元素联接为字符串。另请参见 {{jsxref("Array.prototype.join()")}}。
- {{jsxref("TypedArray.keys", "BigInt64Array.prototype.keys()")}}
  - : 返回一个新的 _array iterator_，它包含数组中每个索引的键。另请参见 {{jsxref("Array.prototype.keys()")}}。
- {{jsxref("TypedArray.lastIndexOf", "BigInt64Array.prototype.lastIndexOf()")}}
  - : 返回数组中元素的最后一个（最大）索引，等于指定值；如果找不到，则返回 `-1`。另请参见 {{jsxref("Array.prototype.lastIndexOf()")}}。
- {{jsxref("TypedArray.map", "BigInt64Array.prototype.map()")}}
  - : 创建一个新数组，其中包含对此数组中的每个元素调用所提供函数的结果。另请参见 {{jsxref("Array.prototype.map()")}}。
- {{jsxref("TypedArray.reduce", "BigInt64Array.prototype.reduce()")}}
  - : 对累加器和数组的每个值（从左到右）应用一个函数，以便将其减少为单个值。另请参见 {{jsxref("Array.prototype.reduce()")}}。
- {{jsxref("TypedArray.reduceRight", "BigInt64Array.prototype.reduceRight()")}}
  - : 对累加器和数组的每个值（从右到左）应用一个函数，以便将其减少为单个值。另请参见 {{jsxref("Array.prototype.reduceRight()")}}。
- {{jsxref("TypedArray.reverse", "BigInt64Array.prototype.reverse()")}}
  - : 反转数组元素的顺序——第一个变为最后一个，最后一个变为第一个。另请参见 {{jsxref("Array.prototype.reverse()")}}。
- {{jsxref("TypedArray.set", "BigInt64Array.prototype.set()")}}
  - : 在 `TypedArray` 中存储多个值，从指定数组读取输入值。
- {{jsxref("TypedArray.slice", "BigInt64Array.prototype.slice()")}}
  - : 提取数组的一部分并返回一个新数组。另请参见 {{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "BigInt64Array.prototype.some()")}}
  - : 如果此数组中至少有一个元素满足提供的测试函数，则返回 `true`。另请参见 {{jsxref("Array.prototype.some()")}}。
- {{jsxref("TypedArray.sort", "BigInt64Array.prototype.sort()")}}
  - : 对数组的元素进行就地排序并返回数组。另请参见 {{jsxref("Array.prototype.sort()")}}。
- {{jsxref("TypedArray.subarray", "BigInt64Array.prototype.subarray()")}}
  - : 从给定的起始和结束元素索引返回一个新的 `BigUint64Array`。
- {{jsxref("TypedArray.values", "BigInt64Array.prototype.values()")}}
  - : 返回一个新的 _array iterator_ 对象，该对象包含数组中每个索引的值。另请参见 {{jsxref("Array.prototype.values()")}}。
- {{jsxref("TypedArray.toLocaleString", "BigInt64Array.prototype.toLocaleString()")}}
  - : 返回表示数组及其元素的本地化字符串。另请参见 {{jsxref("Array.prototype.toLocaleString()")}}。
- {{jsxref("TypedArray.toString", "BigInt64Array.prototype.toString()")}}
  - : 返回表示数组及其元素的字符串。另请参见 {{jsxref("Array.prototype.toString()")}}。
- {{jsxref("TypedArray.@@iterator", "BigInt64Array.prototype[@@iterator]()")}}
  - : 返回一个新的 _array iterator_ 对象，该对象包含数组中每个索引的值。

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

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
