---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`setTime()`** 方法會變更此日期的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，也就是自[紀元](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（定義為 UTC 1970 年 1 月 1 日午夜）起算的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.setTime()", "taller")}}

```js interactive-example
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// 預期輸出：「Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)」

const fiveMinutesInMs = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMs);

console.log(futureDate);
// 預期輸出：「Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)」
// 備註：你的時區可能會有所不同
```

## 語法

```js-nolint
setTime(timeValue)
```

### 參數

- `timeValue`
  - : 一個表示新時間戳的整數——即自 UTC 1970 年 1 月 1 日午夜起算的毫秒數。

### 回傳值

就地變更 {{jsxref("Date")}} 物件，並回傳其新的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)。如果 `timeValue` 是 `NaN`（或其他會被[強制轉換](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字轉換)為 `NaN` 的值，例如 `undefined`），則日期會被設定為[無效日期](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，並回傳 `NaN`。

## 範例

### 使用 setTime()

```js
const theBigDay = new Date("1999-07-01");
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
