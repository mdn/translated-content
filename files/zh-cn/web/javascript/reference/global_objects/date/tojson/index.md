---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

**`toJSON()`** 方法返回 {{jsxref("Date")}} 对象的字符串形式。

{{InteractiveExample("JavaScript Demo: Date.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## 语法

```js-nolint
toJSON()
```

## 描述

{{jsxref("Date")}} 实例引用一个具体的时间点。调用 `toJSON()` 返回一个 JSON 格式字符串（使用 {{jsxref("Date.prototype.toISOString()", "toISOString()")}}），表示该日期对象的值。默认情况下，这个方法常用于 {{Glossary("JSON")}} 序列化 {{jsxref("Date")}} 对象。

## 示例

### 使用 toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
