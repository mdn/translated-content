---
title: JavaScript 语言概览
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

JavaScript 是一门多范式的动态语言，它包含类型、运算符、标准内置对象和方法。它的语法基于 Java 和 C 语言——这两门语言的许多结构也适用于 JavaScript。JavaScript 使用[对象原型](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)和类支持面向对象编程。它也支持函数式编程，因为函数是[头等](/zh-CN/docs/Glossary/First-class_Function)对象，它能通过表达式轻松创建，并像其他对象一样进行传递。

本文的目的是作为各种 JavaScript 语言特性的快速概览，为有其他语言（如 C 或 Java）背景的读者编写。

## 数据类型

我们从任何编程语言都不可缺少的构建块开始：类型。JavaScript 程序操作值，这些值都有各自的类型。JavaScript 提供了 7 种*原始类型*：

- [Number](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#number_类型)：表示除了*非常*大的整数之外的所有数值（整数和浮点数）。
- [BigInt](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#bigint_类型)：表示任意大整数。
- [String](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#string_类型)：用于存储文本。
- [Boolean](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#boolean_类型)：`true` 和 `false`——通常用于条件逻辑。
- [Symbol](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#symbol_类型)：用于创建唯一的、不会冲突的标识符。
- [Undefined](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#undefined_类型)：表示变量还未被赋值。
- [Null](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#null_类型)：表示故意的空值。

其他的称为[对象](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#object)。常见的对象类型包括：

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

在 JavaScript 中，函数不是特殊的数据结构——它们只是特殊的、能被调用的对象类型。

### 数值

JavaScript 有两种内置的数字类型：Number 和 BigInt。

Number 类型是[基于 IEEE 754 规范的 64 位双精度浮点值](https://zh.wikipedia.org/wiki/双精度浮点数)，这意味着整数只能在 [-(2<sup>53</sup> − 1)](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) 和 [2<sup>53</sup> − 1](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) 之间无精度损失、安全的表示，以及浮点数只能存储到 [1.79 × 10<sup>308</sup>](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)。在 number 中，JavaScript 无法区分浮点数和整数。

```js
console.log(3 / 2); // 1.5，而不是 1
```

所以*表面上的整数*实际上是*浮点数*。由于采用了 IEEE 754 编码，浮点数运算有时可能不是精确的。

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

对于期待整数的运算，例如位运算，number 会被转换为 32 位整数。

[Number 字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#数值字面量)也可以使用前缀表示进制（二进制、八进制、十进制、十六进制），或使用指数后缀。

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

[BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 类型是任意长度的整数。它的行为与 C 的整数类型类似（如：除法向零截断），除了它能任意增长。BigInt 用 number 字面量加 `n` 后缀表示。

```js
console.log(-3n / 2n); // -1n
```

它支持标准的[算术运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#算术运算符)，例如，加、减、取余运算等等。BigInt 和 number 在算术运算中不能混用。

{{jsxref("Math")}} 对象提供了标准的数学函数和常量。

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

有三种将字符串转换为 number 的方式：

- {{jsxref("parseInt()")}}，将字符串解析为整数。
- {{jsxref("parseFloat()")}}，将字符串解析为浮点数。
- [`Number()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 函数，将字符串当作 number 字面量进行解析，还支持许多不同的 number 表示。

你也可以使用[一元 `+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus) 作为 `Number()` 的简写。

number 值还包含 {{jsxref("NaN")}}（“Not a Number”的简写）和 {{jsxref("Infinity")}}。许多“非法的数学”运算的结果是 `NaN`——例如，试图解析非数值字符串，或者对负值使用 [`Math.log()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log)。除以零的结果是 `Infinity`（正的或负的）。

`NaN` 会传染。如果你在数学运算中将它作为操作数，结果将也会是 `NaN`。`NaN` 是 JavaScript 中唯一和自身不相等的值（根据 IEEE 754 规范）。

## 字符串

JavaScript 中的字符串是 Unicode 字符序列。这对于曾经处理过国际化的开发者来说是受欢迎的消息。更精确地说，它们是 [UTF-16 编码的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

```js
console.log("Hello, world");
console.log("你好，世界！"); // 在字符串字面量中几乎可以书写所有的 Unicode 字符
```

可以用单引号或双引号书写字符串——JavaScript 没有对字符和字符串进行区分。如果你想表示单个字符，就使用包含那个单个字符的字符串就行。

```js
console.log("Hello"[1] === "e"); // true
```

要得到字符串的长度（以[码元](/zh-CN/docs/Glossary/Code_unit)为单位），访问字符串的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length) 属性。

字符串有操作字符串和访问字符串信息的[实用方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#实例方法)。因为所有的原始值设计为不可变的，因此这些方法都是返回新字符串。

字符串重载了 `+` 运算符：当操作数之一是字符串时，执行的是字符串拼接而不是数字加法。特殊的[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)语法能用嵌入式表达式更简洁地书写字符串。和 Python 的 f-string 或 C# 的插值字符串不同，模板字面量使用反引号（不是单引号，也不是双引号）。

```js
const age = 25;
console.log("I am " + age + " years old."); // 字符串拼接
console.log(`I am ${age} years old.`); // 模板字面量
```

## 其他类型

JavaScript 区分 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)（表示故意的空值，只能使用 `null` 关键字）和 {{jsxref("undefined")}}（表示值的缺失）。有多种得到 `undefined` 的方式。

- 没有返回值的 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句（`return;`）会隐式地返回 `undefined`。
- 访问[对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)上不存在的属性（`obj.iDontExist`）会返回 `undefined`。
- 变量声明时未初始化（`let x;`）会将变量隐式地初始化为 `undefined`。

JavaScript 有布尔类型，可能的值为 `true` 和 `false`——两个都是关键字。值都能根据下列的规则转换为布尔：

1. `false`、`0`、空字符串（`""`）、`NaN`、`null` 和 `undefined` 都转换成 `false`。
2. 所有其他的值都转换成 `true`。

你可以使用 [`Boolean()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) 函数显式执行这个转换：

```js
Boolean(""); // false
Boolean(234); // true
```

然而，几乎没有必要这样做，因为 JavaScript 在期望使用布尔值时会静默地执行这个转换，例如在 `if` 语句中（参见[控制结构](#控制结构)）。鉴于这个原因，我们有时候讲“[真值](/zh-CN/docs/Glossary/Truthy)”和“[假值](/zh-CN/docs/Glossary/Falsy)”，在布尔上下文中，表明分别能转换成 `true` 和 `false` 的值。

支持布尔运算，如：`&&`（逻辑*与*）、`||`（逻辑*或*）、`!`（逻辑*非*）；参见[运算符](#运算符)。

symbol 类型通常用于创建唯一的标识符。每个用 [`Symbol()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 函数创建的 symbol 都能确保是唯一的。此外，还有注册 symbol（是共享常量）和内置 symbol（由语言作为特定操作的“协议”）。你可以在 [symbol 参考](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)中阅读更多相关信息。

## 变量

在 JavaScript 中，使用三个关键字之一声明变量：[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)、[`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)。

`let` 能声明块级变量。声明的变量仅在包围变量的块中可用。

```js
let a;
let name = "Simon";

// myLetVariable 在这*不*可见

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable 仅在这可见
}

// myLetVariable 在这*不*可见
```

`const` 能声明值永远都不能改变的变量。变量仅在声明变量的*块*中可用。

```js
const Pi = 3.14; // 声明变量 Pi
console.log(Pi); // 3.14
```

用 `const` 声明的变量不能被重新赋值。

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // 会抛出错误，因为你不能修改常数变量。
```

`const` 声明只阻止*重新赋值*——如果变量是对象的话，它们不会阻止*修改*变量的值：

```js
const obj = {};
obj.a = 1; // 没有错误
console.log(obj); // { a: 1 }
```

`var` 声明的行为有点让人惊喜（例如，它们不是块级作用域的），在现代的 JavaScript 代码中不鼓励使用 `var`。

如果你声明了一个变量，但没有给变量赋值，那么它的值是 `undefined`。你声明 `const` 变量时不能不初始化，因为你后面无论如何都无法修改它。

用 `let` 和 `const` 声明的变量仍然会占据定义所在的整个作用域，在实际的声明行之前的区域称作[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)。它与变量遮蔽有一些有趣的、不会在其他语言中发生的交互。

```js
function foo(x, condition) {
  if (condition) {
    console.log(x);
    const x = 2;
    console.log(x);
  }
}

foo(1, true);
```

在大多数其他语言中，上面的代码会输出“1”和“2”，因为在 `const x = 2` 代码行之前，`x` 应该仍然引用上层作用域的参数 `x`。在 JavaScript 中，因为每条声明会占据整个作用域，所以在第一个 `console.log` 处会抛出错误：“Cannot access 'x' before initialization”。想要了解更多信息，参见 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 的参考页面。

JavaScript 是*动态类型的*。类型（正如在[前面章节中](#数据类型)所描述的）仅与值关联，而不是与变量关联。对于用 `let` 声明的变量，你总是可以通过重新赋值修改变量的类型。

```js
let a = 1;
a = "foo";
```

## 运算符

JavaScript 的数值运算符包括 `+`、`-`、`*`、`/`、`%`（取余）和 `**`（指数运算）。使用 `=` 赋值。每个二元运算符还有一个复合赋值运算符（例如 `+=` 和 `-=`），其扩展为 `x = x operator y`。

```js
x += 5;
x = x + 5;
```

你可以分别使用 `++` 和 `--` 进行自增和自减。它们可以用作前缀或后缀运算符。

[`+` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)也可以执行字符串拼接。

```js
"你好" + "世界"; // "你好世界"
```

如果你将字符串和 number（或其他值）相加，都会先将其转换为字符串。这可能会让你犯错：

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

将空字符串和某个值相加，是一种将这个值转换为字符串的实用方法。

JavaScript 中的[比较](/zh-CN/docs/Web/JavaScript/Reference/Operators#关系运算符)使用 `<`、`>`、`<=` 和 `>=`，它们能处理字符串和数字。对于相等，如果接收到的是不同类型的操作数，[双等号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)会执行类型转换。另一方面，[三等号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)不尝试类型转换，通常更受青睐。

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

双等号和三等号也有对应的不相等的版本：`!=` 和 `!==`。

JavaScript 也有[位运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#位移运算符)和[逻辑运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#二元逻辑运算符)。值得注意的是，逻辑运算符不仅只处理布尔值——它们处理值的“真假”。

```js
const a = 0 && "Hello"; // 0，因为 0 是“假值”
const b = "Hello" || "world"; // "Hello"，因为 "Hello" 和 "world" 都是“真值”
```

`&&` 和 `||` 运算符使用短路逻辑，这意味着它们是否执行第二个操作数取决于第一个操作数。这对于访问对象的属性之前检查其是否是 null 对象很有用：

```js
const name = o && o.getName();
```

或者用于缓存值（当假值无效时）：

```js
const name = cachedName || (cachedName = getName());
```

想要了解完整的运算符列表，参见[指南页面](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)或者[参考章节](/zh-CN/docs/Web/JavaScript/Reference/Operators)。你可能对[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)特别感兴趣。

## 语法

JavaScript 语法和 C 家族非常相似。有几点值得提及：

- [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)可以是 Unicode 字符，但不能是[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)之一。
- [注释](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#注释)通常是 `//` 或 `/* */`，然而许多其他脚本语言（如 Perl、Python 和 Bash）使用 `#`。
- 分号在 JavaScript 中是可选的——JavaScript 在必要时会[自动插入分号](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号插入)。然而，有需要注意的特定警告，因为和 Python 不一样，分号仍然是语法的一部分。

要深入学习 JavaScript 语法，参见[词法语法的参考页面](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)。

## 控制结构

JavaScript 有一组和 C 家族中的其他语言相似的控制结构。条件语句使用 [`if` 和 `else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)；你可以同时使用：

```js
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
```

JavaScript 没有 `elif`，`else if` 实际上只是由单个 `if` 语句构成的 `else` 分支。

JavaScript 有 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 循环和 [`do...while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while) 循环。前者用于基础的循环；后者用于你希望确保循环体至少执行一遍的循环：

```js
while (true) {
  // 无限循环！
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript 的 [`for` 循环](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)和 C 以及 Java 中的一样；它能在单行中为循环提供控制信息。

```js
for (let i = 0; i < 5; i++) {
  // 将执行 5 次
}
```

JavaScript 也包含其他两个著名循环：[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)（其对[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)进行迭代，特别是数组）和 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)（其访问对象的全部[可枚举](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)属性）。

```js
for (const value of array) {
  // 使用值
}

for (const property in object) {
  // 使用对象属性
}
```

`switch` 语句用于基于相等检查的多个分支。

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

与 C 类似，case 从句在概念上和 [label](/zh-CN/docs/Web/JavaScript/Reference/Statements/label) 一样，所以如果你不添加 `break` 语句，执行会“落到”下一级。然而，它们实际上不是跳转表——`case` 从句可以是任意的表达式，不局限于字符串和数字字面量，以及从句是一个接着一个地执行，直到某个从句的值与待匹配的值相等。两者的比较采用的是 `===` 运算符。

与一些语言（如 Rust）不一样，JavaScript 中的控制流结构是语句，这意味着你不能将它们赋值给变量，就像 `const a = if (x) { 1 } else { 2 }`。

使用 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 语句处理 JavaScript 错误。

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("网站构建失败：", e);
}
```

使用 [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw) 语句抛出错误。许多内置的运算也可以抛出错误。

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("站点目录不存在");
  }
}
```

一般来说，你无法确定刚才捕获的错误的类型，因为从 `throw` 语句可以抛出任何值。然而，你通常可以假设它是 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 实例，正如上面的示例那样。有一些内置的 `Error` 子类（如 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 和 [`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)），你可以用它们提供错误相关的额外语义。在 JavaScript 中没有条件捕获——如果你只想处理一种错误类型，你需要捕获所有错误，使用 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 识别错误类型，然后重新抛出其他的错误类型。

```js
try {
  buildMySite("./website");
} catch (e) {
  if (e instanceof RangeError) {
    console.error("看起来参数超出了范围：", e);
    console.log("重试...");
    buildMySite("./website");
  } else {
    // 不知道如何处理其他的错误类型；抛出它们这样调用栈靠上的代码可能捕获以及处理它
    throw e;
  }
}
```

如果错误没有被调用栈中的任何 `try...catch` 捕获，那么程序将会退出。

想要了解完整的控制流语句列表，参见[参考章节](/zh-CN/docs/Web/JavaScript/Reference/Statements)。

## 对象

可以将 JavaScript 对象当作是键值对的集合。因此，它们类似于：

- Python 中的字典。
- Perl 和 Ruby 中的散列。
- C 和 C++ 中的散列表。
- Java 中的 HashMap。
- PHP 中的关联数组。

JavaScript 对象是散列。与静态类型语言中的对象不同，JavaScript 中的对象没有固定的形状——可以随时添加、删除、重新排序、修改或动态查询属性。对象键总是[字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)或 [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)——即便是通常被认为是整数的数组索引，但在底层实际上是字符串。

通常使用字面量语法创建对象：

```js
const obj = {
  name: "胡罗卜",
  for: "麦克斯",
  details: {
    color: "橙色",
    size: 12,
  },
};
```

可以使用点号（`.`）或方括号（`[]`）[访问](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)对象属性。当使用点记号时，键必须是合法的[标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)。另一方面，方括号允许使用动态的键索引对象。

```js
// 点记号
obj.name = "西蒙";
const name = obj.name;

// 括号记号
obj["name"] = "西蒙";
const name = obj["name"];

// 可以使用变量定义键
const userName = prompt("你的键是什么？");
obj[userName] = prompt("键的值是什么？");
```

可以链式使用属性访问：

```js
obj.details.color; // 橙色
obj["details"]["size"]; // 12
```

对象总是引用，所以除非显式地复制对象，否则改变对象将会对外部可见。

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

这也意味着分别创建的两个对象永不可能相等（`!==`），因为它们是不同的引用。如果你有同一个对象的两个引用，修改其中一个将能通过另一个观察到。

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

想要了解关于对象和原型的更多知识，参见 [`Object` 参考页](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)。想要了解关于对象初始化器语法的更多信息，参见其[参考页](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

本文忽略了有关对象原型和继承的全部细节，因为你通常使用[类](#类)实现继承，不需要接触到底层机制（你可能听说底层机制很深奥）。想要学习底层机制，参见[继承与原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)。

## 数组

JavaScript 中的数组实际上是一种特殊的对象类型。它们的用法和常规的对象非常像（天生只能使用 `[]` 语法访问数字属性），但是它们有一个称作 `length` 的神奇属性。这个属性的值总是比数组中最高的索引大 1。

通常用数组字面量创建数组：

```js
const a = ["狗", "猫", "母鸡"];
a.length; // 3
```

JavaScript 数组仍然是对象——你可以给它们赋任意的属性，包括任意的数字索引。唯一的“魔法”就是在你设置特定的索引时会自动更新 `length`。

```js
const a = ["狗", "猫", "母鸡"];
a[100] = "狐狸";
console.log(a.length); // 101
console.log(a); // ['狗', '猫', '母鸡', empty × 97, '狐狸']
```

上面的数组称作[_稀疏数组_](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，因为中间有空的槽，这会导致引擎将数组负优化为散列表。确保数组是紧密排列的！

越界索引不会抛出异常。如果你查询的是不存在数组索引，你得到的返回值是 `undefined`：

```js
const a = ["狗", "猫", "母鸡"];
console.log(typeof a[90]); // undefined
```

数组元素的类型是任意的，数组大小可以任意的变大或变小。

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

可以用 `for` 循环迭代数组，正如你在其他类 C 语言中做的那样：

```js
for (let i = 0; i < a.length; i++) {
  // 使用 a[i]
}
```

或者，因为数组是可迭代对象，你可以使用 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环，它和 C++/Java 的 `for (int x : arr)` 语法是同义的：

```js
for (const currentValue of a) {
  // 使用 currentValue
}
```

数组有很多[数组方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。这些方法中很多都会迭代数组——例如，[`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 会为每一个数组元素执行回调，然后返回一个新数组：

```js
const babies = ["狗", "猫", "母鸡"].map((name) => `${name}宝宝`);
// babies = ['狗宝宝', '猫宝宝', '母鸡宝宝']
```

## 函数

除了对象之外，函数也是理解 JavaScript 的核心组件。最基础的函数声明看起来像这样：

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

JavaScript 函数可以接收 0 个或多个参数。函数体可以包含任意数量的语句，也可以声明函数局部变量。[`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句可以在任何时候返回一个值，用于终止函数。如果没有使用 return 语句（或 return 的是空值），JavaScript 会返回 `undefined`。

函数被调用时的参数可以比函数规定的参数少或多。如果调用函数时，没有传递它期待的参数，那么这些参数会设置为 `undefined`。如果传递的参数比函数期待的多，函数会忽略额外的参数。

```js
add(); // NaN
// 等价于 add(undefined, undefined)

add(2, 3, 4); // 5
// 使用前两个参数，忽略参数 4
```

还有一些其他可用的参数语法。例如，[剩余参数语法](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)能将传递给函数的额外参数都收集到数组中，和 Python 的 `*args` 类似（因为 JS 在语言层面没有具名参数，所以没有 `**kwargs`）。

```js
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

在上面的代码中，变量 `args` 拥有传递给函数的所有值。

剩余参数会存储位于它的声明*之后*的所有参数，而不是之前。换句话说，`function avg(firstValue, ...args)` 会将传递给函数的第一个值存储在 `firstValue` 变量中，剩余的参数存储在 `args` 中。

如果有一个接收一组参数的函数并且你已经将这些参数存储在数组中，你可以在函数调用中使用[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)将数组*展开*为一组元素。例如，`avg(...numbers)`。

我们提到过 JavaScript 没有具名参数。然而使用[对象解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)实现具名参数是可能的，对象解构能方便地实现打包和解包。

```js
// 注意 { } 括号：这是在解构一个对象
function area({ width, height }) {
  return width * height;
}

// 这里的 { } 括号创建了一个新对象
console.log(area({ width: 2, height: 3 }));
```

[_默认参数_](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)语法允许被忽略的参数（或值为 `undefined` 的参数）有默认值。

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1，而不是 NaN
```

### 匿名函数

JavaScript 能让你创建匿名函数——也就是没有名字的函数。在实践中，匿名函数一般用作其他函数的参数、立即被赋值给用于激活函数的变量、或者作为另一个函数的返回值。

```js
// 注意，圆括号前面没有函数名
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

这样就能用参数调用 `avg()` 激活匿名函数——也就是说，它从语义上和使用 `function avg() {}` 声明语法声明函数是等价的。

也有另一种定义匿名函数的方式——使用[箭头函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。

```js
// 注意，圆括号前面没有函数名
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// 简单地返回表达式时可以忽略 `return`
const sum = (a, b, c) => a + b + c;
```

箭头函数从语义上和函数表达式不等价——想要了解更多信息，参见它的[参考页面](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。

有另一种有效使用匿名函数的方式：可以在单个表达式中同时声明和激活匿名函数，这称作[立即调用函数表达式（IIFE）](/zh-CN/docs/Glossary/IIFE)：

```js
(function () {
  // …
})();
```

想要了解 IIFE 的用法，你可以阅读[用闭包模拟私有方法](/zh-CN/docs/Web/JavaScript/Guide/Closures#用闭包模拟私有方法)。

### 递归函数

JavaScript 能递归地调用函数。这对于处理树结构尤其有用，例如浏览器 DOM 中的树结构。

```js
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

也可以对函数表达式命名，这样就能对其进行递归。

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

上面的示例中给函数表达式提供的名字仅在函数的自有作用域中可用。这能让引擎执行更多的优化并生成更可读的代码。名字也能在调试器和一些栈追踪中显示，能节省调试时间。

如果你习惯函数式编程，注意 JavaScript 中递归的性能影响。虽然语言规范规定了[尾递归优化](https://zh.wikipedia.org/wiki/尾调用)，但由于恢复栈追踪和调试的困难，只有 JavaScriptCore（用于 Safari）实现了它。对于深递归，考虑使用迭代作为替代，避免栈溢出。

### 函数是头等对象

JavaScript 函数是头等对象。这意味着它们可以被赋值给变量、作为参数被传递给其他函数、作为其他函数的返回值。此外，JavaScript 支持开箱即用不需要显式捕获的[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)，让你能方便地应用函数式编程风格。

```js
// 返回函数的函数
const add = (x) => (y) => x + y;
// 接收函数的函数
const babies = ["狗", "猫", "母鸡"].map((name) => `${name}宝宝`);
```

注意，JavaScript 函数自身是对象——和 JavaScript 中的其他值一样——你可以添加或修改函数上的属性，就像前面在对象章节中看到的那样。

### 内部函数

可以在其他函数内部声明 JavaScript 函数。JavaScript 中嵌套函数的一个重要的细节就是它们能访问位于其父函数的作用域中的变量：

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc 不能使用这个变量
    return a + b;
  }
  return nestedFunc(); // 5
}
```

这为书写更具维护性的代码提供了大量的实用方法。如果被调用的函数依赖的一两个其他函数在代码的其他地方没有任何用处，你可以将这些实用函数嵌套在被调用函数中。这样可以减少全局作用域中的函数数量。

这也是对全局变量诱惑的一个有力反驳。在书写复杂代码时，通常喜欢用全局变量在多个函数之间共享值，而这会导致代码变得难以维护。嵌套函数可以共享其父函数中的变量，这样你就能使用那个机制将函数耦合起来，以及不会污染全局命名空间。

## 类

JavaScript 提供的[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)语法和 Java 语言的非常类似。

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `你好，我是${this.name}！`;
  }
}

const p = new Person("玛丽亚");
console.log(p.sayHello());
```

JavaScript 类只是必须使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符初始化的函数。每次实例化类时，它会返回一个包含类所指定的方法和属性的对象。类并不强制执行代码组织——例如，你可以有返回类的函数，你可以每个文件有多个类。下面是一个随意创建类的例子：就是一个从箭头函数返回的表达式。这个模式称作[混入](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends#混入)。

```js
const withAuthentication = (cls) =>
  class extends cls {
    authenticate() {
      // …
    }
  };

class Admin extends withAuthentication(Person) {
  // …
}
```

在前面添加 `static` 创建静态属性。在前面添加井号 `#`（不是 `private`）创建私有属性。井号是属性名不可缺少的一部分。（把 `#` 当作 Python 中的 `_`。）与大多数其他语言不同，绝对没有办法在类体外读取私有属性——甚至在派生类中也不行。

想要了解各种类特性的详细指南，你可以阅读[指南页](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)。

## 异步编程

JavaScript 本质上是单线程的。没有[并行](https://zh.wikipedia.org/wiki/并行计算)；只有[并发](https://zh.wikipedia.org/wiki/并发计算)。异步编程由[事件循环](/zh-CN/docs/Web/JavaScript/Reference/Execution_model)驱动，事件循环准许一组任务入队并轮询任务直至完成。

在 JavaScript 中，有三种惯用的书写异步代码的方式：

- 基于回调的（例如，{{domxref("Window.setTimeout", "setTimeout()")}}）
- 基于 {{jsxref("Global_Objects/Promise", "Promise")}} 的
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}，是 Promise 的语法糖

例如，JavaScript 中读取文件的操作可能像下面这样：

```js
// 基于回调的
fs.readFile(filename, (err, content) => {
  // 在读取文件时激活回调，可能得过一会才读取文件
  if (err) {
    throw err;
  }
  console.log(content);
});
// 这里的代码会在等待读取文件的期间被执行

// 基于 Promise 的
fs.readFile(filename)
  .then((content) => {
    // 读取文件时发生的事
    console.log(content);
  })
  .catch((err) => {
    throw err;
  });
// 这里的代码会在等待读取文件的期间被执行

// Async/await
async function readFile(filename) {
  const content = await fs.readFile(filename);
  console.log(content);
}
```

核心语言并没有指定任何的异步编程特性，但在与外部环境交互时，这个特性非常重要——从[询问用户权限](/zh-CN/docs/Web/API/Permissions_API)，[获取数据](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)，到[读取文件](https://nodejs.org/api/fs.html)。保持潜在地长时间运行的操作异步能确保这个操作等待期间其他进程仍然能运行——例如，在等待用户点击按钮授予权限期间，浏览器不会冻结。

如果你有一个异步的值，同步地得到这个值是不可能的。例如，如果你有一个 promise，你只能通过 [`then()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 方法访问最终的结果。同样地，{{jsxref("Operators/await", "await")}} 只能被用于异步上下文中，异步上下文通常是异步函数或模块。promise _永不阻塞_——只是依赖于 promise 的结果的逻辑会被延迟；在此期间，其余部分继续执行。如果你是函数式编程者，你可以将 promise 当作[单子](<https://zh.wikipedia.org/wiki/单子 (函数式编程)>)，可以用 `then()` 映射 promise（然而，promise 不是*严格意义上的*单子，它们会自动展平；例如，你不能有 `Promise<Promise<T>>`）。

实际上，单线程模型让 Node.js 成为服务器端编程的热门选择，因为它非阻塞的 IO，使得处理大量的数据库或文件系统请求非常高效。然而，纯 JavaScript 的 CPU 密集型（计算密集型）任务仍会阻塞主线程。为了实现真正的并行，你需要使用 [worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)。

想要学习更多有关异步编程的知识，你可以阅读[使用 Promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)，或者关注[异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS) 教程。

## 模块

JavaScript 也指定了一个大多数运行时都支持的模块系统。一个模块通常是一个文件，由文件的文件路径或 URL 标识。你可以使用 {{jsxref("Statements/import", "import")}} 和 {{jsxref("Statements/export", "export")}} 语句在模块间交换数据：

```js
import { foo } from "./foo.js";

// 未导出的变量是模块的本地变量
const b = 2;

export const a = 1;
```

不像 Haskell、Python、Java 等，JavaScript 模块解析完全由宿主定义——通常是基于 URL 或 文件路径，因此相对文件路径“就能有效”，并且相对的是当前模块的路径，而不是某个项目的根路径。

然而，JavaScript 语言没有提供标准的库模块——所有的核心功能由全局变量（例如，[`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 和 [`Intl`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)）驱动。由于 JavaScript 长期缺乏模块系统，导致选择使用模块系统需要改变一些运行时设置。

不同的运行时可能使用不同的模块系统。例如，[Node.js](https://nodejs.org/zh-cn) 使用 [npm](https://www.npmjs.com/) 包管理器以及主要是基于文件系统的，然而 [Deno](https://deno.com/) 和浏览器是完全基于 URL 的，可以从 HTTP URL 解析模块。

想要了解更多信息，参见[模块指南页](/zh-CN/docs/Web/JavaScript/Guide/Modules)。

## 语言和运行时

在本文中，我们不断提及某个特性是*语言级别的*，而其他的则是*运行时级别的*。

JavaScript 是通用型脚本语言。[核心语言规范](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_核心语言（ecmascript）)专注于纯计算逻辑。它不处理任何的输入/输出——实际上，没有额外的运行时级别的 API（特别是 [`console.log()`](/zh-CN/docs/Web/API/console/log_static)），JavaScript 程序的行为是完全不可预测的。

运行时或者宿主将数据反馈给 JavaScript 引擎（解释器）、提供额外的全局属性、为引擎提供钩子与外部世界交互。模块解析、读取数据、打印消息、发送网络请求等都是运行时级别的操作。自诞生以来，JavaScript 已被各种环境所采用。例如，浏览器（其提供诸如 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 这样的 API）、Node.js（其提供诸如[文件系统访问](https://nodejs.org/api/fs.html)这样的 API）等。JavaScript 已经成功整合到 Web（其为 JavaScript 的主要用途）、移动应用、桌面应用、服务器端应用、无服务、嵌入式系统等等。在学习 JavaScript 核心特性的同时，了解宿主提供的特性也很重要，以便将知识付诸实践。例如，你可以阅读所有的 [Web 平台 API](/zh-CN/docs/Web/API)，其由浏览器实现，有时非浏览器宿主也会实现。

## 继续探索

本文提供了关于各种 JavaScript 特性与其他语言相比的基本见解。如果你想了解更多关于语言本身以及每个特性的细微差别，可以阅读 [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide) 和 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)。

由于篇幅和复杂性，我们省略了语言的一些基本部分，但你可以自行探索：

- [继承与原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)
- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
- [迭代](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)
