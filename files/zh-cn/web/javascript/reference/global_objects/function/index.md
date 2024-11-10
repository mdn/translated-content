---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef}}

**`Function`** 对象提供了用于处理[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)的方法。在 JavaScript 中，每个函数实际上都是一个 `Function` 对象。

## 构造函数

- {{jsxref("Function.Function", "Function()")}}
  - : 创建一个新的 `Function` 对象。直接调用此构造函数可以动态创建函数，但会遇到和 {{jsxref("Global_Objects/eval", "eval()")}} 类似的安全问题和（相对较小的）性能问题。然而，与 `eval()` 不同的是，`Function` 构造函数创建的函数只能在全局作用域中运行。

## 实例属性

以下属性定义在 `Function.prototype` 上，并且被所有 `Function` 实例共享。

- {{jsxref("Function.prototype.arguments")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 表示传递给该函数的参数。对于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)、箭头函数、异步函数和生成器函数，访问 `arguments` 属性会抛出 {{jsxref("TypeError")}} 异常。请改为在函数闭包内使用 {{jsxref("Functions/arguments", "arguments")}} 对象。
- {{jsxref("Function.prototype.caller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 表示调用该函数的函数。对于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)、箭头函数、异步函数和生成器函数，访问 `caller` 属性会抛出 {{jsxref("TypeError")}} 异常。
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `Function` 实例来说，初始值是 {{jsxref("Function/Function", "Function")}} 构造函数。

以下属性是每个 `Function` 实例的自有属性。

- {{jsxref("Function/displayName", "displayName")}} {{Non-standard_Inline}} {{Optional_Inline}}
  - : 函数的显示名称。
- {{jsxref("Function/length", "length")}}
  - : 指定函数期望的参数个数。
- {{jsxref("Function/name", "name")}}
  - : 函数的名称。
- {{jsxref("Function/prototype", "prototype")}}
  - : 在使用 `function` 作为构造函数与 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符一起使用时，用作新对象的原型。

## 实例方法

- {{jsxref("Function.prototype.apply()")}}
  - : 使用给定的 `this` 值和可选的参数数组（或[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)）作为参数来调用一个函数。
- {{jsxref("Function.prototype.bind()")}}
  - : 创建一个新的函数，在调用时，其 `this` 关键字被设置为提供的值，可选地在调用新函数时在提供的参数之前加上一系列给定的参数。
- {{jsxref("Function.prototype.call()")}}
  - : 使用给定的 `this` 值和可选参数调用一个函数。
- {{jsxref("Function.prototype.toString()")}}
  - : 返回表示函数源代码的字符串。重写了 {{jsxref("Object.prototype.toString")}} 方法。
- [`Function.prototype[Symbol.hasInstance]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : 指定确定构造函数是否将对象识别为其实例的默认过程。由 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符调用。

## 示例

### Function 构造函数与函数声明之间的不同

由 `Function` 构造函数创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境，因此在运行时它们只能访问全局变量和自己的局部变量，不能访问它们被 `Function` 构造函数创建时所在的作用域的变量。这一点与使用 {{jsxref("Global_Objects/eval", "eval()")}} 执行创建函数的代码不同。

```js
// 使用 `var` 创建一个全局属性
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // 这个 `x` 指的是全局 `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // 这个 `x` 指的是上面的局部 `x`
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

虽然这段代码可以在浏览器中正常运行，但在 Node.js 中 `f1()` 会产生一个“找不到变量 `x`”的 `ReferenceError`。这是因为在 Node 中顶级作用域不是全局作用域，而 `x` 其实是在当前模块的作用域之中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "函数", "", 1)}}
