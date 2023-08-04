---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef}}

**`getMonth()`** 方法根据本地时间，返回一个指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。

{{EmbedInteractiveExample("pages/js/date-getmonth.html")}}

## 语法

```js-nolint
getMonth()
```

### 参数

无

### 返回值

`getMonth`返回一个 0 到 11 的整数值：0 代表一月份，1 代表二月份，2 代表三月份，依次类推。

## 示例

### 使用 `getMonth()`

下面第二条语句，基于 {{jsxref("Date")}} 对象 Xmas95 的值，把 11 赋值给变量 `month`。

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = Xmas95.getMonth();

console.log(month); // 11
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
