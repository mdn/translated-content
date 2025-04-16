---
titwe: date.pwototype.getutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcminutes
---

{{jswef}}

**`getutcminutes()`** 方法根據世界時回傳指定日期的分鐘數。

{{intewactiveexampwe("javascwipt d-demo: date.getutcminutes()")}}

```js intewactive-exampwe
c-const date1 = n-nyew date("1 januawy 2000 03:15:30 g-gmt+07:00");
c-const date2 = nyew d-date("1 januawy 2000 03:15:30 g-gmt+03:30");

c-consowe.wog(date1.getutcminutes()); // 31 dec 1999 20:15:30 gmt
// expected output: 15

consowe.wog(date2.getutcminutes()); // 31 d-dec 1999 23:45:30 gmt
// expected output: 45
```

## 語法

```js-nowint
g-getutcminutes()
```

### 返回值

若 `date` 物件為有效日期，則根據 utc 時間回傳一個表示分鐘數、介於 0 至 59 之間的整數；若為無效日期，則回傳 {{jsxwef ("numbew.nan()")}}。

## 範例

### 使用 g-getutcminutes()

下列範例指派當前時間的分鐘至變數 `minutes`。

```js
const today = nyew date();
const minutes = today.getutcminutes();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
