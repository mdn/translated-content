---
title: 流程控制与错误处理
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Grammar_and_Types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript 提供一套灵活的语句集，特别是控制流语句，你可以用它在你的应用程序中实现大量的交互性功能。本章节我们将带来关于 JavaScript 语句的一些概览。

这一章中的语句，在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements) 中包含更为详尽的细节。在 JavaScript 代码中，分号（;）字符被用来分割语句。

在 JavaScript 中，任何表达式 (expression) 都可以看作一条语句 (statement),如果你想了解表达式的详细信息，可以阅读[表达式与运算符（Expressions and operators）](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)这一章节。

## 语句块

最基本的语句是用于组合语句的语句块。该块由一对大括号界定：

```plain
{
   statement_1;
   statement_2;
   statement_3;
   .
   .
   .
   statement_n;
}
```

### 示例

语句块通常用于流程控制，如`if`，`for`，`while`等等。

```js
while (x < 10) {
  x++;
}
```

这里`{ x++; }`就是语句块。

**重要**：在 ECMAScript 6 标准之前，Javascript 没有块作用域。在一个块中引入的变量的作用域是包含函数或脚本，并且设置它们的效果会延续到块之外。换句话说，块语句不定义范围。JavaScript 中的“独立”块会产生与 C 或 Java 中完全不同的结果。示例：

```js
var x = 1;
{
  var x = 2;
}
alert(x); // 输出的结果为 2
```

这段代码的输出是**2**，这是因为块级作用域中的 var x 变量声明与之前的声明在同一个作用域内。在 C 语言或是 Java 语言中，同样的代码输出的结果是 1。

从 ECMAScript 2015 开始，使用 `let` 和`const`变量是块作用域的。更多信息请参考 {{jsxref("Statements/let", "let")}} 和 {{jsxref("Statements/const", "const")}}。

## 条件判断语句

条件判断语句指的是根据指定的条件所返回的结果（真或假或其他预定义的），来执行特定的语句。JavaScript 支持两种条件判断语句：`if...else`和`switch`。

### `if...else` 语句

当一个逻辑条件为真，用 if 语句执行一个语句。当这个条件为假，使用可选择的 else 从句来执行这个语句。if 语句如下所示：

```js
if (condition) {
  statement_1;
} else {
  statement_2;
} //推荐使用严格的语句块模式，语句 else 可选
```

条件可以是任何返回结果被计算为 true 或 false 的表达式。如果条件表达式返回的是 true，statement_1 语句会被执行；否则，statement_2 被执行。statement_1 和 statement_2 可以是任何语句，甚至你可以将另一个 if 语句嵌套其中。

你也可以组合语句通过使用 `else if` 来测试连续多种条件判断，就像下面一样：

```js
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n_1) {
  statement_n;
} else {
  statement_last;
}
```

要执行多个语句，可以使用语句块 ({ ... }) 来分组这些语句。通常，总是使用语句块是一个好的习惯，特别是在代码涉及比较多的 if 语句时：

```js
if (条件) {
  当条件为真的时候，执行语句 1;
  当条件为真的时候，执行语句 2;
} else {
  当条件为假的时候，执行语句 3;
  当条件为假的时候，执行语句 4;
}
```

不建议在条件表达式中使用赋值语句，因为在快速查阅代码时容易把它看成等值比较。例如，不要使用下面的代码：

> **警告：**
>
> ```js-nolint
> if (x = y) {
>   /*  语句  */
> }
> ```

如果你需要在条件表达式中使用赋值，通常在赋值语句前后额外添加一对括号。例如：

```js-nolint
if ((x = y)) {
  /* statements here */
}
```

#### 错误的值

下面这些值将被计算出 false (also known as {{Glossary("Falsy")}} values):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空字符串（`""`）

当传递给条件语句所有其他的值，包括所有对象会被计算为真。

请不要混淆原始的布尔值`true`和`false` 与 {{jsxref("Boolean")}}对象的真和假。例如：

```js
var b = new Boolean(false);
if (b) //结果视为真
if (b == true) // 结果视为假
```

#### 示例

在以下示例中，如果`Text`对象中的字符数为 3，函数`checkData`将返回`true`；否则，显示警报并返回`false`。

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "Enter exactly three characters. " +
        document.form1.threeChar.value +
        " is not valid.",
    );
    return false;
  }
}
```

### `switch` 语句

`switch` 语句允许一个程序求一个表达式的值并且尝试去匹配表达式的值到一个 `case` 标签。如果匹配成功，这个程序执行相关的语句。`switch` 语句如下所示：

```js
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}
```

程序首先查找一个与 `expression` 匹配的 `case` 语句，然后将控制权转移到该子句，执行相关的语句。如果没有匹配值，程序会去找 `default` 语句，如果找到了，控制权转移到该子句，执行相关的语句。如果没有找到 `default`，程序会继续执行 `switch` 语句后面的语句。`default` 语句通常出现在 switch 语句里的最后面，当然这不是必须的。

`可选的 break` 语句与每个 `case` 语句相关联，保证在匹配的语句被执行后程序可以跳出 `switch` 并且继续执行 `switch` 后面的语句。如果 break 被忽略，则程序将继续执行 switch 语句中的下一条语句。

**示例**
在如下示例中，如果 `fruittype` 等于 "Bananas", 程序匹配到对应 "Bananas" 的`case` 语句，并执行相关语句。当执行到 `break` 时，程序结束了 `switch` 并执行 `switch` 后面的语句。如果不写 `break` ，那么程序将会执行 `case "Cherries"` 下的语句。

```js
switch (fruittype) {
  case "Oranges":
    document.write("Oranges are $0.59 a pound.<br>");
    break;
  case "Apples":
    document.write("Apples are $0.32 a pound.<br>");
    break;
  case "Bananas":
    document.write("Bananas are $0.48 a pound.<br>");
    break;
  case "Cherries":
    document.write("Cherries are $3.00 a pound.<br>");
    break;
  case "Mangoes":
  case "Papayas":
    document.write("Mangoes and papayas are $2.79 a pound.<br>");
    break;
  default:
    document.write("Sorry, we are out of " + fruittype + ".<br>");
}
document.write("Is there anything else you'd like?<br>");
```

## 异常处理语句

你可以用 `throw` 语句抛出一个异常并且用 `try...catch` 语句捕获处理它。

- [`throw`](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_statement)语句
- [`try...catch`](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement)语句

### 异常类型

JavaScript 可以抛出任意对象。然而，不是所有对象能产生相同的结果。尽管抛出数值或者字母串作为错误信息十分常见，但是通常用下列其中一种异常类型来创建目标更为高效：

- [ECMAScript exceptions](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)
- {{domxref("DOMException")}} and {{domxref("DOMError")}}

### `throw` 语句

使用`throw`语句抛出一个异常。当你抛出异常，你规定一个含有值的表达式要被抛出。

```js
throw expression;
```

你可以抛出任意表达式而不是特定一种类型的表达式。下面的代码抛出了几个不同类型的表达式：

```js
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString: function () {
    return "I'm an object!";
  },
};
```

> **备注：** 你可以在抛出异常时声明一个对象。那你就可以在 catch 块中查询到对象的属性。

```js
// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// Make the exception convert to a pretty string when used as
// a string (e.g. by the error console)
UserException.prototype.toString = function () {
  return this.name + ': "' + this.message + '"';
};

// Create an instance of the object type and throw it
throw new UserException("Value too high");
```

### `try...catch` 语句

`try...catch` 语句标记一块待尝试的语句，并规定一个以上的响应应该有一个异常被抛出。如果我们抛出一个异常，`try...catch`语句就捕获它。

`try...catch` 语句有一个包含一条或者多条语句的 try 代码块，0 个或 1 个的`catch`代码块，catch 代码块中的语句会在 try 代码块中抛出异常时执行。换句话说，如果你在 try 代码块中的代码如果没有执行成功，那么你希望将执行流程转入 catch 代码块。如果 try 代码块中的语句（或者`try` 代码块中调用的方法）一旦抛出了异常，那么执行流程会立即进入`catch` 代码块。如果 try 代码块没有抛出异常，catch 代码块就会被跳过。`finally` 代码块总会紧跟在 try 和 catch 代码块之后执行，但会在 try 和 catch 代码块之后的其他代码之前执行。

下面的例子使用了`try...catch`语句。示例调用了一个函数用于从一个数组中根据传递值来获取一个月份名称。如果该值与月份数值不相符，会抛出一个带有`"InvalidMonthNo"`值的异常，然后在捕捉块语句中设`monthName`变量为`unknown`。

```js
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler -> your own function
}
```

#### `catch` 块

你可以使用`catch`块来处理所有可能在`try`块中产生的异常。

```js
catch (catchID) {
  statements
}
```

捕捉块指定了一个标识符（上述语句中的`catchID`）来存放抛出语句指定的值；你可以用这个标识符来获取抛出的异常信息。在插入`throw`块时 JavaScript 创建这个标识符；标识符只存在于`catch`块的存续期间里；当`catch`块执行完成时，标识符不再可用。

举个例子，下面代码抛出了一个异常。当异常出现时跳到`catch`块。

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

#### `finally`块

`finally`块包含了在 try 和 catch 块完成后、下面接着 try...catch 的语句之前执行的语句。`finally`块无论是否抛出异常都会执行。如果抛出了一个异常，就算没有异常处理，`finally`块里的语句也会执行。

你可以用`finally`块来令你的脚本在异常发生时优雅地退出；举个例子，你可能需要在绑定的脚本中释放资源。接下来的例子用文件处理语句打开了一个文件（服务端的 JavaScript 允许你进入文件）。如果在文件打开时一个异常抛出，`finally`块会在脚本错误之前关闭文件。

```js
openMyFile();
try {
  writeMyFile(theData); //This may throw a error
} catch (e) {
  handleError(e); // If we got a error we handle it
} finally {
  closeMyFile(); // always close the resource
}
```

如果`finally`块返回一个值，该值会是整个`try-catch-finally`流程的返回值，不管在`try`和`catch`块中语句返回了什么：

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; // this return statement is suspended
    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false
```

用`finally`块覆盖返回值也适用于在`catch`块内抛出或重新抛出的异常：

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
    // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch (e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
```

#### 嵌套 try...catch 语句

你可以嵌套一个或多个`try ... catch`语句。如果一个内部`try ... catch`语句没有`catch`块，它需要有一个`finally`块，并且封闭的`try ... catch`语句的`catch`块被检查匹配。有关更多信息，请参阅[try... catch](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)参考页上的[嵌套 try-blocks](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks)。

### 使用`Error`对象

根据错误类型，你也许可以用'name'和'message'获取更精炼的信息。'name'提供了常规的错误类（如 'DOMException' 或 'Error'），而'message'通常提供了一条从错误对象转换成字符串的简明信息。

在抛出你个人所为的异常时，为了充分利用那些属性（比如你的`catch`块不能分辨是你个人所为的异常还是系统的异常时），你可以使用 Error 构造函数。比如：

```js
function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
