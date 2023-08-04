---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---

{{JSRef("Global_Objects", "Date")}}

**`toTimeString()`** 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。

{{EmbedInteractiveExample("pages/js/date-totimestring.html")}}

## 语法

```plain
dateObj.toTimeString()
```

## 描述

{{jsxref("Global_Objects/Date", "Date")}} 对象的实例引用一个具体的时间点。调用 {{jsxref("Date.toString", "toString")}} 方法以美式英语和人类易读的形式，返回日期对象的格式化字符串。在 [SpiderMonkey](/zh-CN/docs/SpiderMonkey) 里，该字符串由日期部分（年月日）和其后的时间部分（时分秒和时区）组成。有时会需要获取时间部分的字符串，这可以由 `toTimeString` 方法完成。

The `toTimeString` method is especially useful because compliant engines implementing [ECMA-262](/zh-CN/docs/ECMAScript) may differ in the string obtained from `toString` for `Date` objects, as the format is implementation-dependent; simple string slicing approaches may not produce consistent results across multiple engines.

## 示例

### 示例：`toTimeString` 方法的简单使用

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

println(d.toString()); // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
println(d.toTimeString()); // prints 14:39:07 GMT-0600 (PDT)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
