---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
---

{{JSRef}}

**`Uint8ClampedArray`（8 位无符号整型固定数组）** 类型化数组表示一个由值固定在 0-255 区间的 8 位无符号整型组成的数组；如果你指定一个在 \[0,255] 区间外的值，它将被替换为 0 或 255；如果你指定一个非整数，那么它将被设置为最接近它的整数。（数组）内容被初始化为 0。一旦（数组）被创建，你可以使用对象的方法引用数组里的元素，或使用标准的数组索引语法（即使用方括号标记）。

## 语法

```plain
new Uint8ClampedArray(length);
new Uint8ClampedArray(typedArray);
new Uint8ClampedArray(object);
new Uint8ClampedArray(buffer [, byteOffset [, length]]);
```

关于构造函数语法和参数的更多信息，参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_。

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : 返回元素大小的一个数值。对 `Uint8ClampedArray` 而言是 1。
- {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}
  - : 静态长度属性值为 0。对于实际长度（元素的数量），见 {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}。
- {{jsxref("TypedArray.prototype", "Uint8ClampedArray.prototype")}}
  - : 原型是 _TypedArray_（类型化数组）对象。

## 方法

- {{jsxref("TypedArray.from", "Uint8ClampedArray.from()")}}
  - : 从一个类数组或可枚举对象创建一个新的 `Uint8ClampedArray`。参见 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of", "Uint8ClampedArray.of()")}}
  - : 通过一个可选数量参数来创建一个新的 `Uint8ClampedArray`。参见 {{jsxref("Array.of()")}}。

## Uint8ClampedArray 原型

所有的 `Uint8ClampedArray` 对象继承自 {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}。

### 属性

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

### 方法

- {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}
  - : 复制数组内一段数组元素的序列。参见 {{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.entries", "Uint8ClampedArray.prototype.entries()")}}
  - : 返回一个新的包含数组中每个索引对应的键/值对的数组迭代器对象。参见 {{jsxref("Array.prototype.entries()")}}。
- {{jsxref("TypedArray.every", "Uint8ClampedArray.prototype.every()")}}
  - : 测试数组里的所有元素是否通过所提供的函数的测试。参见 {{jsxref("Array.prototype.every()")}}。
- {{jsxref("TypedArray.fill", "Uint8ClampedArray.prototype.fill()")}}
  - : 用一个固定值填充一个数组内的从起始索引到结束索引的全部元素。参见 {{jsxref("Array.prototype.fill()")}}。
- {{jsxref("TypedArray.filter", "Uint8ClampedArray.prototype.filter()")}}
  - : 由该数组中所有经所提供的筛选函数返回为 true 的元素创建一个新数组。参见 {{jsxref("Array.prototype.filter()")}}。
- {{jsxref("TypedArray.find", "Uint8ClampedArray.prototype.find()")}}
  - : 如果数组里的一个元素符合所提供的测试函数则返回找到的这个值，如果没有找到则返回 `undefined`。参见 {{jsxref("Array.prototype.find()")}}。
- {{jsxref("TypedArray.findIndex", "Uint8ClampedArray.prototype.findIndex()")}}
  - : 如果数组里的一个元素符合所提供的测试函数则返回找到的索引，如果没有找到则返回 -1。参见 {{jsxref("Array.prototype.findIndex()")}}。
- {{jsxref("TypedArray.forEach", "Uint8ClampedArray.prototype.forEach()")}}
  - : 对数组内的每个元素调用一个函数。参见 {{jsxref("Array.prototype.forEach()")}}。
- {{jsxref("TypedArray.includes", "Uint8ClampedArray.prototype.includes()")}} {{experimental_inline}}
  - : 确定一个类型化数组是否包含一个特定的元素，对应地返回 `true` 或 `false`。参见 {{jsxref("Array.prototype.includes()")}}。
- {{jsxref("TypedArray.indexOf", "Uint8ClampedArray.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Uint8ClampedArray.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Uint8ClampedArray.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Uint8ClampedArray.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Uint8ClampedArray.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Uint8ClampedArray.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Former non-standard version of {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Uint8ClampedArray.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Uint8ClampedArray.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Uint8ClampedArray.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Uint8ClampedArray.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Uint8ClampedArray.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Uint8ClampedArray.prototype.some()")}}
  - : Returns true if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Uint8ClampedArray.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Uint8ClampedArray.prototype.subarray()")}}
  - : Returns a new `Uint8ClampedArray` from the given start and end element index.
- {{jsxref("TypedArray.values", "Uint8ClampedArray.prototype.values()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Uint8ClampedArray.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Uint8ClampedArray.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Uint8ClampedArray.prototype[@@iterator]()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array.

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

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
