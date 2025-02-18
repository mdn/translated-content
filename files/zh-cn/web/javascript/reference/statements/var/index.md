---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

**`var` 语句**用于声明一个函数作用域或全局作用域的变量，并且可以选择将其初始化为一个值。

{{InteractiveExample("JavaScript Demo: Statement - Var")}}

```js interactive-example
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2
```

## 语法

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 要声明的变量的名称。必须是有效的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)或[解构绑定模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。
- `valueN` {{optional_inline}}
  - : 变量的初始值。可以是任何合法的表达式。默认值为 `undefined`。

## 描述

用 `var` 声明的变量的作用域是最靠近并包含 `var` 语句的以下花括号闭合语法结构的一个：

- 函数主体
- 类[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

如果不是以上这些情况则是：

- 当前[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)，如果代码以模块模式运行
- 全局作用域，如果代码以脚本模式运行

```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1（`bar` 函数闭包中引用了 `x`）
    console.log(y); // 2（`y` 在作用域内）
  }
  bar();
  console.log(x); // 1（`x` 在作用域内）
  console.log(y); // ReferenceError，`y` 的作用域限定在 `bar` 内
}

foo();
```

重要的是，其他块级结构，包括[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)、{{jsxref("Statements/try...catch", "try...catch")}}、{{jsxref("Statements/switch", "switch")}} 以及[其中一个 `for` 语句的头部](/zh-CN/docs/Web/JavaScript/Reference/Statements#迭代)，对于 `var` 并不创建作用域，而在这样的块内部使用 `var` 声明的变量仍然可以在块外部被引用。

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

在脚本中，使用 `var` 声明的变量将被添加为全局对象的不可配置属性。这意味着它的属性描述符无法被修改，也无法使用 {{JSxRef("Operators/delete", "delete")}} 删除。JavaScript 具有自动内存管理机制，因此在全局变量上使用 `delete` 运算符是没有意义的。

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // 在严格模式下，将抛出 TypeError，否则静默失败。
delete x; // 在严格模式下，将抛出 SyntaxError，否则静默失败。
```

在 NodeJS [CommonJS](http://www.commonjs.org/) 模块以及原生 [ECMAScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)中，顶层变量声明的作用域仅限于模块中，而不会作为属性被添加到全局对象中。

`var` 关键字后面的列表被称为[_绑定_](/zh-CN/docs/Glossary/Binding)_列表_，用逗号分隔，其中逗号*不是*[逗号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)，`=` 号也*不是*[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)。后续变量的初始化可以引用前面的变量，并获得初始化的值。

### 提升

`var` 声明，无论它们出现在脚本中的什么位置，都会在执行脚本中的任何代码之前进行处理。在代码中的任何位置声明变量都相当于在顶部声明它。这也意味着变量可以在其声明之前被使用。这种行为被称为[_提升_](/zh-CN/docs/Glossary/Hoisting)，因为变量声明似乎被移动到发生该行为的函数、静态初始化块或脚本源代码的顶部。

> **备注：** `var` 声明仅提升到当前脚本的顶部。如果在一个 HTML 文件中有两个 `<script>` 元素，则第一个脚本无法访问第二个脚本声明的变量，直到第二个脚本已被处理和执行。

```js
bla = 2;
var bla;
```

这可以隐式理解为：

```js
var bla;
bla = 2;
```

因此，建议始终在作用域的顶部（全局代码的顶部和函数代码的顶部）声明变量，以便清楚地知道哪些变量是作用域限定在当前函数内部的。

只有变量的声明被提升，而变量的初始化则不会被提升。直到赋值语句被执行，变量才会被初始化。在此之前，变量的值是 `undefined`（但已声明）：

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

这可以隐式理解为：

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### 重新声明

即使是在严格模式下，使用 `var` 重复声明变量不会触发错误，变量的值也不会丢失，除非新的声明有初始化器。

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var` 可以与 `function` 在同一作用域中声明同名变量。在这种情况下，`var` 声明的初始化器总是会覆盖函数的值，而无论它们的相对位置如何。这是因为函数声明会提升到作用域的顶部，而初始化器会在其后才被求值，因此会覆盖函数的值。

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var` 不能与 {{jsxref("Statements/let", "let")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/class", "class")}} 或 {{jsxref("Statements/import", "import")}} 在同一作用域中声明同名变量。

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

因为 `var` 声明作用域不限于块，所以这也适用于以下情况：

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

它不适用于以下情况，其中 `let` 位于 `var` 的子作用域中，而不是同一作用域：

```js example-good
var a = 1;
{
  let a = 2;
}
```

函数体内的 `var` 声明可以与函数参数同名。

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // 输出 1
```

`catch` 块内的 `var` 声明可以与 `catch` 绑定的标识符同名，但只有当 `catch` 绑定的是一个简单标识符，而不是解构模式时才可以。这是一种[已弃用的语法](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#语句)，你不应该依赖它。在这种情况下，声明会被提升到 `catch` 块外部，但在 `catch` 块内的任何赋值都不会在外部可见。

```js-nolint example-bad
try {
  throw 1;
} catch (e) {
  var e = 2; // 有效
}
console.log(e); // undefined
```

## 示例

### 声明并初始化两个变量

```js
var a = 0,
  b = 0;
```

### 用单个字符串值给两个变量赋值

```js
var a = "A";
var b = a;
```

等效于：

```js-nolint
var a, b = a = "A";
```

留意其中的顺序：

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

在这里，`x` 和 `y` 在代码执行之前已经声明了，而赋值发生在其之后。在执行 `x = y` 时，`y` 已经存在，因此不会抛出 `ReferenceError`，并且它的值是 `undefined`。所以，`x` 被赋值为 `undefined`。然后，`y` 被赋值为 `"A"`。

### 多个变量的初始化

请注意 `var x = y = 1` 语法——`y` 实际上并没有声明为变量，因此 `y = 1` 是[非限定标识符赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment#非限定标识符赋值)，在非严格模式下会创建全局变量。

```js-nolint
var x = 0;
function f() {
  var x = (y = 1); // x 在函数内部声明，y 则在全局作用域下声明
}
f();

console.log(x, y); // 0 1

// 在非严格模式下：
// x 是预期的全局变量；
// 但是 y 被泄漏到函数之外！
```

在严格模式下运行相同的示例：

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### 隐式全局变量和外部函数作用域

看起来像是隐式全局作用域的变量也有可能是其外部函数变量的引用：

```js
var x = 0; // x 是全局变量，并且赋值为 0

console.log(typeof z); // // “undefined”，因为 z 还不存在

function a() {
  var y = 2; // y 被声明成函数 a 作用域的变量，并且赋值为 2

  console.log(x, y); // 0 2

  function b() {
    x = 3; // 全局变量 x 被赋值为 3
    y = 4; // 已存在的外部函数的 y 变量被赋值为 4
    z = 5; // 创建新的全局变量 z，并且赋值为 5
    // （在严格模式下抛出 ReferenceError）
  }

  b(); // 调用 b 时创建了全局变量 z
  console.log(x, y, z); // 3 4 5
}

a(); // 也调用了 b。
console.log(x, z); // 3 5
console.log(typeof y); // “undefined”，因为 y 是 a 函数的局部变量
```

### 解构赋值声明

每个 `=` 的左侧也可以是一个绑定模式。这允许一次创建多个变量。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

有关更多信息，请参阅[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
