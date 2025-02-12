---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**`throw`** 语句用于抛出用户自定义的异常。当前函数的执行将停止（`throw` 之后的语句不会被执行），并且控制权将传递给调用堆栈中第一个 [`catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 块。如果调用函数中没有 `catch` 块，则程序将终止。

{{InteractiveExample("JavaScript Demo: Statement - Throw")}}

```js interactive-example
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
```

## 语法

```js-nolint
throw expression;
```

- `expression`
  - : 抛出表达式。

## 描述

`throw` 语句在任何可以使用语句的上下文中都有效。它的执行会产生一个在调用堆栈传播的异常。有关错误冒泡和处理的更多信息，请参阅[控制流与错误处理](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)。

`throw` 关键字后面可以跟任何类型的表达式，例如：

```js
throw error; // 抛出之前定义的值（例如，在 catch 块中）
throw new Error("Required"); // 抛出一个新的错误对象
```

在实践中，你抛出的异常应该*始终*是 {{jsxref("Error")}} 对象或 `Error` 子类的实例，例如 {{jsxref("RangeError")}}。这是因为捕获错误的代码可能期望捕获的值具有一些属性，例如 {{jsxref("Error/message", "错误信息")}}。例如，Web API 通常会抛出 {{domxref("DOMException")}} 实例，这些实例继承自 `Error.prototype`。

### 自动分号补全

语法不允许在 `throw` 关键字和要抛出的表达式之间出现换行。

```js-nolint example-bad
throw
new Error();
```

上面的代码经过[自动分号补全（ASI）](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)转换后变为：

```js-nolint
throw;
new Error();
```

这段代码无效，因为与 {{jsxref("Statements/return", "return")}} 语句不同，`throw` 语句后面必须跟一个表达式。

为了避免这个问题（防止 ASI），可以使用括号：

```js-nolint
throw (
  new Error()
);
```

## 示例

### 抛出用户自定义的错误

此示例定义了一个函数，该函数在输入不是预期类型时抛出 {{jsxref("TypeError")}} 异常。

```js
function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("只能添加数字");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
try {
  sum("1", "2");
} catch (e) {
  console.error(e); // TypeError：只能添加数字
}
```

### 抛出一个现有的对象

此示例调用了一个基于回调的异步函数，并在回调接收到错误时抛出错误。

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

通过这种方式抛出的错误无法被调用者捕获，并会导致程序崩溃，除非：（a）`readFile` 函数本身捕获了错误，或（b）程序在捕获顶级错误的上下文中运行。你可以使用 {{jsxref("Promise/Promise", "Promise()")}} 构造函数更自然地处理错误。

```js
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

try {
  const data = await readFilePromise("foo.txt");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Error")}}
