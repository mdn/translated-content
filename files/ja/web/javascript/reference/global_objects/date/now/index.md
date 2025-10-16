---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{JSRef}}

**`Date.now()`** は静的メソッドで、 UTC (協定世界時) で 1970 年 1 月 1 日の夜半と定義されている[元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)からの経過時間を、ミリ秒単位で返します。

{{InteractiveExample("JavaScript デモ: Date.now()")}}

```js interactive-example
// この例は実行に 2 秒掛かります
const start = Date.now();

console.log("starting timer...");
// 予想される結果: "starting timer..."

setTimeout(() => {
  const ms = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
  // 予想される結果: "seconds elapsed = 2"
}, 2000);
```

## 構文

```js-nolint
Date.now()
```

### 引数

なし。

### 返値

現在時刻の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)をミリ秒単位で表す数値です。

## 解説

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)に対する保護機能を提供するために、 `someFile.lastModified` の精度がブラウザーの設定に応じて丸められることがあります。
Firefox では、`privacy.reduceTimerPrecision` 設定は既定で有効になっており、既定で 2 ミリ秒になります。この場合、精度は 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きい方になります。

例えば、時刻の精度を下げた場合、 `Date.now()` の結果は常に 2 の倍数になり、`privacy.resistFingerprinting` を有効にした場合は 100 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
Date.now();
// 取りうる値:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
Date.now();
// 取りうる値:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 例

### 経過時間の測定

`Date.now()` を使用して現在の時刻をミリ秒単位で取得し、前回の時刻を差し引くと、2 つの呼び出し間の経過時間を求めることができます。

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`経過時間: ${Date.now() - start} ms`);
```

より複雑なシナリオでは、[パフォーマンス API](/ja/docs/Web/API/Performance_API/High_precision_timing) を使用することをお勧めします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Date.now` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}}
- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
