---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
---

{{JSRef}}

**`map()`** 方法**创建一个新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## 语法

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它的返回值作为一个元素被添加为新数组中。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `map()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

一个新数组，每个元素都是回调函数的返回值。

## 描述

`map()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素调用一次提供的 `callbackFn` 函数，并用结果构建一个新数组。

`callbackFn` 仅在已分配值的数组索引处被调用。它不会在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽处被调用。

`map()` 方法是一个[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this`。然而，作为 `callbackFn` 提供的函数可以更改数组。请注意，在第一次调用 `callbackFn` _之前_，数组的长度已经被保存。因此：

- 当开始调用 `map()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素则不会被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`map()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

由于 `map` 创建一个新数组，在没有使用返回的数组的情况下调用它是不恰当的；应该使用 {{jsxref("Array/forEach", "forEach")}} 或 {{jsxref("Statements/for...of", "for...of")}} 作为代替。

## 示例

### 求数组中每个元素的平方根

下面的代码创建了一个新数组，值为原数组中对应数字的平方根。

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots 现在是     [1, 2, 3]
// numbers 依旧是   [1, 4, 9]
```

### 使用 map 重新格式化数组中的对象

以下代码使用一个包含对象的数组来重新创建一个格式化后的数组。

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### 使用包含单个参数的函数来映射一个数字数组

下面的代码表示了当函数需要一个参数时 `map` 的工作方式。当 `map` 循环遍历原始数组时，这个参数会自动被分配成数组中对应的每个元素。

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]
```

### 在非数组对象上调用 map()

`map()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

### 在 NodeList 上通用地使用 map()

以下示例展示了如何去遍历通过 `querySelectorAll` 得到的对象集合。这是因为 `querySelectorAll` 返回的是一个对象集合 `NodeList`。

在这种情况下，我们返回屏幕上所有选中 `option` 的值：

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

一种更简单的方式是用 {{jsxref("Array.from()")}} 方法。

### 在稀疏数组上使用 map()

稀疏数组在使用 `map()` 方法后仍然是稀疏的。空槽的索引在返回的数组中仍然为空，并且回调函数不会对它们进行调用。

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// Visit 0
// Visit 2
// [2, empty, 6]
```

### 将 parseInt() 与 map() 一起使用

（[受到这篇博文的启发](https://www.wirfs-brock.com/allen/posts/166)）

通常情况下，我们使用只有一个参数（即正在遍历的元素）的回调函数。尽管某些函数可以接受额外的可选参数，但在实际应用中，我们通常只传递一个参数。这种习惯可能会导致一些令人困惑的现象。

考虑下例：

```js
["1", "2", "3"].map(parseInt);
```

我们期望输出 `[1, 2, 3]`, 而实际结果是 `[1, NaN, NaN]`.

{{jsxref("parseInt")}} 函数通常只使用一个参数，但其实可以传入两个参数。第一个参数是表达式，第二个参数是解析该表达式的基数。当在 `Array.prototype.map` 的回调函数中使用 `parseInt` 函数时，`map` 方法会传递 3 个参数：

- 元素
- 索引
- 数组

{{jsxref("parseInt")}} 函数会忽略第三个参数，但是*不会忽略*第二个参数！这可能会导致一些问题。

以下是迭代步骤的简明示例：

```js
// parseInt(string, radix) -> map(parseInt(value, index))
/* 第一次迭代 (index 是 0): */ parseInt("1", 0); // 1
/* 第二次迭代 (index 是 1): */ parseInt("2", 1); // NaN
/* 第三次迭代 (index 是 2): */ parseInt("3", 2); // NaN
```

下面让我们来讨论解决方案：

```js
const returnInt = (element) => parseInt(element, 10);

["1", "2", "3"].map(returnInt); // [1, 2, 3]
// 实际结果是一个数字数组（如预期）

// 与上面相同，但使用简洁的箭头函数语法
["1", "2", "3"].map((str) => parseInt(str)); // [1, 2, 3]

// 实现上述目标更简单的方法，同时避免了“骗招”：
["1", "2", "3"].map(Number); // [1, 2, 3]

// 但与 parseInt() 不同，Number() 还会返回一个浮点数或（解析）指数表示法：
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// 为了进行比较，如果我们对上面的数组使用 parseInt():
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]
```

使用 {{jsxref("parseInt")}} 作为参数调用 map 方法，输出运行如下：

```js
const strings = ["10", "10", "10"];
const numbers = strings.map(parseInt);

console.log(numbers);
// 根据以上描述，[10, NaN, 2] 的实际结果可能会出乎意料。
```

### 映射包含 undefined 的数组

当返回 {{jsxref("undefined")}} 或没有返回任何内容时：

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index 从 0 开始，因此 filterNumbers 为 1、2、3 和 undefined。
// filteredNumbers 是 [1, 2, 3, undefined]
// numbers 依旧是 [1, 2, 3, 4]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.map` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
