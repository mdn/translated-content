---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---

{{JSRef}}

**`setMonth()`** 方法根据本地时间为一个日期对象设置月份。

{{InteractiveExample("JavaScript Demo: Date.setMonth()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMonth(3);

console.log(event.getMonth());
// Expected output: 3

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary
```

## 语法

```plain
dateObj.setMonth(monthValue[, dayValue])
```

### JavaScript 1.3 版本之前

```plain
dateObj.setMonth(monthValue)
```

### 参数

- `monthValue`
  - : 介于 0 到 11 之间的整数（表示一月到十二月）。
- `dayValue`
  - : 从 1 到 31 之间的整数，表示月份中的第几天。0 为上个月最后一天
- 返回值！
  - : 基于 1 January 1970 00:00:00 UTC 开始计算的毫秒数

## 描述

如果不指定 `dayValue` 参数，就会使用 {{jsxref("Date.getDate", "getDate")}} 方法的返回值。

如果有一个指定的参数超出了合理范围，`setMonth` 会相应地更新日期对象中的日期信息。例如，为 `monthValue` 指定 15，则年份会加 1，月份将会使用 3。

## 示例

### 示例：使用 `setMonth` 方法

```js
var theBigDay = new Date();
theBigDay.setMonth(6);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
