---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---

**`setUTCMonth()`** 方法根据通用的时间来设置一个准确的月份。

{{InteractiveExample("JavaScript Demo: Date.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## 语法

```plain
dateObj.setUTCMonth(monthValue[, dayValue])
```

### 参数

- `monthValue`
  - : 一个 0-11 的整数，代表 1 月到 12 月。
- `dayValue`
  - : 可选参数：一个 1-31 的整数，代表一个月的天数。

### 返回值

这个数值是从 1970 年 1 月 1 号 00:00:00 到当前时间的毫秒数（国际通用时间）

## 描述

如果你没有明确书写`dayValue` 这个参数，那么就会从{{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} 方法返回对应的数值。

如果你写了一个超过在规定的范围内的参数。`setUTCMonth()` 就会试图相应的更新时间信息在 Data 对象中。例如，如果你用 15 作为 `monthValue` 的值，那么年份就会加 1，并且月份会变成 3。（15=12+3）

## 示例

### 使用 `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
