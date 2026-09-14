---
title: Date.prototype.setUTCDate()
short-title: setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 实例的 **`setUTCDate()`** 方法用于根据协调世界时（UTC）修改日期对象中的“日”。

{{InteractiveExample("JavaScript 示例：Date.prototype.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// 预期输出：20

event.setUTCDate(19);

console.log(event.getUTCDate());
// 预期输出：19
```

## 语法

```js-nolint
setUTCDate(dateValue)
```

### 参数

- `dateValue`
  - : 一个从 1 到 31 的整数，表示月份中的某一天。

### 返回值

会直接修改 {{jsxref("Date")}} 对象本身，并返回其新的[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)。如果 `dateValue` 为 `NaN`（或其他会被[强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)为 `NaN` 的值，例如 `undefined`），则日期会被设置为[无效日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)，并返回 `NaN`。

## 描述

当 `dateValue` 超出了该月的日期范围，`setDate()` 会自动调整并更新 {{jsxref("Date")}} 对象。

例如，如果 `dateValue` 传入 0，日期将会被设置为上一个月的最后一天。若 `dateValue` 传入 40，而 {{jsxref("Date")}} 对象中保存的月份是 6 月，那么日期会被修改为 10 日，同时月份会递增到 7 月。

如果为 `dateValue` 提供一个负数，日期将会从上一个月的最后一天开始倒数计算。例如 -1，结果就是设置为上一个月最后一天的前一天。

## 示例

### 使用 setUTCDate()

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
