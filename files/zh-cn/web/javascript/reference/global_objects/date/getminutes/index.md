---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef("Global_Objects", "Date")}}

**`getMinutes()`** 方法根据本地时间，返回一个指定的日期对象的分钟数。

{{EmbedInteractiveExample("pages/js/date-getminutes.html")}}

## 语法

```js-nolint
getMinutes()
```

### 参数

无

### 描述

`getMinutes` 返回一个 0 到 59 的整数值。

## 示例

### 示例：使用`getMinutes` 方法

下例中，第二行语句运行过后，变量 `minutes` 的值为 15，也就是说 `Xmas95` 这个日期对象的值为某时 15 分某秒。

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var minutes = Xmas95.getMinutes();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
