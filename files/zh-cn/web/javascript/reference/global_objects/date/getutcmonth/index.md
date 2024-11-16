---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

**`getUTCMonth()`** 方法以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

## 语法

```plain
dateObj.getUTCMonth()
```

### 参数

无。

### 返回值

`getUTCMonth()` 返回一个 0 到 11 的整数，分别对应以下月份：0 代表一月，1 代表二月，2 代表三月，依次类推。

## 示例

### 示例：使用 `getUTCMonth()` 方法

下例将当前时间的月份赋值给变量 `month`。

```js
var today = new Date();
var month = today.getUTCMonth();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
