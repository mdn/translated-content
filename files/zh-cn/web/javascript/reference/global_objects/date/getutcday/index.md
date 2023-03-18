---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef("Global_Objects", "Date")}}

**`getUTCDay()`** 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## 语法

```plain
dateObj.getUTCDay()
```

### 参数

无。

### 返回值

`getUTCDay()` 方法返回一个对应一星期中第几天的整数：0 代表星期天，1 代表星期一，2 代表星期二，依次类推。

## 示例

### 示例：使用 `getUTCDay()` 方法

下面的例子是把当前日期的星期部分赋值给变量 `weekday`。

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
