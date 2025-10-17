---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getTime()`** 方法會回傳此日期從[紀元](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（定義為 UTC 時間 1970 年 1 月 1 日的午夜）開始計算的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getTime()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// 從 1970 年 1 月 1 日 00:00:00.000 GMT 起算的毫秒數
console.log(moonLanding.getTime());
// 預期輸出：-14182940000
```

## 語法

```js-nolint
getTime()
```

### 參數

無。

### 回傳值

一個數字，表示此日期的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（以毫秒為單位）。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 描述

`Date` 物件基本上是由一個[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)表示，而此方法允許你取得該時間戳。你可以使用此方法來協助將日期和時間指派給另一個 {{jsxref("Date")}} 物件。此方法在功能上等同於 {{jsxref("Date/valueof", "valueOf()")}} 方法。

## 範例

### 使用 getTime() 複製日期

建立一個具有相同時間值的日期物件。

```js
// 因為月份是從 0 開始計算，所以 birthday 會是 1995 年 1 月 10 日
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### 測量執行時間

對新產生的 {{jsxref("Date")}} 物件進行兩次連續的 `getTime()` 呼叫並相減，可以得到這兩次呼叫之間的時間差。這可以用來計算某些操作的執行時間。另請參見 {{jsxref("Date.now()")}} 以避免實例化不必要的 {{jsxref("Date")}} 物件。

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`操作耗時 ${end.getTime() - start.getTime()} 毫秒`);
```

> [!NOTE]
> 在支援 {{domxref("Performance API", "", "", "nocode")}} 高解析度時間功能的瀏覽器中，{{domxref("Performance.now()")}} 比 {{jsxref("Date.now()")}} 能提供更可靠且更精確的經過時間測量。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
