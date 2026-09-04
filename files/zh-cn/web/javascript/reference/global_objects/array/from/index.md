---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
---

**`Array.from()`** 静态方法从[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)或[类数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)对象创建一个新的浅拷贝的数组实例。

转换[异步的可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)对象到数组，可以使用 {{jsxref("Array.fromAsync()")}}。

{{InteractiveExample("JavaScript Demo: Array.from()", "shorter")}}

```js interactive-example
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

## 语法

```js-nolint
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### 参数

- `arrayLike`
  - : 想要转换成数组的类数组或可迭代对象。
- `mapFn` {{Optional_inline}}
  - : 调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 `mapFn` 的返回值增加到数组中。使用以下参数调用该函数：
    - `element`
      - : 数组当前正在处理的元素。
    - `index`
      - : 数组当前正在处理的元素的索引。
- `thisArg` {{Optional_inline}}
  - : 执行 `mapFn` 时用作 `this` 的值。

### 返回值

一个新的{{jsxref("Array","数组","",1)}}实例。

## 描述

`Array.from()` 可以通过以下方式来创建数组对象：

- [可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（例如 {{jsxref("Map")}} 和 {{jsxref("Set")}} 对象）；或者，如果对象是不可迭代的，
- 类数组对象（带有 `length` 属性和索引元素的对象）。

`Array.from()` 绝不会创建稀疏数组。如果 `arrayLike` 对象缺少一些索引属性，那么这些属性在新数组中将是 `undefined`。

`Array.from()` 有一个可选的参数 `mapFn`，该参数允许你在创建数组时为每个元素执行一个函数，类似于 {{jsxref("Array.prototype.map()", "map()")}}。更明确地说，`Array.from(obj, mapFn, thisArg)` 和 `Array.from(obj).map(mapFn, thisArg)` 具有相同的结果，只是它不会创建中间数组，并且 `mapFn` 仅接受两个参数（`element`、`index`），不接受数组，因为数组仍然在构建中。

> [!NOTE]
> 此行为对于[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)更为重要，因为中间数组的值必须被截断，以适应相应的类型。`Array.from()` 的实现与 {{jsxref("TypedArray.from()")}} 具有相同的签名。

`Array.from()` 方法是一个通用的工厂方法。例如，如果一个数组类的子类继承 `from()` 方法，继承的 `from()` 方法将返回新的子类的实例，而不是数组的实例。事实上，`this` 值可以是任意的构造函数，只要该构造函数接受一个表示新数组长度的单个参数。当一个迭代器对象作为类数组传递时，不带参数调用构造函数；当传递类数组对象时，将携带类数组对象的[规范化长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#长度属性的规范化)调用构造函数。迭代完成时，将再次设置最终的 `length`。如果 `this` 值并不是构造函数，则使用 `Array` 构造函数。

## 示例

### 从字符串构建数组

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### 从 Set 构建数组

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### 从 Map 构建数组

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### 从 NodeList 构建数组

```js
// 根据 DOM 元素的属性创建一个数组
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### 从类数组对象构建数组（arguments）

```js
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [ 1, 2, 3 ]
```

### 使用箭头函数和 Array.from()

```js
// 使用箭头函数作为映射函数去操作多个元素
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 生成一个数字序列。因为数组在每个位置都使用 `undefined` 初始化，下面的 `v` 值将是 `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### 序列生成器（range）

```js
// 序列生成器函数（通常称为“range”，例如 Clojure、PHP 等）
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 生成的数字范围 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// 生成的数字范围 1..10，步长为 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// 使用 Array.from 生成字母表，并将其序列排序
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### 在非数组构造函数上调用 from()

`from()` 方法可以在任何构造函数上调用，只要该构造函数接受一个表示新数组长度的单个参数。

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// 可迭代对象
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// 类数组对象
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }
```

当 `this` 值不是构造函数，返回一个普通的数组对象。

```js
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中的 `Array.from` Polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
