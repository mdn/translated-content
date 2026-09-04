---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

**`slice()`** 方法返回一个新的数组对象，这一对象是一个由 `start` 和 `end` 决定的原数组的[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)（包括 `start`，不包括 `end`），其中 `start` 和 `end` 代表了数组元素的索引。原始数组不会被改变。

{{InteractiveExample("JavaScript Demo: Array.slice()", "taller")}}

```js interactive-example
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
```

## 参数

- `start` {{optional_inline}}
  - : 提取起始处的索引（从 `0` 开始），会[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 如果索引是负数，则从数组末尾开始计算——如果 `start < 0`，则使用 `start + array.length`。
    - 如果 `start < -array.length` 或者省略了 `start`，则使用 `0`。
    - 如果 `start >= array.length`，则不提取任何元素。
- `end` {{optional_inline}}
  - : 提取终止处的索引（从 `0` 开始），会[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。`slice()` 会提取到但不包括 `end` 的位置。
    - 如果索引是负数，则从数组末尾开始计算——如果 `end < 0`，则使用 `end + array.length`。
    - 如果 `end < -array.length`，则使用 `0`。
    - 如果 `end >= array.length` 或者省略了 `end`，则使用 `array.length`，提取所有元素直到末尾。
    - 如果 `end` 在规范化后小于或等于 `start`，则不提取任何元素。

### 返回值

一个含有被提取元素的新数组。

## 描述

`slice()` 方法是一个[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this`，而是返回一个[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)，其中包含了原始数组的一部分相同的元素。

`slice()` 方法会保留空槽。如果被切片的部分是[稀疏的](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，则返回的数组也是稀疏的。

`slice()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只要求 `this` 上有 `length` 属性和整数键属性。

## 示例

### 返回现有数组的一部分

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits 包含 ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus 包含 ['Orange','Lemon']
```

### 使用 `slice`

在下例中，`slice` 从 `myCar` 创建了一个新数组 `newCar`。两个数组都包含了一个 `myHonda` 对象的引用。当 `myHonda` 的 `color` 属性改变为 `purple`，则两个数组中的对应元素都会随之改变。

```js
// 使用 slice 方法从 myCar 创建一个 newCar。
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// 改变 myHonda 对象的 color。
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
```

上述代码输出：

```js
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### 在类数组对象上调用 slice()

`slice()` 方法会读取 `this` 对象的 `length` 属性，然后从 `start` 到 `end` 读取整数键属性，并将它们定义在一个新创建的数组中。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### 使用 slice() 把类数组对象转化为数组

`slice()` 方法经常与 {{jsxref("Function.prototype.bind", "bind()")}} 和 {{jsxref("Function.prototype.call", "call()")}} 一起使用，用于创建一个实用方法，将类数组对象转换为数组。

```js
// 调用 slice() 方法时，会将 this 对象作为第一个参数传入
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### 在稀疏数组上使用 slice()

如果源数组是稀疏数组，`slice()` 方法返回的数组也会是稀疏数组。

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.slice` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
