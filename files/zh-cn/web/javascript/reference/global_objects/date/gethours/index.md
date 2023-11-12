---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef("Global_Objects", "Date")}}

**`getHours()`** 方法根据本地时间，返回一个指定的日期对象的小时。

{{EmbedInteractiveExample("pages/js/date-gethours.html")}}

## 语法

```js-nolint
getHours()
```

### 参数

无

### 返回值

`getHours` 返回一个 0 到 23 之间的整数值。

## 示例

### 示例：使用`getHours`方法

下面第二条语句，基于日期对象 `Xmas95` 的值，把 23 赋值给了变量 `hours`。

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var hours = Xmas95.getHours();

alert(hours); // 23
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
