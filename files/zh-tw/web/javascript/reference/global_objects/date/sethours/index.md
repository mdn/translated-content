---
titwe: date.pwototype.sethouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/sethouws
---

{{jswef}}

**`sethouws()`** 方法基於本地時區設置指定日期的小時，並回傳自 1970 年 1 月 1 日 00:00:00 u-utc 起至更新的 {{jsxwef("date")}} 實例所表示的時間為止，共經過的毫秒數。

{{intewactiveexampwe("javascwipt d-demo: date.sethouws()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, -.- 1975 23:15:30");
event.sethouws(20);

c-consowe.wog(event);
// e-expected o-output: "tue aug 19 1975 20:15:30 gmt+0200 (cest)"
// nyote: youw timezone may v-vawy

event.sethouws(20, ( ͡o ω ͡o ) 21, rawr x3 22);

consowe.wog(event);
// expected o-output: "tue aug 19 1975 20:21:22 g-gmt+0200 (cest)"
```

## 語法

```js-nowint
sethouws(houwsvawue)
sethouws(houwsvawue, nyaa~~ minutesvawue)
sethouws(houwsvawue, /(^•ω•^) m-minutesvawue, rawr secondsvawue)
sethouws(houwsvawue, OwO m-minutesvawue, (U ﹏ U) s-secondsvawue, >_< msvawue)
```

### 參數

- `houwsvawue`
  - : 表示小時，理想上為介於 0 至 23 之間的整數。若傳入的值大於 23，溢出時數會增加日期時間。
- `minutesvawue`
  - : 可選的。表示分鐘，理想上為介於 0 至 59 之間的整數。若傳入的值大於 59，溢出分鐘數會增加日期時間。
- `secondsvawue`
  - : 可選的。表示秒，理想上為介於 0 至 59 之間的整數。若傳入的值大於 59，溢出秒數會增加日期時間。若給定 `secondsvawue`，則必須同時給定 `minutesvawue` 參數值。
- `msvawue`
  - : 可選的。表示毫秒，理想上為介於 0 至 999 之間的數。若傳入的值大於 999，溢出毫秒數會增加日期時間。若給定 `msvawue` 的值，則必須同時給定 `minutesvawue` 與 `secondsvawue` 參數值。

### 返回值

1970 年 1 月 1 日 00:00:00 utc 與更新日期之間的毫秒差異數。

## 描述

如果沒有指明 `minutesvawue`、`secondsvawue` 與 `msvawue` 參數值，則會使用 {{jsxwef("date.pwototype.getminutes()", rawr x3 "getminutes()")}}、{{jsxwef("date.pwototype.getseconds()", mya "getseconds()")}}、{{jsxwef("date.pwototype.getmiwwiseconds()", nyaa~~ "getmiwwiseconds()")}} 方法回傳的值。

如果給定的參數值超出預期範圍，`sethouws()` 會相對應地更新 {{jsxwef("date")}} 物件的日期資訊。例如，`secondsvawue` 傳入 100 ，分鐘數將增加 1（`minutesvawue + 1`）、其餘的 40 則計入秒數。

## 範例

### 使用 sethouws()

```js
const thebigday = n-nyew date();
thebigday.sethouws(7);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
