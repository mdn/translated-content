---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

**`Error`** 建構函式能用來建立一個 error 物件。當執行期間發生錯誤時，`Error` 物件實體會被拋出。`Error` 物件也可作為自訂例外的基礎物件，請參考下方的標準內建錯誤類型。

## 語法

```plain
new Error([message[, fileName[, lineNumber]]])
```

### 參數

- `message` {{optional_inline}}
  - : 人們可閱讀的錯誤說明。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The value for the `fileName` property on the created `Error` object. Defaults to the name of the file containing the code that called the `Error()` constructor.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Optional. The value for the `lineNumber` property on the created `Error` object. Defaults to the line number containing the `Error()` constructor invocation.

## 描述

Runtime errors result in new `Error` objects being created and thrown.

This page documents the use of the `Error` object itself and its use as a constructor function. For a list of properties and methods inherited by `Error` instances, see {{jsxref("Error.prototype")}}.

### 錯誤類型

Besides the generic `Error` constructor, there are six other core error constructors in JavaScript. For client-side exceptions, see [Exception Handling Statements](/zh-TW/docs/Web/JavaScript/Guide/Statements#Exception_Handling_Statements).

- {{jsxref("EvalError")}}
  - : Creates an instance representing an error that occurs regarding the global function {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
- {{jsxref("RangeError")}}
  - : Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
- {{jsxref("ReferenceError")}}
  - : Creates an instance representing an error that occurs when de-referencing an invalid reference.
- {{jsxref("SyntaxError")}}
  - : Creates an instance representing a syntax error that occurs while parsing code in {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("TypeError")}}
  - : Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- {{jsxref("URIError")}}
  - : Creates an instance representing an error that occurs when {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} or {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} are passed invalid parameters.

## 屬性

- {{jsxref("Error.prototype")}}
  - : Allows the addition of properties to `Error` instances.

## 方法

The global `Error` object contains no methods of its own, however, it does inherit some methods through the prototype chain.

## `Error` 實體

Runtime errors result in new `Error` objects being created and thrown.

`Error` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/zh-TW/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

### 屬性

- {{jsxref("Error.prototype.message")}}
  - : Error message. For user-created `Error` objects, this is the string provided as the constructor's first argument.
- {{jsxref("Error.prototype.name")}}
  - : Error name. This is determined by the constructor function.
- {{jsxref("Error.prototype.cause")}}
  - : Error cause indicating the reason why the current error is thrown — usually another caught error. For user-created `Error` objects, this is the value provided as the `cause` property of the constructor's second argument.
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the path to the file that raised this error.
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the line number in the file that raised this error.
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the column number in the line that raised this error.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : A non-standard property for a stack trace.

### 方法

- {{jsxref("Error.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the {{jsxref("Object.prototype.toString()")}} method.

## 範例

### Throwing a generic error

Usually you create an `Error` object with the intention of raising it using the {{jsxref("Statements/throw", "throw")}} keyword. You can handle the error using the {{jsxref("Statements/try...catch", "try...catch")}} construct:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.log(e.name + ": " + e.message);
}
```

### Handling a specific error

You can choose to handle only specific error types by testing the error type with the error's {{jsxref("Object.prototype.constructor", "constructor")}} property or, if you're writing for modern JavaScript engines, {{jsxref("Operators/instanceof", "instanceof")}} keyword:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  }
  // ... etc
}
```

### Custom Error Types

You might want to define your own error types deriving from `Error` to be able to `throw new MyError()` and use `instanceof MyError` to check the kind of error in the exception handler. The common way to do this is demonstrated below.

> **警告：** Note that the thrown `MyError` will report incorrect `lineNumber` and `fileName` at least in Firefox.

See also the ["What's a good way to extend Error in JavaScript?" discussion on Stackoverflow](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

```js
// Create a new object, that prototypically inherits from the Error constructor
function MyError(message) {
  this.name = "MyError";
  this.message = message || "Default Message";
  this.stack = new Error().stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  throw new MyError();
} catch (e) {
  console.log(e.name); // 'MyError'
  console.log(e.message); // 'Default Message'
}

try {
  throw new MyError("custom message");
} catch (e) {
  console.log(e.name); // 'MyError'
  console.log(e.message); // 'custom message'
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Error.prototype")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
