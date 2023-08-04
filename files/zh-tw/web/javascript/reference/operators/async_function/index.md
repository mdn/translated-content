---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
---

{{jsSidebar("Operators")}}

關鍵字 **`async function`** 可以用來定義陳述式中的 `async` 函式。

你也可以使用 [async function statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function) 來定義一個非同步函式

## Syntax

```plain
async function [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```

As of ES2015, you can also use [arrow functions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Parameters

- `name`
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN`
  - : The name of an argument to be passed to the function.
- `statements`
  - : The statements which comprise the body of the function.

## Description

An `async function` expression is very similar to, and has almost the same syntax as, an {{jsxref('Statements/async_function', 'async function statement')}}. The main difference between an async `function` expression and an async `function` statement is the _function name,_ which can be omitted in `async function` expressions to create _anonymous_ functions. An `async function` expression can be used as an {{Glossary("IIFE")}} (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about [functions](/zh-TW/docs/Web/JavaScript/Reference/Functions) for more information.

## Examples

### Simple example

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var add = async function (x) {
  // async function expression assigned to a variable
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

(async function (x) {
  // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
