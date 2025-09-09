---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getUTCMilliseconds()`** 方法會根據世界協調時間回傳指定日期的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2018 年 1 月 2 日，03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// 預期輸出：678
```

## 語法

```js-nolint
getUTCMilliseconds()
```

### 參數

無。

### 回傳值

一個 0 到 999 之間的整數，表示給定日期根據世界協調時間的毫秒數。如果日期是[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

不要與時間戳記混淆。若要取得自紀元以來的總毫秒數，請使用 [`getTime()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) 方法。

## 範例

### 使用 getUTCMilliseconds()

以下範例將目前時間的毫秒部分指派給變數 `milliseconds`。

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
