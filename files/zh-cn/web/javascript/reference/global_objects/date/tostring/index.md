---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toString
---
{{JSRef}}

**`toString()`** 方法返回一个字符串，表示该{{jsxref("Date")}}对象。

{{EmbedInteractiveExample("pages/js/date-tostring.html")}}

## 语法

```plain
dateObj.toString()
```

### 参数

无

## 描述

{{jsxref("Date")}}对象覆盖了 {{jsxref("Object")}} 对象的 `toString()` 方法；它不是继承自 {{jsxref("Object.prototype.toString()")}}。对于 {{jsxref("Date")}} 对象，`toString()` 方法返回一个表示该对象的字符串。

该 `toString` 方法总是返回一个美式英语日期格式的字符串。

当一个日期对象被用来作为文本值或用来进行字符串连接时，`toString` 方法会被自动调用。

`toString()` 是通用函数。如果不是{{jsxref("Date")}}实例，则 返回"Invalid Date"。

## 例子

### 例子： 使用 `toString` 方法

下例把一个{{jsxref("Date")}}对象的 `toString` 返回值赋给 `myVar：`

```js
var x = new Date();
myVar = x.toString(); // 把类似于下面格式的值赋给 myVar，
// Fri Apr 26 2019 11:46:17 GMT+0800 (中国标准时间)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
