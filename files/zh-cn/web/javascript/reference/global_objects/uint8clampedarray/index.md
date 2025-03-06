---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
---

{{JSRef}}

**`Uint8ClampedArray`**（8 位无符号整型固定数组）类型化数组表示一个由值固定在 0-255 区间的 8 位无符号整型组成的数组；如果你指定一个在 \[0,255] 区间外的值，它将被替换为 0 或 255；如果你指定一个非整数，那么它将被设置为最接近它的整数。（数组）内容被初始化为 0。一旦（数组）被创建，你可以使用对象的方法引用数组里的元素，或使用标准的数组索引语法（即使用方括号标记）。

## 语法

```plain
new Uint8ClampedArray(length);
new Uint8ClampedArray(typedArray);
new Uint8ClampedArray(object);
new Uint8ClampedArray(buffer [, byteOffset [, length]]);
```

关于构造函数语法和参数的更多信息，参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#syntax)_。

## 静态属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : 返回元素大小的一个数值。对 `Uint8ClampedArray` 而言是 1。
- {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}
  - : 静态长度属性值为 0。对于实际长度（元素的数量），见 {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}。
- {{jsxref("TypedArray.prototype", "Uint8ClampedArray.prototype")}}
  - : 原型是 _TypedArray_（类型化数组）对象。

## 静态方法

- {{jsxref("TypedArray.from", "Uint8ClampedArray.from()")}}
  - : 从一个类数组或可枚举对象创建一个新的 `Uint8ClampedArray`。参见 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of", "Uint8ClampedArray.of()")}}
  - : 通过一个可选数量参数来创建一个新的 `Uint8ClampedArray`。参见 {{jsxref("Array.of()")}}。

## 实例属性

_还从其父接口 {{jsxref("TypedArray")}} 继承实例属性。_

- `Uint8ClampedArray.prototype.constructor`
  - : 返回创建一个实例原型的函数。这是 `Uint8ClampedArray` 默认的构造函数。
- {{jsxref("TypedArray.prototype.buffer", "Uint8ClampedArray.prototype.buffer")}} {{readonlyInline}}
  - : 返回由 `Uint8ClampedArray` 引用的 {{jsxref("ArrayBuffer")}} 。在创建时所固定下来，因此**只能读取**。
- {{jsxref("TypedArray.prototype.byteLength", "Uint8ClampedArray.prototype.byteLength")}} {{readonlyInline}}
  - : 返回从 {{jsxref("ArrayBuffer")}} 开始的 `Uint8ClampedArray` 的（字节的）长度。在创建时所固定下来，因此**只能读取**。
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8ClampedArray.prototype.byteOffset")}} {{readonlyInline}}
  - : 返回从 {{jsxref("ArrayBuffer")}} 开始的 `Uint8ClampedArray` 的（字节的）偏移。在创建时所固定下来，因此**只能读取**。
- {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}} {{readonlyInline}}
  - : 返回 `UintClamped8Array` 具有的元素数量。在创建时所固定下来，因此**只能读取**。

## 实例方法

_从其父接口 {{jsxref("TypedArray")}} 继承实例方法。_

## 示例

创建一个 `Uint8ClampedArray` 的不同方式：

```js
// From a length
var uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Uint8ClampedArray([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint8ClampedArray([21, 31]);
var y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8ClampedArray(buffer, 1, 4);

// From an iterable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uintc8 = new Uint8ClampedArray(iterable);
// Uint8ClampedArray[1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性注意事项

从 ECMAScript 2015 开始， `Uint8ClampedArray` 构造函数需要用一个 {{jsxref("Operators/new", "new")}} 操作符来构建。从现在开始，不使用 `new` 来调用一个 `Uint8ClampedArray` 构造函数将会抛出一个 {{jsxref("TypeError")}}。

```js example-bad
var dv = Uint8ClampedArray([1, 2, 3]);
// TypeError: calling a builtin Uint8ClampedArray constructor
// without new is forbidden
```

```js example-good
var dv = new Uint8ClampedArray([1, 2, 3]);
```

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
