---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

**`getUTCHours()`** 方法以世界时为标准，返回一个指定的日期对象的小时数。

{{InteractiveExample("JavaScript Demo: Date.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
```

## 语法

```plain
dateObj.getUTCHours()
```

### 参数

无。

### 返回值

`getUTCHours()` 返回一个 0 到 23 的整数。

## 示例

### 示例：使用 `getUTCHours()` 方法

下例将当前时间的小时部分赋值给变量 `hours`。

```js
var today = new Date();
var hours = today.getUTCHours();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
