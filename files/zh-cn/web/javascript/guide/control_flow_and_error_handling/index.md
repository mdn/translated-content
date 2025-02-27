---
title: 控制流与错误处理
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: f0d7ee3bc3a398612c75063fe227a5dcc515f40b
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Grammar_and_Types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript 支持一套小巧的语句，特别是控制流语句，你可以用它在你的应用程序中实现大量的交互性功能。本章将对这些语句进行概览。

在本章中涉及的语句，[JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements)包含更为详尽的细节。在 JavaScript 代码中，分号（`;`）字符被用来分割语句。

JavaScript 表达式也是语句。想要了解有关表达式的完整信息，参见[表达式与运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)。

## 块语句

最基本的语句是用于组合语句的*块语句*。块由一对花括号界定：

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### 示例

块语句通常用于控制流语句（`if`、`for`、`while`）。

```js
while (x < 10) {
  x++;
}
```

这里，`{ x++; }` 就是块语句。

> [!NOTE]
> 用 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 声明的变量不是块级作用域的，而是函数作用域或脚本作用域的，且设置它们的效果会超越到块本身之外。例如：
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> 会输出 `2`，因为块中 `var x` 语句和块前面的 `var x` 语句的作用域是一样的。（在 C 或 Java 中，等效的代码会输出 `1`。）
>
> 使用 {{jsxref("Statements/let", "let")}} 或 {{jsxref("Statements/const", "const")}} 会消除这个作用域效果。

## 条件语句

条件语句是一组会在指定的条件为真时执行的指令。JavaScript 支持两种条件语句：`if...else` 和 `switch`。

### if...else 语句

使用 `if` 语句在逻辑条件为 `true` 时执行语句。使用可选的 `else` 子句在条件为 `false` 时执行语句。

`if` 语句看起来像这样：

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

这里，`condition` 可以是任何能求值为 `true` 或 `false` 的表达式。（想要了解求值为 `true` 和 `false` 的解释，参见[布尔值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean#描述)。）

如果 `condition` 求值为 `true`，执行 `statement1`。否则，执行 `statement2`。`statement1` 和 `statement2` 可以是任何的语句，包括继续嵌套的 `if` 语句。

你也可以使用 `else if` 组合语句按顺序测试多个条件，就像下面一样：

```js
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

在多个条件的情况下，只有第一个求值为 `true` 的逻辑条件才会被执行。想要执行多个语句，将其组合在一个块语句中（`{ /* … */ }`）。

#### 最佳实践

一般而言，总是使用块语句是最佳实践——*特别是*嵌套 `if` 语句的时候：

```js
if (condition) {
  // condition 为真时的语句
  // …
} else {
  // condition 为假时的语句
  // …
}
```

一般而言，最好不要将赋值（例如，`x = y`）作为 `if...else` 的条件：

```js-nolint example-bad
if (x = y) {
  // 在这里添加语句
}
```

然而，在极少数情况下，你会发现自己想要这么做，[`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 文档中的[使用赋值作为条件](/zh-CN/docs/Web/JavaScript/Reference/Statements/while#使用赋值作为条件)小节是你应该了解并遵循的通用的最佳实践语法指南。

#### 假值

下面这些值求值为 `false`（也叫做[假](/zh-CN/docs/Glossary/Falsy)值）：

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空字符串（`""`）

所有其他的值——包括所有的对象——在被传递给条件语句时会求值为 `true`。

> [!NOTE]
> 请不要混淆原始布尔值 `true` 和 `false` 与 {{jsxref("Boolean")}} 对象的真和假！
>
> 例如：
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // 这个条件求值为 true
> }
> if (b == true) {
>   // 这个条件求值为 false
> }
> ```

#### 示例

在下列示例中，如果 `Text` 对象中的字符数为 3，函数 `checkData` 将返回 `true`；否则，显示警告并返回 `false`。

```js
function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  } else {
    alert(`请正好输入 3 个字符。${document.form1.threeChar.value}是无效的`);
    return false;
  }
}
```

### switch 语句

`switch` 语句允许程序求一个表达式的值并且尝试将表达式的值和 `case` 标签进行匹配。如果匹配成功，程序会执行相关的语句。

`switch` 语句看起来像这样：

```js
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

JavaScript 求值上面的 switch 语句的过程如下：

- 程序首先查找一个与 expression 的值匹配的 `case` 子句标签，然后将控制权转移到该子句，执行相关的语句。
- 如果没有匹配的标签，程序会去找可选的 `default` 子句：
  - 如果找到了 `default` 子句，程序会将控制权转移到该子句，执行相关的语句。
  - 如果没有找到 `default` 子句，程序会继续执行 `switch` 语句后面的语句。
  - （`default` 子句通常是最后一个子句，当然这不是必须的。）

#### break 语句

每个 `case` 子句会关联一个可选的 `break` 语句，它能保证在匹配的语句被执行后程序可以跳出 `switch` 并且继续执行 `switch` 后面的语句。如果 `break` 被忽略，程序会在 `switch` 语句内继续执行（将会执行下一个 `case` 的语句，依此类推）。

#### 示例

在下列示例中，如果 `fruitType` 等于 `"Bananas"`，程序将该值与 `case "Bananas"` 匹配，并执行相关语句。当执行到 `break` 时，程序结束 `switch` 并执行 `switch` 后面的语句。如果不写 `break` ，那么程序将会执行 `case "Cherries"` 下的语句。

```js
switch (fruitType) {
  case "Oranges":
    console.log("橙子是 $0.59 一磅");
    break;
  case "Apples":
    console.log("苹果是 $0.32 一磅");
    break;
  case "Bananas":
    console.log("香蕉是 $0.48 一磅");
    break;
  case "Cherries":
    console.log("樱桃是 $3.00 一磅");
    break;
  case "Mangoes":
    console.log("芒果是 $0.56 一磅。");
    break;
  case "Papayas":
    console.log("木瓜是 $2.79 一磅。");
    break;
  default:
    console.log(`对不起，${fruitType} 卖完了。`);
}
console.log("还有其他什么是你喜欢的吗？");
```

## 异常处理语句

你可以用 `throw` 语句抛出一个异常并且用 `try...catch` 语句处理它。

- [`throw` 语句](#throw_语句)
- [`try...catch` 语句](#try...catch_语句)

### 异常类型

JavaScript 可以抛出任意对象。然而，并非所有抛出的对象都是生而平等的。尽管抛出数字或者字符串作为错误信息十分常见，但是用下列其中一种专门为这个目的而创建的异常类型通常更为高效：

- [ECMAScript 异常](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#错误类型)
- [`DOMException`](/zh-CN/docs/Web/API/DOMException)

### throw 语句

使用 `throw` 语句抛出异常。`throw` 语句会指明要抛出的值：

```js
throw expression;
```

你可以抛出任意表达式而不是特定类型的表达式。下面的代码抛出了几个不同类型的异常：

```js
throw "错误 2"; // 字符串类型
throw 42; // 数字类型
throw true; // 布尔类型
throw {
  toString() {
    return "我是一个对象";
  },
};
```

### try...catch 语句

`try...catch` 语句用于标记一段要尝试的语句块，并指定抛出异常时的一个或多个响应。如果抛出了异常，`try...catch` 语句会捕获它。

`try...catch` 语句由 `try` 块（其包含一个或多个语句）和 `catch` 块（其包含在 `try` 块中抛出异常时要执行的语句）组成。

换句话说，你希望 `try` 块执行成功——但如果它没有执行成功，那么你希望将控制转移到 `catch` 块。如果 `try` 块中的语句（或者在 `try` 块中调用的函数里）抛出了异常，那么控制*立马*转移到 `catch` 块。如果 `try` 块没有抛出异常，`catch` 块就会被跳过。`finally` 块总会紧跟在 `try` 和 `catch` 块之后执行，但会在 `try...catch` 语句后面的语句之前执行。

下列示例使用了 `try...catch` 语句。示例调用的函数是根据传递的值从数组中获取一个月份名称。如果该值与月份数值（`1`-`12`）不相符，会抛出带有 `"无效的月份数值"` 值的异常，然后在 `catch` 块的语句中设 `monthName` 变量为 `"未知"`。

```js-nolint
function getMonthName(mo) {
  mo--; // 将月份调整为数组索引（这样的话，0 = 一月，11 = 十二月）
  const months = [
    "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("无效的月份数值"); // 在这使用 throw 关键字
  }
}

try {
  // 要尝试的语句
  monthName = getMonthName(myMonth); // 可能抛出异常的函数
} catch (e) {
  monthName = "未知";
  logMyErrors(e); // 将异常对象传递给错误处理器（例如，你写的函数）
}
```

#### catch 块

你可以使用 `catch` 块来处理所有可能在 `try` 块中产生的异常。

```js-nolint
catch (exception) {
  statements
}
```

`catch` 块指定的标识符（上述语句中的 `exception`）会存储由 `throw` 语句指定的值。你可以用这个标识符来获取抛出的异常的信息。在进入 `catch` 块时 JavaScript 会创建这个标识符。标识符只存在于 `catch` 块的存续期间里。当 `catch` 块执行完成时，标识符不再可用。

举个例子，下面代码抛出了一个异常。当异常出现时控制会转移到 `catch` 块。

```js
try {
  throw "我的异常"; // 生成一个异常
} catch (err) {
  // 处理异常的表达式
  logMyErrors(err); // 将异常对象传递给错误处理器
}
```

> [!NOTE]
> 在 `catch` 块中将错误输出到控制台时，建议使用 `console.error()` 而不是 `console.log()` 进行调试。它会将消息格式化为错误，并将其添加到页面生成的错误消息列表。

#### finally 块

`finally` 块包含的语句在 `try` 和 `catch` 块执行*之后*执行。此外，`finally` 块在 `try…catch…finally` 语句后面的代码*之前*执行。

也应该注意，`finally` 块*无论是否*抛出异常都会执行。如果抛出了一个异常，就算没有 `catch` 块处理抛出的异常，`finally` 块里的语句也会执行。

你可以用 `finally` 块来令你的脚本在异常发生时优雅地退出。举个例子，你可能需要释放脚本绑定的资源。

下列的示例打开一个文件，然后执行使用这个文件的语句。（服务器端 JavaScript 允许你访问文件。）如果在文件打开时抛出异常，`finally` 块会在脚本失败之前关闭文件。在这使用 `finally` 能*确保*文件永远不会是打开状态，即使发生了错误。

```js
openMyFile();
try {
  writeMyFile(theData); // 这可能会抛出错误
} catch (e) {
  handleError(e); // 如果错误出现了，处理它
} finally {
  closeMyFile(); // 总是关闭资源
}
```

如果 `finally` 块返回一个值，该值会是整个 `try…catch…finally` 流程的返回值，不管在 `try` 和 `catch` 块中的 `return` 语句返回了什么：

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // 这个 return 语句会被挂起直到 finally 块结束
    return true;
    console.log(2); // 不可达
  } finally {
    console.log(3);
    return false; // 覆盖前面的“return”
    console.log(4); // 不可达
  }
  // 现在执行“return false”
  console.log(5); // 不可达
}
console.log(f()); // 0、1、3、false
```

用 `finally` 块覆盖返回值也适用于在 `catch` 块内抛出或重新抛出的异常：

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log("捕获内部的“bogus”");
    // 这个 return 语句会被挂起直到 finally 块结束
    throw e;
  } finally {
    return false; // 覆盖前面的“throw”
  }
  // 现在执行“return false”
}

try {
  console.log(f());
} catch (e) {
  // 这永远不会抵达！
  // f() 执行时，`finally` 块返回 false，而这会覆盖上面的 `catch` 中的 `throw`
  console.log("捕获外部的“bogus”");
}

// 日志：
// 捕获内部的“bogus”
// false
```

#### 嵌套 try...catch 语句

你可以嵌套一个或多个 `try ... catch` 语句。

如果一个内部 `try` 块*没有*对应的 `catch` 块：

1. 它*必须*有一个 `finally` 块，以及
2. 包围的 `try...catch` 语句的 `catch` 块会被检查是否能处理该异常。

想要了解更多信息，参见 [`try... catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 参考页上的[嵌套 try 块](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#嵌套_try_块)。

### 使用 Error 对象

根据错误类型，你也许可以用 `name` 和 `message` 属性获取更精炼的信息。

`name` 属性提供了常规的 `Error` 类（如 `DOMException` 或 `Error`），而 `message` 通常提供的信息比将错误对象转换成字符串得到的信息更简明。

在抛出自定义异常时，为了充分利用那些属性（比如 `catch` 块不能分辨是自定义异常还是系统异常时），你可以使用 `Error` 构造函数。

比如：

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("消息");
  } else {
    doSomethingToGetAJavaScriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  // 现在，实际使用 `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // “消息”，或者一个 JavaScript 错误消息
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
