---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Date")}} 实例的 **`setUTCHours()`** 方法用于根据世界协调时更改日期对象的小时、分钟、秒或毫秒。

{{InteractiveExample("JavaScript Demo: Date.setUTCHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event.getUTCHours());
// Expected output: 2

event.setUTCHours(23);

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"
```

## 语法

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 参数

- `hoursValue`
  - : 0 到 23 之间的整数，表示小时数。
- `minutesValue` {{optional_inline}}
  - : 0 到 59 之间的整数，表示分钟数。
- `secondsValue` {{optional_inline}}
  - : 0 到 59 之间的整数，代表秒数。如果指定了 `secondsValue`，则必须同时指定 `minutesValue`。
- `msValue` {{optional_inline}}
  - : 0 到 999 之间的整数，表示毫秒数。如果指定了 `msValue`，则必须同时指定 `minutesValue` 和 `secondsValue`。

### 返回值

该方法会原地修改 {{jsxref("Date")}} 对象，并返回其新的[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)。如果参数为 `NaN`（或其他会被[强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)为 `NaN` 的值，例如 `undefined`），则日期会被设置为[无效日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)，并返回 `NaN`。

## 描述

如果你未指定 `minutesValue`、`secondsValue` 和 `msValue` 参数，那么将使用 {{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}、{{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} 和 {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} 方法返回的值。

如果你指定的参数超出了预期范围，`setUTCHours()` 会尝试相应地更新 {{jsxref("Date")}} 对象中的日期信息。例如，如果你将 `secondsValue` 设置为 100，分钟数将增加 1（`minutesValue + 1`），而秒数将变为 40。

## 示例

### 使用 setUTCHours()

```js
const theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
