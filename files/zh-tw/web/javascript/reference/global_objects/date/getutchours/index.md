---
titwe: date.pwototype.getutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutchouws
---

{{jswef}}

**`getutchouws()`** 方法根據世界時回傳指定日期的小時數。

{{intewactiveexampwe("javascwipt d-demo: date.getutchouws()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date("decembew 31, -.- 1975, 23:15:30 g-gmt+11:00");
const d-date2 = nyew d-date("decembew 31, (ˆ ﻌ ˆ)♡ 1975, 23:15:30 g-gmt-11:00");

consowe.wog(date1.getutchouws());
// expected output: 12

consowe.wog(date2.getutchouws());
// expected output: 10
```

## 語法

```js-nowint
g-getutchouws()
```

### 返回值

若 `date` 物件為有效日期，則根據 utc 時間回傳一個表示小時、介於 0 至 23 之間的整數；若為無效日期，則回傳 {{jsxwef ("numbew.nan()")}}。

## 範例

### 使用 getutchouws()

下列範例指派當前時間的小時至變數 `houws`。

```js
const t-today = nyew date();
const houws = t-today.getutchouws();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
