---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

**`getUTCMilliseconds()`** 方法以世界时为标准，返回一个指定的日期对象的毫秒数。

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html")}}

## 语法

```plain
dateObj.getUTCMilliseconds()
```

### 参数

无。

### 返回值

`getUTCMilliseconds()` 返回一个 0 到 999 的整数。

## 例子

### 例子：使用 `getUTCMilliseconds()` 方法

下例将当前时间的毫秒部分赋值给变量 `milliseconds`。

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
