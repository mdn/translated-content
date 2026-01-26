---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

**`getUTCFullYear()`** 以世界时为标准，返回一个指定的日期对象的年份。

{{InteractiveExample("JavaScript Demo: Date.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
```

## 语法

```plain
dateObj.getUTCFullYear()
```

### 参数

无。

### 返回值

`getUTCFullYear()` 返回一个绝对数值，符合 Year-2000 标准，例如 1995。

## 示例

### 示例：使用 `getUTCFullYear()` 方法

下面的例子是把当前年份的四位数值复制给变量 `year`。

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
