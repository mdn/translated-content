---
title: 索引集合类
slug: Web/JavaScript/Guide/Indexed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

本章介绍按索引值排序的数据集合。包括数组和类数组结构，如 {{jsxref("Array")}} 对象和 {{jsxref("TypedArray")}} 对象。

*数组*是由名称和索引引用的值构成的有序列表。

例如，考虑一个名为 `emp` 的数组，它包含按数字雇员编号索引的雇员姓名。所以 `emp[0]` 是 0 号员工，`emp[1]` 是 1 号员工，以此类推。

JavaScript 中没有明确的数组数据类型。但是，你可以使用预定义的 `Array` 对象及其方法来处理应用程序中的数组。`Array` 对象具有以各种方式操作数组的方法，例如连接、反转和排序。它有一个用于确定数组长度的属性和用于正则表达式的其他属性。

在这篇文章中，我们将专注于数组，但许多相同的概念也适用于类型化数组，因为数组和类型化数组共享许多类似的方法。关于类型化数组的更多信息，请参见[类型化数组参考](/zh-CN/docs/Web/JavaScript/Typed_arrays)。

## 创建数组

以下语句创建了等效的数组：

```js
const arr1 = new Array(element0, element1, /* … ,*/ elementN);
const arr2 = Array(element0, element1, /* … ,*/ elementN);
const arr3 = [element0, element1, /* … ,*/ elementN];
```

`element0, element1, …, elementN` 是数组元素的值列表。当指定这些值时，数组将用它们作为数组的元素初始化。数组的 `length` 属性被设置为参数的数量。

括号语法称为“数组字面量”或“数组初始化式”。它比其他形式的数组创建更短，因此通常是首选。详见[数组字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数组字面量_array_literals)。

为了创建一个长度不为 0，但是又没有任何元素的数组，可选以下任何一种方式：

```js
// 这种方式...
const arr1 = new Array(arrayLength);

// ...与这种方式会形成相同数组
const arr2 = Array(arrayLength);

// 这个效果也一样
const arr3 = [];
arr3.length = arrayLength;
```

> **备注：** 以上代码，`arrayLength` 必须为一个 `Number`。否则，将会创建一个只有单个元素（内含提供的值）的数组。调用 `arr.length` 会返回 `arrayLength`，但数组不包含任何元素。{{jsxref("Statements/for...in","for...in")}} 循环在数组上找不到任何属性。

除了上面所示的新定义的变量外，数组还可以被赋值为新对象或现有对象的属性：

```js
const obj = {};
// …
obj.prop = [element0, element1, /* … ,*/ elementN];

// 或
const obj = { prop: [element0, element1, /* … ,*/ elementN] };
```

如果你希望用单个元素初始化一个数组，而这个元素恰好又是 `Number`，那么你必须使用括号语法。当单个 `Number` 传递给 `Array()` 构造函数时，将会被解释为 `arrayLength`，并非单个元素。

```js
// 创建一个只有唯一元素的数组：数字 42。
const arr = [42];

// 创建一个没有元素的数组，且数组的长度被设置成 42。
const arr = Array(42);

// 上面的代码与下面的代码等价：
const arr = [];
arr.length = 42;
```

如果 `N` 不是一个整数，调用 `Array(N)` 将会报 `RangeError` 错误，下面的例子说明了这种行为：

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

如果你需要创建任意类型的单元素数组，安全的方式是使用数组字面量。或者在向数组添加单个元素之前先创建一个空的数组。

你也可以使用 {{jsxref("Array.of")}} 静态方法来创建包含单个元素的数组。

```js
const wisenArray = Array.of(9.3); // wisenArray 只包含一个元素：9.3
```

## 引用数组元素

因为元素也是属性，你可以使用[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)来访问。假设你定义了以下数组：

```js
const myArray = ["Wind", "Rain", "Fire"];
```

你可以将数组的第一个元素引用为 `myArray[0]`，将数组的第二个元素引用为 `myArray[1]`，等等...元素的索引从零开始。

> **备注：** 你也可以使用[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)来访问数组的其他属性，就像对象一样。
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## 填充数组

你可以通过给数组元素赋值来填充数组，例如：

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> **备注：** 如果你在以上代码中给数组运算符的是一个非整型数值，那么它将作为一个表示数组的对象的属性创建，而不是数组的元素。
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

你也可以在创建数组的时候去填充它：

```js
const myArray = new Array("Hello", myVar, 3.14159);
// 或
const myArray = ["Mango", "Apple", "Orange"];
```

### 理解 length

在实现层面，JavaScript 实际上是将元素作为标准的对象属性来存储，把数组索引作为属性名。

`length` 属性是特殊的，如果存在最后一个元素，则其值总是大于其索引的正整数（在下面的示例中，`'Dusty'` 的索引是 `30`，所以 `cats.length` 返回 `30 + 1`）。

记住，JavaScript 数组索引是基于 0 的：它们从 `0` 开始，而不是 `1`。这意味着 `length` 属性将比最大的索引值大 1：

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

你也可以给 `length` 属性赋值。

写一个小于数组元素数量的值将截断数组，写 `0` 会彻底清空数组：

```js
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy 已经被移除了

cats.length = 0;
console.log(cats); // 输出 []，猫名称的数组现在已经空了

cats.length = 3;
console.log(cats); // 输出 [ <3 empty items> ]
```

### 遍历数组

一种常见的操作是遍历数组的值，以某种方式处理每个值。最简单的方法如下：

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

如果你确定数组中没有一个元素求值为 `false`（例如，如果你的数组只包含 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 节点），你可以选择一个更高效的土法子：

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* 以某种方式处理 div */
}
```

这避免了检查数组长度的开销，并确保 `div` 变量在每次循环时都被重新赋值给当前项，从而增加了便利性。

[`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法提供了遍历数组元素的其他方法：

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

传递给 `forEach` 的函数对数组中的每个元素执行一次，数组元素作为参数传递给该函数。未赋值的值不会在 `forEach` 循环迭代。

注意，在数组定义时省略的元素不会在 `forEach` 遍历时被列出，但是手动赋值为 `undefined` 的元素是*会*被列出的：

```js
const sparseArray = ["first", "second", , "fourth"];

sparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] 是 undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// undefined
// fourth
```

由于 JavaScript 元素被保存为标准对象属性，因此不建议使用 {{jsxref("Statements/for...in","for...in")}} 循环遍历 JavaScript 数组，因为普通元素和所有可枚举属性都将被列出。

### 数组方法

{{jsxref("Array")}} 对象具有下列方法：

[`concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 方法连接两个或多个数组并返回一个新的数组。

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray 现在是 ["1", "2", "3", "a", "b", "c"]
```

[`join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法将数组中的所有元素连接成一个字符串。

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list 现在是 "Wind - Rain - Fire"
```

[`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 方法在数组末尾添加一个或多个元素，并返回数组操作后的 `length`。

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray 现在是 ["1", "2", "3"]
```

[`pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 方法从数组移出最后一个元素，并返回该元素。

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray 现在是 ["1", "2"]，last 为 "3"
```

[`shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 方法从数组移出第一个元素，并返回该元素。

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray 现在是 ["2", "3"]，first 为 "1"
```

[`unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) 方法在数组开头添加一个或多个元素，并返回数组的新长度。

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray 变成了 ["4", "5", "1", "2", "3"]
```

[`slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 方法从数组提取一个片段，并作为一个新数组返回。

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// 从索引 1 开始，提取所有的元素，直到索引 3 为止
```

[`at()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at) 方法返回数组中指定索引处的元素，如果索引超出范围，则返回 `undefined`。它主要用于从数组末尾访问元素的负下标。

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d"，myArray 的倒数第二个元素
```

[`splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 方法从数组移除一些元素，并（可选地）替换它们。它返回从数组中删除的元素。

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray 现在是 ["1", "a", "b", "c", "d", "5"]
// 本代码从 1 号索引开始（或元素“2”所在的位置），
// 移除 3 个元素，然后将后续元素插入到那个位置上。
```

[`reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 方法原地颠倒数组元素的顺序：第一个数组元素变为最后一个数组元素，最后一个数组元素变为第一个数组元素。它返回对数组的引用。

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// 将原数组颠倒，myArray = [ "3", "2", "1" ]
```

[`flat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 方法返回一个新数组，所有子数组元素递归地连接到其中，直到指定的深度。

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray 现在是 [1, 2, 3, 4]，因为子数组 [3, 4] 已被展平
```

[`sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法对数组的元素进行适当的排序，并返回对数组的引用。

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// 对数组排序，myArray = ["Fire", "Rain", "Wind"]
```

`sort()` 也可以接受回调函数来决定如何比较数组元素。使用两个参数调用回调函数，它们是来自数组的两个值。该函数比较这两个值并返回正数、负数或零，表示这两个值的顺序。例如，以下命令将根据字符串的最后一个字母对数组进行排序：

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // 负数 => a < b，a 在 b 之前
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // 正数 => a > b，a 在 b 之后
  }
  return 0; // 0 => a = b，a 和 b 保持原来的顺序
};
myArray.sort(sortFn);
// 对数组排序，myArray = ["Wind","Fire","Rain"]
```

- 如果 `a` 小于 `b`，返回 `-1`（或任何负数）
- 如果 `a` 大于 `b`，返回 `1`（或任何正数）
- 如果 `a` 和 `b` 相等，返回 `0`。

[`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 方法在数组中搜索 `searchElement` 并返回第一个匹配的索引。

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// 再试一次，这次从最后一次匹配之后开始
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, 因为找不到 'z'
```

[`lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 方法的工作原理类似于 `indexOf`，但这是从末尾开始，反向搜索。

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// 再试一次，这次从最后一次匹配之前开始
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

[`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法对数组中的每个元素执行 `callback` 并返回 `undefined`。

```js
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// 输出：
// a
// b
// c
```

接受回调的 `forEach` 方法（以及下面的其他方法）被称为*迭代方法*，因为它们以某种方式遍历整个数组。每个都接受第二个可选的参数 `thisArg`。如果提供，`thisArg` 将成为回调函数体中 `this` 关键字的值。如果没有提供，就像在明确的对象上下文之外被调用一样，当函数在严格模式下时，`this` 是 `undefined`，当函数在[非严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下时，`this` 将引用全局对象（[`window`](/zh-CN/docs/Web/API/Window)、[`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 等。）。

> **备注：** 上面介绍的 `sort()` 方法不是迭代方法，因为它的回调函数只用于比较，不能基于元素顺序以任何特定顺序调用。`sort()` 也不接受 `thisArg` 形参。

[`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法返回由每个数组元素上执行 `callback` 的返回值所组成的新数组。

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

[`flatMap()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) 方法先执行 `map()`，再执行深度为 1 的 `flat()`。

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

[`filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 方法返回一个新数组，其中包含 `callback` 返回 `true` 的元素。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

[`find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 方法返回 `callback` 返回 `true` 的第一个元素。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

[`findLast()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) 方法返回 `callback` 返回 `true` 的最后一个元素。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

[`findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 方法返回 `callback` 返回 `true` 的第一个元素的索引。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

[`findLastIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) 方法返回 `callback` 返回 `true` 的最后一个元素的索引。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

如果 `callback` 对数组中的每一个元素都返回 `true`，则 [`every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 方法返回 `true`。

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

如果 `callback` 对数组中至少一个元素返回 `true`，则 [`some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 方法返回 `true`。

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
```

[`reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 方法对数组中的每个值执行 `callback(accumulator, currentValue, currentIndex, Array)`，目的是将列表中的元素减少到单个值。`reduce` 函数返回 `callback` 函数返回的最终值。

如果指定了 `initialValue`，则调用 `callback`，并将 `initialValue` 作为第一个参数值，将数组中第一个元素的值作为第二个参数值。

如果*没有*指定 `initialValue`，那么 `callback` 的前两个参数值将是数组的第一个和第二个元素。之后的*每一次*调用，第一个参数的值将是前一个调用中返回的 `callback`，第二个参数的值将是数组中的下一个值。

如果 `callback` 需要访问正在处理的元素的索引，或者访问整个数组，它们可以作为可选参数。

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

[`reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 方法的工作原理类似于 `reduce()`，但从最后一个元素开始。

`reduce` 和 `reduceRight` 是迭代数组方法中最不被人熟知的两个函数。它们应该使用在那些需要把数组的元素两两递归处理，并最终计算成一个单一结果的算法。

## 稀疏数组

数组可以包含“空槽”，这与用值 `undefined` 填充的槽不一样。空槽可以通过以下方式之一创建：

```js
// Array 构造函数：
const a = Array(5); // [ <5 empty items> ]

// 数组字面量中的连续逗号：
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// 直接给大于 array.length 的索引设置值以形成空槽：
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// 通过直接设置 .length 拉长一个数组：
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// 删除一个元素：
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]
```

在某些操作中，空槽的行为就像它们被填入了 `undefined` 那样。

```js
const arr = [1, 2, , , 5]; // 创建一个稀疏数组

// 通过索引访问
console.log(arr[2]); // undefined

// For...of
for (const i of arr) {
  console.log(i);
}

// 输出：1 2 undefined undefined 5

// 展开运算
const another = [...arr]; // "another" 为 [ 1, 2, undefined, undefined, 5 ]
```

在其他方法，特别是数组迭代方法时，空槽是被跳过的。

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// 属性迭代
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// 输出：'0' '1' '4'
// 在对象中使用展开，使用属性枚举，而不是数组的迭代器
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

关于数组方法在稀疏数组中的行为的完整列表，请参见 [`Array` 参考页](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#数组方法与空槽)。

## 多维数组

数组是可以嵌套的，这就意味着一个数组可以作为一个元素被包含在另外一个数组里面。利用 JavaScript 数组的这个特性，可以创建多维数组。

以下代码创建了一个二维数组。

```js
const a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}
```

这个例子创建的数组拥有以下行数据：

```
Row 0: [0,0] [0,1] [0,2] [0,3]
Row 1: [1,0] [1,1] [1,2] [1,3]
Row 2: [2,0] [2,1] [2,2] [2,3]
Row 3: [3,0] [3,1] [3,2] [3,3]
```

## 使用数组存储其他属性

数组也可以像对象那样使用，以存储相关信息：

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

例如，当一个数组作为字符串和正则表达式的匹配结果时，该数组将会返回相关匹配信息的属性和元素。[`RegExp.prototype.exec()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/exec)、[`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 和 [`String.prototype.split()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 的返回值是一个数组。使用数组和正则表达式的的更多信息，参见[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。

## 使用类数组对象

一些 JavaScript 对象，如 [`document.getElementsByTagName()`](/zh-CN/docs/Web/API/Document/getElementsByTagName) 返回的 [`NodeList`](/zh-CN/docs/Web/API/NodeList) 或 {{jsxref("Functions/arguments","arguments")}} 等 JavaScript 对象，有与数组相似的行为，但它们并不共享数组的所有方法。`arguments` 对象提供了 {{jsxref("Global_Objects/Function/length","length")}} 属性，但没有实现如 [`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 等数组方法。

不能直接在类数组对象上调用数组方法。

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
```

但你可以通过 {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}} 间接调用它们。

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

数组原型方法也可以用于字符串，因为它们以类似于数组的方式提供对其中字符的顺序访问：

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
