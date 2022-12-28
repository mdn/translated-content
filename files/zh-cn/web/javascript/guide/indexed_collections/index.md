---
title: 索引集合类（Indexed collection）
slug: Web/JavaScript/Guide/Indexed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

本章介绍按索引值排序的数据集合。包括数组和类数组结构，如 {{jsxref("Array")}} 对象和 {{jsxref("TypedArray")}} 对象。

*数组*是由名称和索引引用的值构成的有序列表。

例如，考虑一个名为 `emp` 的数组，它包含按数字雇员编号索引的雇员姓名。所以 `emp[0]` 是第 0 位员工，`emp[1]` 是第 1 位员工，以此类推。

JavaScript 中没有明确的数组数据类型。但是，你可以使用预定义的 `Array` 对象及其方法来处理应用程序中的数组。`Array` 对象具有以各种方式操作数组的方法，例如连接、反转和排序。它有一个用于确定数组长度的属性和用于正则表达式的其他属性。

## 创建数组

以下语句创建了等效的数组：

```js
const arr1 = new Array(element0, element1, /* … ,*/ elementN);
const arr2 = Array(element0, element1, /* … ,*/ elementN);
const arr3 = [element0, element1, /* … ,*/ elementN];
```

`element0, element1, …, elementN` 是数组元素的值列表。当指定这些值时，数组将用它们作为数组的元素初始化。数组的 `length` 属性被设置为参数的数量。

括号语法称为“数组字面量”或“数组初始化式”。它比其他形式的数组创建更短，因此通常是首选。详见[数组字面量](zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数组字面量_array_literals)。

为了创建一个长度不为 0，但是又没有任何元素的数组，可选以下任何一种方式：

```js
// This...
const arr1 = new Array(arrayLength);

// ...results in the same array as this
const arr2 = Array(arrayLength);

// This has exactly the same effect
const arr3 = [];
arr3.length = arrayLength;
```

> **备注：** 以上代码，数组长度（`arrayLength`）必须为一个数字（`Number`）。否则，将会创建一个只有单个元素（提供的值）的数组。调用 `arr.length` 会返回数组长度，但数组不包含任何元素。{{jsxref("Statements/for...in","for...in")}} 循环在数组上找不到任何属性。

除了上面所示的新定义的变量外，数组还可以被赋值为新对象或现有对象的属性：

```js
const obj = {};
// …
obj.prop = [element0, element1, /* … ,*/ elementN];

// OR
const obj = { prop: [element0, element1, /* … ,*/ elementN] };
```

如果你希望用单个元素初始化一个数组，而这个元素恰好又是数字（`Number`），那么你必须使用括号语法。当单个的数字（`Number`）传递给 `Array()` 构造函数时，将会被解释为 `arrayLength`，并非单个元素。

```js
// 创建一个只有唯一元素的数组：the number 42.
const arr = [42];

// 创建一个没有元素的数组，但是数组的长度被设置成 42.
const arr = Array(42);

// 上面的代码与下面的代码等价
const arr = [];
arr.length = 42;
```

如果 `N` 不是一个整数，调用 `Array(N)` 将会报 `RangeError` 错误，下面的例子说明了这种行为：

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

如果你需要创建任意类型的单元素数组，安全的方式是使用字面值。或者在向数组添加单个元素之前先创建一个空的数组。

你也可以使用 {{jsxref("Array.of")}} 静态方法来创建包含单个元素的数组。

```js
const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
```

## 引用数组元素

因为元素也是属性，你可以使用[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)来访问。假设你定义了以下数组：

```js
const myArray = ['Wind', 'Rain', 'Fire'];
```

你可以将数组的第一个元素引用为 `myArray[0]`，将数组的第二个元素引用为 `myArray[1]`，等等...元素的索引从零开始。

> **备注：** 你也可以使用[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)来访问数组的其他属性，比如对象。
>
> ```js
> const arr = ['one', 'two', 'three'];
> arr[2]          // three
> arr['length']   // 3
> ```

## 填充数组

你可以通过给数组元素赋值来填充数组，例如：

```js
const emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';
```

> **备注：** 如果你在以上代码中给数组操作符的是一个非整形数值，那么将作为一个表示数组的对象的属性 (property) 创建，而不是数组的元素。
>
> ```js
> const arr = [];
> arr[3.4] = 'Oranges';
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

你也可以在创建数组的时候去填充它：

```js
const myArray = new Array('Hello', myVar, 3.14159);
// OR
const myArray = ['Mango', 'Apple', 'Orange'];
```

### 理解 length

在实施层面，JavaScript 实际上是将元素作为标准的对象属性来存储，把数组索引作为属性名。

`length` 属性是特殊的，如果存在最后一个元素，则其值总是大于其索引的正整数（在下面的例子中，`'Dusty'` 的索引是 `30`，所以 `cats.length` 返回 `30 + 1`）。

记住，JavaScript 数组索引是基于 0 的：他们从 `0` 开始，而不是 `1`。这意味着 `length` 属性将比最大的索引值大 1：

```js
const cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31
```

你也可以给 `length` 属性赋值。

写一个小于数组元素数量的值将截断数组，写 `0` 会彻底清空数组：

```js
const cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]
```

### 遍历数组

一种常见的操作是遍历数组的值，以某种方式处理每个值。最简单的方法如下：

```js
const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

如果你确定数组中没有一个元素的求值是 `false` —— 如果你的数组只包含 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 节点，如下，你可以选择一个更高效的土法子：

```js
const divs = document.getElementsByTagName('div');
for (let i = 0, div; div = divs[i]; i++) {
  /* Process div in some way */
}
```

这避免了检查数组长度的开销，并确保 `div` 变量在每次循环时都被重新赋值给当前项，从而增加了便利性。

[`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法提供了遍历数组元素的其他方法：

```js
const colors = ['red', 'green', 'blue'];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

传递给 `forEach` 的函数对数组中的每个元素执行一次，数组元素作为参数传递给该函数。未赋值的值不会在 `forEach` 循环迭代。

注意，在数组定义时省略的元素不会在 `forEach` 遍历时被列出，但是手动赋值为 `undefined` 的元素是会被列出的：

```js
const sparseArray = ['first', 'second', , 'fourth'];

sparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log('sparseArray[2] is undefined');  // true
}

const nonsparseArray = ['first', 'second', undefined, 'fourth'];

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
let myArray = ['1', '2', '3'];
myArray = myArray.concat('a', 'b', 'c');
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

[`join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法将数组中的所有元素连接成一个字符串。

```js
const myArray = ['Wind', 'Rain', 'Fire'];
const list = myArray.join(' - '); // list is "Wind - Rain - Fire"
```

[`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 方法在数组末尾添加一个或多个元素，并返回数组操作后的 `length`。

```js
const myArray = ['1', '2'];
myArray.push('3'); // myArray is now ["1", "2", "3"
```

[`pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 方法从数组移出最后一个元素，并返回该元素。

```js
const myArray = ['1', '2', '3'];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

[`shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 方法从数组移出第一个元素，并返回该元素。

```js
const myArray = ['1', '2', '3'];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

[`unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) 方法在数组开头添加一个或多个元素，并返回数组的新长度。

```js
const myArray = ['1', '2', '3'];
myArray.unshift('4', '5');
// myArray becomes ["4", "5", "1", "2", "3"]
```

[`slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 方法从数组提取一个片段，并作为一个新数组返回。

```js
let myArray = ['a', 'b', 'c', 'd', 'e'];
myArray = myArray.slice(1, 4); // 包含索引 1，不包括索引 4
                               // returning [ "b", "c", "d"]
```

[`at()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at) 方法返回数组中指定索引处的元素，如果索引超出范围，则返回 `undefined`。它主要用于从数组末尾访问元素的负下标。

```js
const myArray = ['a', 'b', 'c', 'd', 'e'];
myArray.at(-2); // "d", the second-last element of myArray
```

[`splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 方法从数组移出一些元素，并（可选地）替换它们。它返回从数组中删除的元素。

```js
const myArray = ['1', '2', '3', '4', '5'];
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

[`reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 方法颠倒数组元素的顺序：第一个数组元素变为最后一个数组元素，最后一个数组元素变为第一个数组元素。它返回对数组的引用。

```js
const myArray = ['1', '2', '3'];
myArray.reverse();
// transposes the array so that myArray = [ "3", "2", "1" ]
```

[`flat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 方法返回一个新数组，所有子数组元素递归地连接到其中，直到指定的深度。

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

[`sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法对数组的元素进行适当的排序，并返回对数组的引用。

```js
const myArray = ['Wind', 'Rain', 'Fire'];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` 也可以接受回调函数来决定如何比较数组元素。使用两个参数调用回调函数，它们是来自数组的两个值。该函数比较这两个值并返回正数、负数或零，表示这两个值的顺序。例如，以下命令将根据字符串的最后一个字母对数组进行排序：

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // Negative number => a < b, a comes before b
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // Positive number => a > b, a comes after b
  }
  return 0; // Zero => a = b, a and b keep their original order
}
myArray.sort(sortFn);
// sorts the array so that myArray = ["Wind","Fire","Rain"]
```

- 如果 `a` 小于 `b`，返回 `-1`（或任何负数）
- 如果 `a` 大于 `b`，返回 `1`（或任何正数）
- 如果 `a` 和 `b` 相等，返回 `0`。

[`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 方法在数组中搜索 `searchElement` 并返回第一个匹配的索引。

```js
const a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // 1

// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // 3
console.log(a.indexOf('z')); // -1, because 'z' was not found
```

[`lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 方法的工作原理类似于 `indexOf`，但这是从末尾开始，反向搜索。

```js
const a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // 1
console.log(a.lastIndexOf('z')); // -1
```

[`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法对数组中的每个元素执行 `callback` 并返回 `undefined`。

```js
const a = ['a', 'b', 'c'];
a.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c
```

接受回调的 `forEach` 方法（以及下面的其他方法）被称为*迭代方法*，因为它们以某种方式遍历整个数组。每个都接受第二个可选的参数 `thisArg`。如果提供，`thisArg` 将成为回调函数体中 `this` 关键字的值。如果没有提供，就像在明确的对象上下文之外被调用一样，当函数在严格模式下时，`this` 是 `undefined`，当函数在[非严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下时，`this` 将引用全局对象（[`window`](/zh-CN/docs/Web/API/Window)、[`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 等。）。

> **备注：** 上面介绍的 `sort()` 方法不是迭代方法，因为它的回调函数只用于比较，不能基于元素顺序以任何特定顺序调用。`sort()` 也不接受 `thisArg` 形参。

[`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法返回由每个数组元素上执行 `callback` 的返回值所组成的新数组。

```js
const a1 = ['a', 'b', 'c'];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

[`flatMap()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) 方法先执行 `map()`，再执行深度为 1 的 `flat()`。

```js
const a1 = ['a', 'b', 'c'];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

[`filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 方法返回一个新数组，其中包含 `callback` 返回 `true` 的元素。

```js
const a1 = ['a', 10, 'b', 20, 'c', 30];
const a2 = a1.filter((item) => typeof item === 'number');
console.log(a2); // [10, 20, 30]
```

[`find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 方法返回 `callback` 返回 `true` 的第一个元素。

```js
const a1 = ['a', 10, 'b', 20, 'c', 30];
const i = a1.find((item) => typeof item === 'number');
console.log(i); // 10
```

[`findLast()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) 方法返回 `callback` 返回 `true` 的最后一个元素。

```js
const a1 = ['a', 10, 'b', 20, 'c', 30];
const i = a1.findLast((item) => typeof item === 'number');
console.log(i); // 30
```

[`findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 方法返回 `callback` 返回 `true` 的第一个元素的索引。

```js
const a1 = ['a', 10, 'b', 20, 'c', 30];
const i = a1.findIndex((item) => typeof item === 'number');
console.log(i); // 1
```

[`findLastIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) 方法返回 `callback` 返回 `true` 的最后一个元素的索引。

```js
const a1 = ['a', 10, 'b', 20, 'c', 30];
const i = a1.findLastIndex((item) => typeof item === 'number');
console.log(i); // 5
```

如果 `callback` 对数组中的每一个元素都返回 `true`，则 [`every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 方法返回 `true`。

```js
function isNumber(value) {
  return typeof value === 'number';
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // false
```

如果 `callback` 对数组中至少一个元素返回 `true`，则 [`some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 方法返回 `true`。

```js
function isNumber(value) {
  return typeof value === 'number';
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // true
const a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // false
```

[`reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 方法对数组中的每个值执行 `callback(accumulator, currentValue, currentIndex, Array)`，目的是将列表中的元素减少到单个值。`reduce` 函数返回 `callback` 函数返回的最终值。

如果指定了 `initialValue`，则调用 `callback`，并将 `initialValue` 作为第一个参数值，将数组中第一个元素的值作为第二个参数值。

如果*没有*指定 `initialValue`，那么 `callback` 的前两个参数值将是数组的第一个和第二个元素。之后的*每一次*调用，第一个参数的值将是前一个调用中返回的 `callback`，第二个参数的值将是数组中的下一个值。

如果 `callback` 需要访问正在处理的元素的索引，或者访问整个数组，它们可以作为可选参数。

```js
const a = [10, 20, 30];
const total = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // 60
```

[`reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 方法的工作原理类似于 `reduce()`，但这从最后一个元素开始的。

`reduce` 和 `reduceRight` 是迭代数组方法中最不被人熟知的两个函数。它们应该使用在那些需要把数组的元素两两递归处理，并最终计算成一个单一结果的算法。

### 多维数组

数组是可以嵌套的，这就意味着一个数组可以作为一个元素被包含在另外一个数组里面。利用 JavaScript 数组的这个特性，可以创建多维数组。

以下代码创建了一个二维数组。

```js
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}
```

这个例子创建的数组拥有以下行数据：

```plain
Row 0: [0,0] [0,1] [0,2] [0,3]
Row 1: [1,0] [1,1] [1,2] [1,3]
Row 2: [2,0] [2,1] [2,2] [2,3]
Row 3: [3,0] [3,1] [3,2] [3,3]
```

### 数组和正则表达式

当一个数组作为字符串和正则表达式的匹配结果时，该数组将会返回相关匹配信息的属性和元素。 [`RegExp.exec()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/exec), `String.match()` 和 `String.split()` 的返回值是一个数组。使用数组和正则表达式的的更多信息，请看 [Regular Expressions](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions).

### 使用类数组对象 (array-like objects)

一些 JavaScript 对象，例如 {{domxref("document.getElementsByTagName()")}} 返回的 {{domxref("NodeList")}} 或者函数内部可用的 [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 对象，他们表面上看起来，外观和行为像数组，但是不共享他们所有的方法。例如 `arguments` 对象就提供一个 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 属性，但是不实现 {{jsxref("Array.forEach", "forEach()")}} 方法。

Array 的原生 (prototype) 方法可以用来处理类似数组行为的对象，例如： :

```js
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
```

Array 的常规方法也可以用于处理字符串，因为它提供了序列访问字符转为数组的简单方法：

```js
Array.prototype.forEach.call("a string", function(chr) {
  console.log(chr);
});
```

## 数组推导式（Array comprehensions）

在[JavaScript 1.7](/zh-CN/docs/Web/JavaScript/New_in_JavaScript/1.7) 被介绍并计划在 [ECMAScript 7](/zh-CN/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_7_support_in_Mozilla), [array comprehensions](/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions) 被规范化并提供一个有用的快捷方式，用来实现如何在另一个数组的基础上构造一个新的数组。推导式可以经常被用在那些需要调用 `map()` 和 `filter() 函数的地方，`或作为一种结合这两种方式。

下面的推导式创建一个数字数组并且创建一个新的数组，数组的每个元素都是原来数值的两倍（译者注：这种形式类似于 Python 的列表推导式）。

```js
var numbers = [1, 2, 3, 4];
var doubled = [for (i of numbers) i * 2];
console.log(doubled); // logs 2,4,6,8
```

这跟下面的 map() 方法的操作是等价的。

```js
var doubled = numbers.map(function(i){return i * 2;});
```

推导式也可以用来筛选满足条件表达式的元素。下面的推导式用来筛选是 2 的倍数的元素：

```js
var numbers = [1, 2, 3, 21, 22, 30];
var evens = [i for (i of numbers) if (i % 2 === 0)];
console.log(evens); // logs 2,22,30
```

`filter()` 也可以达到相同的目的：

```js
var evens = numbers.filter(function(i){return i % 2 === 0;});
```

`map()` 和 `filter()` 类型的操作可以被组合（等效）为单个数组推导式。这里就有一个过滤出偶数，创建一个它的倍数数组的例子：

```js
var numbers = [1, 2, 3, 21, 22, 30];
var doubledEvens = [i * 2 for (i of numbers) if (i % 2 === 0)];
console.log(doubledEvens); // logs 4,44,60
```

数组推导式隐含了块作用域。新的变量 (如例子中的 i) 类似于是采用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)声明的。这意味着他们不能在推导式以外访问。

数组推导式的输入不一定必须是数组; [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators) 也是可以的。

甚至字符串也可以用来作为输入; 实现 filter 或者 map 行为 (参考上面类似数组行为的对象) 如下：

```js
var str = 'abcdef';
var consonantsOnlyStr = [c for (c of str) if (!(/[aeiouAEIOU]/).test(c))  ].join(''); // 'bcdf'
var interpolatedZeros = [c+'0' for (c of str) ].join(''); // 'a0b0c0d0e0f0'
```

不过，输入形式是不能保存的，所以我们要使用 join() 回复到一个字符串。

## 类型化数组 (Typed Arrays )

[JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays) 是类数组对象（array-like object），其提供访问原始二进制数据的机制。就像你知道的那样，{{jsxref("Array")}} 对象动态增长和收缩，可以有任何 JavaScript 值。但对于类型化数组，JavaScript 引擎执行优化使得这些数组访问速度快速。随着 Web 应用程序变得越来越强大，添加音频和视频处理等功能、可以使用 [WebSockets](/zh-CN/docs/WebSockets) 、使用原始数据，这都需要访问原始的二进制数据，所以专门的优化将有助于 JavaScript 代码能够快速和容易地操纵原始二进制数据类型的数组。

### 缓冲区和视图：类型化的数组结构

为了实现最大的灵活性和效率，JavaScript 类型数组被分解为缓冲 (Buffer) 和视图 (views)。缓冲 (由{{jsxref("ArrayBuffer")}} 实现) 是代表数据块的对象，它没有格式可言，并没有提供任何机制来访问其内容。为了访问包含在缓冲区中的内存，您需要使用视图。视图提供了一个上下文，即数据类型、起始偏移量和元素数，这些元素将数据转换为实际类型数组。

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}}是一种数据类型，用于表示一个通用的、固定长度的二进制数据缓冲区。你不能直接操纵一个 ArrayBuffer 中的内容；你需要创建一个数组类型视图或{{jsxref("DataView")}}来代表特定格式的缓冲区，并从而实现读写缓冲区的内容。

## 使用类数组对象

如 [`document.getElementsByTagName()`](/zh-CN/docs/Web/API/Document/getElementsByTagName) 返回的 [`NodeList`](/zh-CN/docs/Web/API/NodeList) 或 {{jsxref("Functions/arguments","arguments")}} 等 JavaScript 对象，有与数组相似的行为，但它们并不共享数组的所有方法。`arguments` 对象提供了 {{jsxref("Global_Objects/Function/length","length")}} 属性，但没有实现如 [`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 等数组方法。

不能直接在类数组对象上调用数组方法。

```js example-bad
function printArguments() {
  arguments.forEach((item) => { // TypeError: arguments.forEach is not a function
    console.log(item);
  });
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
Array.prototype.forEach.call('a string', (chr) => {
  console.log(chr)
})
```

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
