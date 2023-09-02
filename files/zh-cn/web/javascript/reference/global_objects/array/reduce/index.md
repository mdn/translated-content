---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

**`reduce()`** 方法对数组中的每个元素按序执行一个提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）。

下面的例子能够帮助你理解 `reduce()` 的用处——计算数组所有元素的总和：

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

reducer 逐个遍历数组元素，每一步都将当前元素的值与前一步的结果相加（该结果是之前所有步骤结果的总和）——直到没有更多需要相加的元素。

## 语法

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 参数

- `callbackFn`
  - : 为数组中每个元素执行的函数。其返回值将作为下一次调用 `callbackFn` 时的 `accumulator` 参数。对于最后一次调用，返回值将作为 `reduce()` 的返回值。该函数被调用时将传入以下参数：
    - `accumulator`
      - : 上一次调用 `callbackFn` 的结果。在第一次调用时，如果指定了 `initialValue` 则为指定的值，否则为 `array[0]` 的值。
    - `currentValue`
      - : 当前元素的值。在第一次调用时，如果指定了 `initialValue`，则为 `array[0]` 的值，否则为 `array[1]`。
    - `currentIndex`
      - : `currentValue` 在数组中的索引位置。在第一次调用时，如果指定了 `initialValue` 则为 `0`，否则为 `1`。
    - `array`
      - : 调用了 `reduce()` 的数组本身。
- `initialValue` {{optional_inline}}
  - : 第一次调用回调时初始化 `accumulator` 的值。如果指定了 `initialValue`，则 `callbackFn` 从数组中的第一个值作为 `currentValue` 开始执行。如果没有指定 `initialValue`，则 `accumulator` 初始化为数组中的第一个值，并且 `callbackFn` 从数组中的第二个值作为 `currentValue` 开始执行。在这种情况下，如果数组为空（没有第一个值可以作为 `accumulator` 返回），则会抛出错误。

### 返回值

使用“reducer”回调函数遍历整个数组后的结果。

### 异常

- {{jsxref("TypeError")}}
  - : 如果数组为空且未提供 `initialValue`，则会抛出异常。

## 描述

`reduce()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它按升序对数组中的所有元素运行一个“reducer”回调函数，并将它们累积到一个单一的值中。每次调用时，`callbackFn` 的返回值都作为 `accumulator` 参数传递到下一次调用中。`accumulator` 的最终值（也就是在数组的最后一次迭代中从 `callbackFn` 返回的值）将作为 `reduce()` 的返回值。

`callbackFn` 仅对已分配值的数组索引进行调用。不会对[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽进行调用。

与其他[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)不同，`reduce()` 不接受 `thisArg` 参数。`callbackFn` 调用时始终以 `undefined` 作为 `this` 的值，如果 `callbackFn` 未处于严格模式，则该值将被替换为 `globalThis`。

`reduce()` 是[函数式编程](https://zh.wikipedia.org/wiki/函数式编程)中的一个核心概念，在函数式编程中，不可能改变任何值，因此为了累积数组中的所有值，必须在每次迭代中返回一个新的累加器。这种约定也适用于 JavaScript 的 `reduce()`：应该在可能的情况下使用[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)或其他复制方法来创建新的数组和对象作为累加器，而不是改变现有的累加器。如果你决定改变累加器而不是复制它，请记得仍然在回调中返回修改后的对象，否则下一次迭代将收到 `undefined`。

`reduce()` 不会改变被调用的数组，但是作为 `callbackFn` 提供的函数可能会改变数组。但需要注意的是，在第一次调用 `callbackFn` _之前_，数组的长度会被保存。因此：

- 当开始调用 `reduce()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素则不会被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`reduce()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

### 不应使用 reduce() 的情况

像 `reduce()` 这样的递归函数可能非常强大，但有时可能很难理解，特别是对于缺乏经验的 JavaScript 开发人员。如果使用其他数组方法可以使代码更清晰，则开发人员必须权衡代码可读性与使用 `reduce()` 带来的好处。如果 `reduce()` 确实是最佳选择，应该通过良好的文档和语义化的变量命名来提高代码的可读性。

### 边界情况

如果数组只有一个元素（无论位置如何）且未提供 `initialValue`，或者提供了 `initialValue` 但数组为空，则将返回该单个值，而*不*调用 `callbackFn`。

如果提供了 `initialValue` 且数组不为空，则 `reduce` 方法将始终从索引 0 开始调用回调函数。

如果未提供 `initialValue`，则对于长度大于 1、等于 1 和 0 的数组，`reduce` 方法将有不同的表现，如以下示例所示：

```js
const getMax = (a, b) => Math.max(a, b);

// 从索引 0 开始为数组中的每个元素调用回调函数
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// 仅为索引 1 处的元素调用回调函数
[1, 100].reduce(getMax); // 100

// 不调用回调函数
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

## 示例

### 无初始值时 reduce() 如何运行

假如运行以下无初始值的 `reduce()` 代码：

```js
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
```

回调函数会被调用四次，每次调用的参数和返回值如下表：

|            | `accumulator` | `currentValue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `15`          | `16`           | `1`     | `31`   |
| 第二次调用 | `31`          | `17`           | `2`     | `48`   |
| 第三次调用 | `48`          | `18`           | `3`     | `66`   |
| 第四次调用 | `66`          | `19`           | `4`     | `85`   |

`array` 参数在整个过程中始终不会改变——它始终是 `[15, 16, 17, 18, 19]`。`reduce()` 返回的值将是最后一次回调返回值（`85`）。

### 有初始值时 reduce() 如何运行

在这里，我们以相同的算法 reduce 同一个数组，但提供 `10` 作为 `initialValue`：

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

回调函数会被调用五次，每次调用的参数和返回值如下表：

|            | `accumulator` | `currentValue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `10`          | `15`           | `0`     | `25`   |
| 第二次调用 | `25`          | `16`           | `1`     | `41`   |
| 第三次调用 | `41`          | `17`           | `2`     | `58`   |
| 第四次调用 | `58`          | `18`           | `3`     | `76`   |
| 第五次调用 | `76`          | `19`           | `4`     | `95`   |

这种情况下 `reduce()` 返回的值是 `95`。

### 求对象数组中值的总和

为了对包含在对象数组中的值进行求和，**必须**提供一个 `initialValue`，以便每个项都通过回调函数处理。

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### 展平嵌套数组

```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// flattened 的值是 [0, 1, 2, 3, 4, 5]
```

### 统计对象中值的出现次数

```js
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames 的值是：
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### 按属性对对象进行分组

```js
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### 使用展开语法和 initialValue 连接包含在对象数组中的数组

```js
// friends——一个对象数组，其中对象字段“books”是最喜欢的书的列表
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks——列表，其中包含所有朋友的书籍和 initialValue 中包含的附加列表
const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ["Alphabet"],
);
console.log(allbooks);
// [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### 数组去重

> **备注：** 可以使用 {{jsxref("Set")}} 和 {{jsxref("Array.from()")}} 来实现相同的效果，如 `const arrayWithNoDuplicates = Array.from(new Set(myArray))`，并且性能更好。

```js
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);
```

### 使用 reduce() 来替代 .filter().map()

使用 {{jsxref("Array/filter", "filter()")}} 和 {{jsxref("Array/map", "map()")}} 会遍历数组两次，但是你可以使用 `reduce()` 只遍历一次并实现相同的效果，从而更高效。（如果你喜欢使用 `for` 循环，你可以在遍历一次时使用 {{jsxref("Array/forEach", "forEach()")}} 进行过滤和映射。）

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### 按顺序运行 Promise

```js
/**
 * 链接一系列 Promise 处理程序。
 *
 * @param {array} arr ——一个 Promise 处理程序列表，每个处理程序接收前一个处理程序解决的结果并返回另一个 Promise。
 * @param {*} input ——开始调用 Promise 链的初始值
 * @return {Object} ——由一系列 Promise 链接而成的 Promise
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input),
  );
}

// Promise 函数 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// Promise 函数 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// 函数 3——将由 `.then()` 包装在已解决的 Promise 中
function f3(a) {
  return a * 3;
}

// Promise 函数 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
```

### 使用函数组合实现管道

```js
// 组合使用的构建块
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// 函数组合，实现管道功能
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// 组合的函数，实现特定值的乘法
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// 用例
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### 在稀疏数组中使用 reduce()

`reduce()` 会跳过稀疏数组中缺失的元素，但不会跳过 `undefined` 值。

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### 在非数组对象上调用 reduce()

`reduce()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.reduce` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
