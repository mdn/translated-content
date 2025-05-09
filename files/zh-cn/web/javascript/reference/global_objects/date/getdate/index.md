---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
---

{{JSRef}}

根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。

{{InteractiveExample("JavaScript Demo: Date.getDate()")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const date1 = birthday.getDate();

console.log(date1);
// Expected output: 19
```

## 语法

```js-nolint
getDate()
```

## 参数

无

## 描述

`getDate()` 返回一个 1 到 31 的整数值。

## 示例

### 示例：使用 `getDate()` 方法

下面第二条语句将值 25 赋给 day 变量，该值基于日期对象 `Xmax95`的值。

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var day = Xmas95.getDate();

alert(day); // 25
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
