---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---

{{JSRef}}

在 JavaScript 中，生成器函数实际上都是 `GeneratorFunction` 对象。注意，`GeneratorFunction` 并不是一个全局对象，但你可以通过下面的代码创建 `GeneratorFunction()` 构造函数。

```js
const GeneratorFunction = function* () {}.constructor;
```

## 语法

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg0, functionBody)
new GeneratorFunction(arg0, arg1, functionBody)
new GeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg0, functionBody)
GeneratorFunction(arg0, arg1, functionBody)
GeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **备注：** 调用 `GeneratorFunction()` 时可以选择使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)。两者均可创建一个新的 `GeneratorFunction` 实例。

### 参数

- `argN` {{optional_inline}}

  - : 函数的参数名，它们必须是符合 JavaScript 参数规范（任何[标识符](/zh-CN/docs/Glossary/Identifier)、[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)或[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)参数，以及可选的默认参数值）的字符串。

    由于参数的解析方式与函数声明相同，参数中接受空格和注释。例如：`"x", "theValue = 42", "[a, b] /* numbers */"` 或 `"x, theValue = 42, [a, b] /* numbers */"`。（`"x, theValue = 42", "[a, b]"` 也是正确的，但这容易造成困扰。）

- `functionBody`
  - : 包含 JavaScript 语句的{{jsxref("String", "字符串", "", 1)}}，这些语句组成了新函数的定义。

## 描述

{{jsxref("Statements/function*", "生成器函数", "", "1")}}对象是在给构造函数传递参数，创建函数时才进行解析的。这比使用 [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)声明生成器函数，然后在代码中调用它的效率更低，因为这些函数与其余的代码一起被解析。

传递给函数的所有参数（除了最后一个）按照它们被传递的顺序被视为要创建的函数中参数的标识符的名称。

> **备注：** 使用 `GeneratorFunction` 构造函数创建的{{jsxref("Statements/function*", "生成器函数", "", 1)}}不会为其创建上下文创建闭包；它们始终在全局范围内创建。
>
> 当运行它们时，它们只能访问自己的本地变量和全局变量，而不能访问 `GeneratorFunction` 构造函数调用的范围内的变量。
>
> 这是它与使用 {{jsxref("Global_Objects/eval", "eval")}} 来创建生成器函数表达式不同的地方。

将 `GeneratorFunction` 构造函数调用为函数（不使用 `new` 运算符）与将其作为构造函数调用的效果相同。

## 示例

### 创建和使用 GeneratorFunction() 构造函数

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/function*", "function* 函数", "", 1)}}
- {{jsxref("Operators/function*", "function* 表达式", "", 1)}}
- {{jsxref("Global_Objects/Function", "函数", "", 1)}}
- {{jsxref("Statements/function", "函数语句", "", 1)}}
- {{jsxref("Operators/function", "函数表达式", "", 1)}}
- {{jsxref("Functions", "函数与函数作用域", "", 1)}}
