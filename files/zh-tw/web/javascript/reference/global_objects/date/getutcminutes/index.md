---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getUTCMinutes()`** 方法會根據世界協調時間回傳此日期的分鐘數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCMinutes()")}}

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 1999 年 12 月 31 日 20:15:30 GMT
// 預期輸出：15

console.log(date2.getUTCMinutes()); // 1999 年 12 月 31 日 23:45:30 GMT
// 預期輸出：45
```

## 語法

```js-nolint
getUTCMinutes()
```

### 參數

無。

### 回傳值

一個介於 0 到 59 之間的整數，表示根據世界協調時間的給定日期的分鐘數。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getUTCMinutes()

以下範例將目前時間的分鐘部分指派給變數 `minutes`。

```js
const today = new Date();
const minutes = today.getUTCMinutes();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
