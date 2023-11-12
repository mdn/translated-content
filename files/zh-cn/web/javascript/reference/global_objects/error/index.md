---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

当运行时错误产生时，`Error` 对象会被抛出。`Error` 对象也可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。

## 描述

当代码运行时的发生错误，会创建新的 `Error` 对象，并将其抛出。

### 错误类型

除了通用的 `Error` 构造函数外，JavaScript 还有其他类型的错误构造函数。对于客户端异常，详见[异常处理语句](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#异常处理语句)。

- {{jsxref("EvalError")}}
  - : 创建一个 error 实例，表示错误的原因：与 {{jsxref("Global_Objects/eval", "eval()")}} 有关。
- {{jsxref("RangeError", "RangeError")}}
  - : 创建一个 error 实例，表示错误的原因：数值变量或参数超出其有效范围。
- {{jsxref("ReferenceError")}}
  - : 创建一个 error 实例，表示错误的原因：无效引用。
- {{jsxref("SyntaxError")}}
  - : 创建一个 error 实例，表示错误的原因：语法错误。
- {{jsxref("TypeError")}}
  - : 创建一个 error 实例，表示错误的原因：变量或参数不属于有效类型。
- {{jsxref("URIError")}}
  - : 创建一个 error 实例，表示错误的原因：给 {{JSxRef("encodeURI", "encodeURI()")}} 或 {{JSxRef("decodeURI", "decodeURI()")}} 传递的参数无效。
- {{jsxref("AggregateError")}}
  - : 创建一个 error 实例，其中包裹了由一个操作产生且需要报告的多个错误。如：{{JSxRef("Promise.any()")}} 产生的错误。
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : 创建一个代表 Javascript 引擎内部错误的异常抛出的实例。如：递归太多。

## 构造函数

- {{jsxref("Error/Error", "Error()")}}
  - : 创建一个新的 `Error` 对象。

## 静态方法

- `Error.captureStackTrace()` {{non-standard_inline}}

  - : 一个非标准的 V8 函数，用于在 Error 实例上创建 {{JSxRef("Error.prototype.stack", "stack")}} 属性。

- `Error.stackTraceLimit` {{non-standard_inline}}

  - : 一个非标准的 V8 数值属性，用于限制错误堆栈跟踪中包含堆栈帧数量。

- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : 一个非标准的 V8 函数，如果提供了这一函数，V8 JavaScript 引擎会调用该函数来抛出异常。这个函数允许用户提供自定义的堆栈跟踪格式。

## 实例属性

- {{jsxref("Error.prototype.message")}}
  - : 错误消息。对于用户创建的 `Error` 对象，这是构造函数的第一个参数提供的字符串。
- {{jsxref("Error.prototype.name")}}
  - : 错误名称。这是由构造函数决定的。
- {{jsxref("Error.prototype.cause")}}
  - : 表示导致当前错误被抛出的原因——通常是另一个错误。对于用户创建的 `Error` 对象，这是构造函数的第二个参数提供的值。
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
  - : 一个非标准的 Mozilla 属性，用于表示引发此错误的文件的路径。
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
  - : 一个非标准的 Mozilla 属性，用于表示引发此错误的代码所在的文件的行号。
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
  - : 一个非标准的 Mozilla 属性，用于表示引发此错误的代码在文件中所在行的列号。
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : 一个非标准的属性，用于堆栈跟踪。

## 实例方法

- {{jsxref("Error.prototype.toString()")}}
  - : 返回表示该对象的字符串。覆盖了 {{jsxref("Object.prototype.toString()")}} 方法。

## 示例

### 抛出一个基本错误

通常你会使用 {{jsxref("Statements/throw", "throw")}} 关键字来抛出你创建的 `Error` 对象。可以使用 {{jsxref("Statements/try...catch", "try...catch")}} 结构来处理异常：

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(e.name + ": " + e.message);
}
```

### 处理一个特定错误

你可以通过判断异常的类型来特定处理某一类的异常，即判断 {{jsxref("Object.prototype.constructor", "constructor")}} 属性，当使用现代 JavaScript 引擎时，可使用 {{jsxref("Operators/instanceof", "instanceof")}} 关键字：

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.error(e.name + ": " + e.message);
  }
  // ... etc
  else {
    // If none of our cases matched leave the Error unhandled
    throw e;
  }
}
```

### 区分相似的错误

有时，对于代码块的错误需要根据其原因进行不同的处理，但错误的原因又较为相似（例如：错误的类型和消息均相同）。

如果你无法控制原有错误的抛出，那么一种方法是捕获错误然后抛出一个新的错误，并在新的错误中给出更加具体的错误消息。原始错误应该被传递到新的 `Error` 的构造函数的 `option` 参数（`cause` 属性）中，这确保了原始的错误和堆栈追踪信息在上层的 try/catch 块中可用。

以下示例展示了两种方法会在失败时抛出相似的错误（`doFailSomeWay()` 和 `doFailAnotherWay()`）：

```js
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Failed in some way", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Failed in another way", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Failed in some way":
      handleFailSomeWay(err.cause);
      break;
    case "Failed in another way":
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

> **备注：** 如果你在创建一个函数库，你应该使用错误原因来区分不同的错误——而不是要求你的函数库的使用者来解析错误消息。相关的示例，请参见[提供错误原因](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause)。

[自定义错误类型](#自定义错误类型)也可以使用 [`cause`](#error.prototype.cause) 属性，前提是通过 `super()` 调用子类的构造函数时传递 `options` 参数。

```js
class MyError extends Error {
  constructor(/* some arguments */) {
    // Needs to pass both `message` and `options` to install the "cause" property.
    super(message, options);
  }
}
```

### 自定义错误类型

你可能希望自定义基于 `Error` 的异常类型，使得你能够 `throw new MyError()` 并可以使用 `instanceof MyError` 来检查某个异常的类型。这种需求的通用解决方法如下。

参考 StackOverflow 上关于[“What's a good way to extend Error in JavaScript?”](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)的讨论。

#### ES6 自定义错误类

> **警告：** Babel 7 之前的版本可以处理 `CustomError` 类方法，但类方法需要使用 [Object.defineProperty()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 定义。否则，旧版本的 Babel 和其他转译器在没有[额外配置](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend)的情况下将无法正确处理下面的代码。

> **备注：** 在使用 ES2015 的类时，一些浏览器会在堆栈跟踪中包含 `CustomError` 构造函数。

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}
```

#### ES5 自定义错误对象

> **警告：** 在使用原型声明时，所有浏览器都会在堆栈跟踪中包含 `CustomError` 的构造函数。

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, CustomError.prototype);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

Object.setPrototypeOf(CustomError.prototype, Error.prototype);

Object.setPrototypeOf(CustomError, Error);

CustomError.prototype.name = "CustomError";

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 中提供了具有现代行为（如：支持 `cause`）的 [`Error` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-error)
- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
- 关于 `Error.captureStackTrace()`、`Error.stackTraceLimit` 和 `Error.prepareStackTrace()` 的 [V8 文档](https://v8.dev/docs/stack-trace-api)。
