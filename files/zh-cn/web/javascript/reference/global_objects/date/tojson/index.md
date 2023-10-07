---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

**`toJSON()`** 方法返回 {{jsxref("Date")}} 对象的字符串形式。

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## 语法

```plain
dateObj.toJSON()
```

## 描述

{{jsxref("Date")}} 实例引用一个具体的时间点。调用 `toJSON()` 返回一个 JSON 格式字符串 (使用 {{jsxref("Date.prototype.toISOString()", "toISOString()")}})，表示该日期对象的值。默认情况下，这个方法常用于 {{Glossary("JSON")}}序列化{{jsxref("Date")}}对象。

## 样例

### `toJSON()` 样例

```js
var date = new Date();
console.log(date); //Thu Nov 09 2017 18:54:04 GMT+0800 (中国标准时间)

var jsonDate = date.toJSON();
console.log(jsonDate); //"2017-11-09T10:51:11.395Z"

var backToDate = new Date(jsonDate);
console.log(backToDate); //Thu Nov 09 2017 18:54:04 GMT+0800 (中国标准时间)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
