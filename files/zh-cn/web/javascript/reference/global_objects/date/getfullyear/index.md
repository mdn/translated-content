---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---

{{JSRef}}

**`getFullYear()`** 方法根据本地时间返回指定日期的年份。

此方法替代 {{jsxref("Date.prototype.getYear()", "getYear()")}} 。

{{InteractiveExample("JavaScript Demo: Date.getFullYear()")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getFullYear());
// Expected output: 1969
```

## 语法

```html
dateObj.getFullYear()
```

### 返回值

根据当地时间，返回一个对应于给定日期的年份数字。

## 描述

`getFullYear()`返回的值是绝对数。对于 1000 到 9999 之间的日期，`getFullYear()`返回一个四位数字，如 1995。使用此函数确保在 2000 年后兼容。

## 示例

### 使用`getFullYear()`

下面的例子将当前年份的四位数值分配给变量`year`。

```js
var today = new Date();
var year = today.getFullYear();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
