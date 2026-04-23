---
title: Date.prototype.toTemporalInstant()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

{{jsxref("Date")}} 实例的 **`toTemporalInstant()`** 方法返回一个新的 {{jsxref("Temporal.Instant")}} 对象，该对象的 {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} 值与当前日期的[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期) 相同。

可以使用此方法将传统的 `Date` 值转换为 `Temporal` API 格式，然后根据需要进一步将其转换为其他 {{jsxref("Temporal")}} 类。

## 语法

```js-nolint
toTemporalInstant()
```

### 参数

无。

### 返回值

一个新的 {{jsxref("Temporal.Instant")}} 对象，其 {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} 值与当前日期的时间戳相同。其的微秒和纳秒部分始终是 `0`。

### 异常

- {{jsxref("RangeError")}}
  - : 如果日期[无效](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)（其时间戳为 `NaN`）则抛出此异常。

## 示例

### 使用 toTemporalInstant()

```js
const legacyDate = new Date("2021-07-01T12:34:56.789Z");
const instant = legacyDate.toTemporalInstant();

// 进一步将其转换为其他对象
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
