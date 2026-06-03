---
title: 剩余参数
slug: Web/JavaScript/Reference/Functions/rest_parameters
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**剩余参数**语法允许函数将任意数量的参数作为数组接收，从而在 JavaScript 中实现了[可变参数函数](https://zh.wikipedia.org/wiki/可變參數函數)的表示方式。

{{InteractiveExample("JavaScript 演示：剩余参数", "taller")}}

```js interactive-example
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// 期望输出：6

console.log(sum(1, 2, 3, 4));
// 期望输出：10
```

## 语法

```js-nolint
function f(a, b, ...theArgs) {
  // …
}
```

有一些额外的语法限制：

- 一个函数定义只能包含一个剩余参数。
- 剩余参数必须是函数定义的最后一个参数。
- 剩余参数之后不允许出现[尾后逗号](/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)。
- 剩余参数不能有[默认值](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)。

## 描述

函数定义的最后一个参数可添加前缀 `...`（三个 U+002E FULL STOP 字符），这将导致所有剩余（用户提供的）参数被放入一个 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 对象中。

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// 控制台输出：
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

剩余参数可以进行[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)，这允许你忽略某些参数位置。

```js
function ignoreFirst(...[, b, c]) {
  return b + c;
}
```

然而，以下写法将导致语法错误：

```js-nolint example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}
```

剩余参数不会计入函数的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 属性。

### 剩余参数和 `arguments` 对象的区别

剩余参数和 {{jsxref("Functions/arguments", "arguments")}} 对象之间的区别主要有四个：

- `arguments` 对象不是**真正的数组**，而剩余参数是 {{jsxref("Array")}} 实例，也就是说你能够在它上面直接使用所有的数组方法，比如 {{jsxref("Array/sort", "sort()")}}、{{jsxref("Array/map", "map()")}}、{{jsxref("Array/forEach", "forEach()")}} 或 {{jsxref("Array/pop", "pop()")}}。
- `arguments` 对象还包含额外的（已弃用的）[`callee`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee) 属性。
- 在非严格模式且参数简单的函数中，`arguments` 对象会[将索引值与参数值同步](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments#通过索引赋值)。当具名参数被重新赋值时，剩余参数数组的值永远不会更新。
- 剩余参数将所有*额外*参数打包为单一数组，但不包含任何在 `...restParam` *之前*定义的具名参数。`arguments` 对象则包含所有参数（包括 `...restParam` 数组中的参数），这些参数被打包为类数组对象。

## 示例

### 使用剩余参数

在此示例中，第一个参数映射为 `a`，第二个映射为 `b`，因此这些命名参数可按常规方式使用。

然而，第三个参数 `manyMoreArgs` 将是一个数组，其中包含第三、第四、第五、第六……直至第 n 个参数——具体数量取决于用户指定的参数个数。

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- 一个数组
```

如下所示，即使只有一个值，最后一个参数仍会被放入数组中。

```js
// 使用上述示例中同样的函数定义

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- 具有一个值的数组
```

如下所示，即使没有提供第三个参数，`manyMoreArgs` 仍然是一个数组（尽管为空）。

```js
// 使用上述示例中同样的函数定义

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- 还是一个数组
```

如下所示，只提供了一个参数，所以 `b` 为默认值 `undeifned`，但是 `manyMoreArgs` 仍然是一个空数组。

```js
// 使用上述示例中同样的函数定义

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- 还是一个数组
```

### argument 长度

由于 `theArgs` 是数组，其元素数量可通过 {{jsxref("Array/length", "length")}} 属性获取。若函数的唯一参数为剩余参数，则 `restParams.length` 将等于 [`arguments.length`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/length)。

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### 普通参数与剩余参数结合使用

在下一个示例中，使用剩余参数将第一个参数之后的所有参数收集到一个数组中。随后将数组中收集到的每个参数值与第一个参数相乘，并返回该数组：

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### 从 arguments 到数组

{{jsxref("Array")}} 方法可以用于剩余参数，但不能用在 `arguments` 对象上：

```js
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs; // 永远不会返回
}

console.log(sortArguments(5, 3, 7, 1));
// 抛出 TypeError（arguments.sort is not a function）
```

剩余参数的引入旨在减少将一组参数转换为数组时常用的冗余代码。

在引入剩余参数之前，必须先将 `arguments` 转换为普通数组，才能对其调用数组方法：

```js
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — 或 —
  const normalArray2 = [].slice.call(arguments);
  // — 或 —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // 没问题，返回第一个参数
  const firstBad = arguments.shift(); // 报错，arguments 不是普通数组
}
```

现在，你可以轻松地使用剩余参数访问普通数组：

```js
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // 没问题，返回第一个参数
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [展开语法（`...`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array")}}
