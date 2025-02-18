---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

**`const`** 声明用于声明块作用域的局部变量。常量的值不能通过使用[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)重新赋值来更改，但是如果常量是一个[对象](/zh-CN/docs/Web/JavaScript/Data_structures#objects)，它的属性可以被添加、更新或删除。

{{InteractiveExample("JavaScript Demo: Statement - Const")}}

```js interactive-example
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42
```

## 语法

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 要声明的变量的名称。每个变量名称必须是合法的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)或[解构绑定模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。
- `valueN`
  - : 变量的初始值。它可以是任何合法的表达式。

## 描述

`const` 声明与 {{jsxref("Statements/let", "let")}} 非常相似：

- `const` 声明的作用域既可以是块级作用域，也可以是函数作用域。
- `const` 声明只有在声明的位置之后才能访问（参见[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)）。因此，`const` 声明通常被视为[非提升](/zh-CN/docs/Glossary/Hoisting)的声明方式。
- 当在脚本的顶层声明时，`const` 声明不会在 {{jsxref("globalThis")}} 上创建属性。
- 在同一作用域中，`const` 声明不能被任何其他声明[重新声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#重新声明)。
- `const` 是[*声明*而不是*语句*](/zh-CN/docs/Web/JavaScript/Reference/Statements#语句和声明的区别)。这意味着你不能将单独的 `const` 声明用作块的主体（这是合理的，因为无法访问变量）。

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

一个常量需要一个初始值。你必须在声明同时指定它的值。（这是合理的，因为它在声明后不能被改变。）

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

`const` 声明创建了一个对值的不可变引用。它并*不*意味着它所持有的值是不可变的，只是变量标识符不能被重新赋值。例如，在内容是对象的情况下，这意味着对象的内容（例如属性）是可以被修改的。你应该将 `const` 声明理解为“创建一个*身份*保持不变”的标识符（变量），而不是“保持*值*不变的标识符”——换言之，是“创建不可变的{{Glossary("binding", "绑定")}}”，而不是“不可变的值”。

许多代码风格指南（包括 [MDN 的指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#变量声明)建议当变量在其作用域中不会重新赋值时使用 `const` 而不是 {{jsxref("Statements/let", "let")}}。这样可以清晰地表达变量的类型（或值，如果是原始类型的情况下）永远不会改变的意图。对非原始值可能改变的情况下其他人可能更喜欢使用 `let`。

紧跟在 `const` 关键字后面的列表被称为[_绑定_](/zh-CN/docs/Glossary/Binding)_列表_，用逗号分隔，其中逗号*不是*[逗号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)，`=` 符号*不是*[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)。后面变量的初始值可以引用处在列表前面的变量。

## 示例

### const 基本用法

常量在声明的时候可以使用大小写，但通常情况下全部用大写字母，特别是对于原始值，因为它们确实是不可变的。

```js
// 定义常量 MY_FAV 并赋值为 7
const MY_FAV = 7;

console.log(`我最喜欢的数字是：${MY_FAV}`);
```

```js-nolint example-bad
// 对常量变量重新赋值会引发错误
MY_FAV = 20; // TypeError: Assignment to constant variable

// 重新声明常量会引发错误
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
```

### 块级作用域

请务必注意块作用域的特性。

```js-nolint
const MY_FAV = 7;

if (MY_FAV === 7) {
  // 没有问题，因为它在新的块级作用域中
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // var 声明的范围不限于块，因此会引发错误
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7
```

### 定义对象和数组常量

`const` 也适用于对象和数组。尝试覆盖该对象会引发错误“Assignment to constant variable”。

```js example-bad
const MY_OBJECT = { key: "值" };
MY_OBJECT = { OTHER_KEY: "值" };
```

然而，对象的键不受保护，因此以下语句可以正常执行。

```js
MY_OBJECT.key = "其他值";
```

你可能需要使用 {{jsxref("Object.freeze()")}} 来使对象不可变。

这对数据同样适用。尝试覆盖该数组会引发错误“Assignment to constant variable”。

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

同样地，数组的元素不受保护，因此以下语句可以正常执行。

```js
MY_ARRAY.push("A"); // ["A"]
```

### 带解构赋值的声明

每个 `=` 后面的左侧也可以是绑定模式。这允许一次创建多个变量。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

有关更多信息，请参阅[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [JavaScript 指南中的常量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#常量)
