---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
l10n:
  sourceCommit: 86e6a39c09408844137f307b83d35eca43d5cfda
---

**`BigUint64Array`** 类型的数组代表由 64 位无符号整数组成的数组，采用平台的字节顺序。如果需要控制字节顺序，请调用 {{jsxref("DataView")}}。除非显式提供初始化数据，否则其内容会被初始化为 `0n`。数组建立之后，你可以使用该对象的方法来引用数组的元素，或使用标准数组索引语法（即方括号表示法）来引用数组中的元素。

`BigUint64Array` 是未直接暴露的 {{jsxref("TypedArray")}} 类的子类。

## 构造函数

- {{jsxref("BigUint64Array/BigUint64Array", "BigUint64Array()")}}
  - : 创建一个新的 `BigUint64Array` 对象。

## 静态属性

_从其父类 {{jsxref("TypedArray")}} 继承静态属性_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : 返回表示元素大小的数字值。对于 `BigUint64Array`，该值为 `8`。

## 静态方法

_从其父类 {{jsxref("TypedArray")}} 继承静态方法_。

## 实例属性

_从其父类 {{jsxref("TypedArray")}} 继承实例属性_。

这些属性定义在 `BigUint64Array.prototype` 上，并由所有 `BigUint64Array` 实例共享。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.prototype.BYTES_PER_ELEMENT")}}
  - : 返回表示元素大小的数字值。对于 `BigUint64Array`，该值为 `8`。
- {{jsxref("Object/constructor", "BigUint64Array.prototype.constructor")}}
  - : 创建该实例对象的构造函数。对于 `BigUint64Array` 实例，其初始值为 {{jsxref("BigUint64Array/BigUint64Array", "BigUint64Array")}} 构造函数。

## 实例方法

_从其父类 {{jsxref("TypedArray")}} 继承实例方法_。

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
