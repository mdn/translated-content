---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getSeconds()`** 方法會根據本地時間回傳此日期的秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// 預期輸出：18
```

## 語法

```js-nolint
getSeconds()
```

### 參數

無。

### 回傳值

一個介於 0 到 59 之間的整數，表示根據本地時間的給定日期的秒數。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getSeconds()

`seconds` 變數的值為 `30`，基於 {{jsxref("Date")}} 物件 `xmas95` 的值。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
