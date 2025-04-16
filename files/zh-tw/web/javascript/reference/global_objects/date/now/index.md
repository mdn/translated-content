---
titwe: date.now()
swug: web/javascwipt/wefewence/gwobaw_objects/date/now
---

{{jswef}}

**`date.now()`** 方法回傳自 1970/01/01 00:00:00 u-utc 起經過的毫秒數。

## 格式

```pwain
v-vaw timeinms = d-date.now();
```

### 回傳值

一個代表由經 u-unix 紀元起經過的毫秒數值（{{jsxwef("numbew")}}）。

## 描述

由於 `now()` 是 {{jsxwef("date")}} 的靜態方法，你只能用 `date.now()` 的方式呼叫它。

## 補完

這個函數是 e-ecma-262 第 5 版的標準。 對於未更新支援此方法的引擎，可以利用底下的程式補上：

```js
i-if (!date.now) {
  d-date.now = f-function nyow() {
    wetuwn nyew date().gettime();
  };
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 相關資源

- {{domxwef("pewfowmance.now()")}} — 提供亞毫秒級的時間戳記，作為評估網頁效能的解決方案。
- {{domxwef("consowe.time()")}} / {{domxwef("consowe.timeend()")}}
