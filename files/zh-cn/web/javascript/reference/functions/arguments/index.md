---
title: arguments 对象
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`arguments`** 是一个类数组对象，可在函数内部访问，其中包含传递给该函数的参数值。

{{InteractiveExample("JavaScript 演示：arguments 对象")}}

```js interactive-example
function func1(a, b, c) {
  console.log(arguments[0]);
  // 期望输出：1

  console.log(arguments[1]);
  // 期望输出：2

  console.log(arguments[2]);
  // 期望输出：3
}

func1(1, 2, 3);
```

## 描述

> [!NOTE]
> 现代代码优先推荐使用[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)语法。

`arguments` 对象是所有非[箭头](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)函数中都可用的局部变量。你可以使用 `arguments` 对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引 `0` 处。

例如，如果一个函数传递了三个参数，你可以使用如下方式引用他们：

```js
arguments[0]; // 第一个参数
arguments[1]; // 第二个参数
arguments[2]; // 第三个参数
```

`arguments` 对象适用于接收的参数数量超过其形式声明数量的函数，即[_可变参数函数_](https://zh.wikipedia.org/wiki/可變參數函數)，例如 {{jsxref("Math.min()")}}。此示例函数可接收任意数量的字符串参数，并返回其中最长的字符串：

```js
function longestString() {
  let longest = "";
  if (arguments.length === 0) {
    throw new TypeError("至少需要传递一个字符串");
  }
  for (const arg of arguments) {
    if (arg.length > longest.length) {
      longest = arg;
    }
  }
  return longest;
}
```

你可以使用 {{jsxref("Functions/arguments/length", "arguments.length")}} 来统计函数被调用时接收的参数数量。若需统计函数声明时接受的参数数量，请检查该函数的 {{jsxref("Function/length", "length")}} 属性。

### 通过索引赋值

每个参数索引也可以被设置或重新赋值：

```js
arguments[1] = "新值";
```

仅包含简单参数（即不含剩余参数、默认参数或解构参数）的非严格函数会将参数的新值与 `arguments` 对象同步，反之亦然：

```js
function func(a) {
  arguments[0] = 99; // 更新 arguments[0] 也会更新 a
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // 更新 a 也会更新 arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99
```

非严格函数若传递了[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[默认值](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)或[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)参数，不会将函数体中赋予参数的新值同步到 `arguments` 对象。相反，在具有复杂参数的非严格函数中，`arguments` 对象始终反映函数调用时传递的值。

```js
function funcWithDefault(a = 55) {
  arguments[0] = 99; // 更新 arguments[0] 不会更新 a
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // 更新 a 不会更新 arguments[0]
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// 未跟踪的默认参数
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
```

这是所有[严格模式函数](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#让_eval_和_arguments_变的简单)的共同行为，无论传递的参数类型如何。也就是说，在函数体内为参数赋新值永远不会影响 `arguments` 对象，同样地，为 `arguments` 索引赋新值也不会改变参数的值——即使函数仅包含简单参数也是如此。

> [!NOTE]
> 在接受剩余参数、默认参数或解构参数的函数定义主体中，不能使用 `"use strict";` 指令。这样做将抛出[语法错误](/zh-CN/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params)。

### arguments 是类数组对象

`arguments` 是一个类数组对象，这意味着它具有 {{jsxref("Functions/arguments/length", "length")}} 属性，且属性索引从零开始，但它不具备 {{jsxref("Array")}} 的内置方法，例如 {{jsxref("Array/forEach", "forEach()")}} 或 {{jsxref("Array/map", "map()")}}。不过，可通过以下方式将其转换为真正的 `Array`：使用 [`slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、{{jsxref("Array.from()")}} 或[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)。

```js
const args = Array.prototype.slice.call(arguments);
// 或
const args = Array.from(arguments);
// 或
const args = [...arguments];
```

对于常见用例，将其作为类数组对象使用已足够，因为它既[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)，又具备 `length` 属性及数字索引。例如，`Function.prototype.apply()` 方法接受类数组对象。

```js
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5)); // 3
```

## 属性

- {{jsxref("Functions/arguments/callee", "arguments.callee")}} {{deprecated_inline}}
  - : 指向参数所属的当前执行的函数。在严格模式中禁用。
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : 传递给函数的参数数量。
- [`arguments[Symbol.iterator]`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : 返回一个新的[数组迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)对象，该对象包含 `arguments` 中每个索引的值。

## 示例

### 定义连接字符串的函数

这个例子定义了一个函数来连接字符串。这个函数唯一的形式参数是一个字符串，其中包含用于分隔待连接项的分隔符。该函数定义如下：

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

你可以传递任意数量的参数到该函数，并使用每个参数作为列表中的项创建列表。

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### 定义创建 HTML 列表的函数

这个例子定义了一个函数通过一个字符串来创建 HTML 列表。这个函数唯一的形式参数是一个字符。当该参数为 `"u"` 时，创建一个[无序列表（项目列表）](/zh-CN/docs/Web/HTML/Reference/Elements/ul)；当该参数为 `"o"` 时，则创建一个[有序列表（编号列表）](/zh-CN/docs/Web/HTML/Reference/Elements/ol)。该函数定义如下：

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // 列表结束
  return html;
}
```

你可以传递任意数量的参数到该函数，并将每个参数作为一个项添加到指定类型的列表中。例如：

```js
list("u", "一", "二", "三");
// "<ul><li>一</li><li>二</li><li>三</li></ul>"
```

### typeof 与 arguments

{{jsxref("Operators/typeof", "typeof")}} 运算符对 `arguments` 返回 `object`：

```js
console.log(typeof arguments); // 'object'
```

通过索引 `arguments` 可确定各个参数的类型：

```js
console.log(typeof arguments[0]); // 返回第一个参数的类型
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)类型
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)
