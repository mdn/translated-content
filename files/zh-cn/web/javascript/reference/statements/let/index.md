---
title: let
slug: Web/JavaScript/Reference/Statements/let
---

{{jsSidebar("Statements")}}

**`let`** 语句声明一个块级作用域的局部变量，并可以初始化为一个值（可选）。

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## 语法

```js
let name1 [= value1] [, name2 [= value2]] [, ..., nameN [= valueN];
```

### 参数

- `nameN`
  - : 要声明的一个或多个变量的名称，必须是合法的标识符。
- `valueN` {{optional_inline}}
  - : 变量的初始值，可以是任意合法的表达式。

另外，也可以使用[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)语法来声明变量。

```js
let { bar } = foo; // where foo = { bar:10, baz:12 };
/* 创建一个名为 'bar' 的变量，其值为 10 */
```

## 描述

**`let`** 允许你声明一个作用域被限制在{{jsxref("statements/block", "块")}}作用域中的变量、语句或者表达式。与 {{jsxref("statements/var", "var")}} 关键字不同的是，`var` 声明的变量作用域是全局或者整个函数块的。 `var` 和 `let` 的另一个重要区别，`let` 声明的变量不会在作用域中被提升，它是在编译时才初始化（参考下面的[暂时性死区](#暂时性死区)）。

就像 {{jsxref("statements/const", "const", "描述")}} 一样，`let` 不会在全局声明时（在最顶层的作用域）创建 {{domxref('window')}} 对象的属性。

可以从[这里](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri)了解我们为什么使用 `let`。

通过在使用 `let` 变量的作用域顶部声明它们，可以避免很多问题，但这样做可能会影响可读性。

与 `var` 不同的是，`let` 只是开始*声明*，而非一个完整的表达式。这意味着你不能将单独的 `let` 声明作为一个代码块的主体（这是有道理的，因为声明的变量无法被访问）。

```js
if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

## 示例

### 作用域规则

**`let`** 声明的变量作用域只在其声明的块或子块内部，这一点，与 **`var`** 相似。二者之间最主要的区别在于 **`var`** 声明的变量的作用域是整个封闭函数。

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

在全局作用域中，**`let`** 和 **`var`** 不一样，它不会在全局对象上创建属性。例如：

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### 重复声明

在同一个函数或块作用域中重复声明同一个变量会抛出 {{jsxref("SyntaxError")}}。

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

在 {{jsxref("Statements/switch", "switch")}} 语句中也会触发这个错误，因为它是同一个块作用域。

```js example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

然而，需要特别指出的是，一个嵌套在 case 子句中的块会创建一个新的块作用域的词法环境，就不会产生上诉重复声明的错误。

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

### 暂时性死区

从一个代码块的开始直到代码执行到声明变量的行之前，`let` 或 `const` 声明的变量都处于“暂时性死区”（Temporal dead zone，TDZ）中。

当变量处于暂时性死区之中时，其尚未被初始化，尝试访问变量将抛出 {{jsxref("ReferenceError")}}。当代码执行到声明变量所在的行时，变量被初始化为一个值。如果声明中未指定初始值，则变量将被初始化为 `undefined`。

与 {{jsxref("Statements/var", "var")}} 声明的变量不同，如果在声明前访问了变量，变量将会返回 `undefined`。以下代码演示了在使用 `let` 和 `var` 声明变量的行之前访问变量的不同结果。

```js example-bad
{
  // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

使用术语“temporal”是因为区域取决于执行顺序（时间），而不是编写代码的顺序（位置）。例如，下面的代码会生效，是因为即使使用 `let` 变量的函数出现在变量声明之前，但函数的执行是在暂时性死区的外面。

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

#### 暂时性死区与 `typeof`

如果使用 `typeof` 检测在暂时性死区中的变量，会抛出 {{jsxref("ReferenceError")}} 异常：

```js example-bad
// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
```

这与使用 `typeof` 检测值为 `undefined` 的未声明变量不同：

```js
// prints out 'undefined'
console.log(typeof undeclaredVariable);
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

由于外部变量 `foo` 有值，因此会执行 `if` 语句块，但是由于词法作用域，该值在块内不可用：`if` 块内的标识符 `foo` 是 `let foo`。表达式 `(foo + 55)` 会抛出 `ReferenceError` 异常，是因为 `let foo` 还没完成初始化，它仍然在暂时性死区里。

在以下情况下，这种现象可能会使您感到困惑。`let n of n.a` 已经在 for 循环块的私有范围内，因此，标识符 `n.a` 被解析为位于指令本身（`let n`）中的“`n`”对象的属性“`a`”。

在没有执行到它的初始化语句之前，它仍旧存在于暂时性死区中。

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) {
    // ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### 其他情况

用在块级作用域中，**`let`** 将变量的作用域限制在块内，而 `var` 声明的变量的作用域是在函数内。

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

然而，`var` 与 `let` 合并的声明方式会抛出 {{jsxref("SyntaxError")}} 错误，因为 `var` 会将变量提升至块的顶部，这会导致隐式地重复声明变量。

```js example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [变量提升 > `let` 和 `const` 的变量提升](/zh-CN/docs/Glossary/Hoisting#let_and_const_hoisting)
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
- [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
- [StackOverflow: What is the Temporal Dead Zone](https://stackoverflow.com/a/33198850/1125029)?
- [StackOverflow: What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-betwezh-CNing-let-and-var-to-declare-a-variable)
