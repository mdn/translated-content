---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef}}

**`toISOString()`** 方法返回一个 ISO（[ISO 8601 Extended Format](http://en.wikipedia.org/wiki/ISO_8601)）格式的字符串： **YYYY-MM-DDTHH:mm:ss.sssZ**。时区总是 UTC（协调世界时），加一个后缀“Z”标识。

{{InteractiveExample("JavaScript Demo: Date.toISOString()")}}

```js interactive-example
const event = new Date("05 October 2011 14:48 UTC");
console.log(event.toString());
// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toISOString());
// Expected output: "2011-10-05T14:48:00.000Z"
```

## 语法

```plain
dateObj.toISOString()
```

## 示例

### 使用 toISOString()

```js
const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
