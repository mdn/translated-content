---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

`此 setUTCSeconds()` 方法为一个依据国际通用时间的特定日期设置秒数。

{{InteractiveExample("JavaScript Demo: Date.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
```

## 语法

```plain
dateObj.setUTCSeconds(secondsValue[, msValue])
```

### 参数

- `secondsValue`
  - : 一个在 0 到 59 之间的整数，表示秒数。
- `msValue`
  - : 可选参数。一个 0 到 999 之间的数字，代表毫秒数。

### 返回值

一个毫秒数，表示从国际通用时间 1970 年 00:00:00 到设置的时间值之间的时间跨度。

## 描述

如果你没有设置 msValue 参数的值，那么返回的值来自{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} 方法。

如果你指定的值超出了范围，`setUTCSeconds()` 因此会更新{{jsxref("Date")}} 对象中 date 的相关信息 . 举个例子，如果你设置 secondsValue 为 100, {{jsxref("Date")}} 对象中的分钟数会增加 1，并且秒数会变成 40.

## 示例

### 使用 `setUTCSeconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
