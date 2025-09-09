---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

**`try...catch`** 语句由一个 `try` 块和一个 `catch` 块或 `finally` 块（或两者皆有）组成。首先执行 `try` 块中的代码，如果它抛出异常，则将执行 `catch` 块中的代码。`finally` 块中的代码将在控制流退出整个结构之前始终被执行。

{{InteractiveExample("JavaScript Demo: Statement - Try...Catch")}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
```

## 语法

```js-nolint
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```

- `tryStatements`
  - : 要执行的语句。
- `catchStatements`
  - : `try` 块抛出异常后执行的语句。
- `exceptionVar` {{optional_inline}}
  - : 可选的[标识符或模式](#catch_绑定)，用于保存关联的 `catch` 块所捕获到的异常。如果 `catch` 块不使用异常的值，你可以省略 `exceptionVar` 及其周围的括号。
- `finallyStatements`
  - : 在控制流退出 `try...catch...finally` 结构之前执行的语句。这些语句无论是否抛出或捕获异常都会执行。

## 描述

`try` 语句总是以 `try` 块开始。并且，至少存在 `catch` 块或 `finally` 块。也可以同时存在 `catch` 和 `finally` 块。这为我们提供了 `try` 语句的三种形式：

- `try...catch`
- `try...finally`
- `try...catch...finally`

与其他结构（如 [`if`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 或 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)）不同，`try`、`catch` 和 `finally` 块必须是*块*，而不是单个语句。

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

`catch` 块包含指定在 `try` 块中抛出异常时要执行的语句。如果 `try` 块（或在 `try` 块内部调用的函数）中的任何语句抛出异常，则立即转移到 `catch` 块。如果 `try` 块中没有抛出异常，则跳过 `catch` 块。

`finally` 块总是在控制流退出 `try...catch...finally` 结构之前执行。它总是执行，无论是否抛出或捕获异常。

你可以嵌套多个 `try` 语句。如果内部 `try` 语句没有 `catch` 块，则使用包裹它的 `try` 语句的 `catch` 块。

你可以使用 `try` 语句来处理 JavaScript 异常。有关 JavaScript 异常的更多信息，请参阅 [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#异常处理语句)。

### catch 绑定

当 `try` 块中抛出异常时，`exceptionVar`（即 `catch (e)`）保存了异常的值。你可以使用这个{{Glossary("binding", "绑定")}}获取有关抛出的异常的信息。这个{{Glossary("binding", "绑定")}}只能在 `catch` 块的{{Glossary("Scope", "作用域")}}中使用。

它不需要是单个标识符。你可以使用[解构模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)来一次性为多个标识符赋值。

```js
try {
  throw new TypeError("哦豁");
} catch ({ name, message }) {
  console.log(name); // “TypeError”
  console.log(message); // “哦豁”
}
```

`catch` 子句创建的绑定与 `catch` 块处于同一作用域内，因此 `catch` 块中声明的变量不能与 `catch` 子句创建的绑定具有相同的名称。（[有一个例外](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#语句)，但它是已弃用的语法。）

```js-nolint example-bad
try {
  throw new TypeError("哦豁");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

异常绑定是可写的。例如，你可能需要规范异常值，以确保它是一个 {{jsxref("Error")}} 对象。

```js
try {
  throw "哦豁；这不是一个 Error 对象";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

如果你不需要异常值，你可以省略异常变量及其周围的括号。

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### finally 块

`finally` 块包含要在 `try` 和 `catch` 块之后，但在 `try...catch...finally` 块之后的语句之前执行的语句。控制流将始终进入 `finally` 块，其执行可以按以下方式进行：

- 在 `try` 块正常执行完成（且没有抛出异常）后立即执行；
- 在 `catch` 块正常执行完成后立即执行；
- 在 `try` 块或 `catch` 块中将要执行控制流语句（`return`、`throw`、`break`、`continue`）退出块之前立即执行。

如果 `try` 块中抛出异常，即使没有 `catch` 块来处理异常，`finally` 块仍然执行，在这种情况下，异常仍然会在 `finally` 块执行完成后立即抛出。

以下示例展示了 `finally` 块的一个用例。这段代码打开一个文件，然后执行使用该文件的语句；`finally` 块确保文件在使用后总是关闭，即使抛出了异常。

```js
openMyFile();
try {
  // 绑定资源
  writeMyFile(theData);
} finally {
  closeMyFile(); // 始终关闭资源
}
```

控制流语句（`return`、`throw`、`break`、`continue`）在 `finally` 块中将“覆盖” `try` 块或 `catch` 块的任何正常完成值。在此示例中，`try` 块尝试返回 1，但在返回之前，控制流已转移到 `finally` 块，因此 `finally` 块的返回值将被返回。

```js
function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // 返回 2
```

在 `finally` 块中使用控制流语句通常不是一个好主意。请只将其用于清理代码。

## 示例

### 无条件捕获块

当使用 `catch` 块时，`catch` 块将在 `try` 块中抛出异常时被执行。例如，在下面的代码中，控制流将被转移到 `catch` 块。

```js
try {
  throw "我的异常"; // 产生异常
} catch (e) {
  // 处理任何异常的语句
  logMyErrors(e); // 将异常对象传递给错误处理器
}
```

`catch` 块指定了一个标识符（如上例中的 `e`），它保存了异常的值。这个值只能在 `catch` 块的{{Glossary("Scope", "作用域")}}内使用。

### 条件捕获块

你可以通过将 `try...catch` 块与 `if...else if...else` 结构组合起来，创建“条件 `catch` 块”。例如：

```js
try {
  myroutine(); // 可能会抛出三种类型的异常
} catch (e) {
  if (e instanceof TypeError) {
    // 处理 TypeError 异常的语句
  } else if (e instanceof RangeError) {
    // 处理 RangeError 异常的语句
  } else if (e instanceof EvalError) {
    // 处理 EvalError 异常的语句
  } else {
    // 处理未指定异常的语句
    logMyErrors(e); // 将异常对象传递给错误处理器
  }
}
```

一个常见的用例是仅捕获（并消除）一小部分预期错误，然后在其他情况下重新抛出错误：

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // 处理这个非常常见的预期错误的语句
  } else {
    throw e; // 重新抛出错误，没有任何改变
  }
}
```

这类似与其他语言中的语法，比如 Java：

```java
try {
  myRoutine();
} catch (RangeError e) {
  // 处理这个非常常见的预期错误的语句
}
// 其他错误被隐式重新抛出
```

### 嵌套 try 块

首先，让我们看看下面的代码会发生什么：

```js
try {
  try {
    throw new Error("哦豁");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("外层", ex.message);
}

// 输出：
// “finally”
// “外层” “哦豁”
```

现在，如果我们已经在内部的 `try` 块中通过添加 `catch` 块捕获了异常：

```js
try {
  try {
    throw new Error("哦豁");
  } catch (ex) {
    console.error("内层", ex.message);
  } finally {
    console.log("最终");
  }
} catch (ex) {
  console.error("外层", ex.message);
}

// 输出：
// “内层” “哦豁”
// “最终”
```

现在，让我们重新抛出错误。

```js
try {
  try {
    throw new Error("哦豁");
  } catch (ex) {
    console.error("内层", ex.message);
    throw ex;
  } finally {
    console.log("最终");
  }
} catch (ex) {
  console.error("外层", ex.message);
}

// 输出：
// “内层” “哦豁”
// “最终”
// “外层” “哦豁”
```

任何特定的异常只会被直接包裹它的 `catch` 块捕获一次，除非该异常被重新抛出。当然，如果在“内部”代码块中触发了任何新的异常（因为 `catch` 块中的代码可能会执行某些操作并抛出异常），这些异常将由外部的 `catch` 块捕获。

### 从 finally 块返回

如果 `finally` 块返回一个值，这个值将成为整个 `try-catch-finally` 语句的返回值，而不管 `try` 和 `catch` 块中的 `return` 语句。这包括 `catch` 块中抛出的异常。

```js
(() => {
  try {
    try {
      throw new Error("哦豁");
    } catch (ex) {
      console.error("内层", ex.message);
      throw ex;
    } finally {
      console.log("最终");
      return;
    }
  } catch (ex) {
    console.error("外层", ex.message);
  }
})();

// 输出：
// “内层” “哦豁”
// “最终”
```

外层的“哦豁”不会被抛出，因为 `finally` 块中的 `return` 语句将控制流转移到外部。同样的规则也适用于 `catch` 块中返回的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
