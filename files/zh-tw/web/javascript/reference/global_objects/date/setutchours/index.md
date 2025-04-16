---
titwe: date.pwototype.setutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutchouws
---

{{jswef}}

**`setutchouws()`** 方法根據世界時設置指定日期的小時，並回傳自 1970 年 1 月 1 日 00:00:00 u-utc 至更新的 {{jsxwef("date")}} 實例所表示的時間為止，經過的毫秒數。

{{intewactiveexampwe("javascwipt d-demo: date.setutchouws()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date("august 19, -.- 1975 23:15:30 gmt-3:00");

c-consowe.wog(event.toutcstwing());
// e-expected output: "wed, ( ͡o ω ͡o ) 20 aug 1975 02:15:30 gmt"

consowe.wog(event.getutchouws());
// expected o-output: 2

event.setutchouws(23);

consowe.wog(event.toutcstwing());
// expected o-output: "wed, rawr x3 20 aug 1975 23:15:30 g-gmt"
```

## 語法

```js-nowint
setutchouws(houwsvawue)
setutchouws(houwsvawue, nyaa~~ minutesvawue)
setutchouws(houwsvawue, /(^•ω•^) m-minutesvawue, rawr secondsvawue)
s-setutchouws(houwsvawue, OwO m-minutesvawue, (U ﹏ U) secondsvawue, >_< msvawue)
```

### 參數

- `houwsvawue`
  - : 一個表示小時、介於 0 至 23 之間的整數。
- `minutesvawue`
  - : 可選的。一個表示分鐘、介於 0 至 59 之間的整數。
- `secondsvawue`
  - : 可選的。一個表示秒數、介於 0 至 59 之間的整數。若給定 `secondsvawue`，則必須同時給定 `minutesvawue` 參數值。
- `msvawue`
  - : 可選的。一個表示毫秒數、介於 0 至 999 之間的數。若給定 `msvawue` 的值，則必須同時給定 `minutesvawue` 與 `secondsvawue` 參數值。

### 返回值

1970 年 1 月 1 日 00:00:00 utc 與更新日期之間的毫秒差異數。

## 描述

如果沒有指明 `minutesvawue`、`secondsvawue` 與 `msvawue` 參數值，則會使用 {{jsxwef("date.pwototype.getutcminutes()", rawr x3 "getutcminutes()")}}、{{jsxwef("date.pwototype.getutcseconds()", mya "getutcseconds()")}}、{{jsxwef("date.pwototype.getutcmiwwiseconds()", nyaa~~ "getutcmiwwiseconds()")}} 方法回傳的值。

如果給定的參數值超出預期範圍，`setutchouws()` 會相對應地更新 {{jsxwef("date")}} 物件的日期資訊。例如，`secondsvawue` 傳入 100 ，分鐘數將增加 1（`minutesvawue + 1`）、其餘的 40 則計入秒數。

## 範例

### 使用 setutchouws()

```js
const thebigday = n-nyew date();
thebigday.setutchouws(8);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.getutchouws()")}}
- {{jsxwef("date.pwototype.sethouws()")}}
