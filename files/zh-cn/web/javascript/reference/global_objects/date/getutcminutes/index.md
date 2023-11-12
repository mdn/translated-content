---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef("Global_Objects", "Date")}}

**`getUTCMinutes()`** 方法以世界时为标准，返回一个指定的日期对象的分钟数。

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## 语法

```plain
dateObj.getUTCMinutes()
```

### 参数

无。

### 返回值

`getUTCMinutes()` 返回一个 0 到 59 的整数。

## 示例

### 示例：使用 `getUTCMinutes()` 方法

下例将当前时间的分钟部分赋值给变量 `minutes`。

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
