---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

一个 **_TypedArray_** 对象描述了底层[二进制数据缓冲区](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)的类数组视图。没有称为 `TypedArray` 的全局属性，也没有直接可用的 `TypedArray` 构造函数。但是，有很多不同的全局属性，其值是指定元素类型的类型化数组构造函数，如下所列。在接下来的页面，你将找到可以与包含任意类型元素的任意类型化数组一起使用的常见属性和方法。

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## 描述

`TypedArray` 构造函数（通常归类为 `%TypedArray%`，表示它的“内在性”，因为它与任何 JavaScript 程序暴露出的全局对象不对应）是所有 `TypedArray` 子类的通用超类。将 `%TypedArray%` 作为一个“抽象类”，其为所有类型化数组的子类提供了实用方法的通用接口。该构造函数没有直接暴露：没有全局的 `TypedArray` 属性。它只能通过`Object.getPrototypeOf(Int8Array)` 及类似方式访问。

当创建 `TypedArray` 子类（例如 `Int8Array`）的实例时，在内存的内部会创建数组缓冲区，或者，如果将 `ArrayBuffer` 对象作为构造参数，则使用该 `ArrayBuffer`。缓冲区地址被保存为实例的内部属性并且所有的 `%TypedArray%.prototype` 方法都将给予数组缓冲区地址设置和获取值。

### TypedArray 对象

| 类型                            | 值范围                                             | 字节大小 | 描述                                                        | Web IDL 类型          | 等价的 C 类型                   |
| ------------------------------- | -------------------------------------------------- | -------- | ----------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | -128 到 127                                        | 1        | 8 位有符号整型（二进制补码）                                | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}        | 0 到 255                                           | 1        | 8 位无符号整型                                              | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | 0 到 255                                           | 1        | 8 位无符号整形（一定在 0 到 255 之间）                      | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}        | -32768 到 32767                                    | 2        | 16 位有符号整（二进制补码）形                               | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}       | 0 到 65535                                         | 2        | 16 位无符号整型                                             | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}        | -2147483648 到 2147483647                          | 4        | 32 位有符号整（二进制补码）型                               | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}       | 0 到 4294967295                                    | 4        | 32 位无符号整型                                             | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}      | `-3.4E38` 到 `3.4E38` 并且 `1.2E-38` 是最小的正数  | 4        | 32 位 IEEE 浮点数（7 位有效数字，例如 `1.234567`）          | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}      | `-1.8E308` 到 `1.8E308` 并且 `5E-324` 是最小的正数 | 8        | 64 位 IEEE 浮点数（16 位有效数字，例如 `1.23456789012345`） | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> 到 2<sup>63</sup> - 1              | 8        | 64 位有符号整（二进制补码）型                               | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}    | 0 到 2<sup>64</sup> - 1                            | 8        | 64 位无符号整型                                             | `bigint`              | `uint64_t (unsigned long long)` |

## 构造函数

This object cannot be instantiated directly — attempting to construct it with `new` throws a {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Instead, you create an instance of a typed array of a particular type, such as an {{jsxref("Int8Array")}} or a {{jsxref("BigInt64Array")}}. These objects all have a common syntax for their constructors:

```js-nolint
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

Where `TypedArray` is a constructor for one of the concrete types.

> **Note:** All `TypedArray` subclasses' constructors can only be constructed with [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new). Attempting to call one without `new` throws a {{jsxref("TypeError")}}.

### 参数

- `typedArray`
  - : When called with an instance of a `TypedArray` subclass, the `typedArray` gets copied into a new typed array. For a non-[bigint](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` constructor, the `typedArray` parameter can only be of one of the non-[bigint](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) types (such as {{JSxRef("Int32Array")}}). Similarly, for a [bigint](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` constructor ({{JSxRef("BigInt64Array")}} or {{JSxRef("BigUint64Array")}}), the `typedArray` parameter can only be of one of the [bigint](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) types. Each value in `typedArray` is converted to the corresponding type of the constructor before being copied into the new array. The length of the new typed array will be same as the length of the `typedArray` argument.
- `object`
  - : When called with an object that's not a `TypedArray` instance, a new typed array is created in the same way as the [`TypedArray.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) method.
- `length` {{optional_inline}}
  - : When called with a non-object, the parameter will be treated as a number specifying the length of the typed array. An internal array buffer is created in memory, of size `length` multiplied by [`BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) bytes, filled with zeros. Omitting all parameters is equivalent to using `0` as `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : When called with an [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or [`SharedArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) instance, and optionally a `byteOffset` and a `length` argument, a new typed array view is created that views the specified buffer. The `byteOffset` and `length` parameters specify the memory range that will be exposed by the typed array view. If both are omitted, all of `buffer` is viewed; if only `length` is omitted, the remainder of `buffer` starting from `byteOffset` is viewed.

### 异常

All `TypeArray` subclass constructors operate in the same way. They would all throw the following exceptions:

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - A `typedArray` is passed but it is a [bigint](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) type while the current constructor is not, or vice versa.
    - A `typedArray` is passed but the buffer it's viewing is detached, or a detached `buffer` is directly passed.
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - The new typed array's length is too large.
    - The length of `buffer` (if the `length` parameter is not specified) or `byteOffset` is not an integral multiple of the new typed array's element size.
    - `byteOffset` is not a valid array index (an integer between 0 and 2<sup>53</sup> - 1).
    - When creating a view from a buffer, the bounds are outside the buffer. In other words, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## 静态属性

这些属性定义在 `TypedArray` 构造函数中，因此由所有 `TypedArray` 子类型共享。

- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : 用于创建派生对象的构造函数。

所有 `TypedArray` 子类也有着以下静态属性：

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : 返回不同的 `TypedArray` 对象元素字节数的数值。
- {{jsxref("TypedArray.name")}}
  - : 返回构造函数 [name](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name) 的字符串值（例如 `"Int8Array"`）。

## 静态方法

这些属性定义在 `TypedArray` 构造函数中，因此由所有 `TypedArray` 子类型共享。

- {{jsxref("TypedArray.from()")}}
  - : 从类数组或者可迭代对象创建新的 `TypedArray`。参见 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of()")}}
  - : 创建一个具有可变参数的 `TypedArray`。参见 {{jsxref("Array.of()")}}。

## 实例属性

这些属性都是在 `TypedArray` 属性对象上定义的[访问器属性（getter）](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)，因此由所有 `TypedArray` 子类型共享。

- {{jsxref("TypedArray.prototype.buffer")}}
  - : 返回类型化数组引用的 {{jsxref("ArrayBuffer")}}。
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : 返回类型化数组的长度（以字节为单位）。
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : 返回从类型化数组距离 {{jsxref("ArrayBuffer")}} 起始位置的偏移量（以字节为单位）。
- {{jsxref("TypedArray.prototype.length")}}
  - : 返回类型化数组中保存的元素个数。

所有 `TypedArray` 子类也有以下实例属性：

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : 返回不同的 `TypedArray` 对象元素大小的数字值。

## 实例方法

这些方法定义在 `TypedArray` 原型对象中，因此由所有 `TypedArray` 子类型共享。

- {{jsxref("TypedArray.prototype.at()")}}  
  - : 返回给定索引处的数组元素。接受从最后一项往回计算的负整数。
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : 在数组内复制数组元素序列。参见 {{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.prototype.entries()")}}
  - : 返回一个新的*数组迭代器*对象，其中包含数组中每个索引的键/值对。参见 {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : 如果调用数组中的每个元素都满足测试函数，则返回 `true`。参见 {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : 用静态值填充数组中从开始索引到结束索引的所有元素。参见 {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : 返回一个新数组，其中包含调用所提供的筛选函数返回为 `true` 的所有数组元素。参见 {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的值，如果没有找到合适的元素，则返回 `undefined`。参见 {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的索引，如果没有找到合适的元素，则返回 `-1`。参见 {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : 回数组中满足提供的测试函数的最后一个元素的值，如果没有找到合适的元素，则返回 `undefined`。参见 {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : 返回数组中满足所提供测试函数的最后一个元素的索引，如果没有找到合适的元素，则返回 `-1`。参见 {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : 对调用数组中的每个元素调用函数。参见 {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : 根据类型化数组是否包含一个确定的元素，来决定返回 `true` 还是 `false` 参见 {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : 返回在调用数组中可以找到给定元素的第一个（最小）索引，如果没有找到，则返回 `-1`。参见 {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : 将数组的所有元素连接为字符串。参见 {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : 返回一个新的数组迭代器对象，该对象包含数组中每个索引的键。参见 {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : 返回在调用数组中可以找到给定元素的最后一个（最大）索引，如果找不到，则返回 `-1`。 参见 {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : 返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果。参见 {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : 对数组的每个元素（从左到右）执行用户提供的 “reducer” 回调函数，将其简化为单个值。参见 {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : 对数组的每个元素（从右到左）执行用户提供的 “reducer” 回调函数，将其简化为单个值。参见 {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : 反转数组元素的顺序——第一个成为最后一个，最后一个成为第一个。参见 {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : 在类型化数组中存储多个值，从指定数组读取输入值。
- {{jsxref("TypedArray.prototype.slice()")}}
  - : 提取调用数组的一部分并返回一个新数组。参见 {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : 如果调用数组中至少有一个元素满足提供的测试函数，则返回 `true`。参见 {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : 对数组的元素进行排序并返回该数组。参见 {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : 从给定的开始和结束的元素索引返回一个新的 `TypedArray`。
- {{jsxref("TypedArray.prototype.values()")}}
  - : 返回一个新的*数组迭代器*对象，该对象包含数组中每个索引的值。参见 {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : 返回一个表示调用数组及其元素的本地化字符串。参见 {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : 返回一个表示调用数组及其元素的字符串。参见 {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
  - : 返回一个新的*数组迭代器*对象，该对象包含数组中每个索引的值。

## Examples

### Property access

You can reference elements in the array using standard array index syntax (that is,
using bracket notation). However, getting or setting indexed properties on typed arrays
will not search in the prototype chain for this property, even when the indices are out
of bound. Indexed properties will consult the {{jsxref("ArrayBuffer")}} and will never
look at object properties. You can still use named properties, just like with all
objects.

```js
// Setting and getting using standard array syntax
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

### Cannot be frozen

`TypedArray`s that aren't empty cannot be frozen, as their
underlying `ArrayBuffer` could be mutated through another
`TypedArray` view of the buffer. This would mean that the object
would never genuinely be frozen.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset must be aligned

When constructing a `TypedArray` as a view onto an
`ArrayBuffer`, the `byteOffset` argument must be aligned to its
element size; in other words, the offset must be a multiple of
`BYTES_PER_ELEMENT`.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength must be aligned

Like the `byteOffset` parameter, the `byteLength` property of an
`ArrayBuffer` passed to a `TypedArray`'s constructor
must be a multiple of the constructor's `BYTES_PER_ELEMENT`.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(3));
// RangeError: byte length of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中类型化数组的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [TextDecoder](/zh-CN/docs/Web/API/TextDecoder)——从数字数据中解码字符串的助手
