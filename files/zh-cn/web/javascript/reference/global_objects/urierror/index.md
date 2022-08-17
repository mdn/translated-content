---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
---
{{JSRef}}

URIError 对象用来表示以一种错误的方式使用全局 URI 处理函数而产生的错误。

## 语法

```plain
new URIError([message[, fileName[, lineNumber]]])
```

### 参数

- `message`
  - : 选填。易于理解的错误描述。
- `fileName` 【非标准内联】
  - : 选填。包含造成异常的代码的文件名称。
- `lineNumber` 【非标准内联】
  - : 选填。造成异常的代码行号。

## 描述

当向全局 URI 处理函数传递一个不合法的 URI 时，URIError 错误会被抛出。

## 属性

- {{jsxref("URIError.prototype")}}
  - : 允许向一个 URIError 对象添加额外的属性。

## 方法

虽然全局 URIError 对象没有任何自己的方法，但是它能通过原型链继承一些方法。

## `URIError 实例`

### 属性

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype', '属性')}}

### 方法

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype', '方法')}}

## 示例

### 捕获一个 `URIError 实例`

```js
try {
  decodeURIComponent('%');
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "malformed URI sequence"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "Scratchpad/1"
  console.log(e.lineNumber);          // 2
  console.log(e.columnNumber);        // 2
  console.log(e.stack);               // "@Scratchpad/2:2:3\n"
}
```

### 创建一个 `URIError 实例`

```js
try {
  throw new URIError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "Hello"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "someFile.js"
  console.log(e.lineNumber);          // 10
  console.log(e.columnNumber);        // 0
  console.log(e.stack);               // "@Scratchpad/2:2:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
- {{jsxref("URIError.prototype")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
