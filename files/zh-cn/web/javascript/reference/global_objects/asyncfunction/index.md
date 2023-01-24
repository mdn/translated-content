---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

**`AsyncFunction` 构造函数**用来创建新的{{jsxref("Statements/async_function", "异步函数", "", 1)}}对象。JavaScript 中每个异步函数都是 `AsyncFunction` 对象。

注意，`AsyncFunction` 并*不是*全局对象，需要通过下面的方法来获取：

```js
const AsyncFunction = (async function () {}).constructor;
```

## 语法

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg0, functionBody)
new AsyncFunction(arg0, arg1, functionBody)
new AsyncFunction(arg0, arg1, /* … ,*/ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg0, functionBody)
AsyncFunction(arg0, arg1, functionBody)
AsyncFunction(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **备注：** 调用 `AsyncFunction()` 时可以选择使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符。两者都会创建一个新的 `AsyncFunction` 实例。

### 参数

- `argN` {{optional_inline}}
  - : 函数的参数名，它们必须是符合 JavaScript 参数规范（任何[标识符](/zh-CN/docs/Glossary/Identifier)、[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)或[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)参数，以及可选的默认参数值）的字符串。

    由于参数的解析方式与函数声明相同，参数中接受空格和注释。例如：`"x", "theValue = 42", "[a, b] /* numbers */"` 或 `"x, theValue = 42, [a, b] /* numbers */"`。（`"x, theValue = 42", "[a, b]"` 也是正确的，但这容易造成困扰。）
- `functionBody`
  - : 包含 JavaScript 语句的字符串，这些语句组成了新函数的定义。

## 描述

执行 `AsyncFunction` 构造函数的时候，会创建一个[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)对象。但是这种方式不如使用 [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)定义一个异步函数，然后再调用它来的高效，因为后者的函数是与其它代码一起被解释器解析的。

传递给函数的所有参数（除了最后一个）都会成为新函数中的变量，变量的名称和定义顺序与各参数相同。

> **备注：** `AsyncFunction` 构造函数创建的{{jsxref("Statements/async_function", "异步函数", "", 1)}}并不会在当前上下文中创建闭包，其作用域始终是全局的。
>
> 因此运行的时候只能访问它们自己的局部变量和全局变量，而不能访问 `AsyncFunction` 构造函数被调用的那个作用域中的变量。
>
> 这是它与使用 {{jsxref("Global_Objects/eval", "eval")}} 来创建异步函数表达式不同的地方。

调用 `AsyncFunction` 构造函数时可以省略 `new`，其效果是一样的。

## 示例

### 通过 AsyncFunction() 构造函数创建一个异步函数

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = (async function () {}).constructor;

const fn = new AsyncFunction(
  'a',
  'b',
  'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);',
);

fn(10, 20).then((v) => {
  console.log(v); // 4 秒后打印 30
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function", "异步函数", "", 1)}}
- {{jsxref("Operators/async_function", "异步函数表达式", "", 1)}}
- {{jsxref("Global_Objects/Function", "函数", "", 1)}}
- {{jsxref("Statements/function", "函数声明", "", 1)}}
- {{jsxref("Operators/function", "函数表达式", "", 1)}}
- {{jsxref("Functions", "函数及其作用域", "", 1)}}
