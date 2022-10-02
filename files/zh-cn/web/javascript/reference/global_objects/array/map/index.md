---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
---

{{JSRef}}

**`map()`** 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## 语法

```js
// 箭头函数
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// 回调函数
map(callbackFn)
map(callbackFn, thisArg)

// 内联回调函数
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callbackFn`

  - : 生成新数组元素的函数，使用三个参数：

    - `currentValue`
      - : `callbackFn` 数组中正在处理的当前元素。
    - `index`
      - : `callbackFn` 数组中正在处理的当前元素的索引。
    - `array`
      - : `map` 方法调用的数组。

- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 函数时被用作 `this` 的值。

### 返回值

一个新数组，每个元素都是回调函数的返回值。

## 描述

`map` 方法会给原数组中的每个元素都按顺序调用一次 `callbackFn` 函数。`callbackFn` 每次执行后的返回值（包括 {{jsxref("undefined")}}）组合起来形成一个新数组。 `callbackFn` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。

因为 `map` 生成一个新数组，当你不打算使用返回的新数组却使用 `map` 是违背设计初衷的，请用 [`forEach`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 或者 [`for-of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 替代。

如果有以下情形，则不该使用 `map`：

- 你不打算使用返回的新数组；或
- 你没有从回调函数中返回值。

`callbackFn` 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 `thisArg` 参数提供给 `map`，则会被用作回调函数的 `this` 值。否则 {{jsxref("undefined")}} 会被用作回调函数的 `this` 值。`this` 的值最终相对于 `callbackFn` 函数的可观察性是依据[确定函数绑定的 `this` 的常见规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)决定的。

`map` 不修改调用它的原数组本身（当然可以在 `callbackFn` 执行时改变原数组）

`map` 方法处理数组元素的范围是在 `callbackFn` 方法第一次调用之前就已经确定了。调用 `map` 方法之后追加的数组元素不会被 `callbackFn` 访问。如果存在的数组元素改变了，那么传给 `callbackFn` 的值是 `map` 访问该元素时的值。在 `map` 函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。

根据规范中定义的算法，如果被 map 调用的数组是离散的，新数组将也是离散的保持相同的索引为空。

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

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray 现在是 [{1: 10}, {2: 20}, {3: 30}],

// kvArray 依然是：
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

### 使用一个包含一个参数的函数来映射一个数字数组

下面的代码表示了当函数需要一个参数时 `map` 的工作方式。当 `map` 循环遍历原始数组时，这个参数会自动被分配成数组中对应的每个元素。

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

// doubles 现在是   [2, 8, 18]
// numbers 依旧是   [1, 4, 9]
```

### 一般的 map 方法

下面的例子演示如何在一个 {{jsxref("String")}} 上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：

```js
const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));

// charCodes 现在等于 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

### querySelectorAll 应用

下面代码展示了如何去遍历用 `querySelectorAll` 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印：

```js
const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

### 使用技巧案例

（[原文地址](https://www.wirfs-brock.com/allen/posts/166)）

通常情况下，`map` 方法中的 `callbackFn` 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 `map` 只给 `callbackFn` 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。

考虑下例：

```js
["1", "2", "3"].map(parseInt);
```

我们期望输出 `[1, 2, 3]`, 而实际结果是 `[1, NaN, NaN]`.

parseInt 经常被带着一个参数使用，但是这里接受两个。第一个参数是一个表达式而第二个是回调函数的基，`Array.prototype.map` 传递 3 个参数：

- the element
- the index
- the array

第三个参数被 parseInt 忽视了，但不是第二个。因此可能出现混淆。下面是迭代步骤的简明示例：

```js
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/*  third iteration (index is 2): */ parseInt("3", 2); // NaN
```

下面让我们来讨论解决方案：

```js
const returnInt = (element) => parseInt(element, 10);

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// 实际结果是一个数字数组（如预期）

// 与上面相同，但使用简洁的箭头函数语法
['1', '2', '3'].map((str) => parseInt(str)); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// 但与 parseInt() 不同，Number() 还会返回一个浮点数或（解析）指数表示法：
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]

// 为了进行比较，如果我们对上面的数组使用 parseInt():
['1.1', '2.2e2', '3e300'].map((str) => parseInt(str)); // [1, 2, 3]
```

使用 {{jsxref("parseInt")}} 作为参数调用 map 方法，输出运行如下：

```js
const strings = ['10', '10', '10'];
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

- [Polyfill of `Array.prototype.map` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}} object
- {{jsxref("Array.from()")}}
