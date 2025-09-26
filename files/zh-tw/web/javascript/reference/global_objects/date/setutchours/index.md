---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`setUTCHours()`** 方法會根據世界協調時間變更此日期的時、分、秒及／或毫秒。

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// 預期輸出：「Wed, 20 Aug 1975 02:15:30 GMT」

console.log(event.getUTCHours());
// 預期輸出：2

event.setUTCHours(23);

console.log(event.toUTCString());
// 預期輸出：「Wed, 20 Aug 1975 23:15:30 GMT」
```

## 語法

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 參數

- `hoursValue`
  - : 一個介於 0 到 23 之間的整數，表示小時。
- `minutesValue` {{optional_inline}}
  - : 一個介於 0 到 59 之間的整數，表示分鐘。
- `secondsValue` {{optional_inline}}
  - : 一個介於 0 到 59 之間的整數，表示秒。若你指定 `secondsValue`，則必須同時指定 `minutesValue`。
- `msValue` {{optional_inline}}
  - : 一個介於 0 到 999 之間的整數，表示毫秒。若你指定 `msValue`，則必須同時指定 `minutesValue` 和 `secondsValue`。

### 回傳值

就地更改 {{jsxref("Date")}} 物件，並回傳其新的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)。若參數為 `NaN`（或其他會被[強制轉型](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字強制轉換)為 `NaN` 的值，例如 `undefined`），則日期會被設為[無效日期](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，並回傳 `NaN`。

## 描述

若你沒有指定 `minutesValue`、`secondsValue` 和 `msValue` 參數，將會使用 {{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}、{{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} 和 {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} 方法回傳的值。

若你指定的參數超出預期範圍，`setUTCHours()` 會相應地嘗試更新 {{jsxref("Date")}} 物件中的日期訊息。例如，若你為 `secondsValue` 指定 100，則分鐘數會增加 1（`minutesValue + 1`），而秒數則會使用 40。

## 範例

### 使用 setUTCHours()

```js
const theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
