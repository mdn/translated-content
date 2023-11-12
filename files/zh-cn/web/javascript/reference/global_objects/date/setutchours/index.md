---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---

{{JSRef}}

The **`setUTCHours()`** method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 1 January 1970 00:00:00 UTC until the time represented by the updated {{jsxref("Date")}} instance.

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

## Syntax

```plain
dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

### 参数

- `hoursValue`
  - : 表示小时的整数，取值 0 到 23 之间。
- `minutesValue`
  - : 可选参数。表示分钟的整数，取值 0 到 59 之间。
- `secondsValue`
  - : 可选参数。表示秒数的整数，取值 0 到 59 之间。如果指定了该参数，就要同时指定 `minutesValue` 这个参数。
- `msValue`
  - : 可选参数。表示毫秒的整数，取值 0 到 999 之间。如果指定了该参数，就要指定 `minutesValue` 和 `secondsValue` 这两个参数。

### 返回值

返回从 1970-01-01 00:00:00 UTC 到更新后的日期所表示时间的毫秒数。

## 描述

If you do not specify the `minutesValue`, `secondsValue`, and `msValue` parameters, the values returned from the {{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}, and {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} methods are used.

If a parameter you specify is outside of the expected range, `setUTCHours()` attempts to update the date information in the {{jsxref("Date")}} object accordingly. For example, if you use 100 for `secondsValue`, the minutes will be incremented by 1 (`minutesValue + 1`), and 40 will be used for seconds.

## 示例

### 使用 `setUTCHours()`

```js
var theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
