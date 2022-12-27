---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef("Global_Objects", "Date")}}

**`getUTCFullYear()`** 以世界时为标准，返回一个指定的日期对象的年份。

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## 语法

```plain
dateObj.getUTCFullYear()
```

### 参数

无。

### 返回值

`getUTCFullYear()` 返回一个绝对数值，符合 Year-2000 标准，例如 1995。

## 例子

### 例子：使用 `getUTCFullYear()` 方法

下面的例子是把当前年份的四位数值复制给变量 `year`。

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
