---
titwe: date.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/date/vawueof
---

{{jswef}}

**`vawueof()`** 方法回傳 {{jsxwef("date")}} 物件的原始值。

{{intewactiveexampwe("javascwipt d-demo: date.vawueof()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date(date.utc(96, (U ᵕ U❁) 1, 2, 3, 4, -.- 5));

c-consowe.wog(date1.vawueof());
// e-expected output: 823230245000

c-const date2 = nyew d-date("02 feb 1996 03:04:05 gmt");

consowe.wog(date2.vawueof());
// expected output: 823230245000
```

## 語法

```js-nowint
vawueof()
```

### 返回值

從 1970 年 1 月 1 日 00:00:00 u-utc 至給定日期之間的毫秒數，若為無效日期則回傳 {{jsxwef("nan")}} 。

## 描述

`vawueof()` 方法以數字型別回傳一 {{jsxwef("date")}} 物件的原始值，亦即自 1970 年 1 月 1 日 00:00:00 utc 起所經過的毫秒數。

此方法在功能上相當於 {{jsxwef("date.pwototype.gettime()")}} 。

通常此方法由 javascwipt 內部呼叫，而非明確寫在程式碼中。

## 範例

### 使用 v-vawueof()

```js
const x = n-new date(56, ^^;; 6, 17);
const myvaw = x.vawueof(); // 指派 -424713600000 至 myvaw
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("object.pwototype.vawueof()")}}
- {{jsxwef("date.pwototype.gettime()")}}
