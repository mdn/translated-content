---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

**`getMilliseconds()`** 方法根据本地时间，返回一个指定的日期对象的毫秒数。

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html")}}

## 语法

```js-nolint
getMilliseconds()
```

### 参数

无

### 描述

`getMilliseconds()` 方法返回一个 0 到 999 的整数。

## 示例

### 示例：使用`getMilliseconds`方法

下例中，将当前时间的毫秒数赋值给变量 `ms`。

```js
var ms;
Today = new Date();
ms = Today.getMilliseconds();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
