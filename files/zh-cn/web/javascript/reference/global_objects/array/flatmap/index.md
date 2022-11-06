---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---

{{JSRef}}

**`flatMap()`** 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 [map](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 连着深度值为 1 的 [flat](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

{{EmbedInteractiveExample("pages/js/array-flatmap.html")}}

## 语法

```js
// 箭头函数
flatMap((currentValue) => { /* … */ } )
flatMap((currentValue, index) => { /* … */ } )
flatMap((currentValue, index, array) => { /* … */ } )

// 回调函数
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// 行内回调函数
flatMap(function(currentValue) { /* … */ })
flatMap(function(currentValue, index) { /* … */ })
flatMap(function(currentValue, index, array){ /* … */ })
flatMap(function(currentValue, index, array) { /* … */ }, thisArg)
```

### 参数

- `callback`

  - : 可以生成一个新数组中的元素的函数，可以传入三个参数：

    - `currentValue`
      - : 当前正在数组中处理的元素
    - `index`{{optional_inline}}
      - : 可选的。数组中正在处理的当前元素的索引。
    - `array`{{optional_inline}}
      - : 可选的。被调用的 `map` 数组

- `thisArg`{{optional_inline}}
  - : 可选的。执行 `callback` 函数时 使用的`this` 值。

### 返回值

一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为 1。

## 描述

有关回调函数的详细描述，请参见 {{jsxref("Array.prototype.map()")}} 。 `flatMap` 方法与 [`map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法和深度 depth 为 1 的 [`flat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 几乎相同。

## 示例

### `map()` 与 `flatMap()`

```js
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

虽然上面的代码使用 map 和 flatMap 好像都可以，但这只能展示如何使用 flatMap。

所以，为了更好的展示 flatMap 的作用，下面我们将包含几句话的数组拆分成单个词组成的新数组。

```plain
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

注意，输出列表长度可以不同于输入列表长度。

### 在一个 `map()` 期间增加或去除一些项

`flatMap` 能用于在 map 期间增删项目（也就是修改 items 的数量）。换句话说，它允许你遍历很多项使之成为另一些项（靠分别把它们放进去来处理），而不是总是一对一。从这个意义上讲，它的作用类似于 [filter](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)的对立面。只需返回一个 1 项元素数组以保留该项，返回一个多元素数组以添加项，或返回一个 0 项元素数组以删除该项。

```plain
// Let's say we want to remove all the negative numbers and split the odd numbers into an even number and a 1
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]
```

## 替代方案

### `reduce()` 与 `concat()`

```plain
var arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
```

请注意，这是低效的，并且应该避免大型阵列：在每次迭代中，它创建一个必须被垃圾收集的新临时数组，并且它将元素从当前的累加器数组复制到一个新的数组中，而不是将新的元素添加到现有的数组中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.flatMap` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
