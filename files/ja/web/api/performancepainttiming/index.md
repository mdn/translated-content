---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
---

{{SeeCompatTable}}{{APIRef("Performance Timeline API")}}

[Paint Timing](</ja/docs/Web/API/Paint Timing>) の **`PerformancePaintTiming`** インタフェースは、Web ページ構築中の "paint" ("render" とも呼ばれる) 操作に関するタイミング情報を提供します。「ペイント」とは、レンダリングツリーを画面上のピクセルに変換することです。

アプリケーションは、"`paint`" {{domxref("PerformanceEntry","パフォーマンスエントリタイプ")}} に対して {{domxref("PerformanceObserver")}} を登録することができ、オブザーバーはペイントイベントが発生した時間を取得することができます。この情報を使用して、優れたユーザーエクスペリエンスを提供するのに時間がかかりすぎる領域を特定するのに役立ちます。

{{InheritanceDiagram}}

## プロパティ

このインタフェースにはプロパティはありませんが、次のようにプロパティを修飾および制約することで、次の {{domxref("PerformanceEntry")}} プロパティ ("`paint`"{{domxref ("PerformanceEntry.entryType","パフォーマンスエントリタイプ")}} 用) を拡張します。

- {{domxref("PerformanceEntry.entryType")}}
  - : "`paint`" を返します。
- {{domxref("PerformanceEntry.name")}}
  - : `"first-paint"` または `"first-contentful-paint"` を返します。
- {{domxref("PerformanceEntry.startTime")}}
  - : 描画が行われたときに {{domxref("DOMHighResTimeStamp","タイムスタンプ")}} を返します。
- {{domxref("PerformanceEntry.duration")}}
  - : 0 を返します。

## メソッド

このインターフェイスにはメソッドがありません。

## 例

```js
function showPaintTimings() {
  if (window.performance) {
    let performance = window.performance;
    let performanceEntries = performance.getEntriesByType('paint');
    performanceEntries.forEach( (performanceEntry, i, entries) => {
      console.log("The time to " + performanceEntry.name + " was " + performanceEntry.startTime + " milliseconds.");
    });
  } else {
    console.log('Performance timing isn\'t supported.');
  }
}
```

上記のコードは、次のようなコンソール出力を生成します。

```
The time to first-paint was 2785.915 milliseconds.
The time to first-contentful-paint was 2787.460 milliseconds.
```

## 仕様書

| 仕様書                                                                                                           | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Paint Timing','#sec-PerformancePaintTiming','PerformancePaintTiming')}} | {{Spec2('Paint Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformancePaintTiming")}}
