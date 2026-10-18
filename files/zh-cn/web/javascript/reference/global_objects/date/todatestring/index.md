---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---

**`toDateString()`** 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。

{{InteractiveExample("JavaScript Demo: Date.toDateString()")}}

```js interactive-example
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
```

## 语法

```js-nolint
dateObj.toDateString()
```

## 描述

{{jsxref("Global_Objects/Date", "Date")}} 对象实例引用一个具体的时间点。调用 {{jsxref("Date.toString", "toString")}} 方法会以美式英语和人类易读的形式返回日期对象的格式化字符串。该字符串由日期部分（年月日）和其后的时间部分（时分秒及时区）组成。有时需要获取日期部分的字符串，这可以由 `toDateString` 方法完成。

`toDateString()` 方法特别有用，因为符合 [ECMA-262](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) 的引擎对 `Date` 对象调用 `toString` 所得到的字符串可能各不相同：该格式取决于具体实现，因此简单地截取字符串在不同引擎之间未必能得到一致的结果。

## 示例

### 示例：`toDateString` 方法的简单使用

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

println(d.toString()); // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
println(d.toDateString()); // prints Wed Jul 28 1993
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
