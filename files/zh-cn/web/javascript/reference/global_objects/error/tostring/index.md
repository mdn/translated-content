---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef}}

**`toString()`** 方法返回一个表示指定 {{jsxref("Error")}} 对象的字符串。

## 语法

```js-nolint
toString()
```

### 返回值

一个表示指定 {{jsxref("Error")}} 对象的字符串。

## 描述

{{jsxref("Error")}} 对象覆盖了 {{jsxref("Object.prototype.toString()")}} 方法。该方法实现如下（假定 {{jsxref("Object")}} 和 {{jsxref("String")}} 没有被更改）：

```js
Error.prototype.toString = function () {
  "use strict";

  const obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  let name = this.name;
  name = name === undefined ? "Error" : String(name);

  let msg = this.message;
  msg = msg === undefined ? "" : String(msg);

  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }

  return name + ": " + msg;
};
```

## 示例

### 使用 toString()

```js
const e1 = new Error("fatal error");
console.log(e1.toString()); // 'Error: fatal error'

const e2 = new Error("fatal error");
e2.name = undefined;
console.log(e2.toString()); // 'Error: fatal error'

const e3 = new Error("fatal error");
e3.name = "";
console.log(e3.toString()); // 'fatal error'

const e4 = new Error("fatal error");
e4.name = "";
e4.message = undefined;
console.log(e4.toString()); // ''

const e5 = new Error("fatal error");
e5.name = "hello";
e5.message = undefined;
console.log(e5.toString()); // 'hello'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 中关于 [`Error.prototype.toString` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-error)（修复了多个错误）
