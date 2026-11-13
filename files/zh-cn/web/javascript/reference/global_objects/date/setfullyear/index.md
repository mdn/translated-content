---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---

**`setFullYear()`** 方法根据本地时间为一个日期对象设置年份。

{{InteractiveExample("JavaScript Demo: Date.setFullYear()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setFullYear(1969);

console.log(event.getFullYear());
// Expected output: 1969

event.setFullYear(0);

console.log(event.getFullYear());
// Expected output: 0
```

## 语法

```js
dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
```

### 参数

- `yearValue`
  - : 指定年份的整数值，例如 1995。
- `monthValue`
  - : 一个 0 到 11 之间的整数值，表示从一月到十二月。
- `dayValue`
  - : 一个 1 到 31 之间的整数值，表示月份中的第几天。如果你指定了 `dayValue` 参数，就必须同时指定 `monthValue`。

## 描述

如果没有指定 `monthValue` 和`dayValue` 参数，将会使用 `getMonth` 和`getDate` 方法的返回值。

如果有一个参数超出了合理的范围，`setFullYear` 方法会更新其他参数值，日期对象的日期值也会被相应更新。例如，为 `monthValue` 指定 15，则年份会加 1，月份值会为 3。

## 示例

### 示例：使用`setFullYear`方法

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
