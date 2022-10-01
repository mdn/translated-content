---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef("Global_Objects", "Date")}}

**`getUTCDate()`** 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## 语法

```plain
dateObj.getUTCDate()
```

### 参数

无

### 返回值

`getUTCDate()` 返回一个 1 到 31 的整数值

## 例子

### 例子：使用 `getUTCDate()` 方法

下面的例子是把当前日期的天数部分赋值给变量 `day`.

```js
var today = new Date();
var day = today.getUTCDate();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
