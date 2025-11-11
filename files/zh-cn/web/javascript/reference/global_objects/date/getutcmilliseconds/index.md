---
title: Date.prototype.getUTCMilliseconds()
short-title: getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 实例的 **`getUTCMilliseconds()`** 方法根据世界时返回该日期的毫秒数。

{{InteractiveExample("JavaScript 演示：Date.prototype.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// 预期输出：678
```

## 语法

```js-nolint
getUTCMilliseconds()
```

### 参数

无。

### 返回值

一个介于 0 到 999 之间的整数，表示根据世界时计算的给定日期的毫秒数。如果日期是[无效日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)，则返回`NaN`

不要与时间戳混淆。若要获取自纪元以来的总毫秒数，请使用 [`getTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) 方法。

## 示例

### 使用 getUTCMilliseconds()

以下示例将当前时间的毫秒部分赋值给变量 `milliseconds`。

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
