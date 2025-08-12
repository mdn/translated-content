---
title: EvalError() constructor
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
l10n:
  sourceCommit: 88b5d6939c28b5b210f291b7873c5de711b54ab4
---

{{JSRef}}

`EvalError` 构造函数会创建一个与全局函数 {{jsxref("Global_Objects/eval", "eval()")}} 相关的新错误。这种异常在 JavaScript 中已不再抛出，但为了保持兼容性，`EvalError` 对象仍然被保留。

## 语法

```js
new EvalError();
new EvalError(message);
new EvalError(message, fileName);
new EvalError(message, fileName, lineNumber);
```

## 参数

- `message` {{optional_inline}}
  - : 人类可理解的错误描述。
- `fileName` {{optional_inline}}
  - : 导致该异常的代码的文件名。
- `lineNumber` {{optional_inline}}
  - : 导致该异常的代码所在的行号。

## 示例

`EvalError` 对象未在当前的 ECMAScript 规范中使用，因此运行时不会抛出该对象。不过，为了与旧版本规范保持兼容，该对象本身被保留了下来。

### 创建 EvalError

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)
