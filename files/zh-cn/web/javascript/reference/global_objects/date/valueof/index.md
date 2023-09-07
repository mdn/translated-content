---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回一个 {{jsxref("Date")}} 对象的原始值。

{{EmbedInteractiveExample("pages/js/date-valueof.html")}}

## 语法

```plain
dateObj.valueOf()
```

### 返回值

从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）到该日期的毫秒数。

## 描述

`valueOf` 方法返回以数值格式表示的一个 `Date` 对象的原始值，从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）到该日期对象所代表时间的毫秒数。

该方法的功能和 {{jsxref("Date.prototype.getTime()")}} 方法一样。

该方法通常在 JavaScript 内部被调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf()`

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf(); // assigns -424713600000 to myVar
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
