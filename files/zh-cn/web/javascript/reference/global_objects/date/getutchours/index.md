---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef("Global_Objects", "Date")}}

**`getUTCHours()`** 方法以世界时为标准，返回一个指定的日期对象的小时数。

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

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

## 相关链接

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
