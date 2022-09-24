---
title: Arguments 物件
slug: Web/JavaScript/Reference/Functions/arguments
---

{{jsSidebar("Functions")}}

**`arguments`** 物件是一個對應傳入函式之引數的類陣列（`Array-like`）物件。

## 語法

```plain
arguments
```

## 描述

> **備註：** 如果你有在使用 ES6 語法，建議參考[其餘參數](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters)。

> **備註：** 「類陣列 (Array-like)」 的意思是 `arguments` 一樣擁有 `length`這項屬性，以及從 0 開始的索引，但是它沒有陣列內建的方法像是 `forEach()` ，或是 `map()` 。

The `arguments` object is a local variable available within all (non-arrow) functions. You can refer to a function's arguments within the function by using the `arguments` object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0.

For example, if a function is passed three arguments, you can refer to them as follows:

```js
arguments[0]
arguments[1]
arguments[2]
```

arguments 也可以被指定：

```js
arguments[1] = 'new value';
```

`arguments` 物件不是陣列。它與陣列非常相似，但是它沒有除了 `length` 這個屬性以外的其他陣列屬性。舉例，它沒有 `pop` 這個陣列方法。

然而，它依然可以被轉換為真正的陣列(Array)。

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
```

> **警告：** Using slice on arguments prevents optimizations in some JavaScript engines (V8 for example - [more information](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)). If you care for them, try constructing a new array by iterating through the arguments object instead. An alternative would be to use the despised `Array` constructor as a function:
>
> ```js
> var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
> ```

You can use the `arguments` object if you call a function with more arguments than it is formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments. Use [`arguments.length`](/zh-TW/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length) to determine the number of arguments passed to the function, and then process each argument by using the `arguments` object. To determine the number of parameters in the function [signature](/zh-TW/docs/Glossary/Signature/Function), use the [`Function.length`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function/length) property.

### Using `typeof` with Arguments

The typeof arguments returns 'object'.

```plain
console.log(typeof arguments); // 'object'
```

The typeof individual arguments can be determined with the use of indexing.

```plain
console.log(typeof arguments[0]); //this will return the typeof individual arguments.
```

### Using the Spread Syntax with Arguments

You can also use the {{jsxref("Array.from()")}} method or the [spread operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator) to convert arguments to a real Array:

```js
var args = Array.from(arguments);
var args = [...arguments];
```

## 屬性

- [`arguments.callee`](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Reference to the currently executing function.
- [`arguments.caller`](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments/caller) {{Deprecated_Inline}}
  - : Reference to the function that invoked the currently executing function.
- [`arguments.length`](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Reference to the number of arguments passed to the function.
- [`arguments[@@iterator]`](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
  - : Returns a new Array Iterator object that contains the values for each index in the arguments.

## 範例

### Defining a function that concatenates several strings

This example defines a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

```js
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

You can pass any number of arguments to this function, and it creates a list using each argument as an item in the list.

```js
// returns "red, orange, blue"
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah"
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley"
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
```

### Defining a function that creates HTML lists

This example defines a function that creates a string containing HTML for a list. The only formal argument for the function is a string that is "`u`" if the list is to be unordered (bulleted), or "`o`" if the list is to be ordered (numbered). The function is defined as follows:

```js
function list(type) {
  var result = '<' + type + 'l><li>';
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join('</li><li>');
  result += '</li></' + type + 'l>'; // end list

  return result;
}
```

You can pass any number of arguments to this function, and it adds each argument as an item to a list of the type indicated. For example:

```js
var listHTML = list('u', 'One', 'Two', 'Three');

/* listHTML is:

"<ul><li>One</li><li>Two</li><li>Three</li></ul>"

*/
```

### Rest, default, and destructured parameters

The `arguments` object can be used in conjunction with [rest](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters), and [destructured](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters.

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]
```

While the presence of [rest](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters), or [destructured](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters does not alter the [behavior of the `arguments` object in strict mode code](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode#Making_eval_and_arguments_simpler), there is a subtle difference for non-strict code.

When a non-strict function **does not** contain [rest](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters), or [destructured](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters, then the values in the `arguments` object **do** track the values of the arguments (and vice versa). See the code below:

```js
function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99
```

and

```js
function func(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
```

When a non-strict function **does** contain [rest](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters), or [destructured](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters, then the values in the `arguments` object **do not** track the values of the arguments (and vice versa). Instead, they reflect the arguments provided at the time of invocation:

```js
function func(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func(10); // 10
```

and

```js
function func(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
func(10); // 10
```

and

```js
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Function")}}
