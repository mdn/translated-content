---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

字符串对象的 **`toString()`** 方法返回一个字符串，表示指定的字符串。

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## 语法

```js
toString()
```

### 返回值

`String` 包装对象的字符串值。

## 描述

{{jsxref("String")}} 对象覆盖了 {{jsxref("Object")}} 对象的 `toString()` 方法；并没有继承 {{jsxref("Object.prototype.toString()")}}。对于 {{jsxref("String")}} 对象，`toString()` 方法返回一个字符串来表示这个对象，和 {{jsxref("String.prototype.valueOf()")}} 方法的返回值相同。

## 示例

### 使用 toString()

以下示例输出一个 {{jsxref("String")}} 对象的字符串值：

```js
const x = new String("Hello world");

console.log(x.toString()); // 输出 'Hello world'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.valueOf()")}}
