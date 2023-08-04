---
title: Error() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
---

{{JSRef}}

**`Error()`** 构造函数能够创建一个包含错误信息的对象。

## 语法

```js-nolint
new Error()
new Error(message)
new Error(message, options)
new Error(message, fileName)
new Error(message, fileName, lineNumber)
Error()
Error(message)
Error(message, options)
Error(message, fileName)
Error(message, fileName, lineNumber)
```

> **备注：** 调用 `Error()` 时，可以使用关键字 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)，也可以不使用。两种声明方式均能创建一个新的 `Error` 实例。

### 参数

- `message` {{optional_inline}}
  - : 人类可读的错误信息。
- `options` {{optional_inline}}
  - : 一个包含以下属性的对象：
    - `cause` {{optional_inline}}
      - : 指示错误的具体原因，反映在 {{jsxref("Error/cause", "cause")}} 属性中。当捕获并重新抛出带有更具体或有用的错误消息的错误时，可以使用此属性传递原始错误。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 引发此错误的文件路径，反映在 {{jsxref("Error/fileName", "fileName")}} 属性中。默认为调用 `Error()` 构造函数的代码所在文件的名称。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 引发错误的文件中的行号，反映在 {{jsxref("Error/lineNumber", "lineNumber")}} 属性中。默认为包含 `Error()` 构造函数调用的行号。

## 示例

### 函数调用与构造函数

当 `Error` 作为函数使用，即不包含 {{JSxRef("Operators/new", "new")}} 关键字时，它将返回一个 Error 对象。因此，直接调用 `Error` 函数将产生与使用 `new` 关键字构造 `Error` 对象相同的输出。

```js
const x = Error("I was created using a function call!");
// 上述代码与以下代码具有相同的功能
const y = new Error('I was constructed via the "new" keyword!');
```

### 使用 cause 重新抛出错误

在捕获错误时，我们可能会使用新的错误信息对错误进行包装，再将其重新抛出。这种场景下，你应当将原始错误也传入新的 `Error` 的构造函数，如下所示：

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

更多示例参考[错误 > 区分相似的错误](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#区分相似的错误)。

### 省略 options 参数

JavaScript 只有在 `options` 参数为对象时才会尝试读取 `options.cause` 属性，这样可以避免与另一种非标准的 `Error(message, fileName, lineNumber)` 函数签名产生歧义，后者要求第二个参数必须是字符串。如果你省略了 `options` 参数，或者将原始值作为 `options` 传入，又或者传递的对象中没有 `cause` 属性，那么创建的 `Error` 对象将不会包含 `cause` 属性。

```js
// 省略 options
const error1 = new Error("Error message");
console.log("cause" in error1); // false

// 传递原始值
const error2 = new Error("Error message", "");
console.log("cause" in error2); // false

// 传递不包含 cause 属性的对象
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 提供了支持 `cause` 等最新特性 (modern behavior) 的 [`Error` polyfill](https://github.com/zloirock/core-js#ecmascript-error)
- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
- [Error cause](https://v8.dev/features/error-cause)（v8.dev/features）
