---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---
{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## 概述

**`ReferenceError`**（引用错误）对象代表当一个不存在（或尚未初始化）的变量被引用时发生的错误。

## 语法

```plain
new ReferenceError([message[, fileName[, lineNumber]]])
```

### 参数

- `message`
  - : 可选。描述可读的错误信息
- `fileName` {{non-standard_inline}}
  - : 可选。包含引起异常代码的文件名
- `lineNumber` {{non-standard_inline}}
  - : 可选。引起异常的代码行号

## 描述

当你尝试引用一个未被定义的变量时，将会抛出一个 `ReferenceError` 。

## 属性

- {{jsxref("ReferenceError.prototype")}}
  - : Allows the addition of properties to an `ReferenceError` object.

## 方法

全局的 `ReferenceError` 本身并不包含有方法，但是他可以从原型链上继承一些方法

## `ReferenceError` 实例

### 属性

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Properties')}}

### 方法

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Methods')}}

## 例子

### 例：捕获一个 `ReferenceError`

```js
try {
  var a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "undefinedVariable is not defined"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "Scratchpad/1"
  console.log(e.lineNumber);                // 2
  console.log(e.columnNumber);              // 6
  console.log(e.stack);                     // "@Scratchpad/2:2:7\n"
}
```

### 例：创建一个 `ReferenceError`

```js
try {
  throw new ReferenceError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "someFile.js"
  console.log(e.lineNumber);                // 10
  console.log(e.columnNumber);              // 0
  console.log(e.stack);                     // "@Scratchpad/2:2:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error")}}
- {{jsxref("ReferenceError.prototype")}}
