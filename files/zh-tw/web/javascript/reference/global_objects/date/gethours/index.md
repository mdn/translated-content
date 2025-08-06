---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getHours()`** 方法會根據本地時間回傳此日期的小時數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getHours()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getHours());
// 預期輸出：4
```

## 語法

```js-nolint
getHours()
```

### 參數

無。

### 回傳值

一個介於 0 到 23 之間的整數，表示給定日期根據本地時間的小時。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getHours()

`hours` 變數的值為 `23`，基於 {{jsxref("Date")}} 物件 `xmas95` 的值。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const hours = xmas95.getHours();

console.log(hours); // 23
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
