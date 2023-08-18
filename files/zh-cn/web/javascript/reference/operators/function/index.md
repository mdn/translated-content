---
title: 函数表达式
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

**`function`** 关键字可以用来在一个表达式中定义一个函数。

你也可以使用 [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 构造函数和一个[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)来定义函数。

## 语法

```plain
let function_expression = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```

从 [ES2015](/zh-CN/docs/)开始，你也可以使用[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 。

### 参数

- `name`
  - : 函数名称。可被省略，此种情况下的函数是匿名函数（_anonymous_）。函数名称只是函数体中的一个本地变量。
- `paramN`
  - : 被传递给函数的一个参数名称。一个函数至多拥有 255 个参数。
- `statements`
  - : 构成函数体的语句。

## 描述

函数表达式（function expression）非常类似于函数声明（function statement）（详情查看[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)），并且两者拥有几乎相同的语法。函数表达式与函数声明的最主要区别是函数名称（_function name_），在函数表达式中可省略它，从而创建匿名函数（_anonymous_ functions）。一个函数表达式可以被用作一个 IIFE（Immediately Invoked Function Expression，即时调用的函数表达式），它一旦定义就运行。更多信息请查看[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope)。

### 函数表达式提升 (Function expression hoisting)

JavaScript 中的函数表达式没有提升，不像函数声明，你在定义函数表达式之前不能使用函数表达式：

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### 命名函数表达式（Named function expression）

如果你想在函数体内部引用当前函数，则需要创建一个命名函数表达式。**然后函数名称将会（且只会）作为函数体（作用域内）的本地变量**。这样也可以避免使用非标准的 [arguments.callee](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments/callee) 属性。

```js
var math = {
  factorial: function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  },
};
```

被函数表达式赋值的那个变量会有一个 name 属性，如果你把这个变量赋值给另一个变量的话，这个 name 属性的值也不会改变。如果函数是一个匿名函数，那 name 属性的值就是被赋值的变量的名称（隐藏值）。如果函数不是匿名的话，那 name 属性的值就是这个函数的名称（显性值）。这对于[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)也同样适用（箭头函数没有名字，所以你只能赋予 name 属性一个隐性名）。

```js
var foo = function () {};
foo.name; // "foo"

var foo2 = foo;
foo2.name; // "foo"

var bar = function baz() {};
bar.name; // "baz"

console.log(foo === foo2); //true
console.log(typeof baz); // undefined
console.log(bar === baz); // false (errors because baz == undefined)
```

## 示例

下面的例子定义了一个匿名函数并把它赋值给变量 x。这个函数返回它参数的平方：

```js
var x = function (y) {
  return y * y;
};
```

更多情况下被当作[回调函数](/zh-CN/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks)使用：

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
