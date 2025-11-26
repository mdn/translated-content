---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

{{jsxref("Date")}} 實例的 **`setHours()`** 方法會根據本地時間變更此日期的時、分、秒和／或毫秒。

{{InteractiveExample("JavaScript Demo: Date.prototype.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// 預期輸出：「Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)」
// 備註：你的時區可能會有所不同

event.setHours(20, 21, 22);

console.log(event);
// 預期輸出：「Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)」
```

## 語法

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 參數

- `hoursValue`
  - : 一個介於 0 到 23 之間的整數，表示小時。
- `minutesValue` {{optional_inline}}
  - : 一個介於 0 到 59 之間的整數，表示分鐘。
- `secondsValue` {{optional_inline}}
  - : 一個介於 0 到 59 之間的整數，表示秒。如果你指定了 `secondsValue`，則也必須指定 `minutesValue`。
- `msValue` {{optional_inline}}
  - : 一個介於 0 到 999 之間的整數，表示毫秒。如果你指定了 `msValue`，則也必須指定 `minutesValue` 和 `secondsValue`。

### 回傳值

會就地變更 {{jsxref("Date")}} 物件，並回傳其新的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)。如果參數為 `NaN`（或其他會被[強制轉換](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字轉換)為 `NaN` 的值，例如 `undefined`），日期會被設為[無效日期](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)並回傳 `NaN`。

## 描述

如果你沒有指定 `minutesValue`、`secondsValue` 和 `msValue` 參數，將會使用 {{jsxref("Date/getMinutes", "getMinutes()")}}、{{jsxref("Date/getSeconds", "getSeconds()")}} 和 {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} 所回傳的相同值。

如果你指定的參數超出預期範圍，{{jsxref("Date")}} 物件中的其他參數和日期訊息也會相應地更新。例如，如果你為 `secondsValue` 指定 100，分鐘數將會增加 1（`minutesValue + 1`），而秒數則會使用 40。

因為 `setHours()` 是根據本地時間運作，跨越日光節約時間（Daylight Saving Time，DST）邊界可能會導致與預期不同的經過時間。例如，如果設定的小時數跨越了春季快轉轉換（少了一小時），新舊日期之間的時間戳差異將比名目上的一小時差異少一小時。相反地，跨越秋季倒退轉換（多了一小時）則會導致多出一小時。如果你需要按固定的時間量調整日期，請考慮使用 {{jsxref("Date/setUTCHours", "setUTCHours()")}} 或 {{jsxref("Date/setTime", "setTime()")}}。

如果新的本地時間落在時區偏移轉換期間，確切的時間會使用與 `Temporal` 的 [`disambiguation: "compatible"`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#從本地時間到_utc_時間的歧義與間隙) 選項相同的行為來推導。也就是說，如果本地時間對應到兩個瞬間，會選擇較早的一個；如果本地時間不存在（有間隙），我們會前進間隙的持續時間。

## 範例

### 使用 setHours()

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
