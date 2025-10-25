---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
---

{{deprecated_header}}

**`setYear()`** 方法根据一个本地时间为一个确定的日期对象设置年份。由于`setYear()` 并不设置完整年份（"正是千年虫问题"），本方法已经完全被{{jsxref("Date.prototype.setFullYear()","setFullYear()")}} 方法所取代。

## 语法

```plain
dateObj.setYear(yearValue)
```

### 参数

- `yearValue`
  - : 一个整数。

### 返回值

介于 1970 年 1 月 1 日 00:00:00 UTC 时间与更新后日期的毫秒数。

## 描述

如果`yearValue` 是介于 0 到 99(包含 99) 之间的整数，则目标对象 `dateObj` 的年份被设置为 `1900 + yearValue`。否则，目标对象 `dateObj` 的年份被设置为 `yearValue`.

## 示例

### 使用 `setYear()`

例子前两行（除去声明）将年份设置为 1996。第三行将年份设置为 2000.

```js
var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
