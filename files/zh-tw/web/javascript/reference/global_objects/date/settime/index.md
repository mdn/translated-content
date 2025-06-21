---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

{{JSRef}}

**`setTime()`** 方法將從 1970 年 01 月 01 日 00:00:00 UTC 起所經過的毫秒數設置為 {{jsxref("Date")}} 物件的值。

{{InteractiveExample("JavaScript Demo: Date.setTime()", "taller")}}

```js interactive-example
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## 語法

```js-nolint
setTime(timeValue)
```

### 參數

- `timeValue`
  - : 一個整數，表示自 1970 年 01 月 01 日 00:00:00 UTC 起所經過的毫秒數。

### 返回值

1970 年 01 月 01 日 00:00:00 UTC 與更新日期之間的毫秒數（實際上是參數值）。

## 描述

以 `setTime()` 方法指派一日期與時間至另一 {{jsxref("Date")}} 物件。

## 範例

### 使用 setTime()

```js
const theBigDay = new Date("July 1, 1999");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
