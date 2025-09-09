---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getMinutes()`** 方法會根據本地時間回傳此日期的分鐘數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getMinutes()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// 預期輸出：20
```

## 語法

```js-nolint
getMinutes()
```

### 參數

無。

### 回傳值

一個介於 0 到 59 之間的整數，表示根據本地時間的給定日期的分鐘數。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getMinutes()

`minutes` 變數的值為 `15`，此值基於 {{jsxref("Date")}} 物件 `xmas95` 的值。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
