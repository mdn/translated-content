---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef}}

**`toISOString()`** 方法返回一个 ISO（[ISO 8601 Extended Format](http://en.wikipedia.org/wiki/ISO_8601)）格式的字符串： **YYYY-MM-DDTHH:mm:ss.sssZ**。时区总是 UTC（协调世界时），加一个后缀“Z”标识。

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## 语法

```plain
dateObj.toISOString()
```

## 示例

```js
var today = new Date("05 October 2011 14:48 UTC");
alert(today.toISOString()); // 返回 2011-10-05T14:48:00.000Z
```

上例使用了非标准字符串的解析，该字符串在某些旧的浏览器（如 IE）中可能无法被正确解析。

## Polyfill

该方法在 ECMA-262 第 5 版中被标准化。对于那些不支持此方法的 JS 引擎可以通过加上下面的代码实现：

```js
if (!Date.prototype.toISOString) {
  (function () {
    function pad(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    }

    Date.prototype.toISOString = function () {
      return (
        this.getUTCFullYear() +
        "-" +
        pad(this.getUTCMonth() + 1) +
        "-" +
        pad(this.getUTCDate()) +
        "T" +
        pad(this.getUTCHours()) +
        ":" +
        pad(this.getUTCMinutes()) +
        ":" +
        pad(this.getUTCSeconds()) +
        "." +
        (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        "Z"
      );
    };
  })();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
