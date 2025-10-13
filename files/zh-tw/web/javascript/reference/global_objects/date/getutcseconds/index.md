---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getUTCSeconds()`** 方法會根據世界協調時間回傳指定日期的秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// 預期輸出：4
```

## 語法

```js-nolint
getUTCSeconds()
```

### 參數

無。

### 回傳值

一個 0 到 59 之間的整數，表示根據世界協調時間的給定日期的秒數。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getUTCSeconds()

以下範例將目前時間的秒數部分指派給 `seconds` 變數。

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
