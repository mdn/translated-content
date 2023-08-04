---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
---

{{jsSidebar("Statements")}}

**`try...catch`** 语句标记要尝试的语句块，并指定一个出现异常时抛出的响应。

{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}

## 语法

```plain
try {
   try_statements
}
[catch (exception_var_1 if condition_1) { // non-standard
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]
```

- `try_statements`
  - : 需要被执行的语句。
- `catch_statements_1`, `catch_statements_2`
  - : 如果在`try`块里有异常被抛出时执行的语句。
- `exception_var_1`, `exception_var_2`
  - : 用于保存关联`catch`子句的异常对象的标识符。
- `condition_1`
  - : 一个条件表达式。
- `finally_statements`
  - : 在`try`语句块之后执行的语句块。无论是否有异常抛出或捕获这些语句都将执行。

## 描述

`try`语句包含了由一个或者多个语句组成的`try`块，和至少一个`catch`块或者一个`finally`块的其中一个，或者两个兼有，下面是三种形式的`try`声明：

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

`catch`子句包含`try`块中抛出异常时要执行的语句。也就是，你想让`try`语句中的内容成功，如果没成功，你想控制接下来发生的事情，这时你可以在`catch`语句中实现。如果在`try`块中有任何一个语句（或者从`try`块中调用的函数）抛出异常，控制立即转向`catch`子句。如果在`try`块中没有异常抛出，会跳过`catch`子句。

`finally`子句在`try`块和`catch`块之后执行但是在下一个`try`声明之前执行。无论是否有异常抛出或捕获它总是执行。

你可以嵌套一个或者更多的`try`语句。如果内部的`try`语句没有`catch`子句，那么将会进入包裹它的`try`语句的`catch`子句。

你也可以用`try`语句去处理 JavaScript 异常。参考[JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)了解更多关于 Javascript 异常的信息。

### 无条件的`catch`块

当使用单个无条件`catch`子句时，抛出的任何异常时都会进入到`catch`块。例如，当在下面的代码中发生异常时，控制转移到`catch`子句。

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

`catch`块指定一个标识符（在上面的示例中为 e），该标识符保存由`throw`语句指定的值。`catch`块是唯一的，因为当输入`catch`块时，JavaScript 会创建此标识符，并将其添加到当前作用域；标识符仅在`catch`块执行时存在；`catch`块执行完成后，标识符不再可用。

### 条件`catch`块

{{non-standard_header}}

你也可以用一个或者更多条件`catch`子句来处理特定的异常。在这种情况下，当异常抛出时将会进入合适的`catch`子句中。在下面的代码中，`try`块的代码可能会抛出三种异常：{{jsxref("TypeError")}}，{{jsxref("RangeError")}}和{{jsxref("EvalError")}}。当一个异常抛出时，控制将会进入与其对应的`catch`语句。如果这个异常不是特定的，那么控制将转移到无条件`catch`子句。

当用一个无条件`catch`子句和一个或多个条件语句时，无条件`catch`子句必须放在最后。否则当到达条件语句之前所有的异常将会被非条件语句拦截。

提醒：这个功能不符合 ECMAscript 规范。

```js
try {
    myroutine(); // may throw three types of exceptions
} catch (e if e instanceof TypeError) {
    // statements to handle TypeError exceptions
} catch (e if e instanceof RangeError) {
    // statements to handle RangeError exceptions
} catch (e if e instanceof EvalError) {
    // statements to handle EvalError exceptions
} catch (e) {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
}
```

下面用符合 ECMAscript 规范的简单的 JavaScript 来编写相同的“条件 catch 子句”（显然更加冗长的，但是可以在任何地方运行）：

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
  } else {
    throw e; // re-throw the error unchanged
  }
}
```

### 异常标识符

当`try`块中的抛出一个异常时，`exception_var`（如`catch (e)`中的`e`）用来保存被抛出声明指定的值。你可以用这个标识符来获取关于被抛出异常的信息。

这个标识符是`catch`子语句内部的。换言之，当进入`catch`子语句时标识符创建，`catch`子语句执行完毕后，这个标识符将不再可用。

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

### `finally`块

`finally`块包含的语句在`try`块和`catch`之后，`try..catch..finally`块后的语句之前执行。请注意，无论是否抛出异常`finally`子句都会执行。此外，如果抛出异常，即使没有`catch`子句处理异常，`finally`子句中的语句也会执行。

以下示例打开一个文件，然后执行使用该文件的语句（服务器端 JavaScript 允许您访问文件）。如果文件打开时抛出异常，则`finally`子句会在脚本失败之前关闭该文件。finally 中的代码最终也会在`try`或`catch block`显式返回时执行。

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

## 示例

### 嵌套 try 块

首先让我们看看这里发生什么：

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "finally"
// "outer" "oops"
```

现在，如果我们已经在 try 语句中，通过增加一个 catch 语句块捕获了异常

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
```

现在，让我们再次抛出错误。

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

任何给定的异常只会被离它最近的封闭 catch 块捕获一次。当然，在“inner”块抛出的任何新异常（因为 catch 块里的代码也可以抛出异常），将会被“outer”块所捕获。

### 从 finally 语句块返回

如果从`finally`块中返回一个值，那么这个值将会成为整个`try-catch-finally`的返回值，无论是否有`return`语句在`try`和`catch`中。这包括在`catch`块里抛出的异常。

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
    return;
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// 注：此 try catch 语句需要在 function 中运行才能作为函数的返回值，否则直接运行会报语法错误
// Output:
// "inner" "oops"
// "finally"
```

因为 finally 块里的 return 语句，"oops" 没有抛出到外层，从 catch 块返回的值同样适用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
