---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

**`toJSON()`** 方法返回 {{jsxref("Date")}} 对象的字符串形式。

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

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
