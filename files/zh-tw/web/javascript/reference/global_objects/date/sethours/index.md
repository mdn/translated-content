---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
---

{{JSRef}}

**`setHours()`** 方法基於本地時區設置指定日期的小時，並回傳自 1970 年 1 月 1 日 00:00:00 UTC 起至更新的 {{jsxref("Date")}} 實例所表示的時間為止，共經過的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
```

## 語法

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 參數

- `hoursValue`
  - : 表示小時，理想上為介於 0 至 23 之間的整數。若傳入的值大於 23，溢出時數會增加日期時間。
- `minutesValue`
  - : 可選的。表示分鐘，理想上為介於 0 至 59 之間的整數。若傳入的值大於 59，溢出分鐘數會增加日期時間。
- `secondsValue`
  - : 可選的。表示秒，理想上為介於 0 至 59 之間的整數。若傳入的值大於 59，溢出秒數會增加日期時間。若給定 `secondsValue`，則必須同時給定 `minutesValue` 參數值。
- `msValue`
  - : 可選的。表示毫秒，理想上為介於 0 至 999 之間的數。若傳入的值大於 999，溢出毫秒數會增加日期時間。若給定 `msValue` 的值，則必須同時給定 `minutesValue` 與 `secondsValue` 參數值。

### 返回值

1970 年 1 月 1 日 00:00:00 UTC 與更新日期之間的毫秒差異數。

## 描述

如果沒有指明 `minutesValue`、`secondsValue` 與 `msValue` 參數值，則會使用 {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}}、{{jsxref("Date.prototype.getSeconds()", "getSeconds()")}}、{{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} 方法回傳的值。

如果給定的參數值超出預期範圍，`setHours()` 會相對應地更新 {{jsxref("Date")}} 物件的日期資訊。例如，`secondsValue` 傳入 100 ，分鐘數將增加 1（`minutesValue + 1`）、其餘的 40 則計入秒數。

## 範例

### 使用 setHours()

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
