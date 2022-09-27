---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
---

{{JSRef}}

**`Date.now()`** 方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。

## 格式

```plain
var timeInMs = Date.now();
```

### 回傳值

一個代表由經 UNIX 紀元起經過的毫秒數值（{{jsxref("Number")}}）。

## 描述

由於 `now()` 是 {{jsxref("Date")}} 的靜態方法，你只能用 `Date.now()` 的方式呼叫它。

## 補完

這個函數是 ECMA-262 第 5 版的標準。 對於未更新支援此方法的引擎，可以利用底下的程式補上：

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關資源

- {{domxref("Performance.now()")}} — 提供亞毫秒級的時間戳記，作為評估網頁效能的解決方案。
- {{domxref("console.time()")}} / {{domxref("console.timeEnd()")}}
