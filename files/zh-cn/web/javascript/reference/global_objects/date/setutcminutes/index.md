---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Date")}} 实例的 **`setUTCMinutes()`** 方法根据世界协调时来设置该日期的分钟数。

{{InteractiveExample("JavaScript Demo: Date.setUTCMinutes()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCMinutes());
// Expected output: 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Expected output: 25
```

## 语法

```js-nolint
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
```

### 参数

- `minutesValue`
  - : 一个表示分钟的整数，介于 0 和 59 之间。
- `secondsValue` {{optional_inline}}
  - : 一个表示秒数的整数，介于 0 和 59 之间。如果你指定了 `secondsValue`，则你必须同时指定 `minutesValue`。
- `msValue` {{optional_inline}}
  - : 一个表示毫秒数的整数，介于 0 和 999 之间。如果你指定了 `msValue`，则你必须同时指定 `minutesValue` 和 `secondsValue`。

### 返回值

原地修改当前 {{jsxref("Date")}} 对象，并返回它的新[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)。如果参数为 `NaN`（或其他会被[强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)为 `NaN` 的值，比如 `undefined`），则日期会被设置为[无效日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)，并返回 `NaN`。

## 描述

如果你没有指定参数 `minutesValue` 和 `msValue`，则使用 {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} 和 {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} 方法的返回值。

如果你指定的参数值在预期的范围之外，则 `setUTCMinutes()` 将尝试更新 {{jsxref("Date")}} 对象中对应的日期信息。例如，如果你为 `secondsValue` 使用了 100，那么分钟数将会增加 1（`minutesValue + 1`），而秒数将变成 40。

## 示例

### 使用 setUTCMinutes()

```js
const theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
