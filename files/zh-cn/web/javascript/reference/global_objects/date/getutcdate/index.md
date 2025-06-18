---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

**`getUTCDate()`** 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天

{{InteractiveExample("JavaScript Demo: Date.getUTCDate()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// Expected output: 19

console.log(date2.getUTCDate());
// Expected output: 20
```

## 语法

```plain
dateObj.getUTCDate()
```

### 参数

无

### 返回值

`getUTCDate()` 返回一个 1 到 31 的整数值

## 示例

### 示例：使用 `getUTCDate()` 方法

下面的例子是把当前日期的天数部分赋值给变量 `day`.

```js
var today = new Date();
var day = today.getUTCDate();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
