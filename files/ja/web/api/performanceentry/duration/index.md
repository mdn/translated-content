---
title: "PerformanceEntry: duration プロパティ"
short-title: duration
slug: Web/API/PerformanceEntry/duration
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}}

**`duration`** プロパティは、{{domxref("PerformanceEntry", "パフォーマンス項目", "", "no-code")}}の時間である{{domxref("DOMHighResTimeStamp","タイムスタンプ", "", "no-code")}}を返します。このプロパティの意味は、この項目の {{domxref("PerformanceEntry.entryType", "entryType")}} の値によって異なります。

## 値

{{domxref("DOMHighResTimeStamp")}} で、{{domxref("PerformanceEntry", "パフォーマンス項目", "", "no-code")}}の継続時間を表します。具体的なパフォーマンス指標に長さの概念が適用されない場合は、`0` の時間を返します。

このプロパティの意味は、このパフォーマンス項目の {{domxref("PerformanceEntry.entryType", "entryType")}} の値によって異なります。

- `event`
  - : イベントの `startTime` から次のレンダリングペイントまでの時間です（8 ミリ秒単位に丸めた値）。
- `first-input`
  - : 最初の入力イベントの `startTime` から次のレンダリングペイントまでの時間です（8 ミリ秒単位に丸めた値）。
- `longtask`
  - : タスクの開始から終わりまでの経過時間です（1 ミリ秒単位）。
- `measure`
  - : 測定の時間です。
- `navigation`
  - : この項目の {{domxref("PerformanceNavigationTiming.loadEventEnd", "loadEventEnd")}} プロパティと {{domxref("PerformanceEntry.startTime", "startTime")}} プロパティの差です。
- `resource`
  - : この項目の {{domxref("PerformanceResourceTiming/responseEnd", "responseEnd")}} 値からこの項目の {{domxref("PerformanceEntry.startTime","startTime")}} 値を引いたものです。

以下の種類の項目では `duration` は適用されず、この場合の値は常に `0` になります。

- `element`
- `largest-contentful-paint`
- `layout-shift`
- `mark`
- `paint`
- `taskattribution`
- `visibility-state`

## 例

### duration プロパティの使用

次の例では、`duration` が `0` より大きいパフォーマンス項目をすべてログ出力します。

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.duration > 0) {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark", "resource"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
