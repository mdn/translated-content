---
title: 语法与类型
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

本章讨论 JavaScript 的基本语法、变量声明、数据类型和字面量。

## 基础

JavaScript 的大部分语法从 Java、C 和 C++ 借鉴而来，但同时也受到 Awk、Perl 和 Python 的影响。

JavaScript 是**区分大小写**的，并使用 **Unicode** 字符集。举个例子，可以将单词 Früh（在德语中意思是“早”）用作变量名。

```js
const Früh = "foobar";
```

但是，由于 JavaScript 是大小写敏感的，因此变量 `früh` 和 `Früh` 则是两个不同的变量。

在 JavaScript 中，指令被称为{{Glossary("Statement", "语句")}}，并用分号（;）进行分隔。

如果一条语句独占一行的话，那么分号是可以省略的。但如果一行中有多条语句，那么这些语句*必须*用分号进行分隔。

> [!NOTE]
> ECMAScript 规定了在语句的末尾自动插入分号（[ASI](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)）。（想要了解更多信息，参见有关 JavaScript 的[词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)的详细参考。）

然而，在一条语句的末尾总是加上分号被认为是最佳实践，即使是在非严格需要的时候。这个习惯可以大大减少代码出问题的可能性。

从左往右扫描 JavaScript 脚本的源文本并将其转换为输入元素（_token_、_控制字符_、_行终止符_、*注释*和{{Glossary("whitespace", "空白字符")}}，空白字符指的是空格、制表符和换行符等）序列。

## 注释

**注释**语法和 C++ 以及许多其他语言的注释语法一样：

```js
// 单行注释

/* 这是一个更长的，
 * 多行注释
 */
```

你不能嵌套块注释。这个情况通常是你在注释中意外地包含了 `*/` 序列，而它会结束这段注释。

```js-nolint example-bad
/* 然而，你不能，/* 嵌套注释 */ 语法错误 */
```

在这个例子中，你需要破坏 `*/` 模式。例如，插入反斜杠：

```js
/* 你可以通过转义正斜杠 /* 嵌套注释 *\/ */
```

注释的行为类似于空白字符，在脚本执行过程中会被忽略。

> [!NOTE]
> 你可能也会在一些 JavaScript 文件的开头见到像 `#!/usr/bin/env node` 这样的第三种注释。
>
> 它叫做 **hashbang 注释**语法，是一种用于指定执行脚本的特定 Javascript 引擎路径的特殊注释。想要了解更多细节，参见 [Hashbang 注释](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_注释)。

## 声明

JavaScript 有三种变量声明方式。

- {{jsxref("Statements/var", "var")}}
  - : 声明一个变量，可选择将其初始化为一个值。
- {{jsxref("Statements/let", "let")}}
  - : 声明一个块级作用域的局部变量，可选择将其初始化为一个值。
- {{jsxref("Statements/const", "const")}}
  - : 声明一个块级作用域的只读命名常量。

### 变量

在应用程序中，你将变量用作值的符号名。变量的名字又叫做{{Glossary("Identifier", "标识符")}}，其需要遵守一定的规则。

JavaScript 标识符通常以字母、下划线（`_`）或者美元符号（`$`）开头；后续的字符也可以是数字（`0`-`9`）。因为 JavaScript 是区分大小写的，所以字母包含从 `A` 到 `Z` 的大写字母和从 `a` 到 `z` 的小写字母。

你可以在标识符中使用大部分 Unicode 字母，例如 `å` 和 `ü`（想要了解更多细节，参见[词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)参考）。你也可以在标识符中使用 [Unicode 转义序列](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字符串字面量)表示字符。

合法的标识符示例：`Number_hits`、`temp99`、`$credit` 和 `_name`。

### 声明变量

你可以用以下两种方式声明变量：

- 使用关键字 {{jsxref("Statements/var", "var")}}。例如 `var x = 42`。这个语法可以用来声明**局部**变量和**全局**变量，具体取决于*执行上下文*。
- 使用关键字 {{jsxref("Statements/const", "const")}} 或 {{jsxref("Statements/let", "let")}} 。例如 `let y = 13`。这个语法可以用来声明块级作用域的局部变量。（参见下方的[变量作用域](#变量作用域)。）

你可以使用[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)语法声明用于解包值的变量。例如 `const { bar } = foo`。这会创建一个名为 `bar` 的变量，并且将 `foo` 对象中属性名与之相同的属性的值赋给它。

应该总是在声明变量后使用它们。JavaScript 过去允许给未声明的变量赋值，而这会创建一个**[未声明的全局](/zh-CN/docs/Web/JavaScript/Reference/Statements/var#描述)**变量。这在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#给未声明的变量赋值)下是一个错误，应该彻底避免使用它。

### 声明和初始化

在 `let x = 42` 这样的语句中，`let x` 称作*声明*，`= 42`称作*初始化器*。声明允许在后续的代码中访问变量时不会抛出 {{jsxref("ReferenceError")}}，而初始化器会给变量赋值。在 `var` 和 `let` 声明中，初始化器是可选的。如果声明变量时没有进行初始化，变量会被赋值为 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

```js
let x;
console.log(x); // 输出“undefined”
```

本质上，`let x = 42` 等价于 `let x; x = 42`。

`const` 声明总是需要初始化器，因为它们禁止在声明后进行任何类型的赋值，以及隐式地将其初始化为 `undefined` 很可能是程序员犯的错。

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### 变量作用域

一个变量可能属于下列[作用域](/zh-CN/docs/Glossary/Scope)之一：

- 全局作用域：在脚本模式中运行的所有代码的默认作用域。
- 模块作用域：在模块模式中运行的代码的作用域。
- 函数作用域：由{{Glossary("function", "函数")}}创建的作用域。

此外，用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 声明的变量属于另一个作用域：

- 块级作用域：用一对花括号创建的作用域（[块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)）。

当你在函数的外部声明变量时，该变量被称作*全局*变量，因为当前文档中任何其他代码都能使用它。当你在函数内声明变量时，该变量被称作*局部*变量，因为它仅在那个函数内可用。

`let` 和 `const` 声明也会被限制在声明所在的[块语句](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#块语句)中。

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

然而，用 `var` 创建的变量不是块级作用域的，而只是块所在的*函数（或全局作用域）*的。

例如，下列代码会输出 `5`，因为 `x` 的作用域是全局上下文（如果代码是函数的一部分的话，就是函数上下文）。`x` 的作用域不受附近的 `if` 语句块的限制。

```js
if (true) {
  var x = 5;
}
console.log(x); // x 是 5
```

### 变量提升

用 `var` 声明的变量会被[提升](/zh-CN/docs/Glossary/Hoisting)，意味着你可以在该变量所在的作用域的任意地方引用该变量，即使还没有到达变量声明的地方。你可以看见 `var` 声明好像被提升到该变量的函数或全局作用域的顶部。然而，如果你在声明变量之前访问该变量，其值总是 `undefined`，因为只有该变量的*声明*和*默认初始化（为 `undefined`）*被提升，而不是它的*值赋值*。

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "局部值";
})();
```

上面的例子可以被解释为：

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "局部值";
})();
```

由于存在变量提升，一个函数中所有的 `var` 语句应尽可能地放在接近函数顶部的地方。这个最佳实践会提升代码的清晰度。

`let` 和 `const` 是否被提升是个定义争论。在变量声明之前引用块中的变量，将总是抛出 {{jsxref("ReferenceError")}}，因为该变量位于从块的开始到声明所在的“[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)”中。

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

与 `var` 声明不同（其仅提升声明，不提升其值），[函数声明](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数提升)是全部被提升——你可以在该函数的作用域中的任何地方安全地调用函数。想要了解更多讨论，参见[提升](/zh-CN/docs/Glossary/Hoisting)术语条目。

### 全局变量

实际上，全局变量是*全局对象*的属性。

在网页中，全局对象是 {{domxref("window")}}，所以你可以用 `window.variable` 语法读取和设置全局变量。在所有的环境中，[`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 变量（其自身也是一个全局变量）可以被用于读取和设置全局变量。这为不同 JavaScript 运行时提供了一个一致的接口。

因此，你可以通过指定 `window` 或 `frame` 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，如果在文档中声明了一个叫 `phoneNumber` 的变量，那么你就可以在 `iframe` 中使用 `parent.phoneNumber` 引用它。

### 常量

你可以用 {{jsxref("Statements/const", "const")}} 关键字创建一个只读命名常量。常量标识符的语法和任何变量标识符的语法相同：必须以字母、下划线或美元符号（`$`）开头并可以包含字母、数字或下划线。

```js
const PI = 3.14;
```

常量不可以通过赋值来改变其值或在脚本运行时被重新声明。必须为其初始化一个值。常量的作用域规则和 `let` 块级作用域变量的一致。

在同一作用域中，不能使用与变量名或函数名相同的名字来声明常量。例如：

```js-nolint example-bad
// 这会造成错误
function f() {}
const f = 5;

// 这也会造成错误
function f() {
  const g = 5;
  var g;
}
```

然而，`const` 仅阻止*重新赋值*，而不阻止*修改*。被赋值为常量的对象的属性是不受保护的，所以下面的语句执行时不会产生错误。

```js
const MY_OBJECT = { key: "值" };
MY_OBJECT.key = "其他值";
```

同样的，数组的元素也是不受保护的，所以下面的语句执行时也不会产生错误。

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## 数据结构和类型

### 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型：

- 七种{{Glossary("Primitive", "基本")}}数据类型：

  1. {{Glossary("Boolean")}}。`true` 和 `false`。
  2. {{Glossary("null")}}。一个表示空值的特殊关键字。（因为 JavaScript 是区分大小写的，所以 `null` 和 `Null`、`NULL` 或其他变体是不一样的。）
  3. {{Glossary("undefined")}}。一个未定义值的顶级属性。
  4. {{Glossary("Number")}}。整数或浮点数。例如，`42` 或 `3.14159`。
  5. {{Glossary("BigInt")}}。任意精度的整数。例如，`9007199254740992n`。
  6. {{Glossary("String")}}。表示文本值的字符序列。例如，`"Howdy"`。
  7. [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。其实例是唯一且不可变的数据类型。

- 以及 {{Glossary("Object")}}

虽然这些数据类型相对来说比较少，但是它们可以让你在程序中开发有用的功能。[函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)是这门语言的另一个基本元素。虽然函数从技术上讲是一种对象，但是你可以把对象当作存放值的命名容器，然后将函数当作你的程序能够执行的过程。

### 数据类型的转换

JavaScript 是一门*动态类型*语言。这意味着你在声明变量时可以不必指定该变量的数据类型。这也意味着在脚本执行期间会根据需要自动转换数据类型。

因此，你可以按照如下方式来定义变量：

```js
let answer = 42;
```

然后，你还可以给同一个变量赋予一个字符串值，例如：

```js
answer = "不客气，感谢所有的鱼！";
```

因为 JavaScript 是动态类型的，这种赋值方式并不会提示出错。

### 数字和“+”运算符

在使用 `+` 运算符的表达式中涉及数字和字符串，JavaScript 会把数字转换成字符串。例如，注意下列语句：

```js
x = "答案是 " + 42; // "答案是 42"
y = 42 + " 是答案"; // "42 是答案"
z = "37" + 7; // "377"
```

在使用其他运算符时，JavaScript *不*会把数字转换成字符串。例如：

```js
"37" - 7; // 30
"37" * 7; // 259
```

### 字符串转换为数字

有一些方法可以将内存中表示一个数字的字符串转换为数字。

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` 只返回整数，因此它在处理小数时用途有限。

> [!NOTE]
> 另外，`parseInt` 的最佳实践是总是带上*进制*参数，这个参数用于指定使用哪一种进制。

```js
parseInt("101", 2); // 5
```

将字符串转换为数字的另一种方法是使用 `+`（一元加）运算符。

```js-nolint
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// 注意：括号是为了清晰起见而添加的，不是必需的。
```

## 字面量

在 JavaScript 中，*字面量*可以表示值。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。本节将介绍以下类型的字面量：

- [数组字面量](#数组字面量)
- [布尔字面量](#布尔字面量)
- [数字字面量](#数字字面量)
- [对象字面量](#对象字面量)
- [RegExp 字面量](#regexp_字面量)
- [字符串字面量](#字符串字面量)

### 数组字面量

数组字面量是由一对方括号（`[]`）括起来的包含零个或多个表达式的列表，其中每个表达式代表一个数组元素。当你使用数组字面量创建数组时，该数组将会以指定的值作为其元素进行初始化，而其 `length` 被设定为指定的参数的个数。

下面的示例创建了含有 3 个元素的 `coffees` 数组，它的长度是 3。

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

每次字面量被求值时，数组字面量都会创建一个新的数组对象。例如，在全局作用域中用字面量定义的数组在脚本加载后被创建。然而，如果数组字面量位于函数内，每次调用函数时会初始化一个新数组。

> [!NOTE]
> 数组字面量创建 `Array` 对象。想要了解有关 `Array` 对象的细节，参见 {{jsxref("Array")}} 和[索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)。

#### 数组字面量中的多余逗号

如果你在数组字面量中连续放置两个逗号，数组会为未指定的元素留下一个空槽。以下示例创建了一个名为 `fish` 的数组：

```js
const fish = ["Lion", , "Angel"];
```

打印这个数组时，你会看见：

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

注意，第二项是“empty”，与实际的 `undefined` 值完全不同。当使用数组遍历方法（例如，[`Array.prototype.map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)）时，空槽会被跳过。然而，索引访问 `fish[1]` 仍会返回 `undefined`。

如果你在元素列表的尾部添加了一个逗号，它将会被忽略。

在下面的例子中，数组的 `length` 是 3，并不存在 `myList[3]` 这个元素。列表中所有其他的逗号都表示一个新元素。

```js
const myList = ["home", , "school"];
```

在下面的例子中，数组的 `length` 是 4，元素 `myList[0]` 和 `myList[2]` 缺失。

```js
const myList = [, "home", , "school"];
```

再看一个例子。在这里，该数组的 `length` 是 4，元素 `myList[1]` 和 `myList[3]` 缺失。**只有最后的那个逗号被忽略**。

```js
const myList = ["home", , "school", ,];
```

> **备注：** [尾后逗号](/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)在多行数组中能保持 git diff 整洁，因为向末尾添加元素只需要添加一行，而不需要修改前面的行。
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

理解多余多余逗号的行为对理解 JavaScript 这门语言也很重要。

然而，你在书写代码时，应该显式地将缺失的元素声明为 `undefined`，或者至少插入一个注释以突出元素缺失。这样做能提高代码的清晰度和维护性。

```js-nolint
const myList = ["home", /* 空 */, "school", /* 空 */, ];
```

### 布尔字面量

布尔类型有两种字面量值：`true` 和 `false`。

> [!NOTE]
> 不要将原始布尔值 `true` 和 `false` 与 {{jsxref("Boolean")}} 对象的真和假弄混。
>
> 布尔对象是原始布尔数据类型的包装器。想要了解更多信息，参见 {{jsxref("Boolean")}}。

### 数字字面量

JavaScript 数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量。

值得一提的是，语言规范要求数字字面量必须是无符号的。但是像 `-123.4` 这样的代码片段还是没有问题的，会被解释为一元操作符 `-` 应用于数字字面量 `123.4`。

#### 整数字面量

整数和 {{jsxref("BigInt")}} 字面量可以用十进制（基数 10）、十六进制（基数 16）、八进制（基数 8）和二进制（基数 2）表示。

- *十进制*整数字面量由数字序列组成，且没有前缀 `0`（零）。
- *八进制*的整数字面量以 `0`（或 `0O`、`0o`）开头，只能包括数字 0-7。
- *十六进制*整数字面量以 `0x`（或 `0X`）开头，可以包含数字（`0`-`9`）和字母 `a`-`f` 或 `A`-`F`。（字符的大小写不影响数值。因此，`0xa` = `0xA` = `10` 和 `0xf` = `0xF` = `15`。）
- *二进制*整数字面量以 `0b`（或 `0B`）开头，只能包含数字 `0` 和 `1`。
- {{jsxref("BigInt")}} 由整数字面量和 `n` 后缀组成。{{jsxref("BigInt")}} 也可以使用上面的基数。注意前缀零的八进制语法（例如，`0123n`）是不允许的，但 `0o123n` 是可以的。

整数字面量举例：

```plain
0, 117, 123456789123456789n（十进制，基数 10）
015, 0001, 0o777777777777n（八进制，基数 8）
0x1123, 0x00111, 0x123456789ABCDEFn（十六进制，“hex”或基数 16）
0b11, 0b0011, 0b11101001010101010101n（二进制，基数 2）
```

要想了解更多信息，参见[词法语法参考中的数字字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#数字字面量)。

#### 浮点数字面量

浮点数字面量可以有以下的组成部分：

- 一个无符号的十进制整数，
- 小数点（“.”），
- 小数部分（另一个十进制数），
- 指数部分。

指数部分以 `e` 或 `E` 开头，后面跟着一个整数，这个整数可以有正负号（即前缀 `+` 或 `-`）。浮点数字面量至少有一位数字，而且必须带小数点或者 `e`（`E`）。

简言之，其语法是：

```plain
[digits].[digits][(E|e)[(+|-)]digits]
```

例如：

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### 对象字面量

对象字面量是由一对花括号（`{}`）括起来的包含零个或多个属性名和相关值的列表。

> [!WARNING]
> 你不能在一条语句的开头就使用对象字面量！这将导致错误（或产生超出预料的行为），因为此时 `{` 会被认为是一个语句块的起始符号。

以下是一个对象字面量的例子。`car` 对象的第一个元素定义了属性 `myCar`，被赋值为一个新字符串（`"Saturn"`）；第二个元素，属性 `getCar`，立即被赋值为函数调用 `(carTypes("Honda"))` 的结果；第三个元素，属性 `special`，使用了一个已有的变量（`sales`）。

```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `对不起，我们不售卖 ${name}。`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

更进一步的，你可以使用数字或字符串字面量作为属性的名字，或者在另一个对象字面量内嵌套一个对象字面量。下列示例使用了这些可选项。

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 JavaScript {{Glossary("Identifier", "标识符")}}或数字，它必须用引号包裹。

属性的名字不合法，那么便不能用点（`.`）访问属性值。

```js-nolint example-bad
const unusualPropertyNames = {
  '': '空字符串',
  '!': '砰！'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

而是通过方括号表示法（`[]`）来访问。

```js example-good
console.log(unusualPropertyNames[""]); // 空字符串
console.log(unusualPropertyNames["!"]); // 砰！
```

#### 增强的对象字面量

对象字面量支持一组简写语法，包括在创建时设置原型、`foo: foo` 赋值的简写、定义方法、支持 `super` 调用以及使用表达式计算属性名。

总之，这些也使对象字面量和类声明更加紧密地联系起来，让基于对象的设计从这些便利中更加受益。

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // “handler: handler”的简写
  handler,
  // 方法
  toString() {
    // Super 调用
    return "d " + super.toString();
  },
  // 计算（动态的）属性名
  ["prop_" + (() => 42)()]: 42,
};
```

### RegExp 字面量

一个正则表达式字面量（详细定义参见[这篇文章](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)）是字符被正斜杠围成的表达式。下面是正则表达式字面量的一个示例。

```js
const re = /ab+c/;
```

### 字符串字面量

字符串字面量是由一对双引号（`"`）或单引号（`'`）括起来的零个或多个字符。字符串被限定在同种引号之间（也即，必须是成对单引号或成对双引号）。

下面是字符串字面量的示例：

```js-nolint
'foo'
"bar"
'1234'
'一行\n另一行'
"Joyo 的猫"
```

你应该使用字符串字面量，除非你特别需要使用 `String` 对象。想要了解有关 `String` 对象的细节，参见 {{jsxref("String")}}。

你可以在字符串字面量值上使用 {{jsxref("String")}} 对象的所有方法。JavaScript 会自动将字符串字面量转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象。你也可以使用字符串字面量的 `length` 属性。

```js
// 将打印字符串中的字符个数（包括空格）
console.log("John 的猫".length); // 结果为：7
```

[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)也可用。模板字面量由一对反引号（`` ` ``）（[重音符](https://zh.wikipedia.org/wiki/重音符)）包围，而不是双引号或单引号。

模板字面量为构建字符串提供了语法糖。（这与 Perl、Python 还有其他语言中的字符串插值的特性相似。）

```js-nolint
// 创建基本的字符串字面量
`在 JavaScript 中，“\n” 是换行符。`

// 多行字符串
`在 JavaScript 中，模板字符串可以
 跨越行，但是由双引号和单引号
 包裹的字符串不行。`

// 字符串插值
const name = 'Lev', time = 'today';
`你好 ${name}，${time} 过得怎么样？`
```

[带标签的模板](/zh-CN/docs/Web/JavaScript/Reference/Template_literals#带标签的模板)是用于指定模板字面量并调用“标签”函数解析模板字面量的紧凑语法。带标签的模板激活函数处理字符串和一组相关的值的方式只是更简洁、更语义化。模板标签函数的名字在模板字面量的前面——就像下面的示例中那样，模板标签函数的名字是 `print`。`print` 函数会插入参数，并对接收到的对象或数组进行序列化，以避免讨厌的 `[object Object]`。

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // 打印一个无序列表
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // 这个对象会被序列化为“[object Object]”。
    // 我们来打印更漂亮的东西。
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // 对于形式良好的模板字面量，总是有 N 个 args 和 (N+1) 个字符串 segments。
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = ["学习 JavaScript", "学习 Web API", "构建网站", "利润！"];

const progress = { javascript: 20, html: 50, css: 10 };

print`我需要做：
${todos}
当前进度为：${progress}
`;

// 我需要做：
// - 学习 JavaScript
// - 学习 Web API
// - 构建网站
// - 利润！
// 当前进度为：{"javascript":20,"html":50,"css":10}
```

因为带标签的模板字面量就是函数调用的语法糖，你可以将上面的功能重写为等价的函数调用：

```js
print(["我需要做：\n", "\n当前进度为：", "\n"], todos, progress);
```

这可能会让你想起 `console.log` 风格的插值：

```js
console.log("我需要做：\n%o\n当前进度为：%o\n", todos, progress);
```

你可以看到带标签的模板阅读起来比传统的“格式化”函数更自然，在传统的格式化函数中，不得不将变量和模板的声明分开。

#### 在字符串中使用的特殊字符

除了普通字符，你也可以在字符串中使用特殊字符，如下例所示。

```js
"一行\n另一行";
```

以下表格列举了你能在 JavaScript 的字符串中使用的特殊字符。

| 字符        | 意思                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `\0`        | 空字节                                                                                                                                                                               |
| `\b`        | 退格符                                                                                                                                                                               |
| `\f`        | 换页符                                                                                                                                                                               |
| `\n`        | 换行符                                                                                                                                                                               |
| `\r`        | 回车符                                                                                                                                                                               |
| `\t`        | 制表符                                                                                                                                                                               |
| `\v`        | 垂直制表符                                                                                                                                                                           |
| `\'`        | 撇号或单引号                                                                                                                                                                         |
| `\"`        | 双引号                                                                                                                                                                               |
| `\\`        | 反斜杠字符                                                                                                                                                                           |
| `\XXX`      | 由从 `0` 到 `377` 最多三位八进制数 `XXX` 表示的 Latin-1 字符。例如，`\251` 是版权符号的八进制序列。                                                                                  |
| `\xXX`      | 由从 `00` 和 `FF` 的两位十六进制数字 `XX` 表示的 Latin-1 字符。例如，`\xA9` 是版权符号的十六进制序列。                                                                               |
| `\uXXXX`    | 由四位十六进制数字 `XXXX` 表示的 Unicode 字符。例如，`\ u00A9` 是版权符号的 Unicode 序列。见 [Unicode 转义序列](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字符串字面量)。 |
| `\u{XXXXX}` | Unicode 码位转义。例如，`\u{2F804}` 相当于 Unicode 转义 `\uD87E\uDC04`。                                                                                                             |

#### 转义字符

对于那些未出现在表格中的字符，其所带的前导反斜杠将被忽略。但是，这一用法已被废弃，应当避免使用。

通过在引号前加上反斜杠，可以在字符串中插入引号，这就是*引号转义*。例如：

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

代码的运行结果为：

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

要在字符串中插入反斜杠字面量，必须转义反斜杠。例如，要把文件路径 `c:\temp` 赋值给一个字符串，可以采用如下方式：

```js
const home = "c:\\temp";
```

也可以在换行之前加上反斜杠以转义换行。这样反斜杠和换行都不会出现在字符串的值中。

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## 更多信息

本章重点包括声明和类型的基本语法。想要学习有关 JavaScript 的语言结构更多的信息，也可以参见本指南中的这些文章：

- [控制流与错误处理](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)指南
- [循环与迭代](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [表达式与运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)指南

在下一章中，我们将会学习控制流结构与错误处理。

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
