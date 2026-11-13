---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---

**`toTimeString()`** 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。

{{InteractiveExample("JavaScript Demo: Date.toTimeString()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toTimeString());
// Expected output: "23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## 语法

```js-nolint
dateObj.toTimeString()
```

## 描述

{{jsxref("Global_Objects/Date", "Date")}} 对象的实例引用一个具体的时间点。调用 {{jsxref("Date.toString", "toString")}} 方法以美式英语和人类易读的形式，返回日期对象的格式化字符串。该字符串由日期部分（年月日）和其后的时间部分（时分秒和时区）组成。有时会需要获取时间部分的字符串，这可以由 `toTimeString` 方法完成。

`toTimeString()` 方法特别有用，因为符合 [ECMA-262](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) 的引擎对 `Date` 对象调用 `toString` 所得到的字符串可能各不相同：该格式取决于具体实现，因此简单地截取字符串在不同引擎之间未必能得到一致的结果。

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

## 参见

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
