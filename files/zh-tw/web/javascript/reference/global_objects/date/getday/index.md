---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getDay()`** 方法會根據本地時間回傳指定日期的星期幾，其中 0 代表星期日。若要取得月份中的日期，請參見 {{jsxref("Date.prototype.getDate()")}}。

{{InteractiveExample("JavaScript Demo: Date.prototype.getDay()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// 星期日 - 星期六：0 - 6

console.log(day1);
// 預期輸出：2
```

## 語法

```js-nolint
getDay()
```

### 參數

無。

### 回傳值

一個介於 0 到 6 之間的整數，根據本地時間表示給定日期的星期幾：0 代表星期日，1 代表星期一，2 代表星期二，依此類推。如果日期為[無效](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 描述

`getDay()` 的回傳值是從零開始的，這對於索引星期陣列很有用，例如：

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["星期日", "星期一", "星期二" /* , … */];

console.log(dayNames[day]); // "星期一"
```

然而，為了國際化，你應該優先使用帶有 `options` 參數的 {{jsxref("Intl.DateTimeFormat")}}。

```js
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Montag"
```

## 範例

### 使用 getDay()

`weekday` 變數的值為 `1`，這是基於 {{jsxref("Date")}} 物件 `xmas95` 的值，因為 1995 年 12 月 25 日是星期一。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
