---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Date.now()`** 靜態方法回傳自[紀元](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（UTC 時間 1970 年 1 月 1 日午夜）以來經過的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.now()")}}

```js interactive-example
// 此範例需要 2 秒執行
const start = Date.now();

console.log("計時器啟動...");
// 預期輸出：「計時器啟動...」

setTimeout(() => {
  const ms = Date.now() - start;

  console.log(`經過的秒數 = ${Math.floor(ms / 1000)}`);
  // 預期輸出：「經過的秒數 = 2」
}, 2000);
```

## 語法

```js-nolint
Date.now()
```

### 參數

無。

### 回傳值

一個數字，表示當前時間的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（以毫秒為單位）。

## 描述

### 降低時間精度

為了提供對計時攻擊和[指紋追蹤](/zh-TW/docs/Glossary/Fingerprinting)的保護，`Date.now()` 的精度可能會根據瀏覽器設定進行四捨五入。在 Firefox 中，`privacy.reduceTimerPrecision` 偏好設定預設為啟用，且預設值為 2ms。你也可以啟用 `privacy.resistFingerprinting`，在這種情況下，精度將為 100ms 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以較大者為準。

例如，在降低時間精度的情況下，`Date.now()` 的結果將始終是 2 的倍數，或者在啟用 `privacy.resistFingerprinting` 的情況下是 100（或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）的倍數。

```js
// Firefox 60 中降低的時間精度（2ms）
Date.now();
// 可能為：
// 1519211809934
// 1519211810362
// 1519211811670
// …

// 啟用 `privacy.resistFingerprinting` 後降低的時間精度
Date.now();
// 可能為：
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 範例

### 測量經過的時間

你可以使用 `Date.now()` 來獲取當前的毫秒時間，然後減去先前的時間，以計算兩次呼叫之間經過了多少時間。

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`經過時間：${Date.now() - start} 毫秒`);
```

對於更複雜的情境，你可能需要改用 [Performance API](/zh-TW/docs/Web/API/Performance_API/High_precision_timing)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Date.now` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}}
- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
