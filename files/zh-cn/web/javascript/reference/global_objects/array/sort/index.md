---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
---

{{JSRef}}

**`sort()`** 方法[_就地_](https://zh.wikipedia.org/wiki/原地算法)对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

由于它取决于具体实现，因此无法保证排序的时间和空间复杂度。

如果想要不改变原数组的排序方法，可以使用 {{jsxref("Array/toSorted", "toSorted()")}}。

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## 语法

```js-nolint
sort()
sort(compareFn)
```

### 参数

- `compareFn` {{optional_inline}}

  - : 定义排序顺序的函数。返回值应该是一个数字，其正负性表示两个元素的相对顺序。该函数使用以下参数调用：

    - `a`
      - : 第一个用于比较的元素。不会是 `undefined`。
    - `b`
      - : 第二个用于比较的元素。不会是 `undefined`。

    如果省略该函数，数组元素会被转换为字符串，然后根据每个字符的 Unicode 码位值进行排序。

### 返回值

经过排序的原始数组的引用。注意数组是[_就地_](https://zh.wikipedia.org/wiki/原地算法)排序的，不会进行复制。

## 描述

如果没有提供 `compareFn`，所有非 `undefined` 的数组元素都会被转换为字符串，并按照 UTF-16 码元顺序比较字符串进行排序。例如“banana”会被排列到“cherry”之前。在数值排序中，9 出现在 80 之前，但因为数字会被转换为字符串，在 Unicode 顺序中“80”排在“9”之前。所有的 `undefined` 元素都会被排序到数组的末尾。

`sort()` 方法保留空槽。如果源数组是[稀疏的](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，则空槽会被移动到数组的末尾，并始终排在所有 `undefined` 元素的后面。

> **备注：** 在 UTF-16 中，Unicode 字符超出 `\uFFFF` 的范围会被编码为两个代理码元（surrogate code unit），这些码位的范围是 `\uD800` 到 `\uDFFF`。每个码位的值都会被单独考虑进行比较。因此，由代理对 `\uD855\uDE51` 组成的字符将排在字符 `\uFF3A` 的前面。

如果提供了 `compareFn`，所有非 `undefined` 的数组元素都会按照比较函数的返回值进行排序（所有的 `undefined` 元素都会被排序到数组的末尾，并且不调用 `compareFn`）。

| `compareFn(a, b)` 返回值 | 排序顺序                   |
| ------------------------ | -------------------------- |
| > 0                      | `a` 在 `b` 后，如 `[b, a]` |
| < 0                      | `a` 在 `b` 前，如 `[a, b]` |
| === 0                    | 保持 `a` 和 `b` 原来的顺序 |

所以，比较函数形式如下：

```js
function compareFn(a, b) {
  if (根据排序标准，a 小于 b) {
    return -1;
  }
  if (根据排序标准，a 大于 b) {
    return 1;
  }
  // a 一定等于 b
  return 0;
}
```

更正式地说，为了确保正确的排序行为，比较函数应具有以下属性：

- _纯函数_：比较函数不会改变被比较的对象或任何外部状态。（这很重要，因为无法保证比较函数将在*何时*以及*如何*调用，因此任何特定的调用都不应对外部产生可见的效果。）
- _稳定性_：比较函数对于相同的输入对应始终返回相同的结果。
- _自反性_：`compareFn(a, a) === 0`。
- _反对称性_：`compareFn(a, b)` 和 `compareFn(b, a)` 必须都是 `0` 或者具有相反的符号。
- _传递性_：如果 `compareFn(a, b)` 和 `compareFn(b, c)` 都是正数、零或负数，则 `compareFn(a, c)` 的符号与前面两个相同。

符合上述限制的比较函数将始终能够返回 `1`、`0` 和 `-1` 中的任意一个，或者始终返回 `0`。例如，如果比较函数只返回 `1` 和 `0`，或者只返回 `0` 和 `-1`，它将无法可靠地排序，因为*反对称性*被破坏了。一个总是返回 `0` 的比较函数将不会改变数组，但仍然是可靠的。

默认的字典比较函数符合上述所有限制。

要比较数字而非字符串，比较函数可以简单的用 `a` 减 `b`，如下的函数将会将数组升序排列（如果它不包含 `Infinity` 和 `NaN`）：

```js
function compareNumbers(a, b) {
  return a - b;
}
```

`sort()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)，它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也类似于数组，但此方法不适用于字符串，因为字符串是不可变的。

## 示例

### 创建、显示及排序数组

下述示例创建了四个数组，并展示原数组。之后对数组进行排序。对比了数字数组分别指定与不指定比较函数的结果。

```js
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
```

### 对象数组的排序

对象数组可以通过比较它们的某个属性的值来排序。

```js
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// 根据 value 排序
items.sort((a, b) => a.value - b.value);

// 根据 name 排序
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // 忽略大小写
  const nameB = b.name.toUpperCase(); // 忽略大小写
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // name 必须相等
  return 0;
});
```

### 对非 ASCII 字符排序

当排序非 ASCII 字符的字符串（如包含类似 e、é、è、a、ä 等字符的字符串）。一些非英语语言的字符串需要使用 {{jsxref("String.localeCompare")}}。这个函数可以将函数排序到正确的顺序。

```js
var items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items 是 ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### 使用 map 改善排序

`compareFn` 可能会在数组中的每个元素上调用多次。根据 `compareFn` 的性质，这可能会产生很高的开销。如果 `compareFn` 执行的工作更多，需要排序的元素更多，使用 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 进行排序可能更有效率。其思路是遍历数组一次，将用于排序的实际值提取到一个临时数组中，对临时数组进行排序，然后遍历临时数组以获得正确的顺序。

```js
// 需要被排序的数组
const data = ["delta", "alpha", "charlie", "bravo"];

// 用于存放位置和排序值的对象数组
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// 按照多个值排序数组
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);
```

有一个开源库叫做 [mapsort](https://github.com/Pimm/mapsort)，它采用了这种方法。

### sort() 方法返回对同一数组的引用

`sort()` 方法返回对原始数组的引用，因此更改返回的数组将同时更改原始数组。

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers 和 sorted 都是 [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

如果你希望 `sort()` 方法不会改变原始数组，而是返回一个类似于其他数组方法（如 `map()` ）返回的[浅拷贝数组](/zh-CN/docs/Glossary/Shallow_copy)，可以使用 {{jsxref("Array/toSorted", "toSorted()")}} 方法。或者，你可以在调用 `sort()` 之前使用[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)或 [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 进行浅拷贝。

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] 创建一个浅拷贝，因此 sort() 不会改变原始数组。
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### 排序稳定性

自 EcmaScript 第 10 版（EcmaScript 2019）起，[规范](https://tc39.es/ecma262/#sec-array.prototype.sort) 要求 `Array.prototype.sort` 为稳定排序。

假设有一个包含学生名字和年级的列表，已经将它按学生名字字母顺序进行预排序：

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
```

对这个数组执行 `grade` 升序排序后：

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

`students` 变量会具有以下值：

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // grade 相同时维持原先的顺序（稳定排序）
  { name: "Devlin", grade: 15 }, // grade 相同时维持原先的顺序（稳定排序）
];
```

注意，那些年级相同的学生（如 Alex 和 Devlin）会维持调用排序之前的顺序，这是稳定排序所确保的。

EcmaScript 第 10 版（EcmaScript 2019）以前没有要求稳定性，意味着你可能会得到以下结果：

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // 没有维持原先的顺序
  { name: "Alex", grade: 15 }, // 没有维持原先的顺序
];
```

### 使用非规范的比较函数进行排序

如果一个比较函数不符合纯函数、稳定性、自反性、反对称性和传递性规则，就像在[描述](#描述)中解释的那样，程序的行为是未定义的。

例如，请看这个示例：

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

在这个例子中，`compareFn` 函数是不规范的，因为它不满足反对称性：如果 `a > b`，它返回 `1`；但是通过交换 `a` 和 `b`，它返回了 `0` 而不是一个负值。因此，对于不同的引擎，结果数组也会有所不同。例如，V8（用于 Chrome、Node.js 等）和 JavaScriptCore（用于 Safari）根本不会对数组进行排序，而是返回 `[3, 1, 4, 1, 5, 9]`；而 SpiderMonkey（用于 Firefox）将返回升序排序的数组 `[1, 1, 3, 4, 5, 9]`。

然而，如果 `compareFn` 函数稍微改变一下，使其返回 `-1` 或 `0`：

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

那么在 V8 和 JavaScriptCore 中，它将按降序排序，结果为 `[9, 5, 4, 3, 1, 1]`，而 SpiderMonkey 返回的结果是原始数组：`[3, 1, 4, 1, 5, 9]`。

由于这种实现的不一致性，建议始终遵循五个约束条件以确保你的比较函数是规范的。

### 在稀疏数组上使用 sort()

空槽会被移动到数组的末尾。

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### 在类数组对象上调用 sort()

`sort()` 方法会读取 `this` 的 `length` 属性。然后它会收集在 `0` 到 `length - 1` 范围内所有已存在的整数键属性，对它们进行排序，然后写回。如果范围内存在缺失的属性，则相应的尾随属性将被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)，好像不存在的属性被排序到末尾一样。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.sort.call(arrayLike));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.sort` with modern behavior like stable sort in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [在 V8 中进行排序](https://v8.dev/blog/array-sort) （v8.dev，2018 年 9 月 28 日）
- [稳定的 `Array.prototype.sort` 方法](https://v8.dev/features/stable-sort)
- [Mathias Bynens 的排序稳定性演示](https://mathiasbynens.be/demo/sort-stability)
