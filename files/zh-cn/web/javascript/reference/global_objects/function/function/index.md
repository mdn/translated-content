---
title: Function() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
---

{{JSRef}}

**`Function()`** 构造函数创建了一个新的 [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 对象。直接调用构造函数可以动态创建函数，但可能会经受一些安全和类似于 {{jsxref("Global_Objects/eval", "eval()")}}（但远不重要）的性能问题。然而，不像 `eval`（可能访问到本地作用域），`Function` 构造函数只创建全局执行的函数。

{{EmbedInteractiveExample("pages/js/function-constructor.html", "shorter")}}

## 语法

```js-nolint
new Function(functionBody)
new Function(arg0, functionBody)
new Function(arg0, arg1, functionBody)
new Function(arg0, arg1, /* … ,*/ argN, functionBody)

Function(functionBody)
Function(arg0, functionBody)
Function(arg0, arg1, functionBody)
Function(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **备注：调用 ** `Function()` 时可以使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)。两者都会创建一个新的 `Function` 实例。

### 参数

- `argN` {{optional_inline}}

  - : 被函数用作形参的名称。每一个必须是字符串，对应于一个有效的 JavaScript 参数（任何一个普通的[标识符](/zh-CN/docs/Glossary/Identifier)、[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)或[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)参数，可选择使用[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)），或用逗号分隔的此类字符串的列表。

    由于参数的解析方式与函数表达式的解析方式相同，所以接受空白和注释。例如：`"x", "theValue = 42", "[a, b] /* numbers */"` 或 `"x, theValue = 42, [a, b] /* numbers */"`。（`"x, theValue = 42", "[a, b]"` 也是正确的，虽然有些难以阅读。）

- `functionBody`
  - : 一个包含构成函数定义的 JavaScript 语句的字符串。

## 描述

使用 `Function` 构造函数创建的 `Function` 对象会在函数创建时完成解析。这比用[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)或[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)创建一个函数并在代码中调用它的效率要低，因为使用表达式或声明创建的函数会和其他的代码一起被解析。

传递给函数的所有参数，除了最后一个，都被当作要创建的函数中参数的标识符的名称，按照它们被传递的顺序进行处理。该函数将被动态编译为一个函数表达式，其源代码以下列方式组装：

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

这可以通过调用函数的 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) 方法来观察。

然而，与普通的[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)不同，`anonymous` 这个名字不会被添加到 `functionBody` 的作用域中，因为 `functionBody` 只能访问全局作用域。如果 `functionBody` 不在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中（主体本身需要有 `"use strict"` 指令，因为它不从上下文中继承严格性），你可以使用 [`arguments.callee`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee) 来指代函数本身。另外，你可以将递归部分定义为一个内部函数：

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

请注意，集合源的两个动态部分——参数列表 `args.join(",")` 和 `functionBody` 将首先被分别解析，以确保它们在语法上都是有效的。这可以防止类似注入的尝试。

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// 不会变成 "function anonymous(/*) {*/) {}"
```

## 示例

### 与 Function 构造函数一同指定参数

以下代码创建了一个接受两个参数的 `Function` 对象。

```js
// 此示例可在你的 JavaScript 控制台下运行

// 创建一个接受两个参数的函数，并返回这些参数的和
const adder = new Function("a", "b", "return a + b");

// 调用函数
adder(2, 6);
// 8
```

参数 `a` 和 `b` 是在函数体 `return a + b` 中使用的正式参数名称。

### 从函数声明或函数表达式创建一个函数对象

```js
// 函数构造器可以接受多个分号分隔的语句。Function 表达式需要带有函数的返回语句

// 观察一下，new Function 被调用了。这样我们就可以在事后直接调用我们创建的函数了
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// 调用函数
sumOfArray([1, 2, 3, 4]);
// 10

// 如果你不在创建函数时调用 new Function，你可以使用 Function.call() 方法来调用它
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);
// 调用函数
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// 函数声明不需要返回语句
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// 调用函数
sayHello("world");
// Hello, world
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`function` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "函数", "", 1)}}
