---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef}}

**`TypeError（类型错误）`** 对象用来表示值的类型非预期类型时发生的错误。

## 语法

```plain
new TypeError([message[, fileName[, lineNumber]]])
```

### 参数

- `message 消息`
  - : 可选。描述此错误
- `fileName 文件名` {{non-standard_inline}}
  - : 可选。引起该异常的代码所在的文件的名字。
- `lineNumber 行号` {{non-standard_inline}}
  - : 可选。引起该异常的代码的行号。

## 描述

当传入函数的**操作数**或**参数**的类型并非操作符或函数所预期的类型时，将抛出一个 TypeError 类型错误。

## 属性

- {{jsxref("TypeError.prototype")}}
  - : 允许为一个 TypeError 类型错误附加属性。

## 方法

全局 TypeError 不包含任何方法，不过，它将从原型链中继承一些方法。

## `TypeError` 类型错误实例

### 属性

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', '属性')}}

### 方法

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', '方法')}}

## 示例

### 示例：捕获类型错误

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "null has no properties"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "Scratchpad/1"
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}
```

### 示例：创建一个类型错误

```js
try {
  throw new TypeError('Hello', "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "TypeError"
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

- {{jsxref("Error")}}
- {{jsxref("TypeError.prototype")}}
