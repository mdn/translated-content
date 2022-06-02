---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/var
---
{{jsSidebar("Statements")}}

**`var` 语句** 用于声明一个函数范围或全局范围的变量，并可将其初始化为一个值（可选）。

{{EmbedInteractiveExample("pages/js/statement-var.html")}}

## 语法

```js
var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
```

- `varnameN`
  - : 变量名。变量名可以定义为任何合法标识符。
- `valueN` {{optional_inline}}
  - : 变量的初始化值。该值可以是任何合法的表达式。默认值为 `undefined`。

另外，[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)语法也可用于变量声明。

```js
var { bar } = foo; // foo = { bar:10, baz:12 };
/* 创建一个名为 'bar' 的变量，其值为 10 */
```

## 描述

无论在何处声明变量，都会在执行任何代码之前进行处理。这被称为{{Glossary("Hoisting", "变量提升")}}，我们将在下面进一步讨论。

用 `var` 声明的变量的作用域是它当前的执行上下文及其闭包（嵌套函数），或者对于声明在任何函数外的变量来说是全局。使用 `var` 重复声明 JavaScript 变量并不会抛出错误（即使在严格模式 (strict mode) 下），同时，变量也不会丢失其值，直到调用其它的赋值操作。

```js
'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (函数 `bar` 包含了 `x`)
    console.log(y); // 2 (`y` 在作用域内)
  }
  bar();
  console.log(x); // 1 (`x` 在作用域内)
  console.log(y); // 在严格模式（strict mode）下将抛出 ReferenceError，`y` 仅在 `bar` 函数的作用域内
}

foo();
```

使用 `var` 声明的变量将在任何代码执行前被创建，这被称为变量提升。这些变量的初始值为 `undefined`。

```js
'use strict';
console.log(x);                // undefined (注意，不会抛出 ReferenceError)
console.log('still going...'); // still going...
var x = 1;
console.log(x);                // 1
console.log('still going...'); // still going...
```

在全局上下文中，使用 `var` 声明的变量将作为全局对象的**不可配置**属性被添加。这意味着它的属性描述符无法被修改，也无法使用 {{JSxRef("Operators/delete", "delete")}} 删除。其对应的名字也将被添加到 [全局环境记录（global environment record）](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-global-environment-records)（它构成了全局词法环境 (global lexical environment) 的一部分）的 `[[VarNames]]` 插槽内的列表中。`[[VarNames]]` 中的命名列表使运行时能够区分“全局变量”和“全局对象的直接属性”。

全局变量（以全局对象的属性的形式被创建）不可配置的原因是：该标识符被视为一个变量，而不是全局对象的**直接属性**。JavaScript 具有自动化的内存管理机制，因此“能够使用 `delete` 删除全局变量”是没有意义的。

```js
'use strict';
var x = 1;
globalThis.hasOwnProperty('x'); // true
delete globalThis.x; // 在严格模式下，将抛出 TypeError，否则静默失败（fail silently）。
delete x;  // 在严格模式下，将抛出 SyntaxError，否则静默失败。
```

注意，在 Node.js [CommonJS](http://www.commonjs.org/) modules 以及原生 [ECMAScript modules](/zh-CN/docs/Web/JavaScript/Guide/Modules) 中，顶层变量被声明在模块（module）的作用域内，而不是以属性的形式被添加到全局对象中。

### 未限定标识符的赋值

全局对象位于作用域链的顶部。在尝试将名称解析为值时，将沿着作用域链搜索该名称。这意味着，全局对象中的属性在所有作用域中均可见，而无需使用 `globalThis.`、`window.` 或 `global.` 来限定标识符。

所以你可以这样写：

```js
function foo() {
  String('s') // 注意，函数 `String` 是隐式可见的
}
```

这是因为：

```js
globalThis.hasOwnProperty('String') // true
```

所以在未限定标识符的情况下，最终也会在全局对象中搜索名称。你无需使用 `globalThis.String`，而只需使用 `String`。在非严格模式下，如果作用域链中没有声明同名的变量，则对未限定标识符的赋值将会在全局对象下创建同名属性（译者注：即作为全局变量被创建）。

```js
foo = 'f' // 在非严格模式下，假设你想在全局对象下创建名为 `foo` 的属性
globalThis.hasOwnProperty('foo') // true
```

在 ECMAScript 5 的[严格模式]((/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)) 下，此行为具有不同的表现。在严格模式下，对未限定的标识符赋值将抛出 `ReferenceError`，以避免意外创建全局对象属性。

注意，上面的说明意味着：与流行的错误信息相反，JavaScript 并没有隐式变量声明，它只是有一个类似的语法。

### 变量提升

由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。这意味着变量可以在声明之前使用，这个行为叫做“hoisting”。“hoisting”就像是把所有的变量声明移动到函数或者全局代码的开头位置。

```js
bla = 2
var bla;

// 可以隐式地（implicitly）将以上代码理解为：

var bla;
bla = 2;
```

因此，建议始终在作用域顶部声明变量（全局代码的顶部和函数代码的顶部），这可以清楚知道哪些变量是函数作用域（局部），哪些变量在作用域链上解决。

重要的是，提升将影响变量声明，而不会影响其值的初始化。仅在运行到赋值语句时初始化变量的值。在此之前，变量的值始终为 `undefined`（但已被声明）：

```js
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// 可以隐式地将以上代码理解为：

function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

## 示例

### 声明并初始化两个变量

```js
var a = 0, b = 0;
```

### 给两个变量赋值成字符串值

```js
var a = 'A';
var b = a;

// 等效于：

var a, b = a = 'A';
```

留意其中的顺序：

```js
var x = y, y = 'A';
console.log(x + y); // undefinedA
```

在这里，`x` 和 `y` 在代码执行前就已经创建了，而赋值操作发生在创建之后。当“`x = y`”执行时，`y` 已经存在，所以不会抛出 `ReferenceError`，并且它的值是 `undefined`。所以，`x` 被赋予 `undefined` 值。然后，`y` 被赋予 `'A'`。于是，在执行完第一行之后，才出现了这样的结果：`x === undefined && y === 'A'`。

### 多个变量的初始化

```js
var x = 0;
function f() {
  var x = y = 1; // x 在函数内部声明，y 则在全局作用域下声明
}
f();

console.log(x, y); // 0 1

// 在非严格模式下：
// x 是全局变量。
// y 是隐式声明的全局变量。 
```

在严格模式下运行相同的示例：

```js
'use strict';

var x = 0;
function f() {
  var x = y = 1; // 严格模式下将抛出 ReferenceError
}
f();

console.log(x, y);
```

### 隐式全局变量和外部函数作用域

看起来像是隐式全局作用域的变量也有可能是其外部函数变量的引用：

```js
var x = 0; // x 是全局变量，并且赋值为 0

console.log(typeof z); // // undefined，因为 z 还不存在

function a() {
  var y = 2; // y 被声明成函数 a 作用域的变量，并且赋值为 2

  console.log(x, y); // 0 2

  function b() {
    x = 3; // 全局变量 x 被赋值为 3
    y = 4; // 已存在的外部函数的 y 变量被赋值为 4
    z = 5; // 创建新的全局变量 z，并且赋值为 5
           // (在严格模式下抛出 ReferenceError)
  }

  b(); // 调用 b 时创建了全局变量 z
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // undefined，因为 y 是 a 函数的局部变量
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
