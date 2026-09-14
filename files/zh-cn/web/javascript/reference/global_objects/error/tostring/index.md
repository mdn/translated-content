---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jsxref("Error")}} 实例的 **`toString()`** 方法返回一个表示此错误的字符串。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

一个表示指定 {{jsxref("Error")}} 对象的字符串。

## 描述

{{jsxref("Error")}} 对象重写了所有对象继承的 {{jsxref("Object.prototype.toString()")}} 方法。其语义如下：

```js
Error.prototype.toString = function () {
  if (
    this === null ||
    (typeof this !== "object" && typeof this !== "function")
  ) {
    throw new TypeError();
  }
  let name = this.name;
  name = name === undefined ? "Error" : `${name}`;
  let msg = this.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name}: ${msg}`;
};
```

## 示例

### 使用 toString()

```js
const e1 = new Error("致命错误");
console.log(e1.toString()); // "Error: 致命错误"

const e2 = new Error("致命错误");
e2.name = undefined;
console.log(e2.toString()); // "Error: 致命错误"

const e3 = new Error("致命错误");
e3.name = "";
console.log(e3.toString()); // "致命错误"

const e4 = new Error("致命错误");
e4.name = "";
e4.message = undefined;
console.log(e4.toString()); // ""

const e5 = new Error("致命错误");
e5.name = "你好";
e5.message = undefined;
console.log(e5.toString()); // "你好"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Error.prototype.toString` 的 polyfill（修复了多个错误）](https://github.com/zloirock/core-js#ecmascript-error)
