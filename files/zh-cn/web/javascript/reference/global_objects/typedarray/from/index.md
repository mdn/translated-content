---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

**`TypedArray.from()`** 静态方法从类数组对象或可迭代对象创建一个新的[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)。此方法与 {{jsxref("Array.from()")}} 几乎相同。

{{InteractiveExample("JavaScript Demo: TypedArray.from()", "shorter")}}

```js interactive-example
const uint16 = Int16Array.from("12345");

console.log(uint16);
// Expected output: Int16Array [1, 2, 3, 4, 5]
```

## 语法

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
```

其中 `TypedArray` 是以下类型之一：

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### 参数

- `arrayLike`
  - : 要转换为类型化数组的可迭代对象或类数组对象。
- `mapFn` {{optional_inline}}
  - : 对类型化数组的每个元素调用的函数。如果提供了该函数，数组中要添加的每个值首先会传递给该函数，然后将 `mapFn` 的返回值添加到类型化数组中。该函数使用以下参数调用：
    - `element`
      - : 当前在类型化数组中处理的元素。
    - `index`
      - : 当前在类型化数组中处理的元素的索引。
- `thisArg` {{optional_inline}}
  - : 执行 `mapFn` 时用作 `this` 的值。

### 返回值

一个新的 {{jsxref("TypedArray")}} 实例。

## 描述

详情请参见 {{jsxref("Array.from()")}}。

{{jsxref("Array.from()")}} 和 `TypedArray.from()` 之间存在一些微妙的区别（注意：下面提到的 `this` 值是指调用 `TypedArray.from()` 时的 `this` 值，而不是用于调用 `mapFn` 的 `thisArg` 参数）：

- 如果 `TypedArray.from()` 的 `this` 值不是构造函数，`TypedArray.from()` 会抛出 {{jsxref("TypeError")}}，而 `Array.from()` 默认会创建一个新的 {{jsxref("Array")}}。
- 由 `this` 构造的对象必须是一个 `TypedArray` 实例，而 `Array.from()` 允许其 `this` 值构造为任何对象。
- 当 `source` 参数是一个迭代器时，`TypedArray.from()` 首先从迭代器中收集所有值，然后使用计数创建一个 `this` 实例，最后将值设置到该实例上。`Array.from()` 在接收到来自迭代器的每个值时设置其值，然后在最后设置其 `length`。
- `TypedArray.from()` 使用 `[[Set]]`，而 `Array.from()` 使用 `[[DefineOwnProperty]]`。因此，在处理 {{jsxref("Proxy")}} 对象时，它调用 [`handler.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) 来创建新元素，而不是调用 [`handler.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)。
- 当 `Array.from()` 接收到一个不是迭代器的类数组时，它会保留空洞。`TypedArray.from()` 将确保结果是密集的。

## 示例

### 从可迭代对象（Set）

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### 从字符串

```js
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]
```

### 与箭头函数和 map 一起使用

使用箭头函数作为 map 函数来操作元素

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### 生成一个数字序列

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### 在非 TypedArray 构造函数上调用 from()

`from()` 的 `this` 值必须是一个返回 `TypedArray` 实例的构造函数。

```js
function NotArray(len) {
  console.log("调用 NotArray 时的长度", len);
}

Int8Array.from.call({}, []); // TypeError: #<Object> is not a constructor
Int8Array.from.call(NotArray, []);
// 调用 NotArray 时的长度 0
// TypeError: Method %TypedArray%.from called on incompatible receiver #<NotArray>
```

```js
function NotArray2(len) {
  console.log("调用 NotArray2 时的长度", len);
  return new Uint8Array(len);
}
console.log(Int8Array.from.call(NotArray2, [1, 2, 3]));
// 调用 NotArray2 时的长度 3
// Uint8Array(3) [ 1, 2, 3 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.from` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
