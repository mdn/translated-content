---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
---

{{JSRef}}

**`sort()`** 方法用[原地算法](https://zh.wikipedia.org/wiki/原地算法)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## 语法

```js
// 无函数
sort()

// 箭头函数
sort((a, b) => { /* … */ } )

// 比较函数
sort(compareFn)

// 内联比较函数
sort(function compareFn(a, b) { /* … */ })
```

### 参数

- `compareFn` {{optional_inline}}

  - : 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。

    - `a`
      - : 第一个用于比较的元素。
    - `b`
      - : 第二个用于比较的元素。

### 返回值

排序后的数组。请注意，数组已原地排序，并且不进行复制。

## 描述

如果没有指明 `compareFn` ，那么元素会按照转换为的字符串的诸个字符的 Unicode 位点进行排序。例如 "Banana" 会被排列到 "cherry" 之前。当数字按由小到大排序时，9 出现在 80 之前，但因为（没有指明 `compareFn`），比较的数字会先被转换为字符串，所以在 Unicode 顺序上 "80" 要比 "9" 要靠前。

如果指明了 `compareFn` ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

- 如果 `compareFn(a, b)` 大于 0，b 会被排列到 a 之前。
- 如果 `compareFn(a, b)` 小于 0，那么 a 会被排列到 b 之前；
- 如果 `compareFn(a, b)` 等于 0，a 和 b 的相对位置不变。备注：ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
- `compareFn(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

| `compareFn(a, b)` 返回值 | 排序顺序              |
| ----------------------- | --------------------- |
| > 0                     | `a` 在 `b` 后         |
| < 0                     | `a` 在 `b` 前         |
| === 0                   | 保持 `a` 和 `b` 的顺序 |

所以，比较函数格式如下：

```js
function compareFn(a, b) {
  if (在某些排序规则中，a 小于 b) {
    return -1;
  }
  if (在这一排序规则下，a 大于 b) {
    return 1;
  }
  // a 一定等于 b
  return 0;
}
```

要比较数字而非字符串，比较函数可以简单的用 `a` 减 `b`，如下的函数将会将数组升序排列（如果它不包含 `Infinity` 和 `NaN`）：

```js
function compareNumbers(a, b) {
  return a - b;
}
```

`sort` 方法可以使用 {{jsxref("Operators/function", "函数表达式", "", 1)}} 方便地书写：

```js
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]

// 或者

const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
// [1, 2, 3, 4, 5]
```

对象可以按照某个属性排序：

```js
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

## 示例

### 创建、显示及排序数组

下述示例创建了四个数组，并展示原数组。之后对数组进行排序。对比了数字数组分别指定与不指定比较函数的结果。

```js
var stringArray = ["Blue", "Humpback", "Beluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b)
{
  return a - b;
}

console.log('stringArray:' + stringArray.join());
console.log('Sorted:' + stringArray.sort());

console.log('numberArray:' + numberArray.join());
console.log('Sorted without a compare function:'+ numberArray.sort());
console.log('Sorted with compareNumbers:'+ numberArray.sort(compareNumbers));

console.log('numericStringArray:'+ numericStringArray.join());
console.log('Sorted without a compare function:'+ numericStringArray.sort());
console.log('Sorted with compareNumbers:'+ numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:'+ mixedNumericArray.join());
console.log('Sorted without a compare function:'+ mixedNumericArray.sort());
console.log('Sorted with compareNumbers:'+ mixedNumericArray.sort(compareNumbers));
```

该示例的返回结果如下。输出显示，当使用比较函数后，数字数组会按照数字大小排序。

```js
stringArray: Blue,Humpback,Beluga
Sorted: Beluga,Blue,Humpback

numberArray: 40,1,5,200
Sorted without a compare function: 1,200,40,5
Sorted with compareNumbers: 1,5,40,200

numericStringArray: 80,9,700
Sorted without a compare function: 700,80,9
Sorted with compareNumbers: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
Sorted without a compare function: 1,200,40,5,700,80,9
Sorted with compareNumbers: 1,5,9,40,80,200,700
```

### 对非 ASCII 字符排序

当排序非 ASCII 字符的字符串（如包含类似 e, é, è, a, ä 等字符的字符串）。一些非英语语言的字符串需要使用 {{jsxref("String.localeCompare")}}。这个函数可以将函数排序到正确的顺序。

```js
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### 使用映射改善排序

`compareFunction` 可能需要对元素做多次映射以实现排序，尤其当 `compareFunction` 较为复杂，且元素较多的时候，某些 `compareFunction` 可能会导致很高的负载。使用 map 辅助排序将会是一个好主意。基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。

```js
// 需要被排序的数组
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 对需要排序的数字和位置的临时存储
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 按照多个值排序数组
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 根据索引得到排序的结果
var result = mapped.map(function(el){
  return list[el.index];
});
```

### 排序稳定性

自 ES10（EcmaScript 2019）起，[规范](https://tc39.es/ecma262/#sec-array.prototype.sort) 要求 `Array.prototype.sort` 为稳定排序。

假设有一个包含学生名字和年级的列表，已经将它按学生名字字母顺序进行预排序：

```js
const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
];
```

对这个数组执行 `grade` 升序排序后：

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

`students` 变量如下：

```js
[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 }, // grade 相同时维持原先的顺序 (稳定排序)
  { name: "Devlin", grade: 15 }, // grade 相同时维持原先的顺序 (稳定排序)
];
```

注意，那些年级相同的学生（如 Alex 和 Devlin）会维持调用排序之前的顺序，这是稳定排序所确保的。

ES10（EcmaScript 2019）以前没有要求稳定性，意味着你可能会得到以下结果：

```js
[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Devlin", grade: 15 }, // 没有维持原先的顺序
  { name: "Alex",   grade: 15 }, // 没有维持原先的顺序
];
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.sort` with modern behavior like stable sort in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- [About the stability of the algorithm used by V8 engine](https://v8.dev/blog/array-sort)
- [\[译\] V8 引擎中的排序](https://zhuanlan.zhihu.com/p/55338902)
- [Mathias Bynens' sort stability demo](https://mathiasbynens.be/demo/sort-stability)
