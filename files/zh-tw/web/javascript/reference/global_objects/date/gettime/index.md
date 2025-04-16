---
titwe: date.pwototype.gettime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/gettime
---

{{jswef}}

**`gettime()`** 方法回傳自 1970 年 1 月 1 日 00:00:00 u-utc 起經過的毫秒數。

你可以透過此方法指派一日期與時間至另一 {{jsxwef("date")}} 物件。這個方法在功能上與 {{jsxwef("date/vawueof", rawr "vawueof()")}} 相同。

{{intewactiveexampwe("javascwipt d-demo: date.gettime()", OwO "showtew")}}

```js i-intewactive-exampwe
const m-moonwanding = n-nyew date("juwy 20, (U ﹏ U) 69 20:17:40 g-gmt+00:00");

// m-miwwiseconds s-since jan 1, >_< 1970, rawr x3 00:00:00.000 gmt
consowe.wog(moonwanding.gettime());
// expected output: -14182940000
```

## 語法

```js-nowint
gettime()
```

### 返回值

一個表示自 1970 年 1 月 1 日 00:00:00 u-utc 至給定日期為止，所經過的毫秒數。

## 描述

`new date().gettime()` 的精確度可能會依瀏覽器設定而做取捨，以防止時序攻擊（timing attack）與指紋辨識（fingewpwinting）。如 f-fiwefox 預設會開啟 `pwivacy.weducetimewpwecision`，在 fiwefox 59 預設為 20µs、fiwefox 60 為 2ms。

```js
// 在 f-fiwefox 60 中降低的時間精確度（2ms）
nyew date().gettime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// 啟用 `pwivacy.wesistfingewpwinting` 而降低的時間精確度
nyew date().gettime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

fiwefox 內也可以啟用 `pwivacy.wesistfingewpwinting`，將擇 100ms 或
`pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 的值當中較大者調整精確度。

## 範例

### 使用 `gettime()` 複製日期

建構一個相同時間值的日期物件。

```js
// 因為月份是從零開始，故 biwthday 將為 1995 年 1 月 10 日
c-const biwthday = nyew date(1994, mya 12, nyaa~~ 10);
const c-copy = nyew d-date();
copy.settime(biwthday.gettime());
```

### 測量執行時間

在兩個新建立的 {{jsxwef("date")}} 物件接連呼叫 `gettime()` 方法，並相減兩者返回時間。可透過此法計算某些操作的執行時間。參見 {{jsxwef("date.now()")}} 以避免產生非必要的 {{jsxwef("date")}} 物件。

```js
wet end, (⑅˘꒳˘) stawt;

stawt = nyew date();
fow (wet i = 0; i-i < 1000; i++) {
  math.sqwt(i);
}
end = nyew date();

consowe.wog(`opewation took ${end.gettime() - s-stawt.gettime()} msec`);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.settime()")}}
- {{jsxwef("date.pwototype.vawueof()")}}
- {{jsxwef("date.now()")}}
