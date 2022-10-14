---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

本对象代表了一个关于 [eval](/zh-CN/Core_JavaScript_1.5_Reference/Global_Functions/eval) 函数的错误。此异常不再会被 JavaScript 抛出，但是 EvalError 对象仍然保持兼容性。

## 语法

```plain
new EvalError([message[, fileName[, lineNumber]]])
```

### 参数

- message
  - : 可选参数：可阅读的关于错误的描述。
- fileName (非标准)
  - : 可选参数：代码中导致异常的文件的文件名。
- lineNumber (非标准)
  - : 可选参数：代码中导致异常的代码的行号。

## 属性

- [prototype](/zh-CN/Core_JavaScript_1.5_Reference/Global_Objects/EvalError/prototype)
  - : 允许向 EvalError 对象中添加自定义属性。

## 方法

全局的 EvalError 对象本身不包含任何方法，然而它通过原型链继承了一些方法。

## `EvalError` 实例

### 属性

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Properties')}}

### 方法

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Methods')}}

## 例子

`EvalError` 不在当前 ECMAScript 规范中使用，因此不会被运行时抛出。但是对象本身仍然与规范的早期版本向后兼容。

### 创建 `EvalError`

```plain
try {
  throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "EvalError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Error](/zh-CN/Core_JavaScript_1.5_Reference/Global_Objects/Error)
- [eval](/zh-CN/Core_JavaScript_1.5_Reference/Global_Functions/eval)
- [EvalError.prototype](/zh-CN/Core_JavaScript_1.5_Reference/Global_Objects/EvalError/prototype)
