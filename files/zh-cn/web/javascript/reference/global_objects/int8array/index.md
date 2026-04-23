---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
---

**`Int8Array`** 类型数组表示二进制补码 8 位有符号整数的数组。内容初始化为 0。一旦建立，你可以使用对象的方法引用数组中的元素，或使用标准数组索引语法 ( 即，使用括号注释)。

## 语法

```plain
new Int8Array(length);
new Int8Array(typedArray);
new Int8Array(object);
new Int8Array(buffer [, byteOffset [, length]]);
```

有关构造函数语法和参数的更多信息，请访问 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#syntax)_.

## 静态属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : 返回数组中每个元素的大小。在 `Int8Array` 中这个值为 1。
- Int8Array.length
  - : 此属性为固定值属性，值为 3。查看 {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}} 获得获取数组内元素个数方法。
- {{jsxref("TypedArray.prototype", "Int8Array.prototype")}}
  - : _TypedArray_ 对象的构造原型。

## 静态方法

- {{jsxref("TypedArray.from", "Int8Array.from()")}}
  - : 从类数组对象或迭代器生成 int8Array 数组对象。参照 {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of", "Int8Array.of()")}}
  - : 以多个参数构造 Int8Array 对象，参照 {{jsxref("Array.of()")}}

## 实例属性

_还从其父接口 {{jsxref("TypedArray")}} 继承实例属性。_

- `Int8Array.prototype.constructor`
  - : 这个方法会返回对象的构造原型。默认为`Int8Array` 构造函数。
- {{jsxref("TypedArray.prototype.buffer", "Int8Array.prototype.buffer")}} {{readonlyInline}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `Int8Array` Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Int8Array.prototype.byteLength")}} {{readonlyInline}}
  - : Returns the length (in bytes) of the `Int8Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "Int8Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Returns the offset (in bytes) of the `Int8Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}} {{readonlyInline}}
  - : Returns the number of elements hold in the `Int8Array`. Fixed at construction time and thus **read only.**

## 实例方法

_从其父接口 {{jsxref("TypedArray")}} 继承实例方法。_

## 示例

```js
// 以长度参数构造对象
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// 以数组构造对象
var arr = new Int8Array([21, 31]);
console.log(arr[1]); // 31

// 从另一数组构造对象
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// 从 ArrayBuffer 构造对象
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性说明

自 ECMAScript 2015 (ES6) 施行，`Int8Array` 需要使用 {{jsxref("Operators/new", "new")}} 构造。从当前版本开始，不加 new 而便调用 `Int8Array` 构造器方法，将报出 {{jsxref("TypeError")}} 错误。

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

## 参见

- [`core-js` 中 `Int8Array` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
