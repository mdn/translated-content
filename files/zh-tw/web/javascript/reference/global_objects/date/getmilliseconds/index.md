---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getMilliseconds()`** 方法會根據本地時間回傳指定日期的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getMilliseconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// 預期輸出：123
```

## 語法

```js-nolint
getMilliseconds()
```

### 參數

無。

### 回傳值

一個介於 0 到 999 之間的整數，表示根據本地時間的給定日期的毫秒。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getMilliseconds()

`milliseconds` 變數的值為 `0`，這是基於 {{jsxref("Date")}} 物件 `xmas95` 的值，因為它沒有指定毫秒元件，所以預設為 0。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas95.getMilliseconds();

console.log(milliseconds); // 0
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
