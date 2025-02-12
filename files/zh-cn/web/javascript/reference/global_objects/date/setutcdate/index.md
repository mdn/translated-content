---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

**`setUTCDate()`** 方法就是根据全球时间设置特定 date 对象的日期。

{{InteractiveExample("JavaScript Demo: Date.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## 语法

```plain
dateObj.setUTCDate(dayValue)
```

### 参数

- `dayValue`
  - : 一个 1-31 的整形数字，用来指定日期。

## 描述

如果你指定的参数超出了范围，setUTCDate() 会尝试更新对应的{{jsxref("Global_Objects/Date", "Date")}} 中的日期信息。例如，如果你使用了 40 来作为参数，但是{{jsxref("Global_Objects/Date", "Date")}} 中存储的月份为 6 月，那么日期将被改写为 10 且月份被增到 7 月。

## 示例

### 使用 `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
