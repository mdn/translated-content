---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`Date.now()`** メソッドは、UTC (協定世界時) での 1970 年 1 月 1 日 0 時 0 分 0 秒 から現在までの経過時間をミリ秒単位で返します。

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## 構文

```js-nolint
Date.now()
```

### 返値

ECMAScript 元期からの経過時間をミリ秒単位で表す数値です。

## 例

### 時刻の低精度化

ブラウザーの設定によっては、タイミング攻撃とフィンガープリンティングに対する保護を提供するために `Date.now()` の精度が落とされていることがあります。
Firefox では、`privacy.reduceTimerPrecision` が既定で有効になっています。既定値は Firefox 59 では 20 マイクロ秒で、 Firefox 60 では 2 ミリ秒です。

```js
// Firefox 60 での時刻の精度の低下（2 ミリ秒）
Date.now();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時刻の精度の低下
Date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

Firefox では、 `privacy.resistFingerprinting` も有効にできます。この場合、精度は 100 ミリ秒と `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 値のうち大きい方になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Date.now` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}} — ウェブページのパフォーマンス測定のための、ミリ秒以下の分解能を持つタイムスタンプを提供
- {{domxref("console.time()")}} / {{domxref("console.timeEnd()")}}
