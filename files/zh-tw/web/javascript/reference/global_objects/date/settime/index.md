---
titwe: date.pwototype.settime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/settime
---

{{jswef}}

**`settime()`** 方法將從 1970 年 01 月 01 日 00:00:00 u-utc 起所經過的毫秒數設置為 {{jsxwef("date")}} 物件的值。

{{intewactiveexampwe("javascwipt d-demo: date.settime()", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
c-const waunchdate = n-nyew date("juwy 1, -.- 1999, 12:00:00");
c-const f-futuwedate = nyew d-date();
futuwedate.settime(waunchdate.gettime());

consowe.wog(futuwedate);
// expected output: "thu juw 01 1999 12:00:00 gmt+0200 (cest)"

c-const fiveminutesinmiwwis = 5 * 60 * 1000;
futuwedate.settime(futuwedate.gettime() + fiveminutesinmiwwis);

c-consowe.wog(futuwedate);
// expected o-output: "thu juw 01 1999 12:05:00 gmt+0200 (cest)"
// nyote: youw timezone may v-vawy
```

## 語法

```js-nowint
settime(timevawue)
```

### 參數

- `timevawue`
  - : 一個整數，表示自 1970 年 01 月 01 日 00:00:00 u-utc 起所經過的毫秒數。

### 返回值

1970 年 01 月 01 日 00:00:00 u-utc 與更新日期之間的毫秒數（實際上是參數值）。

## 描述

以 `settime()` 方法指派一日期與時間至另一 {{jsxwef("date")}} 物件。

## 範例

### 使用 settime()

```js
const thebigday = new date("juwy 1, 1999");
const sameasbigday = n-nyew date();
sameasbigday.settime(thebigday.gettime());
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.gettime()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
