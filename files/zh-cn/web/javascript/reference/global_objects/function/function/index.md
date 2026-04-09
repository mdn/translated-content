---
title: Function() 构造函数
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> 传递给此构造函数的参数会被动态解析并作为 JavaScript 执行。此类 API 被称为[注入陷阱](/zh-CN/docs/Web/API/Trusted_Types_API#concepts_and_usage)，是[跨站脚本攻击（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)的潜在载体。
>
> 你可以通过始终传递 {{domxref("TrustedScript")}} 对象而不是字符串，并[强制使用受信任类型](/zh-CN/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)来降低此风险。
>
> 详见[安全考虑](#安全考虑)章节。

**`Function()`** 构造函数用于创建 {{jsxref("Function")}} 对象。直接调用构造函数可以动态创建函数，但会存在与 {{jsxref("Global_Objects/eval", "eval()")}} 类似的安全问题以及（虽然影响远小于 `eval`）的性能问题。不过，与可能访问本地作用域的 `eval` 不同，`Function` 构造函数创建的函数仅在全局作用域中执行。

{{InteractiveExample("JavaScript Demo: Function() 构造函数", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// 期望输出：8
```

## 语法

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> 调用 `Function()` 时可以使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)。两者都会创建一个新的 `Function` 实例。

### 参数

- `arg1`, …, `argN` {{optional_inline}}
  - : {{domxref("TrustedScript")}} 实例或字符串，用于指定函数将作为形式参数名称使用的名称。该值必须对应于一个有效的 JavaScript 参数（可以是普通的[标识符](/zh-CN/docs/Glossary/Identifier)、[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)或[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)参数，也可选择使用[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)），或用逗号分隔的此类字符串的列表。

    由于参数的解析方式与函数表达式相同，所以接受空白和注释。例如：`"x", "theValue = 42", "[a, b] /* 数字 */"` 或 `"x, theValue = 42, [a, b] /* 数字 */"`。（`"x, theValue = 42", "[a, b]"` 也是正确的，虽然有些难以阅读。）

- `functionBody`
  - : 包含构成函数定义的 JavaScript 语句的 {{domxref("TrustedScript")}} 或字符串。

### 异常

- {{jsxref("SyntaxError")}}
  - : 函数参数无法被解析为有效的参数列表，或 `functionBody` 无法被解析为有效的 JavaScript 语句。
- {{jsxref("TypeError")}}
  - : 当[受信任类型](/zh-CN/docs/Web/API/Trusted_Types_API)[通过 CSP 强制使用](/zh-CN/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)且未定义默认策略时，任何参数均是字符串。

## 描述

使用 `Function` 构造函数创建的 `Function` 对象会在函数创建时完成解析。这比用[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)或[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)创建一个函数并在代码中调用它的效率要低，因为使用表达式或声明创建的函数会和其他的代码一起被解析。

除最后一个外，传递给函数的所有参数都被当作要创建的函数中参数的标识符的名称，并按照它们被传递的顺序进行处理。函数将被动态编译为一个函数表达式，其源代码会按下述形式组装：

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

你可以通过调用函数的 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) 方法来观察。

然而，与普通的[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)不同，`anonymous` 这个名字不会被添加到 `functionBody` 的作用域中，因为 `functionBody` 只能访问全局作用域。如果 `functionBody` 不在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中（主体本身需要有 `"use strict"` 指令，因为它不从上下文中继承严格性），你可以使用 [`arguments.callee`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee) 来指代函数本身。另外，你可以将递归部分定义为一个内部函数：

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

请注意，集合源的两个动态部分——参数列表 `args.join(",")` 和 `functionBody` 将首先被分别解析，以确保它们在语法上都是有效的。这可以防止类似注入的尝试。

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// 不会变成 "function anonymous(/*) {*/) {}"
```

### 安全考虑

该方法可用于执行传递给任何参数的任意输入。如果输入是用户提供的可能不安全的字符串，这是[跨站脚本攻击（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)的潜在载体。例如，以下示例假设 `untrustedCode` 是由用户提供的：

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

对于指定了 [`script-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) 或 [`default-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) 的[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)的网站默认会阻止此类代码运行。如果你必须允许通过 `Function()` 运行脚本，可通过始终传递 {{domxref("TrustedScript")}} 对象而不是字符串，并使用 [`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP 指令来[强制使用受信任类型](/zh-CN/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)来缓解这些问题。这可以确保输入经过转换函数进行处理。

若要允许 `Function()` 运行，你还需要在 CSP 的 `script-src` 指令中指定 [`trusted-types-eval` 关键字](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)。[`unsafe-eval`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) 关键字也允许 `Function()`，但安全性远低于 `trusted-types-eval`，因为它甚至会在不支持受信任类型的浏览器上允许执行。

例如，你的网站的 CSP 配置可能如下所示：

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<你的白名单>' 'trusted-types-eval'
```

转换函数的行为取决于具体需要用户提供脚本的用例。如果可能，你应该将允许的脚本严格限定为仅包含你信任的代码。如果无法做到这一点，你可以在提供的字符串中允许或阻止某些函数的使用。

## 示例

请注意，为了简洁起见，这些示例省略了受信任类型的使用。如需查看采用推荐方法的代码，请参阅 `eval()` 中的[使用 `TrustedScript`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript)。

### 与 Function 构造函数一同指定参数

以下代码创建了一个接受两个参数的 `Function` 对象。

```js
// 此示例可在你的 JavaScript 控制台下运行

// 创建一个接受两个参数的函数，并返回这些参数的和
const adder = new Function("a", "b", "return a + b");

// 调用函数
adder(2, 6);
// 8
```

参数 `a` 和 `b` 是在函数体 `return a + b` 中使用的正式参数名称。

### 从函数声明或函数表达式创建一个函数对象

```js
// 函数构造器可以接受多个分号分隔的语句。Function 表达式需要带有函数的返回语句

// 观察一下，new Function 被调用了。这样我们就可以在事后直接调用我们创建的函数了
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// 调用函数
sumOfArray([1, 2, 3, 4]);
// 10

// 如果你不在创建函数时调用 new Function，你可以使用 Function.call() 方法来调用它
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);
// 调用函数
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// 函数声明不需要返回语句
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// 调用函数
sayHello("world");
// Hello, world
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `eval()` 中的[使用函数构造器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#using_the_function_constructor)
- [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "函数", "", 1)}}
