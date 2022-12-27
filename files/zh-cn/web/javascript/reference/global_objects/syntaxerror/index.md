---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
---

{{JSRef}}

**`SyntaxError`** 对象代表尝试解析语法上不合法的代码的错误。

## 描述

当 Javascript 语言解析代码时，JavaScript 引擎发现了不符合语法规范的 tokens 或 token 顺序时抛出`SyntaxError`.

## 语法

```plain
new SyntaxError([message[, fileName[, lineNumber]]])
```

### 参数

- `message`
  - : 可选的。可阅读的错误描述信息
- `fileName` {{non-standard_inline}}
  - : 可选的。包含引发异常的代码的文件名
- `lineNumber` {{non-standard_inline}}
  - : 可选的。包含引发异常的代码的行号

## 属性

- {{jsxref("SyntaxError.prototype")}}
  - : 允许 `SyntaxError`对象添加属性。

## 方法

全局 `SyntaxError` 自身不包含任何方法，但从原型链中继承了一些方法。

## `SyntaxError` 实例

### 属性

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype', '属性')}}

### 方法

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype', '方法')}}

## 示例

### 捕获 `SyntaxError`

```js
try {
  eval('hoo bar');
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "missing ; before statement"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "Scratchpad/1"
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
}
```

### 创建 `SyntaxError`

```js
try {
  throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "Hello"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "someFile.js"
  console.log(e.lineNumber);             // 10
  console.log(e.columnNumber);           // 0
  console.log(e.stack);                  // "@Scratchpad/2:11:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error")}}
- {{jsxref("SyntaxError.prototype")}}
