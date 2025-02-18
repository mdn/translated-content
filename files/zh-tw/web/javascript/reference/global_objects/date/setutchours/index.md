---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---

{{JSRef}}

**`setUTCHours()`** 方法根據世界時設置指定日期的小時，並回傳自 1970 年 1 月 1 日 00:00:00 UTC 至更新的 {{jsxref("Date")}} 實例所表示的時間為止，經過的毫秒數。

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

## 語法

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 參數

- `hoursValue`
  - : 一個表示小時、介於 0 至 23 之間的整數。
- `minutesValue`
  - : 可選的。一個表示分鐘、介於 0 至 59 之間的整數。
- `secondsValue`
  - : 可選的。一個表示秒數、介於 0 至 59 之間的整數。若給定 `secondsValue`，則必須同時給定 `minutesValue` 參數值。
- `msValue`
  - : 可選的。一個表示毫秒數、介於 0 至 999 之間的數。若給定 `msValue` 的值，則必須同時給定 `minutesValue` 與 `secondsValue` 參數值。

### 返回值

1970 年 1 月 1 日 00:00:00 UTC 與更新日期之間的毫秒差異數。

## 描述

如果沒有指明 `minutesValue`、`secondsValue` 與 `msValue` 參數值，則會使用 {{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}}、{{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}、{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} 方法回傳的值。

如果給定的參數值超出預期範圍，`setUTCHours()` 會相對應地更新 {{jsxref("Date")}} 物件的日期資訊。例如，`secondsValue` 傳入 100 ，分鐘數將增加 1（`minutesValue + 1`）、其餘的 40 則計入秒數。

## 範例

### 使用 setUTCHours()

```js
const theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
