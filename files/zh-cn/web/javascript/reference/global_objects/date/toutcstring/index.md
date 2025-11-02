---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

**`toUTCString()`** 方法把一个日期转换为一个字符串，使用 UTC 时区。

{{InteractiveExample("JavaScript Demo: Date.toUTCString()")}}

```js interactive-example
const event = new Date("14 Jun 2017 00:00:00 PDT");

console.log(event.toUTCString());
// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"
```

## 语法

```plain
dateObj.toUTCString()
```

### 返回值

返回使用 UTC 时区表示给定日期的字符串

## 描述

`toUTCString` 的返回值是一个使用 UTC 时区的易读格式字符串。返回值的格式可能随平台而变化。通常返回值是一个 RFC-1123 格式的时间戳，这是一个 RFC-822 时间戳的小幅更新版。

## 示例

### 示例：使用`toUTCString`

```plain
var today = new Date();
var UTCstring = today.toUTCString();
// Mon, 03 Jul 2006 21:44:38 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
