---
title: 函数
slug: Web/JavaScript/Reference/Functions
---

{{jsSidebar("Functions")}}一般来说，一个函数是可以通过外部代码调用的一个“子程序”（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。在 JavaScript 中，函数是**头等 (**first-class**)**对象，因为它们可以像任何其他**对象**一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是[`Function`](/zh-CN/JavaScript/Reference/Global_Objects/Function)对象。

有关更多示例和说明，请参阅[有关函数的 JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide/Functions)。

## 描述

在 JavaScript 中，每个函数其实都是一个`Function`对象。查看{{jsxref("Function")}}页面`了解其`属性和方法。

如果一个函数中没有使用 return 语句，则它默认返回`undefined`。要想返回一个特定的值，则函数必须使用 [`return`](/zh-CN/JavaScript/Reference/Statements/return) 语句来指定一个要返回的值。(使用[new](/zh-CN/JavaScript/Reference/Operators/new)关键字调用一个[构造函数](/zh-CN/JavaScript/Reference/Global_Objects/Object/constructor)除外)。

调用函数时，传递给函数的值被称为函数的实参（值传递），对应位置的函数参数名叫作形参。如果实参是一个包含原始值 (数字，字符串，布尔值) 的变量，则就算函数在内部改变了对应形参的值，返回后，该实参变量的值也不会改变。如果实参是一个对象引用，则对应形参会和该实参指向同一个对象。假如函数在内部改变了对应形参的值，返回后，实参指向的对象的值也会改变：

```js
/* 定义函数 myFunc */
function myFunc(theObject) {
  //实参 mycar 和形参 theObject 指向同一个对象。
  theObject.brand = "Toyota";
}

/*
 * 定义变量 mycar;
 * 创建并初始化一个对象;
 * 将对象的引用赋值给变量 mycar
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

/* 弹出 'Honda' */
window.alert(mycar.brand);

/* 将对象引用传给函数 */
myFunc(mycar);

/*
 * 弹出 'Toyota',对象的属性已被修改。
 */
console.log(mycar.brand);
```

在函数执行时，[`this` 关键字](/zh-CN/JavaScript/Reference/Operators/this)并不会指向正在运行的函数本身，而是指向调用该函数的对象。所以，如果你想在函数内部获取函数自身的引用，只能使用函数名或者使用[arguments.callee](/zh-CN/JavaScript/Reference/Functions_and_function_scope/arguments/callee)属性 (**[严格模式](/zh-CN/JavaScript/Strict_mode)**下不可用)，如果该函数是一个匿名函数，则你只能使用后者。

## 函数定义

定义函数有多种方法：

### 函数声明 (函数语句)

有一个特殊的语法来声明函数 (查看[函数语句](/zh-CN/JavaScript/Reference/Statements/function)了解详情)：

```plain
function name([param[, param[, ... param]]]) { statements }
```

- `name`
  - : 函数名。
- `param`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

### 函数表达式 (`function` expression)

函数表达式和函数声明非常相似，它们甚至有相同的语法（查看[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)了解详情）。一个函数表达式可能是一个更大的表达式的一部分。可以定义函数“名字”（例如可以在调用堆栈时使用）或者使用“匿名”函数。函数表达式不会提升，所以不能在定义之前调用。

```plain
var myFunction = function name([param[, param[, ... param]]]) { statements }
```

- `name`
  - : 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。
- `param`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

下面是**匿名**函数的一个例子（函数没有名字）：

```js
var myFunction = function () {
  // statements
};
```

也可以在定义时为函数**命名**：

```js
var myFunction = function namedFunction() {
  // statements
};
```

命名函数表达式的好处是当我们遇到错误时，堆栈跟踪会显示函数名，容易寻找错误。

可以看到，上面的两个例子都不以 function 开头。不以 function 开头的函数语句就是函数表达式定义。

当函数只使用一次时，通常使用**IIFE (_Immediately Invokable Function Expressions_)。**

```js
(function () {
  statements;
})();
```

**IIFE**是在函数声明后立即调用的函数表达式。

### 函数生成器声明 (`function*` 语句)

函数声明有一种特殊的语法 (详情请查阅{{jsxref('Statements/function*', 'function* statement')}} )：

```plain
function* name([param[, param[, ...param]]]) { statements }
```

- `name`
  - : 函数名称。
- `param`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

### 函数生成器表达式 (`function*`表达式)

构造函数表达式和函数声明类似，并且有着相同的语法 (详情请查阅 {{jsxref('Operators/function*', 'function* expression')}} ):

```plain
function* [name]([param] [, param] [..., param]) { statements }
```

- `name`
  - : 函数名称。函数名可以被省略，在这种情况下该函数将变成匿名函数。
- `param`
  - : 传递给函数的参数的名称。
- `statements`
  - : 组成函数体的声明语句。

### 箭头函数表达式 (=>)

箭头函数表达式有着更短的语法，并在词汇方面结合这个值 (详情请查阅 [arrow functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ):

```plain
([param] [, param]) => { statements } param => expression
```

- `param`
  - : 参数名称。零参数需要用 () 表示。只有一个参数时不需要括号。(例如 `foo => 1`)
- `statements or expression`
  - : 多个声明 statements 需要用大括号括起来，而单个表达式时则不需要。表达式 expression 也是该函数的隐式返回值。

### `Function`构造函数

> **备注：** 不推荐使用 `Function` 构造函数创建函数，因为它需要的函数体作为字符串可能会阻止一些 JS 引擎优化，也会引起其他问题。

所有其他对象，{{jsxref("Function")}} 对象可以用 new 操作符创建：

```plain
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : 函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 JavaScript 标识符规则的字符串或用逗号分隔的字符串列表，例如“x”,“theValue”或“a,b”。
- `functionBody`
  - : 一个构成的函数定义的，包含 JavaScript 声明语句的字符串。

把 Function 的构造函数当作函数一样调用 (不使用 new 操作符) 的效果与作为 Function 的构造函数调用一样。

### 生成器函数的构造函数

> **备注：** `GeneratorFunction` 不是一个全局对象，但可以从构造函数实例取得。(详情请查阅[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/生成器函数)).

> **备注：** 不推荐使用构造器函数的构造函数 (`GeneratorFunction` constructor) 创建函数，因为它需要的函数体作为字符串可能会阻止一些 JS 引擎优化，也会引起其他问题。

所有其他对象，{{jsxref("GeneratorFunction")}} 对象可以用 new 操作符创建：

```plain
new GeneratorFunction (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : 函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 JavaScript 标识符规则的字符串或用逗号分隔的字符串列表，例如“x”,“theValue”或“a,b”。
- `functionBody`
  - : 一个构成的函数定义的，包含 JavaScript 声明语句的字符串。

把 Function 的构造函数当作函数一样调用 (不使用 new 操作符) 的效果与作为 Function 的构造函数调用一样。

## 函数参数

### 默认参数

如果没有值或传入了未定义的值，默认函数参数允许形式参数使用默认值初始化。参见：[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)。

### 剩余参数

剩余参数语法允许将数量不限的参数描述成一个数组。参见：[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)。

## `arguments`对象

你可以参阅在函数里使用`arguments`对象的函数参数。参见：[arguments](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)。

- [`arguments`](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments): 一个包含了传递给当前执行函数参数的类似于数组的对象。
- [`arguments.callee`](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee) {{Deprecated_Inline}}: 当前正在执行的函数。
- [`arguments.caller`](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller){{Deprecated_Inline}} : 调用当前执行函数的函数。
- [`arguments.length`](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length): 传给函数的参数的数目。

## 方法函数定义

### Getter 和 setter 函数

你可以在支持添加新属性的任何标准的内置对象或用户定义的对象内定义 getter(访问方法) 和 setter(设置方法)。使用对象字面量语法定义 getters 和 setters 方法。

- [get](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)
  - : 当查找某个对象属性时，该对象属性将会与被调用函数绑定。
- [set](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
  - : 当试图设置该属性时，对象属性与被调用函数绑定。

### 方法定义语法

从 ECMAScript 6 开始，你可以用更短的语法定义自己的方法，类似于 getters 和 setters。详情请查阅 [method definitions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions) .

```js
var obj = {
  foo() {},
  bar() {},
};
```

## 构造函数 vs 函数声明 vs 函数表达式

对比下面的例子：

一个用`Function`构造函数定义的函数，被赋值给变量 multiply：

```js
var multiply = new Function("x", "y", "return x * y");
```

一个名为`multiply`的函数声明：

```js
function multiply(x, y) {
  return x * y;
} // 没有分号
```

一个匿名函数的函数表达式，被赋值给变量`multiply`：

```js
var multiply = function (x, y) {
  return x * y;
};
```

一个命名为`func_named`的函数的函数表达式，被赋值给变量`multiply`：

```js
var multiply = function func_name(x, y) {
  return x * y;
};
```

### 差别

虽然有一些细微的差别，但所起的作用都差不多：

函数名和函数的变量存在着差别。函数名不能被改变，但函数的变量却能够被再分配。函数名只能在函数体内使用。倘若在函数体外使用函数名将会导致错误（如果函数之前是通过一个 var 语句声明的则是 undefined）。例如：

```js
var y = function x() {};
alert(x); // throws an error
```

当函数是通过 [`Function`'s toString method](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)被序列化时，函数名同样也会出现。

另一方面，被函数赋值的变量仅仅受限于它的作用域，该作用域确保包含着该函数被声明时的作用域。

正如第四个例子所展示的那样，函数名与被函数赋值的变量是不相同的。彼此之间没有关系。函数声明同时也创建了一个和函数名相同的变量。因此，与函数表达式定义不同，以函数声明定义的函数能够在它们被定义的作用域内通过函数名而被访问到：

使用用 '`new Function'定义的函数没有函数名。` 然而，在 [SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey) JavaScript 引擎中，其函数的序列化形式表现的好像它拥有一个名叫"anonymous"的名称一样。比如，使用 `alert(new Function())` 输出：

```js
function anonymous() {}
```

而实际上其函数并没有名称，`anonymous` 不是一个可以在函数内被访问到的变量。例如，下面的例子将会导致错误：

```js
var foo = new Function("alert(anonymous);");
foo();
```

和通过函数表达式定义或者通过 Function 构造函数定义的函数不同，函数声明定义的函数可以在它被声明之前使用。举个例子：

```js
foo(); // alerts FOO!
function foo() {
  alert("FOO!");
}
```

函数表达式定义的函数继承了当前的作用域。换言之，函数构成了闭包。另一方面，Function 构造函数定义的函数不继承任何全局作用域以外的作用域 (那些所有函数都继承的)。

通过函数表达式定义的函数和通过函数声明定义的函数只会被解析一次，而 Function 构造函数定义的函数却不同。也就是说，每次构造函数被调用，传递给 Function 构造函数的函数体字符串都要被解析一次。虽然函数表达式每次都创建了一个闭包，但函数体不会被重复解析，因此函数表达式仍然要快于"`new Function(...)`"。所以 Function 构造函数应尽可能地避免使用。

有一点应该要注意的，在通过解析 Function 构造函数字符串产生的函数里，内嵌的函数表达式和函数声明不会被重复解析。例如：

```js
var foo = new Function(
  "var bar = 'FOO!';\nreturn(function() {\n\talert(bar);\n});",
)();
foo(); // 函数体字符串"function() {\n\talert(bar);\n}"的这一部分不会被重复解析。
```

函数声明非常容易（经常是意外地）转换为函数表达式。当它不再是一个函数声明：

- 成为表达式的一部分
- 不再是函数或者脚本自身的“源元素”（source element）。“源元素”是脚本或函数体中的非嵌套语句。

```js
var x = 0; // source element
if (x === 0) {
  // source element
  x = 10; // 非 source element
  function boo() {} // 非 source element
}
function foo() {
  // source element
  var y = 20; // source element
  function bar() {} // source element
  while (y === 10) {
    // source element
    function blah() {} // 非 source element
    y++; //非 source element
  }
}
```

### 示例

```js
// 函数声明
function foo() {}

// 函数表达式
(function bar() {});

// 函数表达式
x = function hello() {};

if (x) {
  // 函数表达式
  function world() {}
}

// 函数声明
function a() {
  // 函数声明
  function b() {}
  if (0) {
    //函数表达式
    function c() {}
  }
}
```

## 块级函数

从 ECMAScript 6 开始，在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，块里的函数作用域为这个块。ECMAScript 6 之前不建议块级函数在严格模式下使用。

```js
"use strict";

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 in non-strict mode
```

### 非严格模式下的块级函数

一句话：不要用。

在非严格模式下，块中的函数声明表现奇怪。例如：

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: 兼容性风险
    console.log("This is zero.");
  }
}
```

ECMAScript 6 中，如果`shouldDefineZero`是 false，则永远不会定义 zero，因为这个块从不执行。然而，这是标准的新的一部分。这是历史遗留问题，无论这个块是否执行，一些浏览器会定义 zero。

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 下，所有支持 `ECMAScript 6` 的浏览器以相同的方式处理：只有在 shouldDefineZero 为 `true` 的情况下定义 `zero`，并且作用域只是这个块内。

有条件地定义一个函数的一个更安全的方法是把函数表达式赋给一个变量：

```js
var zero;
if (0) {
  zero = function () {
    console.log("This is zero.");
  };
}
```

## 示例

### 返回格式化数字

下面的函数返回一个字符串，其中包含了一个格式化的、以一个由 0 开头并填充的数字。

```js
// 这个函数返回一个由 0 开头并填充的字符串
function padZeros(num, totalLen) {
  var numStr = num.toString(); // 用字符串返回值进行初始化
  var numZeros = totalLen - numStr.length; // 计算 zeros 顺序
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}
```

下面的语句调用了 padZeros 函数：

```js
var result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
```

### 检测函数是否存在

你可以通过 **typeof** 操作符检测一个函数是否存在。在下面的例子中，用一个测试来演示检测 window 对象是否拥有一个 noFunc 函数的属性。如果存在，那就使用它；否则就采取其他的一些操作。

```js
if ("function" === typeof window.noFunc) {
  // use noFunc()
} else {
  // do something else
}
```

注意在 if 语句中，使用了 noFunc 的引用——在函数名的后面没有括号“（）”，所以实际函数并没有被调用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Function")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions")}}
- {{jsxref("Functions/Default_parameters", "Default parameters")}}
- {{jsxref("Functions/rest_parameters", "Rest parameters")}}
- {{jsxref("Functions/arguments", "Arguments object")}}
- {{jsxref("Functions/get", "getter")}}
- {{jsxref("Functions/set", "setter")}}
- {{jsxref("Functions/Method_definitions", "Method definitions")}}
- [Functions and function scope](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope)
