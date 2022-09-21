---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
---

{{JSRef("Global_Objects", "Date")}}

**`setMinutes()`** 方法根据本地时间为一个日期对象设置分钟数。

{{EmbedInteractiveExample("pages/js/date-setminutes.html")}}

## 语法

```plain
dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
```

### JavaScript 1.3 之前版本

```plain
dateObj.setMinutes(minutesValue)
```

### 参数

- `minutesValue`
  - : 一个 0 到 59 的整数，表示分钟数。
- `secondsValue`
  - : 一个 0 到 59 的整数，表示秒数。如果指定了 `secondsValue` 参数，则必须同时指定 `minutesValue` 参数。
- `msValue`
  - : 一个 0 到 999 的数字，表示微秒数，如果指定了 `msValue` 参数，则必须同时指定 `minutesValue` 和`secondsValue` 参数。

## 描述

如果没有指定 `secondsValue` 和 `msValue` 参数，就会使用 {{jsxref("Date.getSeconds", "getSeconds()")}} 和 {{jsxref("Date.getMilliseconds", "getmilliseconds()")}} 方法的返回值。

如果有一个指定的参数超出了合理范围，`setMinutes` 会相应地更新日期对象中的时间信息。例如，为 `secondsValue` 指定 100，分钟数将会加 1，而秒数会为 40。

## 例子

### 例子：使用`setMinutes` 方法

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
