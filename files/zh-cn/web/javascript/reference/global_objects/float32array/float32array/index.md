---
title: Float32Array() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Float32Array/Float32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Float32Array()`** 构造函数用于创建 {{jsxref("Float32Array")}} 对象。除非显式提供初始化数据，否则其内容会被初始化为 `0`。

## 语法

```js-nolint
new Float32Array()
new Float32Array(length)
new Float32Array(typedArray)
new Float32Array(object)

new Float32Array(buffer)
new Float32Array(buffer, byteOffset)
new Float32Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Float32Array()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 进行构造。如果尝试在没有使用 `new` 的情况下调用它，会抛出 {{jsxref("TypeError")}} 异常。

### 参数

参见 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#参数)。

### 异常

参见 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#异常)。

## 示例

### 创建 Float32Array 的不同方式

```js
// 通过长度创建
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// 通过数组创建
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// 通过另一个 TypedArray 创建
const y = new Float32Array(x);
console.log(y[0]); // 21

// 通过 ArrayBuffer 创建
const buffer = new ArrayBuffer(32);
const z = new Float32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 通过可迭代对象创建
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float32FromIterable = new Float32Array(iterable);
console.log(float32FromIterable);
// Float32Array [1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Float32Array` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
