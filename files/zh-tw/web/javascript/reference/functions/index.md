---
title: Functions
slug: Web/JavaScript/Reference/Functions
---

{{jsSidebar("Functions")}}

Generally speaking, a function is a "subprogram" that can be _called_ by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the _function body_. Values can be _passed_ to a function, and the function can _return_ a value.

In JavaScript, functions are first-class objects, i.e. they are objects and can be manipulated and passed around just like any other object. Specifically, they are [`Function`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function) objects.

For more examples and explanations, see also the [JavaScript guide about functions](/zh-TW/docs/Web/JavaScript/Guide/Functions).

## Description

Every function in JavaScript is a `Function` object. See {{jsxref("Function")}} for information on properties and methods of `Function` objects.

Functions are not the same as procedures. A function always returns a value, but a procedure may or may not return any value.

To return a specific value other than the default, a function must have a [`return`](/zh-TW/docs/Web/JavaScript/Reference/Statements/return) statement that specifies the value to return. A function without a return statement will return a default value. In the case of a [constructor](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) called with the [`new`](/zh-TW/docs/Web/JavaScript/Reference/Operators/new) keyword, the default value is the value of its `this` parameter. For all other functions, the default return value is `undefined`.

The parameters of a function call are the function's _arguments_. Arguments are passed to functions _by value_. If the function changes the value of an argument, this change is not reflected globally or in the calling function. However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function, as shown in the following example:

```js
/* Declare the function 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);
```

The [`this` keyword](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) does not refer to the currently executing function, so you must refer to `Function` objects by name, even within the function body.

## 定義函式 Defining functions

以下幾個方法去定義函式 (function)

### The function declaration (`function` statement)

There is a special syntax for declaring functions (see [function statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/function) for details):

```plain
function name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : The function name.
- `param`
  - : The name of an argument to be passed to the function. A function can have up to 255 arguments.
- `statements`
  - : The statements comprising the body of the function.

### The function expression (`function` expression)

A function expression is similar to and has the same syntax as a function declaration (see [function expression](/zh-TW/docs/Web/JavaScript/Reference/Operators/function) for details):

```plain
function [name]([param] [, param] [..., param]) {
   statements
}
```

- `name`
  - : The function name. Can be omitted, in which case the function becomes known as an anonymous function.
- `param`
  - : The name of an argument to be passed to the function. A function can have up to 255 arguments.
- `statements`
  - : The statements which comprise the body of the function.

### The generator function declaration (`function*` statement)

> **備註：** Generator function are an _experimental technology,_ part of the ECMAScript 6 proposal, and are not widely supported by browsers yet.

There is a special syntax for declaration generator functions (see {{jsxref('Statements/function*', 'function* statement')}} for details):

```plain
function* name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : The function name.
- `param`
  - : The name of an argument to be passed to the function. A function can have up to 255 arguments.
- `statements`
  - : The statements comprising the body of the function.

### The generator function expression (`function*` expression)

> **備註：** Generator function are an _experimental technology,_ part of the ECMAScript 6 proposal, and are not widely supported by browsers yet.

A generator function expression is similar to and has the same syntax as a generator function declaration (see {{jsxref('Operators/function*', 'function* expression')}} for details):

```plain
function* [name]([param] [, param] [..., param]) {
   statements
}
```

- `name`
  - : The function name. Can be omitted, in which case the function becomes known as an anonymous function.
- `param`
  - : The name of an argument to be passed to the function. A function can have up to 255 arguments.
- `statements`
  - : The statements which comprise the body of the function.

### 箭頭函式 The arrow function expression (=>)

> **備註：** Arrow function expressions are an _experimental technology,_ part of the ECMAScript 6 proposal, and are not widely supported by browsers yet.

An arrow function expression has a shorter syntax and lexically binds its this value (see [arrow functions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for details):

```plain
([param] [, param]) => {
   statements
}

param => expression
```

- `param`
  - : The name of an argument. Zero arguments need to be indicated with `()`. For only one argument the parentheses are not required. (like `foo => 1`)
- `statements or expression`
  - : Multiple statements need to be enclosed in brackets. A single expression requires no brackets. The expression is also the implicit return value of that function.

### The `Function` constructor

> **備註：** Using the `Function` constructor to create functions is not recommended since it needs the function body as a string which may prevent some JS engine optimizations and can also cause other problems.

As all other objects, {{jsxref("Function")}} objects can be created using the `new` operator:

```plain
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : Zero or more names to be used by the function as formal argument names. Each must be a string that conforms to the rules for a valid JavaScript identifier or a list of such strings separated with a comma; for example "`x`", "`theValue`", or "`a,b`".
- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

Invoking the `Function` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

### The `GeneratorFunction` constructor

> **備註：** Arrow function expressions are an _experimental technology,_ part of the ECMAScript 6 proposal, and are not widely supported by browsers yet.

> **備註：** `GeneratorFunction` is not a global object, but could be obtained from generator function instance (see {{jsxref("GeneratorFunction")}} for more detail).

> **備註：** Using the `GeneratorFunction` constructor to create functions is not recommended since it needs the function body as a string which may prevent some JS engine optimizations and can also cause other problems.

As all other objects, {{jsxref("GeneratorFunction")}} objects can be created using the `new` operator:

```plain
new GeneratorFunction (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : Zero or more names to be used by the function as formal argument names. Each must be a string that conforms to the rules for a valid JavaScript identifier or a list of such strings separated with a comma; for example "`x`", "`theValue`", or "`a,b`".
- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

Invoking the `Function` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## Function parameters

> **備註：** Default and rest parameters are _experimental technology,_ part of the ECMAScript 6 proposal, and are not widely supported by browsers yet.

### Default parameters

Default function parameters allow formal parameters to be initialized with default values if no value or `undefined` is passed. For more details, see [default parameters](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Rest parameters

The rest parameter syntax allows to represent an indefinite number of arguments as an array. For more details, see [rest parameters](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters).

## The `arguments` object

You can refer to a function's arguments within the function by using the `arguments` object. See [arguments](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments).

- [`arguments`](/zh-TW/docs/JavaScript/Reference/Functions_and_function_scope/arguments): An array-like object containing the arguments passed to the currently executing function.
- [`arguments.callee`](/zh-TW/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee) {{Deprecated_inline}}: The currently executing function.
- [`arguments.caller`](/zh-TW/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller) {{Deprecated_Inline}} : The function that invoked the currently executing function.
- [`arguments.length`](/zh-TW/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length): The number of arguments passed to the function.

## Defining method functions

### Getter and setter functions

You can define getters (accessor methods) and setters (mutator methods) on any standard built-in object or user-defined object that supports the addition of new properties. The syntax for defining getters and setters uses the object literal syntax.

- [get](/zh-TW/docs/Web/JavaScript/Reference/Functions/get)
  - : Binds an object property to a function that will be called when that property is looked up.
- [set](/zh-TW/docs/Web/JavaScript/Reference/Functions/set)
  - : Binds an object property to a function to be called when there is an attempt to set that property.

### Method definition syntax

> **備註：** _Method definitions are experimental technology,_ part of the ECMAScript 6 proposal, and are not widely supported by browsers yet.

Starting with ECMAScript 6, you are able to define own methods in a shorter syntax, similar to the getters and setters. See [method definitions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Method_definitions) for more information.

```js
var obj = {
  foo() {},
  bar() {},
};
```

## `Function` constructor vs. function declaration vs. function expression

Compare the following:

A function defined with the `Function` constructor assigned to the variable `multiply`

```js
function multiply(x, y) {
  return x * y;
}
```

A _function expression_ of an anonymous function assigned to the variable `multiply`

```js
var multiply = function (x, y) {
  return x * y;
};
```

A _function expression_ of a function named `func_name` assigned to the variable `multiply`

```js
var multiply = function func_name(x, y) {
  return x * y;
};
```

### Differences

All do approximately the same thing, with a few subtle differences:

There is a distinction between the function name and the variable the function is assigned to. The function name cannot be changed, while the variable the function is assigned to can be reassigned. The function name can be used only within the function's body. Attempting to use it outside the function's body results in an error (or `undefined` if the function name was previously declared via a `var` statement). For example:

```js
var y = function x() {};
alert(x); // throws an error
```

The function name also appears when the function is serialized via [`Function`'s toString method](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/toString).

On the other hand, the variable the function is assigned to is limited only by its scope, which is guaranteed to include the scope where the function is declared in.

As the 4th example shows, the function name can be different from the variable the function is assigned to. They have no relation to each other.A function declaration also creates a variable with the same name as the function name. Thus, unlike those defined by function expressions, functions defined by function declarations can be accessed by their name in the scope they were defined in:

A function defined by '`new Function'` does not have a function name. However, in the [SpiderMonkey](/zh-TW/docs/Mozilla/Projects/SpiderMonkey) JavaScript engine, the serialized form of the function shows as if it has the name "anonymous". For example, `alert(new Function())` outputs:

```js
function anonymous() {}
```

Since the function actually does not have a name, `anonymous` is not a variable that can be accessed within the function. For example, the following would result in an error:

```js
var foo = new Function("alert(anonymous);");
foo();
```

Unlike functions defined by function expressions or by the `Function` constructor, a function defined by a function declaration can be used before the function declaration itself. For example:

```js
foo(); // alerts FOO!
function foo() {
  alert("FOO!");
}
```

A function defined by a function expression inherits the current scope. That is, the function forms a closure. On the other hand, a function defined by a `Function` constructor does not inherit any scope other than the global scope (which all functions inherit).

Functions defined by function expressions and function declarations are parsed only once, while those defined by the `Function` constructor are not. That is, the function body string passed to the `Function` constructor must be parsed each and every time the constructor is called. Although a function expression creates a closure every time, the function body is not reparsed, so function expressions are still faster than "`new Function(...)`". Therefore the `Function` constructor should generally be avoided whenever possible.

It should be noted, however, that function expressions and function declarations nested within the function generated by parsing a `Function constructor` 's string aren't parsed repeatedly. For example:

```js
var foo = new Function(
  "var bar = 'FOO!';\nreturn(function() {\n\talert(bar);\n});"
)();
foo(); // The segment "function() {\n\talert(bar);\n}" of the function body string is not re-parsed.
```

A function declaration is very easily (and often unintentionally) turned into a function expression. A function declaration ceases to be one when it either:

- becomes part of an expression
- is no longer a "source element" of a function or the script itself. A "source element" is a non-nested statement in the script or a function body:

```js
var x = 0; // source element
if (x == 0) {
  // source element
  x = 10; // not a source element
  function boo() {} // not a source element
}
function foo() {
  // source element
  var y = 20; // source element
  function bar() {} // source element
  while (y == 10) {
    // source element
    function blah() {} // not a source element
    y++; // not a source element
  }
}
```

### Examples

```js
// function declaration
function foo() {}

// function expression
(function bar() {});

// function expression
x = function hello() {};

if (x) {
  // function expression
  function world() {}
}

// function declaration
function a() {
  // function declaration
  function b() {}
  if (0) {
    // function expression
    function c() {}
  }
}
```

## Conditionally defining a function

Functions can be conditionally defined using either //function statements// (an allowed extension to the [ECMA-262 Edition 3](http://www.ecma-international.org/publications/standards/Ecma-262.htm) standard) or the `Function` constructor. Please note that such [function statements are no longer allowed in ES5 strict](https://bugzilla.mozilla.org/show_bug.cgi?id=609832). Additionally, this feature does not work consistently cross-browser, so you should not rely on it.

In the following script, the `zero` function is never defined and cannot be invoked, because '`if (0)`' evaluates its condition to false:

```js
if (0) {
  function zero() {
    document.writeln("This is zero.");
  }
}
```

If the script is changed so that the condition becomes '`if (1)`', function `zero` is defined.

Note: Although this kind of function looks like a function declaration, it is actually an expression (or statement), since it is nested within another statement. See differences between function declarations and function expressions.

Note: Some JavaScript engines, not including [SpiderMonkey](/zh-TW/docs/SpiderMonkey), incorrectly treat any function expression with a name as a function definition. This would lead to `zero` being defined, even with the always-false `if` condition. A safer way to define functions conditionally is to define the function anonymously and assign it to a variable:

```js
if (0) {
  var zero = function () {
    document.writeln("This is zero.");
  };
}
```

## Examples

### Returning a formatted number

The following function returns a string containing the formatted representation of a number padded with leading zeros.

```js
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  var numStr = num.toString(); // Initialize return value as string
  var numZeros = totalLen - numStr.length; // Calculate no. of zeros
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}
```

The following statements call the padZeros function.

```js
var result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
```

### Determining whether a function exists

You can determine whether a function exists by using the `typeof` operator. In the following example, a test is peformed to determine if the `window` object has a property called `noFunc` that is a function. If so, it is used; otherwise some other action is taken.

```js
if ("function" == typeof window.noFunc) {
  // use noFunc()
} else {
  // do something else
}
```

Note that in the `if` test, a reference to `noFunc` is used—there are no brackets "()" after the function name so the actual function is not called.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

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
- [Functions and function scope](/zh-TW/docs/Web/JavaScript/Reference/Functions_and_function_scope)
