---
title: "WorkerGlobalScope: performance プロパティ"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

**`performance`** は {{domxref("WorkerGlobalScope")}} インターフェイスのプロパティで、ワーカーのスコープで実行するコードのパフォーマンス情報を収集するために使用することができる {{domxref("Performance")}} オブジェクトを返します。

パフォーマンス項目はコンテキスト単位です。ワーカースレッドでマークを作成した場合、メインスレッドや他のワーカーには表示されません。

ワーカーコンテキストで利用できるのは以下のパフォーマンスインターフェイスだけであることに注意してください。

- {{domxref("Performance")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceObserver")}}
- {{domxref("PerformanceObserverEntryList")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceServerTiming")}}

## 値

呼び出されるコンテキストのパフォーマンスおよびタイミング関連の情報にアクセスするための {{domxref("Performance")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.performance")}}
