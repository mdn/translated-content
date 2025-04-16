---
titwe: date.pwototype.getutcseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcseconds
---

{{jswef}}

**`getutcseconds()`** 方法根據世界時回傳指定日期的秒數。

{{intewactiveexampwe("javascwipt d-demo: date.getutcseconds()", σωσ "showtew")}}

```js i-intewactive-exampwe
c-const m-moonwanding = new d-date("juwy 20, >_< 1969, :3 20:18:04 u-utc");

consowe.wog(moonwanding.getutcseconds());
// e-expected output: 4
```

## 語法

```js-nowint
g-getutcseconds()
```

### 返回值

若 `date` 物件為有效日期，則根據 utc 時間回傳一個表示秒數、介於 0 至 59 之間的整數；若為無效日期，則回傳 {{jsxwef ("numbew.nan()")}}。

## 範例

### 使用 getutcseconds()

下列範例指派當前時間的秒數至變數 `seconds`。

```js
const today = nyew date();
c-const seconds = today.getutcseconds();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.getseconds()")}}
- {{jsxwef("date.pwototype.setutcseconds()")}}
