---
title: let
slug: Web/JavaScript/Reference/Statements/let
l10n:
  sourceCommit: 66149c2238e1beb7fc65dd998968aa0638c874a3
---

{{jsSidebar("Statements")}}

**`let`** 声明用于声明可重新赋值的块级作用域局部变量，并且可以选择将其初始化为一个值。

{{InteractiveExample("JavaScript Demo: Statement - Let")}}

```js interactive-example
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1
```

## 语法

```js-nolint
let name1;
let name1 = value1;
let name1 = value1, name2 = value2;
let name1, name2 = value2;
let name1 = value1, name2, /* …, */ nameN = valueN;
```

### 参数

- `nameN`
  - : 要声明的变量的名称。必须是合法的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)或[解构绑定模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。
- `valueN` {{optional_inline}}
  - : 变量的初始值。可以是任意合法的表达式。默认值为 `undefined`。

## 描述

用 `let` 声明的变量的作用域是最靠近并包含 `let` 声明的以下花括号闭合语法结构的一个：

- [块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句
- {{jsxref("Statements/switch", "switch")}} 语句
- {{jsxref("Statements/try...catch", "try...catch")}} 语句
- `let` 位于其开头的 [`for` 语句之一](/zh-CN/docs/Web/JavaScript/Reference/Statements#迭代器)的主体
- 函数主体
- 类[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

如果不是以上这些情况则是：

- 当代码以[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)模式运行时，作用域是当前模块。
- 当代码以脚本模式运行时，作用域是全局作用域。

相较于 {{jsxref("Statements/var", "var")}}，`let` 声明有以下不同点：

- `let` 声明的作用域是块或函数。
- `let` 声明的变量只能在执行到声明所在的位置之后才能被访问（参见[暂时性死区](#暂时性死区)）。因此，`let` 声明通常被视为是[非提升的](/zh-CN/docs/Glossary/Hoisting)。
- `let` 声明在脚本的顶级作用域上声明变量时不会在{{jsxref("globalThis", "全局对象", "", 1)}}上创建属性。
- `let` 声明的变量不能被同一个作用域中的任何其他声明[重复声明](#重复声明)。
- `let` [是*声明*，而不是*语句*](/zh-CN/docs/Web/JavaScript/Reference/Statements#语句和声明的区别)的开头。这意味着，你不能将单独的 `let` 声明当做块的主体使用（因为这样做会让变量无法被访问）。

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

注意：在[非严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下允许将 `let` 作为 `var` 或者 `function` 的标识符名称，但你应当避免将 `let` 用作标识符以防止发生意外的语法混淆。

许多风格指南（包括 [MDN 的](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#变量声明)）推荐只要变量没有在其作用域中被重新赋值，就应该使用 {{jsxref("Statements/const", "const")}} 而不是 `let`。这样能更清楚地表明变量的类型（或值，如果其为原始值）永远不会改变。此外也推荐用 `let` 存放可变的非原始值。

`let` 关键字后方的列表叫做[_绑定_](/zh-CN/docs/Glossary/Binding)_列表_，使用逗号分隔，其中的逗号*不是*[逗号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)，并且 `=` 符号也*不是*[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)。后初始化的变量能够引用列表中之前初始化的变量。

### 暂时性死区

用 `let`、`const` 或 `class` 声明的变量可以称其从代码块的开始一直到代码执行到变量声明的位置并被初始化前，都处于一个“暂时性死区”（Temporal dead zone，TDZ）中。

当变量处于暂时性死区之中时，其尚未被初始化，并且任何访问其的尝试都将导致抛出 {{jsxref("ReferenceError")}}。当代码执行到变量被声明的位置时，变量会被初始化为一个值。如果变量声明中未指定初始值，则变量将被初始化为 `undefined`。

这与 {{jsxref("Statements/var", "var", "变量提升")}} 声明的变量不同，如果在声明位置前访问 `var` 声明的变量会返回 `undefined`。以下代码演示了在声明位置前访问 `let` 和 `var` 声明的变量的不同结果。

```js example-bad
{
  // 暂时性死区始于作用域开头
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // 暂时性死区结束（对 foo 而言）
}
```

使用“暂时性”一词是因为这个区域取决于代码执行的时间点，而不是代码编写的顺序。例如，下面的代码能够运行，是因为虽然使用 `let` 变量的函数写在变量声明之前，但函数是在暂时性死区外面被*调用*的。

```js
{
  // 暂时性死区始于作用域开头
  const func = () => console.log(letVar); // 没问题

  // 在暂时性死区内访问 letVar 会抛出 `ReferenceError`

  let letVar = 3; // 暂时性死区结束（对 letVar 而言）
  func(); // 在暂时性死区外调用
}
```

在暂时性死区内对 `let` 声明的变量使用 `typeof` 运算符也会抛出 {{jsxref("ReferenceError")}}：

```js example-bad
typeof i; // ReferenceError: Cannot access 'i' before initialization
let i = 10;
```

这与对未声明的变量和存放 `undefined` 值的变量使用 `typeof` 运算符不同：

```js
console.log(typeof undeclaredVariable); // "undefined"
```

> **备注：** `let` 和 `const` 声明仅在当前脚本被处理时才会被处理。如果在一个 HTML 中有两个以脚本模式运行的 `<script>` 元素，那么第一个脚本不会受到第二个脚本中顶层 `let` 或 `const` 变量的暂时性死区限制，尽管如果你在第一个脚本中声明了一个 `let` 或 `const` 变量，在第二个脚本中再次声明它将会导致[重复声明错误](#重复声明)。

### 重复声明

`let` 声明的变量不能被同一个作用域中的任何其他声明重复声明，包括 `let`、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/class", "class")}}、{{jsxref("Statements/function", "function")}}、{{jsxref("Statements/var", "var")}} 和 {{jsxref("Statements/import", "import")}} 声明。

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

在函数主体中用 `let` 声明的变量不能与参数同名，在 `catch` 块中用 `let` 声明的变量不能与被 `catch` 绑定的标识符同名。

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

如果你在交互式解释器中实验，比如 Firefox web 控制台（**更多工具** > **Web 开发者工具** > **控制台**），当你分开两次输入并运行含有同一个名称的 `let` 声明时，你会得到同上的重复声明错误。有关更进一步的讨论参见这个议题：[Firefox bug 1580891](https://bugzil.la/1580891)。Chrome 的控制台则允许在不同次的输入中重复声明 `let` 变量。

你或许会在 {{jsxref("Statements/switch", "switch")}} 语句中遇到错误，因为语句只有一个代码块。

```js-nolint example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError: Identifier 'foo' has already been declared
    break;
}
```

要避免这个错误，用新的块语句将每个 `case` 封闭。

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

## 示例

### 作用域规则

`let` 声明的变量的作用域只在其声明的块或子块内部，在这一点上，它与 `var` 非常相似。二者之间主要的区别在于 `var` 声明的变量的作用域是整个闭合的函数。

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // 同一个变量！
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // 不同的变量
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

在程序的顶级作用域和函数作用域中，`let` 则和 `var` 不一样，它不会在全局对象上创建属性。例如：

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

#### 暂时性死区和词法作用域

以下代码会导致 `ReferenceError`：

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

由于外部变量 `var foo` 有值，因此会执行 `if` 语句块，但是由于词法作用域，该值在块内不可用：`if` 块*内*的标识符 `foo` 是 `let foo`。表达式 `foo + 55` 会抛出 `ReferenceError` 异常，因为 `let foo` 还没完成初始化——它仍处于暂时性死区内。

在下面的情况中，这种现象可能会使你感到困惑。指令 `let n of n.a` 已经处于 `for...of` 循环块的作用域内，因此，标识符 `n.a` 被解析为位于指令（`let n`）本身的 `n` 对象的属性 `a`。因为 `n` 的声明尚未执行结束，它仍然处于暂时性死区内。

```js example-bad
function go(n) {
  // n 在此处被定义！
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### 其他情况

当 `let` 被用在块中时，`let` 将变量的作用域限制在块内。这不同于 `var`，`var` 的作用域为其被声明的函数内。

```js
var a = 1;
var b = 2;

{
  var a = 11; // 作用域为全局
  let b = 22; // 作用域为块内

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

然而，下面的 `var` 与 `let` 连携的声明方式会抛出 {{jsxref("SyntaxError")}}，因为 `var` 并不限制在块作用域内，导致它们处于同一作用域。这会导致隐式地重复声明变量。

```js-nolint example-bad
let x = 1;

{
  var x = 2; // 重复声明的语法错误
}
```

### 带有解构的声明

每个 `=` 的左侧都可以是一个绑定模板，这使得能够一次性创建多个变量。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

更多信息，参见[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [变量提升](/zh-CN/docs/Glossary/Hoisting)
- [深入 ES6：`let` 和 `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)——hacks.mozilla.org（2015）
- [Firefox 44 中 `let` 和 `const` 的破坏性变更](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)——blog.mozilla.org（2015）
- [你不懂 JS：作用域和闭包 第三章：函数对决块作用域](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)——Kyle Simpson
- [什么是暂时性死区？](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850)——Stack Overflow
- [`let` 和 `var` 在用法上有什么不同？](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)——Stack Overflow
- [为什么“let”被选为了 JavaScript 块作用域变量声明的名字？](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri)——Stack Overflow
