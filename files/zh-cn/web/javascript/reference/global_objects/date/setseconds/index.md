---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
---

{{JSRef("Global_Objects", "Date")}}

**`setSeconds()`** 方法根据本地时间设置一个日期对象的秒数。

{{EmbedInteractiveExample("pages/js/date-setseconds.html")}}

## 语法

```plain
dateObj.setSeconds(secondsValue[, msValue])
```

### JavaScript 1.3 之前版本

```plain
dateObj.setSeconds(secondsValue)
```

### 参数

- `secondsValue`
  - : 一个 0 到 59 的整数。
- `msValue`
  - : 一个 0 到 999 的数字，表示微秒数。

## 描述

如果没有指定 `msValue` 参数，就会使用 {{jsxref("Date.getMilliseconds", "getMilliseconds()")}} 方法的返回值。

如果一个参数超出了合理范围， `setSeconds` 方法会相应地更新日期对象的时间信息。例如，为 `secondsValue` 指定 100，则日期对象的分钟数会相应地加 1，秒数将会使用 40。

## 示例

### 示例：使用`setSeconds` 方法

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
