---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
---

{{JSRef}}

**`Int8Array`** 类型数组表示二进制补码 8 位有符号整数的数组。内容初始化为 0。一旦建立，你可以使用对象的方法引用数组中的元素，或使用标准数组索引语法 ( 即，使用括号注释)。

## 语法

```plain
new Int8Array(length);
new Int8Array(typedArray);
new Int8Array(object);
new Int8Array(buffer [, byteOffset [, length]]);
```

有关构造函数语法和参数的更多信息，请访问 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : 返回数组中每个元素的大小。在 `Int8Array` 中这个值为 1。
- Int8Array.length
  - : 此属性为固定值属性，值为 3。查看 {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}} 获得获取数组内元素个数方法。
- {{jsxref("TypedArray.prototype", "Int8Array.prototype")}}
  - : _TypedArray_ 对象的构造原型。

## 方法

- {{jsxref("TypedArray.from", "Int8Array.from()")}}
  - : 从类数组对象或迭代器生成 int8Array 数组对象。参照 {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of", "Int8Array.of()")}}
  - : 以多个参数构造 Int8Array 对象，参照 {{jsxref("Array.of()")}}

## `Int8Array` 原型方法

所有 **Int8Array** 对象都继承自 {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### 属性

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

### 方法

- {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int8Array.prototype.entries()")}}
  - : Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int8Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int8Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int8Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int8Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int8Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int8Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int8Array.prototype.includes()")}} {{experimental_inline}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int8Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int8Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int8Array.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int8Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int8Array.prototype.map()")}}
  - : 返回一个由回调函数的返回值组成的新数组。. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int8Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}} 早期的不标准定义。
- {{jsxref("TypedArray.reduce", "Int8Array.prototype.reduce()")}}
  - : 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。参照 {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.reduceRight", "Int8Array.prototype.reduceRight()")}}
  - : 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。参照 {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.reverse", "Int8Array.prototype.reverse()")}}
  - : 颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。参照 {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("TypedArray.set", "Int8Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Int8Array.prototype.slice()")}}
  - : 抽取当前数组中的一段元素组合成一个新数组。参照 {{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "Int8Array.prototype.some()")}}
  - : 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。参照 {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.sort", "Int8Array.prototype.sort()")}}
  - : 对数组元素进行排序，并返回当前数组。参照{{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int8Array.prototype.subarray()")}}
  - : 返回一个以给定的初始结束位置裁剪的 Int8Array 数组。
- {{jsxref("TypedArray.values", "Int8Array.prototype.values()")}}
  - : 返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。参照 {{jsxref("Array.prototype.values()")}}
- {{jsxref("TypedArray.toLocaleString", "Int8Array.prototype.toLocaleString()")}}
  - : 返回一个由所有数组元素组合而成的本地化后的字符串。See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int8Array.prototype.toString()")}}
  - : 返回一个由所有数组元素组合而成的字符串。参照 {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.@@iterator", "Int8Array.prototype[@@iterator]()")}}
  - : 此方法返回一个带有数组内所有元素的迭代器对象，同 `Int8Array.prototype.values`

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

## 相关链接

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
