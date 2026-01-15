---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

**`setTime()`** 方法以一个表示从 1970-1-1 00:00:00 UTC 计时的毫秒数为来为 `Date` 对象设置时间。

{{InteractiveExample("JavaScript Demo: Date.setTime()")}}

```js interactive-example
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## 语法

```plain
dateObj.setTime(timeValue)
```

### 参数

- `timeValue`
  - : 一个整数，表示从 1970-1-1 00:00:00 UTC 开始计时的毫秒数。

### 返回值

UTC 1970 年 1 月 1 日 00:00:00 与更新日期之间的毫秒数（实际上是自变量的值）。

## 描述

使用 `setTime` 方法用来把一个日期时间赋值给另一个 `Date` 对象。

## 示例

### 示例：使用`setTime`

```plain
theBigDay = new Date("July 1, 1999");
sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
