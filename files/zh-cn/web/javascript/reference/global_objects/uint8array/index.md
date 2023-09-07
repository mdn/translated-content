---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
---

{{JSRef}}

**`Uint8Array`** 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。

## 语法格式

```plain
new Uint8Array(); // ES2017 最新语法
new Uint8Array(length); // 创建初始化为 0 的，包含 length 个元素的无符号整型数组
new Uint8Array(typedArray);
new Uint8Array(object);
new Uint8Array(buffer [, byteOffset [, length]]);
```

构造语法和参数的更多信息请参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : 返回数组中元素的字节数，Uint8Array 中返回 1 字节。
- Uint8Array.length
  - : 静态属性 length 一直为 0。想获知其真实长度（元素个数），请参阅 {{jsxref("TypedArray.prototype.length", "Uint8Array.prototype.length")}}。
- {{jsxref("TypedArray.prototype", "Uint8Array.prototype")}}
  - : _TypedArray_ 对象的原型。

## 方法

- {{jsxref("TypedArray.from", "Uint8Array.from()")}}
  - : 从一个数组或可迭代的对象创建一个新的`Uint8Array`数组，可参见{{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint8Array.of()")}}
  - : 通过一个可变数目的参数创建一个新的`Uint8Array`数组，可参见{{jsxref("Array.of()")}}.

## `Uint8Array` 原型声明

所有的`Uint8Array 对象继承自` {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### 属性

- `Uint8Array.prototype.constructor`
  - : 返回创建实例属性的函数，默认为 `Uint8Array` 构造器。
- {{jsxref("TypedArray.prototype.buffer", "Uint8Array.prototype.buffer")}} {{readonlyInline}}
  - : 返回由 `Uint8Array`引用的 {{jsxref("ArrayBuffer")}} ，在构造时期固定，所以是**只读**的。
- {{jsxref("TypedArray.prototype.byteLength", "Uint8Array.prototype.byteLength")}} {{readonlyInline}}
  - : 返回`Uint8Array`长度（字节数）。在构造时期固定，所以是 **只读的**。
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8Array.prototype.byteOffset")}} {{readonlyInline}}
  - : 返回`Uint8Array` 距离其 {{jsxref("ArrayBuffer")}} 起始位置的偏移（字节数）。在构造时期固定，所以是 **只读的**。
- {{jsxref("TypedArray.prototype.length", "Uint8Array.prototype.length")}} {{readonlyInline}}
  - : 返回保存在 `Uint8Array`中的元素数量。在构造时期固定，所以是 **只读的**。

### 方法

- {{jsxref("TypedArray.copyWithin", "Uint8Array.prototype.copyWithin()")}}
  - : 复制数组中的元素序列，请参见 {{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.entries", "Uint8Array.prototype.entries()")}}
  - : 返回新的`Array Iterator` 对象，含有数组中每个下标处的键值对。请参见{{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Uint8Array.prototype.every()")}}
  - : 测试数组中所有元素是否都能通过由函数提供的测试。请参见 {{jsxref("Array.prototype.every()")}}。
- {{jsxref("TypedArray.fill", "Uint8Array.prototype.fill()")}}
  - : 使用静态值填充从起始下标到终止下标的数组元素。请参见 {{jsxref("Array.prototype.fill()")}}。
- {{jsxref("TypedArray.filter", "Uint8Array.prototype.filter()")}}
  - : 创建新的数组，含有数组中给定过滤器返回 true 的所有元素。请参见{{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Uint8Array.prototype.find()")}}
  - : 如果数组中的元素满足提供的测试函数，返回找到的值，如果没有找到则返回 `undefined`。请参见 {{jsxref("Array.prototype.find()")}}。
- {{jsxref("TypedArray.findIndex", "Uint8Array.prototype.findIndex()")}}
  - : 如果数组中的元素满足提供的测试函数，返回找到的下标，如果没有找到则返回 -1。请参见 {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Uint8Array.prototype.forEach()")}}
  - : 对数组的每个元素调用字符串 {{jsxref("Array.prototype.forEach()")}}。
- {{jsxref("TypedArray.includes", "Uint8Array.prototype.includes()")}} {{experimental_inline}}
  - : 判断类型化数组是否包含特定值，如果包含返回 `true`，否则返回`false`。另见{{jsxref("Array.prototype.includes()")}}。
- {{jsxref("TypedArray.indexOf", "Uint8Array.prototype.indexOf()")}}
  - : 返回数组中等于特定值的第一个元素（下标最小），如果没有找到则返回 -1，请参见 {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Uint8Array.prototype.join()")}}
  - : 将数组中所有元素连接为字符串。请参见 {{jsxref("Array.prototype.join()")}}。
- {{jsxref("TypedArray.keys", "Uint8Array.prototype.keys()")}}
  - : 返回新的`Array Iterator` ，含有数组中每个下标的键，请参见 {{jsxref("Array.prototype.keys()")}}。
- {{jsxref("TypedArray.lastIndexOf", "Uint8Array.prototype.lastIndexOf()")}}
  - : 返回数组中等于特定值的最后一个元素（下标最大），如果没有找到则返回 -1，请参见 {{jsxref("Array.prototype.lastIndexOf()")}}。
- {{jsxref("TypedArray.map", "Uint8Array.prototype.map()")}}
  - : 使用在该数组的每个元素上调用函数的结果创建新数组，请参见{{jsxref("Array.prototype.map()")}}。
- {{jsxref("TypedArray.move", "Uint8Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : {{jsxref("TypedArray.copyWithin", "Uint8Array.prototype.copyWithin()")}}的之前的非标准版本。
- {{jsxref("TypedArray.reduce", "Uint8Array.prototype.reduce()")}}
  - : 对累加器和数组的每个值应用函数（从左到右），使其归约为单一的值，另见 {{jsxref("Array.prototype.reduce()")}}。
- {{jsxref("TypedArray.reduceRight", "Uint8Array.prototype.reduceRight()")}}
  - : 对累加器和数组的每个值应用函数（从右到左），使其归约为单一的值，另见 {{jsxref("Array.prototype.reduceRight()")}}。
- {{jsxref("TypedArray.reverse", "Uint8Array.prototype.reverse()")}}
  - : 翻转数组中的元素顺序 — 第一个变为最后，最后变为第一个。另见 {{jsxref("Array.prototype.reverse()")}}。
- {{jsxref("TypedArray.set", "Uint8Array.prototype.set()")}}
  - : 在类型化数组中储存多个值，从特定数组中读取输入。
- {{jsxref("TypedArray.slice", "Uint8Array.prototype.slice()")}}
  - : 提取数组的某个部分并返回新的数组，请参见 {{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "Uint8Array.prototype.some()")}}
  - : 如果数组中至少一个元素满足给定的测试函数，则返回`true`。请参见{{jsxref("Array.prototype.some()")}}。
- {{jsxref("TypedArray.sort", "Uint8Array.prototype.sort()")}}
  - : 原地排序数组中的元素，并返回该数组，请参见 {{jsxref("Array.prototype.sort()")}}。
- {{jsxref("TypedArray.subarray", "Uint8Array.prototype.subarray()")}}
  - : `从给定的元素起始和终止下标返回新的 Uint8Array` 。
- {{jsxref("TypedArray.values", "Uint8Array.prototype.values()")}}
  - : 返回新的 `Array Iterator` 对象，含有数组每个下标处的值，请参见 {{jsxref("Array.prototype.values()")}}。
- {{jsxref("TypedArray.toLocaleString", "Uint8Array.prototype.toLocaleString()")}}
  - : 返回表示数组及其元素的本地化字符串，请参见 {{jsxref("Array.prototype.toLocaleString()")}}。
- {{jsxref("TypedArray.toString", "Uint8Array.prototype.toString()")}}
  - : 返回表示数组及其元素的字符串。请参见 {{jsxref("Array.prototype.toString()")}}。
- {{jsxref("TypedArray.@@iterator", "Uint8Array.prototype[@@iterator]()")}}
  - : `返回新的 Array Iterator` 对象，包含数组中每个下标处的值。

## 示例

```js
// 来自长度
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// 来自数组
var arr = new Uint8Array([21, 31]);
console.log(arr[1]); // 31

// 来自另一个 TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// 来自 ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);

// 来自一个迭代器
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uint8 = new Uint8Array(iterable);
// Uint8Array[1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性说明

从 ECMAScript 2015 开始，`Uint8Array` 构造函数需要通过 {{jsxref("Operators/new", "new")}} 操作符调用。即日起如果没有使用 `new` 调用 `Uint8Array` 的构造函数，将会抛出 {{jsxref("TypeError")}} 。

```js example-bad
var dv = Uint8Array([1, 2, 3]);
// TypeError: calling a builtin Uint8Array constructor
// 不使用 new 将会被禁止
```

```js example-good
var dv = new Uint8Array([1, 2, 3]);
```

## 相关内容

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
