---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef}}

**`Function` 建構函式**可建立一個新的 `Function` 物件。在 JavaScript 中，所有的函式實際上都是 `Function` 物件。

## 語法

```js-nolint
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

### 參數

- `arg1, arg2, ... argN`
  - : function 的引數名稱必須要符合正規的命名。每個名稱都必須要是有效的 JavaScript 識別符號規則的字串，或是使用英文逗號「, 」分隔開的字串清單; 像是 "x", "theValue", 或是 "a, b'。
- `functionBody`
  - : 包含 JavaScript 狀態以及 function 定義的字串。

## 描述

`Function` objects created with the `Function` constructor are parsed when the function is created. This is less efficient than declaring a function with a [function expression](/zh-TW/docs/Web/JavaScript/Reference/Operators/function) or [function statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/function) and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

Invoking the `Function` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## `Function` `的屬性與方法`

The global `Function` object has no methods or properties of its own, however, since it is a function itself it does inherit some methods and properties through the prototype chain from {{jsxref("Function.prototype")}}.

## `Function` 原型物件

### 屬性 Properties

- {{jsxref("Function.prototype.arguments")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : An array corresponding to the arguments passed to a function.
    This is deprecated as a property of {{jsxref("Function")}}. Use the {{jsxref("Functions/arguments", "arguments")}} object (available within the function) instead.
- {{jsxref("Function.prototype.caller")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Specifies the function that invoked the currently executing function.
    This property is deprecated, and is only functional for some non-strict functions.
- {{jsxref("Function.prototype.displayName")}} {{Non-standard_Inline}} {{Optional_Inline}}
  - : The display name of the function.
- {{jsxref("Function.prototype.length")}}
  - : Specifies the number of arguments expected by the function.
- {{jsxref("Function.prototype.name")}}
  - : The name of the function.
- {{jsxref("Function.prototype.prototype")}}
  - : Used when the function is used as a constructor with the [`new`](/zh-TW/docs/Web/JavaScript/Reference/Operators/new) operator. It will become the new object's prototype.

### 方法 Methods

- {{jsxref("Function.prototype.apply()")}}
  - : Calls a function with a given `this` value and optional arguments provided as an array (or an [array-like object](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).
- {{jsxref("Function.prototype.bind()")}}
  - : Creates a new function that, when called, has its `this` keyword set to a provided value, optionally with a given sequence of arguments preceding any provided when the new function is called.
- {{jsxref("Function.prototype.call()")}}
  - : Calls a function with a given `this` value and optional arguments.
- {{jsxref("Function.prototype.toString()")}}
  - : Returns a string representing the source code of the function.
    Overrides the {{jsxref("Object.prototype.toString")}} method.

## `Function` 實例

`Function` instances inherit methods and properties from {{jsxref("Function.prototype")}}. As with all constructors, you can change the constructor's prototype object to make changes to all `Function` instances.

## 範例

### Specifying arguments with the `Function` constructor

The following code creates a `Function` object that takes two arguments.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
```

The arguments "`a`" and "`b`" are formal argument names that are used in the function body, "`return a + b`".

### Difference between Function constructor and function declaration

Functions created with the `Function` constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `Function` constructor was called. This is different from using {{jsxref("eval")}} with code for a function expression.

```js
var x = 10;

function createFunction1() {
  var x = 20;
  return new Function("return x;"); // this |x| refers global |x|
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; // this |x| refers local |x| above
  }
  return f;
}

var f1 = createFunction1();
console.log(f1()); // 10
var f2 = createFunction2();
console.log(f2()); // 20
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Functions", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
