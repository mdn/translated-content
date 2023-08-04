---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef}}

每个 JavaScript 函数实际上都是一个 `Function` 对象。运行 `(function(){}).constructor === Function // true` 便可以得到这个结论。

## 构造函数

- {{jsxref("Function.Function", "Function()")}}
  - : 创建一个新的 `Function` 对象。直接调用此构造函数可以动态创建函数，但会遇到和 {{jsxref("Global_Objects/eval", "eval()")}} 类似的的安全问题和（相对较小的）性能问题。然而，与 `eval()` 不同的是，`Function` 构造函数创建的函数只能在全局作用域中运行。

## 实例属性

- {{jsxref("Function.prototype.arguments")}} {{Deprecated_Inline}}
  - : 对应传递给函数的参数数组，这个 {{jsxref("Function")}} 的属性已被弃用，请改用 {{jsxref("Functions/arguments", "arguments")}} 对象（仅在函数范围内可用）。
- {{jsxref("Function.prototype.caller")}} {{Deprecated_Inline}}
  - : 表明调用当前函数执行的函数，此属性已被弃用，且仅对一些不严格的函数可用。
- {{jsxref("Function.prototype.displayName")}}
  - : 函数的显示名称。
- {{jsxref("Function.prototype.length")}}
  - : 函数期望的参数数量。
- {{jsxref("Function.prototype.name")}}
  - : 函数的名称。

## 实例方法

- {{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}
  - : 调用一个函数并将其 `this` 的值设置为提供的 `thisArg`。参数可用以通过{{jsxref("Array", "数组")}}对象传递。
- {{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}
  - : 创建一个新的函数，该函数在调用时，会将 `this` 设置为提供的 `thisArg`。在调用新绑定的函数时，可选的参数序列（`[, arg1[, arg2[, ...argN]]]`）会被提前添加到参数序列中（译者注：即调用绑定创建的函数时，传递的参数会接续在可选参数序列后）。
- {{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}
  - : 调用一个函数，并将其 `this` 值设置为提供的值。也可以选择传输新参数。
- {{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}
  - : 返回表示函数源码的字符串。覆盖了 {{jsxref("Object.prototype.toString")}} 方法。

## 示例

### Function 构造函数与函数声明之间的不同

由 `Function` 构造函数创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境，因此在运行时它们只能访问全局变量和自己的局部变量，不能访问它们被 `Function` 构造函数创建时所在的作用域的变量。这一点与使用 {{jsxref("Global_Objects/eval", "eval()")}} 执行创建函数的代码不同。

```js
var x = 10;

function createFunction1() {
  var x = 20;
  return new Function("return x;"); // 这里的 x 指向最上面全局作用域内的 x
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; // 这里的 x 指向上方本地作用域内的 x
  }
  return f;
}

var f1 = createFunction1();
console.log(f1()); // 10
var f2 = createFunction2();
console.log(f2()); // 20
```

虽然这段代码可以在浏览器中正常运行，但在 Node.js 中 `f1()` 会产生一个“找不到变量 `x`”的 `ReferenceError`。这是因为在 Node 中顶级作用域不是全局作用域，而 `x` 其实是在当前模块的作用域之中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Functions", "函数与函数作用域")}}
- {{jsxref("Statements/function", "函数声明")}}
- {{jsxref("Operators/function", "函数表达式")}}
- {{jsxref("Statements/function*", "function* 声明")}}
- {{jsxref("Operators/function*", "function* 表达式")}}
- {{jsxref("AsyncFunction", "异步函数")}}
- {{jsxref("GeneratorFunction", "生成器函数")}}
