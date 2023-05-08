---
title: Array.prototype.group()
slug: Web/JavaScript/Reference/Global_Objects/Array/group
---

{{JSRef}} {{SeeCompatTable}}

**`group()`** 方法根据提供的测试函数返回的字符串值，将调用数组的元素分组。返回的对象具有每个组的单独属性，其中包含组中的元素数组。

<!-- {{EmbedInteractiveExample("pages/js/array-groupby.html")}} -->

当分组名称可以用字符串表示时，应使用此方法。如果你需要使用某个任意值作为键来分组元素，请改用 {{jsxref("Array.prototype.groupToMap()")}} 方法。

## 语法

```js-nolint
group(callbackFn)
group(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个值，可以被强制转换成属性键（字符串或 [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)），用于指示当前元素所属的分组。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `group()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

一个带有所有分组属性的 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，每个属性都分配了一个包含相关组元素的数组。

## 描述

`group()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素调用一次提供的 `callbackFn` 函数，并返回一个字符串或 symbol（不属于这两种类型的值将被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)），用于指示元素所属的分组。对于每个由回调函数返回的唯一分组名称，在结果对象中创建一对新属性和数组。每个元素将被添加到其对应分组属性的数组中。

`callbackFn` 作用于数组中的*每个*索引，而不仅仅是已赋值的索引。在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中，空槽的行为表现与 `undefined` 相同。

`group()` 方法是一个[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this`，而是返回一个包含与原始数组相同元素的数组对象。但是，作为 `callbackFn` 的函数可以更改数组。请注意，在第一次调用 `callbackFn` _之前_，数组的长度已经被保存。因此：

- 当开始调用 `group()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素将被当作 `undefined` 而被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

返回的对象引用与原始数组*相同*的元素（不是{{glossary("deep copy","深拷贝")}}）。更改这些元素的内部结构将反映在原始数组和返回的对象中。

`group()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键的属性。

## 示例

### 使用 group()

首先，我们定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 `type` 和一个 `quantity` 属性。

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

下面的代码根据元素的 `type` 属性的值对元素进行分组。

```js
const result = inventory.group(({ type }) => type);

/* 结果是：
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

箭头函数每次被调用时都只返回每个数组元素的 `type` 属性。请注意，函数参数 `{ type }` 是一个[函数参数的对象解构语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#从作为函数参数传递的对象中提取属性)的基本示例。这会解构传递为参数的对象的 `type` 属性，并将其赋值给函数体中名为 `type` 的变量。这是一种非常简洁的访问函数中相关元素的值的方式。

我们还可以创建根据元素的一个或多个属性中的值推断的分组。下面是一个非常类似的示例，根据 `quantity` 字段的值将项目分为 `ok` 或 `restock` 组。

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = inventory.group(myCallback);

/* 结果是：
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

### 在稀疏数组上使用 group()

当在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)上使用 `group()` 方法时，它会对空槽调用，并将其作为 `undefined` 值进行处理。

```js
console.log([1, , 3].group((x) => x)); // { 1: [1], undefined: [undefined], 3: [3] }
```

### 在非数组对象上调用 group()

`group()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.group.call(arrayLike, (x) => x % 2));
// { 0: [2, 4], 1: [3] }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.group` 的 polyfill](https://github.com/zloirock/core-js#array-grouping)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.groupToMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
