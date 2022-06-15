---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reduce
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Reduce
---
{{JSRef}}

**`reduce()`** 方法对数组中的每个元素按序执行一个由您提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 *initialValue*，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。

下面的例子能够帮助你理解 `reduce()` 的用处——计算数组所有元素的总和：

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

**reducer** 逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果相加（上一步的计算结果是当前元素之前所有元素的总和）——直到没有更多的元素被相加。

## 语法

```js
// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

### 参数

- `callbackFn`
  - : 一个 “reducer” 函数，包含四个参数：
    - `previousValue`：上一次调用 `callbackFn` 时的返回值。在第一次调用时，若指定了初始值  `initialValue`，其值则为 `initialValue`，否则为数组索引为 0 的元素 `array[0]`。
    - `currentValue`：数组中正在处理的元素。在第一次调用时，若指定了初始值  `initialValue`，其值则为数组索引为 0 的元素 `array[0]`，否则为 `array[1]`。
    - `currentIndex`：数组中正在处理的元素的索引。若指定了初始值 `initialValue`，则起始索引号为 0，否则从索引 1 起始。
    - `array`：用于遍历的数组。
- `initialValue` {{optional_inline}}
  - : 作为第一次调用 `callback` 函数时参数 *previousValue* 的值。若指定了初始值 `initialValue`，则 `currentValue` 则将使用数组第一个元素；否则 `previousValue` 将使用数组第一个元素，而 `currentValue` 将使用数组第二个元素。

### 返回值

使用 “reducer” 回调函数遍历整个数组后的结果。

### 异常

- {{jsxref("TypeError")}}
  - : 数组为空且初始值 `initialValue` 未提供。

## 描述

ECMAScript 规范描述了 `reduce()` 的行为：

> *callbackfn* 应是一个接受四个参数的函数，`reduce` 对于数组中第一个元素之后的每一个元素，按升序各调用一次回调函数。
>
> *callbackfn* 被调用时会传入四个参数：
>
> - *previousValue*（前一次调用 *callbackfn* 得到的返回值）
> - *currentValue*（数组中正在处理的元素）
> - *currentIndex*（数组中正在处理的元素的索引）
> - 被遍历的对象
>
> 回调函数第一次执行时，*previousValue* 和 *currentValue* 的取值有两种情况：
>
> - 如果调用 `reduce()` 时提供了 *initialValue*，*previousValue* 取值则为 *initialValue*，*currentValue* 则取数组中的第一个值。
> - 如果没有提供 *initialValue*，那么 *previousValue* 取数组中的第一个值，*currentValue* 取数组中的第二个值。
>
> 如果数组为空且未指定初始值 *initialValue*，则会抛出 {{jsxref("TypeError")}}。
>
> `reduce` 不会直接改变调用它的对象，但对象可被调用的 *callbackfn* 所改变。
>
> 遍历的元素范围是在第一次调用 *callbackfn* 之前确定的。所以即使有元素在调用开始后被追加到数组中，这些元素也不会被 *callbackfn* 访问。如果数组现有的元素发生了变化，传递给 *callbackfn* 的值将会是元素被 `reduce` 访问时的值（即发生变化后的值）；在调用 `reduce` 开始后，尚未被访问的元素若被删除，则其将不会被 `reduce` 访问。

如果数组仅有一个元素（无论位置如何）并且没有提供初始值 *initialValue*，或者有提供 *initialValue* 但是数组为空，那么此唯一值将被返回且 `callbackfn` 不会被执行。

提供初始值 *initialValue* 通常更安全，正如下面的例子，如果没有提供 *initialValue*，则 `reduce` 方法会因数组长度的不同（大于 1、等于 1、等于 0）而有不同的表现：

```js
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
```

### 无初始值时 reduce() 如何运行

假如运行以下无初始值的 `reduce()` 代码：

```js
const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
```

callback 被调用四次，每次调用的参数和返回值如下表：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <code><var>callback</var></code> iteration
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>15</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>31</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>31</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>48</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>48</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>66</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>66</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>85</code></td>
    </tr>
  </tbody>
</table>

由 `reduce()` 返回的值将是最后一次回调返回值（`85`）。

### 有初始值时 reduce() 如何运行

在这里，我们以相同的算法 reduce 同一个数组，但提供 `10` 作为初始值：

```js
[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
```

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <code><var>callback</var></code> iteration
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>10</code></td>
      <td><code>15</code></td>
      <td><code>0</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>25</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>41</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>41</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>58</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>58</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>76</code></td>
    </tr>
    <tr>
      <th scope="row">fifth call</th>
      <td><code>76</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>95</code></td>
    </tr>
  </tbody>
</table>

这种情况下 `reduce()` 返回的值是 `95`。

## 示例

### 求数组所有值的和

```js
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
// sum is 6
```

你也可以写成箭头函数的形式：

```js
let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)
```

### 累加对象数组里的值

要累加对象数组中包含的值，**必须**提供 *initialValue*，以便各个 item 正确通过你的函数。

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) // logs 6
```

你也可以写成箭头函数的形式：

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // logs 6
```

### 将二维数组转化为一维

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
```

你也可以写成箭头函数的形式：

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
```

### 计算数组中每个元素出现的次数

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### 按属性对 object 分类

```js
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### 使用扩展运算符和 initialValue 绑定包含在对象数组中的数组

```js
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### 数组去重

> **备注：** 如果你正在使用一个可以兼容{{jsxref("Set")}} 和 {{jsxref("Array.from()")}} 的环境，你可以使用`let arrayWithNoDuplicates = Array.from(new Set(myArray))` 来获得一个相同元素被移除的数组。

```js
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
```

### 使用 .reduce() 替换 .filter().map()

使用 {{jsxref("Array.filter()")}} 和 {{jsxref("Array.map()")}} 会遍历数组两次，而使用具有相同效果的 {{jsxref("Array.reduce()")}} 只需要遍历一次，这样做更加高效。（如果你喜欢 `for` 循环，你可用使用 {{jsxref("Array.forEach()")}} 以在一次遍历中实现过滤和映射数组）

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### 按顺序运行 Promise

```js
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
```

### 使用函数组合实现管道

```js
// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) => initialValue => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240
```

### 使用 reduce 实现 map

```js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) // [5, 7, , 10]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduceRight()")}}
