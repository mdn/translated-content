---
title: 语法和数据类型
slug: Web/JavaScript/Guide/Grammar_and_types
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

本章讨论 JavaScript 的基本语法、变量声明、数据类型和字面量（literal）。

## 基础

JavaScript 借鉴了 Java 的大部分语法，但同时也受到 Awk、Perl 和 Python 的影响。

JavaScript 是**区分大小写**的，并使用 **Unicode** 字符集。举个例子，可以将单词 Früh（在德语中意思是“早”）用作变量名。

```plain
var Früh = "foobar";
```

但是，由于 JavaScript 是大小写敏感的，因此变量 `früh` 和 `Früh` 则是两个不同的变量。

在 JavaScript 中，指令被称为{{Glossary("Statement", "语句")}}，并用分号（;）进行分隔。

如果一条语句独占一行的话，那么分号是可以省略的。（译者注：并不建议这么做。）但如果一行中有多条语句，那么这些语句必须以分号分开。

> **备注：** ECMAScript 规定了在语句的末尾自动插入分号（[ASI](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)）。（如果想要了解更多信息，请参阅 JavaScript [词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar) 。）

虽然不是必需的，但是在一条语句的末尾加上分号是一个很好的习惯。这个习惯可以大大减少代码中产生 bug 的可能性。

Javascript 源码从左往右被扫描并转换成一系列由 token、控制字符、行终止符、注释和空白字符组成的输入元素。空白字符指的是空格、制表符和换行符等。

## 注释

**Javascript 注释**的语法和 C++ 或许多其他语言类似：

```js
// 单行注释

/* 这是一个更长的，
   多行注释
*/

/* 然而，你不能，/* 嵌套注释 */ 语法错误 */
```

在代码执行过程中，注释将被自动跳过（不执行）。

> **备注：** 你可能会在一些 JavaScript 脚本中见到像这样 `#!/usr/bin/env node` 的第三种注释
>
> 这种注释我们称为**hashbang 注释**，这种注释被用来指定执行 JaveScript 脚本的引擎的路径，查看这篇文章来了解更详细的信息：[Hashbang 注释](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_注释)

## 声明

JavaScript 有三种声明方式。

- {{jsxref("Statements/var", "var")}}
  - : 声明一个变量，可选初始化一个值。
- {{jsxref("Statements/let", "let")}}
  - : 声明一个块作用域的局部变量，可选初始化一个值。
- {{jsxref("Statements/const", "const")}}
  - : 声明一个块作用域的只读常量。

### 变量

在应用程序中，使用变量来作为值的符号名。变量的名字又叫做{{Glossary("Identifier", "标识符")}}，其需要遵守一定的规则。

一个 JavaScript 标识符必须以字母、下划线（\_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，所以字母可以是从“A”到“Z”的大写字母和从“a”到“z”的小写字母。

你可以使用大部分 ISO 8859-1 或 Unicode 编码的字符作标识符，例如 å 和 ü（详情可查看[这篇博客文章](https://mathiasbynens.be/notes/javascript-identifiers-es6)）。你也可以使用 [Unicode 转义字符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals)作标识符。

合法的标识符示例：`Number_hits`、`temp99`、`$credit` 和 `_name`。

### 声明变量

你可以用以下三种方式声明变量：

- 使用关键词 `var` 。例如 `var x = 42`。这个语法可以用来声明局部变量和全局变量。
- 直接赋值。例如 `x = 42`。在函数外使用这种形式赋值，会产生一个全局变量。在严格模式下会产生错误。因此你不应该使用这种方式来声明变量。
- 使用关键词 `let` 。例如 `let y = 13`。这个语法可以用来声明块作用域的局部变量。參考下方[变量的作用域 (Variable scope)](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#变量的作用域)。

你可以使用[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)将[对象字面量](#对象字面量)的属性绑定到变量。就像这样 `let { bar } = foo`。这会创建一个名为 `bar` 的变量，并且将 `foo` 对象中属性名与之相同的属性的值赋给它。

你也可以直接给属性赋值。像这样 `x = 42`。这种声明方式将会创建一个[未声明全局变量](/zh-CN/docs/Web/JavaScript/Reference/Statements/var#描述)。这样做还会产生 JavaScript 警告。因为未声明的全局变量常常导致预期之外的行为，所以不建议使用。

### 变量求值

用 `var` 或 `let` 语句声明的变量，如果没有赋初始值，则其值为 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

如果访问一个未声明的变量会导致抛出 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) 异常：

```js
var a;
console.log("The value of a is " + a); // a 的值是 undefined

console.log("The value of b is " + b); // b 的值是 undefined
var b;
// 在你阅读下面的‘变量声明提升’前你可能会疑惑

console.log("The value of c is " + c); // 未捕获的引用错误：c 未被定义

let x;
console.log("The value of x is " + x); // x 的值是 undefined

console.log("The value of y is " + y); // 未捕获的引用错误：y 未被定义
let y;
```

你可以使用 `undefined` 来判断一个变量是否已赋值。在以下的代码中，变量`input`未被赋值，因此 [`if`](/zh-CN/docs/JavaScript/Reference/Statements/if...else) 条件语句的求值结果是 `true`。

```js
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```

`undefined` 值在布尔类型环境中会被当作 `false` 。例如，下面的代码将会执行函数 `myFunction`，因为数组 `myArray` 中的元素未被赋值：

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

数值类型环境中 `undefined` 值会被转换为 `NaN`。

```js
var a;
a + 2; // 计算为 NaN
```

当你对一个 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 变量求值时，空值 `null` 在数值类型环境中会被当作 0 来对待，而布尔类型环境中会被当作 `false`。例如：

```js
var n = null;
console.log(n * 32); // 在控制台中会显示 0
```

### 变量的作用域

在函数之外声明的变量，叫做*全局*变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做*局部*变量，因为它只能在当前函数的内部访问。

ECMAScript 6 之前的 JavaScript 没有[语句块](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#语句块)作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。例如，如下的代码将在控制台输出 5，因为 `x` 的作用域是声明了 `x` 的那个函数（或全局范围），而不是 `if` 语句块。

```js
if (true) {
  var x = 5;
}
console.log(x); // 5
```

如果使用 ECMAScript 6 中的 `let` 声明，上述行为将发生变化。

```js
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y 没有被声明
```

### 变量提升

JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。

```js
/**
 * 例子 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * 例子 2
 */
// will return a value of undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```

上面的例子，也可写作：

```js
/**
 * 例子 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * 例子 2
 */
var myvar = "my value";

(function () {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```

由于存在变量提升，一个函数中所有的`var`语句应尽可能地放在接近函数顶部的地方。这个习惯将大大提升代码的清晰度。

在 ECMAScript 6 中，`let` 和 `const` 同样**会被提升**变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。

```js
console.log(x); // ReferenceError
let x = 3;
```

### 函数提升

对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。

```js
/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* 函数表达式 */

baz(); // 类型错误：baz 不是一个函数

var baz = function () {
  console.log("bar2");
};
```

### 全局变量

实际上，全局变量是*全局对象*的属性。在网页中，（译注：缺省的）全局对象是 [`window`](/zh-CN/docs/Web/API/Window) ，所以你可以用形如 `window.`_`variable`_ 的语法来设置和访问全局变量。

因此，你可以通过指定 window 或 frame 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，在文档里声明一个叫 `phoneNumber` 的变量，那么你就可以在子框架里使用 `parent.phoneNumber` 的方式来引用它。

### 常量

你可以用关键字 `const` 创建一个只读的常量。常量标识符的命名规则和变量相同：必须以字母、下划线（\_）或美元符号（$）开头并可以包含有字母、数字或下划线。

```js
const PI = 3.14;
```

常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值。

常量的作用域规则与 `let` 块级作用域变量相同。若省略 `const` 关键字，则该标识符将被视为变量。

在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。例如：

```js
// 这会造成错误
function f() {}
const f = 5;

// 这也会造成错误
function f() {
  const g = 5;
  var g;

  //语句
}
```

然而，对象属性被赋值为常量是不受保护的，所以下面的语句执行时不会产生错误。

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

同样的，数组的被定义为常量也是不受保护的，所以下面的语句执行时也不会产生错误。

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
```

## 数据结构和类型

### 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型：

- 七种基本数据类型：

  - 布尔值（Boolean），有 2 个值分别是：`true` 和 `false`。
  - null，一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 `null` 与 `Null`、`NULL`或变体完全不同。
  - undefined，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
  - 数字（Number），整数或浮点数，例如： `42` 或者 `3.14159`。
  - 任意精度的整数（BigInt），可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
  - 字符串（String），字符串是一串表示文本值的字符序列，例如：`"Howdy"`。
  - 代表（Symbol，在 ECMAScript 6 中新添加的类型）。一种实例是唯一且不可改变的数据类型。

- 以及对象（Object）。

虽然这些数据类型相对来说比较少，但是通过他们你可以在程序中开发有用的功能。[对象](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object)和[函数](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function)是这门语言的另外两个基本元素。你可以把对象当作存放值的一个命名容器，然后将函数当作你的程序能够执行的步骤。

### 数据类型的转换

JavaScript 是一种动态类型语言 (dynamically typed language)。这意味着你在声明变量时可以不必指定数据类型，而数据类型会在代码执行时会根据需要自动转换。因此，你可以按照如下方式来定义变量：

```js
var answer = 42;
```

然后，你还可以给同一个变量赋予一个字符串值，例如：

```js
answer = "Thanks for all the fish...";
```

因为 JavaScript 是动态类型的，这种赋值方式并不会提示出错。

### 数字转换为字符串

在包含的数字和字符串的表达式中使用加法运算符（+），JavaScript 会把数字转换成字符串。例如，观察以下语句：

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
```

在涉及其他运算符时，JavaScript 语言不会把数字变为字符串。例如：

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### 字符串转换为数字

有一些方法可以将内存中表示一个数字的字符串转换为对应的数字。

- [`parseInt()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/parseInt)
- [`parseFloat()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/parseFloat)

`parseInt` 方法只能返回整数，所以使用它会丢失小数部分。另外，调用 parseInt 时最好总是带上进制（radix）参数，这个参数用于指定使用哪一种进制。

将字符串转换为数字的另一种方法是使用一元**加法运算符**。

```js
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// 注意：加入括号为清楚起见，不是必需的。
```

## 字面量

在 JavaScript 中，你可以使用各种字面量。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。本节将介绍以下类型的字面量：

- [数组字面量](#数组字面量)
- [布尔字面量](#布尔字面量)
- [数字字面量](#数字字面量)
- [对象字面量](#对象字面量)
- [RegExp 字面量](#regexp_字面量)
- [字符串字面量](#字符串字面量)

### 数组字面量

数组字面值是一个封闭在方括号对 (\[]) 中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当你使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数。

下面的示例用 3 个元素生成数组 `coffees`，它的长度是 3。

```js
var coffees = ["French Roast", "Colombian", "Kona"];

var a = [3];

console.log(a.length); // 1

console.log(a[0]); // 3
```

> **备注：** 这里的数组字面值也是一种对象初始化器。参考[对象初始化器的使用](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#使用对象初始化器)。

若在顶层（全局）脚本里用字面值创建数组，JavaScript 语言将会在每次对包含该数组字面值的表达式求值时解释该数组。另一方面，在函数中使用的数组，将在每次调用函数时都会被创建一次。

数组字面值同时也是数组对象。有关数组对象的详情请参见 {{jsxref("Array")}}。

#### 数组字面值中的多余逗号

你不必列举数组字面值中的所有元素。若你在同一行中连写两个逗号（,），数组中就会产生一个没有被指定的元素，其初始值是 `undefined`。以下示例创建了一个名为 `fish` 的数组：

```js
var fish = ["Lion", , "Angel"];
```

在这个数组中，有两个已被赋值的元素，和一个空元素（fish\[0] 是 "Lion"，fish\[1] 是 undefined，而 fish\[2] 是 "Angel"）。

如果你在元素列表的尾部添加了一个逗号，它将会被忽略。在下面的例子中，数组的长度是 3，并不存在 myList\[3] 这个元素。元素列表中其他所有的逗号都表示一个新元素（的开始）。

> **备注：** 尾部的逗号在早期版本的浏览器中会产生错误，因而编程时的最佳实践方式就是移除它们。

```js
var myList = ["home", , "school"];
```

在下面的例子中，数组的长度是 4，元素 `myList[0]` 和 `myList[2]` 缺失。

```js
var myList = [, "home", , "school"];
```

再看一个例子。在这里，该数组的长度是 4，元素 `myList[1]` 和 `myList[3]` 被漏掉了。（但是）只有最后的那个逗号被忽略。

```js
var myList = ["home", , "school", ,];
```

理解多余的逗号（在脚本运行时会被如何处理）的含义，对于从语言层面理解 JavaScript 是十分重要的。但是，在你自己写代码时：**显式地将缺失的元素声明为 `undefined`，将大大提高你的代码的清晰度和可维护性**。

### 布尔字面量

布尔类型有两种字面量：`true`和`false`。

不要混淆作为布尔对象的真和假与布尔类型的原始值 true 和 false。布尔对象是原始布尔数据类型的一个包装器。参见[布尔对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)。

### 数字字面量

JavaScript 数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量

值得一提的是，语言标准要求数字字面量必须是无符号的。但是像`-123.4`这样的代码片段还是没有问题的，会被解释为一元操作符`-`应用于数字字面量`123.4`

#### 整数字面量

整数可以用十进制（基数为 10）、十六进制（基数为 16）、八进制（基数为 8）以及二进制（基数为 2）表示。

- 十进制整数字面量由一串数字序列组成，且没有前缀 0。
- 八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7。
- 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a\~f 或 A\~F。
- 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。

严格模式下，八进制整数字面量必须以 0o 或 0O 开头，而不能以 0 开头。

整数字面量举例：

```plain
0, 117 and -345 (十进制，基数为 10)
015, 0001 and -0o77 (八进制，基数为 8)
0x1123, 0x00111 and -0xF1A7 (十六进制，基数为 16 或"hex")
0b11, 0b0011 and -0b11 (二进制，基数为 2)
```

#### 浮点数字面量

浮点数字面值可以有以下的组成部分：

- 一个十进制整数，可以带正负号（即前缀“+”或“-”），
- 小数点（“.”），
- 小数部分（由一串十进制数表示），
- 指数部分。

指数部分以“e”或“E”开头，后面跟着一个整数，可以有正负号（即前缀“+”或“-”）。浮点数字面量至少有一位数字，而且必须带小数点或者“e”（大写“E”也可）。

简言之，其语法是：

```js
[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
```

例如：

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### 对象字面量

对象字面值是封闭在花括号对（{}）中的一个对象的零个或多个“属性名—值”对的（元素）列表。

> **警告：** 你不能在一条语句的开头就使用对象字面值，这将导致错误或产生超出预料的行为，因为此时左花括号（{）会被认为是一个语句块的起始符号。

以下是一个对象字面值的例子。对象`car`的第一个元素（译注：即一个属性/值对）定义了属性 `myCar`；第二个元素，属性 `getCar`，引用了一个函数调用（即 CarTypes("Honda")）；第三个元素，属性 `special`，使用了一个已有的变量（即 Sales）。

```js
var Sales = "Toyota";

function CarTypes(name) {
  return name === "Honda" ? name : "Sorry, we don't sell " + name + ".";
}

var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

更进一步的，你可以使用数字或字符串字面值作为属性的名字，或者在另一个字面值内嵌套上一个字面值。如下的示例中使用了这些可选项。

```js
var car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 javascript 标识符，它必须用""包裹。属性的名字不合法，那么便不能用。访问属性值，而是通过类数组标记 ("\[]") 访问和赋值。

```js
var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // 语法错误：Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // 语法错误：Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!
```

#### 增强的对象字面量

在 ES2015，对象字面值扩展支持在创建时设置原型，简写了 foo: foo 形式的属性赋值，方法定义，支持父方法调用，以及使用表达式动态计算属性名。总之，这些也使对象字面值和类声明更加紧密地联系起来，让基于对象的设计从这些便利中更加受益。

```js
var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

请注意：

```js
var foo = { a: "alpha", 2: "two" };
console.log(foo.a); // alpha
console.log(foo[2]); // two
//console.log(foo.2);  // SyntaxError: missing ) after argument list
//console.log(foo[a]); // ReferenceError: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
```

### RegExp 字面值

一个正则表达式是字符被斜线（译注：正斜杠“/”）围成的表达式。下面是一个正则表达式文字的一个例子。

```js
var re = /ab+c/;
```

### 字符串字面量

字符串字面量是由双引号（"）对或单引号（'）括起来的零个或多个字符。字符串被限定在同种引号之间；也即，必须是成对单引号或成对双引号。下面的例子都是字符串字面值：

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

你可以在字符串字面值上使用字符串对象的所有方法——JavaScript 会自动将字符串字面值转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象。你也能用对字符串字面值使用类似 String.length 的属性：

```js
console.log("John's cat".length);
// 将打印字符串中的字符个数（包括空格）
// 结果为：10
```

在 ES2015 中，还提供了一种[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)，模板字符串提供了一些语法糖来帮你构造字符串。这与 Perl、Python 还有其他语言中的字符串插值的特性非常相似。除此之外，你可以在通过模板字符串前添加一个 tag 来自定义模板字符串的解析过程，这可以用来防止注入攻击，或者用来建立基于字符串的高级数据抽象。

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.` // Multiline strings
`In JavaScript this is
 not legal.`;

// String interpolation
var name = "Bob",
  time = "today";
`Hello ${name}, how are you ${time}?`;

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

除非有特别需要使用字符串对象，否则，你应当始终使用字符串字面值。要查看字符串对象的有关细节，请参见[字符串对象](/zh-CN/docs/Web/JavaScript/Guide/Text_formatting#字符串对象)。

#### 在字符串中使用的特殊字符

作为一般字符的扩展，你可以在字符串中使用特殊字符，如下例所示。

```js
"one line \n another line";
```

以下表格列举了你能在 JavaScript 的字符串中使用的特殊字符。

| 字符        | 意思                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \0          | Null 字节                                                                                                                                                                                                    |
| \b          | 退格符                                                                                                                                                                                                       |
| \f          | 换页符                                                                                                                                                                                                       |
| \n          | 换行符                                                                                                                                                                                                       |
| \r          | 回车符                                                                                                                                                                                                       |
| \t          | Tab (制表符)                                                                                                                                                                                                 |
| \v          | 垂直制表符                                                                                                                                                                                                   |
| \\'         | 单引号                                                                                                                                                                                                       |
| \\"         | 双引号                                                                                                                                                                                                       |
| \\\\        | 反斜杠字符（\）                                                                                                                                                                                              |
| \\_XXX_     | 由从 0 到 377 最多三位八进制数*XXX*表示的 Latin-1 字符。例如，\251 是版权符号的八进制序列。                                                                                                                  |
| \x*XX*      | 由从 00 和 FF 的两位十六进制数字 XX 表示的 Latin-1 字符。例如，\ xA9 是版权符号的十六进制序列。                                                                                                              |
| _\uXXXX_    | 由四位十六进制数字 XXXX 表示的 Unicode 字符。例如，\ u00A9 是版权符号的 Unicode 序列。见[Unicode escape sequences](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) (Unicode 转义字符). |
| \u*{XXXXX}* | Unicode 代码点 (code point) 转义字符。例如，\u{2F804} 相当于 Unicode 转义字符 \uD87E\uDC04 的简写。                                                                                                          |

#### 转义字符

对于那些未出现在表 2.1 中的字符，其所带的前导反斜线 '\\' 将被忽略。但是，这一用法已被废弃，应当避免使用。

通过在引号前加上反斜线 '\\'，可以在字符串中插入引号，这就是*引号转义*。例如：

```js-nolint
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

代码的运行结果为：

```js
He read "The Cremation of Sam McGee" by R.W. Service.
```

要在字符串中插入'\\'字面值，必须转义反斜线。例如，要把文件路径 c:\temp 赋值给一个字符串，可以采用如下方式：

```js
var home = "c:\\temp";
```

也可以在换行之前加上反斜线以转义换行（译注：实际上就是一条语句拆成多行书写），这样反斜线和换行都不会出现在字符串的值中。

```js
var str =
  "this string \
is broken \
across multiple\
lines.";
console.log(str); // this string is broken across multiplelines.
```

Javascript 没有“heredoc”语法，但可以用行末的换行符转义和转义的换行来近似实现

```js
var poem =
  "Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.";
```

ECMAScript 2015 增加了一种新的字面量，叫做[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/template_strings)。它包含一些新特征，包括了多行字符串！

```js
var poem = `Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`;
```

## 更多信息

本章重点包括声明和类型的基本语法。学习更多关于的 JavaScript 语言，可参见本站以下章节：

- [流程控制与错误处理](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [循环与迭代](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [表达式与运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)

下一章，流程控制与错误处理

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
