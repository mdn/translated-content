---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Statements")}}

**`for...of`** 语句执行一个循环，该循环处理来自[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)的值序列。可迭代对象包括内置对象的实例，例如 {{jsxref("Array")}}、{{jsxref("String")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、{{domxref("NodeList")}}（以及其他 DOM 集合），还包括 {{jsxref("Functions/arguments", "arguments")}} 对象、由[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)生成的[生成器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)，以及用户定义的可迭代对象。

{{InteractiveExample("JavaScript Demo: Statement - For...Of")}}

```js interactive-example
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## 语法

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : 每次迭代时从序列接收一个值。可以是用 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)、[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 声明的变量，也可以是[赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)目标（例如之前声明的变量、对象属性或[解构赋值模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)）。使用 `var` 声明的变量不会局限于循环内部，即它们与 `for...of` 循环所在的作用域相同。
- `iterable`
  - : 可迭代对象。循环操作的序列值的来源。
- `statement`
  - : 每次迭代后执行的语句。可以引用 `variable`。可以使用[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)来执行多个语句。

## 描述

`for...of` 循环按顺序逐个处理从可迭代对象获取的值。循环对值的每次操作被称为一次*迭代*，而循环本身被称为*迭代可迭代对象*。每次迭代都会执行可能引用当前序列值的语句。

当 `for...of` 循环迭代一个可迭代对象时，它首先调用可迭代对象的 [`Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 方法，该方法返回一个[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)，然后重复调用生成器的 [`next()`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议) 方法，以生成要分配给 `variable` 的值的序列。

`for...of` 循环在迭代器完成时退出（即迭代器的 `next()` 方法返回一个包含 `done: true` 的对象）。你也可以使用控制流语句来改变正常的控制流程。[`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break) 语句退出循环并跳转到循环体后的第一条语句，而 [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue) 语句跳过当前迭代的剩余语句，继续进行下一次迭代。

如果 `for...of` 循环提前退出（例如遇到 `break` 语句或抛出错误），则会调用迭代器的 [`return()`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议) 方法来执行任何清理任务。

`for...of` 的 `variable` 部分可以接受任何在 `=` 运算符之前的内容。只要在循环体内部不重新赋值（可以在迭代之间更改，因为它们是两个独立的变量），你可以使用 {{jsxref("Statements/const", "const")}} 来声明变量。否则，你可以使用 {{jsxref("Statements/let", "let")}}。

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> 每次迭代都会创建一个新的变量。在循环体内部重新赋值变量不会影响可迭代对象（在本例中，是一个数组）的原始值。

你可以使用[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)来分配多个局部变量，或者使用属性访问器（如 `for (x.y of iterable)`）来给对象属性赋值。

然而，有一条特别的规则禁止使用 `async` 作为变量名。这是无效语法：

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

这是为了避免与有效代码 `for (async of => {};;)` 出现语法歧义，该代码是一个 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环。

## 示例

### 迭代数组

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### 迭代字符串

字符串将会按 [Unicode 码位](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)迭代。

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### 迭代类型化数组

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### 迭代 Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代 Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代参数对象

你可以迭代 {{jsxref("Functions/arguments", "arguments")}} 对象来检查传递给函数的所有参数。

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### 迭代 NodeList

下面的示例通过迭代一个 [`NodeList`](/zh-CN/docs/Web/API/NodeList) DOM 集合，为直接位于 [`<article>`](/zh-CN/docs/Web/HTML/Element/article) 元素下的段落添加一个 `read` 类。

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### 迭代用户定义的可迭代对象

迭代带有返回自定义迭代器的 `[Symbol.iterator]()` 方法的对象：

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

迭代带有 `[Symbol.iterator]()` 生成器方法的对象：

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

_可迭代迭代器_（带有返回 `this` 的 `[Symbol.iterator]()` 方法的迭代器）是一种相当常见的技术，用来使迭代器在期望可迭代对象的语法中使用，例如 `for...of`。

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 迭代生成器

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 提前退出

在第一个循环中执行 `break` 语句会导致循环提前退出。迭代器尚未完成，因此第二个循环将从第一个循环停止的地方继续执行。

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("这个字符串不会被输出。");
}
// 1

// 另一个使用相同迭代器的循环从上一个循环中断的地方继续。
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// 迭代器已用完。该循环不会执行任何迭代。
for (const value of iterator) {
  console.log(value);
}
// [没有输出]
```

生成器实现了 [`return()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) 方法，当循环退出时，该方法会使生成器函数提前返回。这使得生成器在循环之间不可重复使用。

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("这个字符串不会被输出。");
}
// 1

// 生成器已用完。该循环不会执行任何迭代。
for (const value of generator) {
  console.log(value);
}
// [没有输出]
```

### `for...of` 与 `for...in` 之间的区别

`for...in` 和 `for...of` 语句都用于迭代某个内容，它们之间的主要区别在于迭代的对象。

{{jsxref("Statements/for...in", "for...in")}} 语句用于迭代对象的[可枚举字符串属性](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)，而 `for...of` 语句用于迭代[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)定义的要进行迭代的值。

下面的示例展示了在迭代 {{jsxref("Array")}} 时，`for...of` 循环和 `for...in` 循环之间的区别。

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0"、"1"、"2"、"foo"、"arrCustom"、"objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

`iterable` 对象继承了 `objCustom` 和 `arrCustom` 属性，因为其[原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)中同时包含了 `Object.prototype` 和 `Array.prototype`。

`for...in` 循环仅打印了 `iterable` 对象的[可枚举属性](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。它不会打印数组中的*元素* `3`、`5`、`7` 或 `"hello"`，因为它们不是*属性*，而是*值*。它打印了数组的*索引*以及 `arrCustom` 和 `objCustom`，它们是实际的属性。如果你对为什么迭代这些属性感到困惑，可以查看关于[数组迭代和 `for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in#数组迭代和_for...in) 工作原理的更详细解释。

第二个循环与第一个循环类似，但它使用 {{jsxref("Object.hasOwn()")}} 来检查找到的可枚举属性是否为对象的自有属性，即非继承属性。如果是，则打印该属性。属性 `0`、`1`、`2` 和 `foo` 被打印，因为它们是自有属性。属性 `arrCustom` 和 `objCustom` 没有被打印，因为它们是继承属性。

`for...of` 循环迭代并打印 `iterable` 按照数组（数组是[可迭代的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)）定义要进行迭代的*值*。对象的*元素* `3`、`5`、`7` 被打印，但对象的*属性*没有被打印。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
