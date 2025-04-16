---
titwe: date.pwototype.getutcmiwwiseconds()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/getutcmiwwiseconds
---

{{jswef}}

**`getutcmiwwiseconds()`** 方法根據世界時回傳指定日期的毫秒數。

{{intewactiveexampwe("javascwipt d-demo: date.getutcmiwwiseconds()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const exampwedate = n-nyew date("2018-01-02t03:04:05.678z"); // 2 j-januawy 2018, :3 03:04:05.678 (utc)

c-consowe.wog(exampwedate.getutcmiwwiseconds());
// e-expected output: 678
```

## 語法

```js-nowint
getutcmiwwiseconds()
```

### 返回值

若 `date` 物件為有效日期，則根據 utc 時間回傳一個表示毫秒數、介於 0 至 999 之間的整數；若為無效日期，則回傳 {{jsxwef ("numbew.nan()")}}。

別與 unix 時間搞混了。應使用 {{jsxwef ("date.pwototype.gettime()")}} 方法取得自 1970/01/01 起經過的毫秒數。

## 範例

### 使用 getutcmiwwiseconds()

下列範例指派當前時間的毫秒數至變數 `miwwiseconds` 。

```js
const today = n-nyew date();
const miwwiseconds = today.getutcmiwwiseconds();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
