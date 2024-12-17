---
title: Performance
slug: Web/API/Performance
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{APIRef("Performance API")}}

**`Performance`** インターフェイスは、現在のページのパフォーマンス関連情報へのアクセスを提供します。

この型のオブジェクトは `window.performance` や `self.performance` をワーカーで呼び出すことで取得できます。パフォーマンス項目はコンテキスト単位であることに注意してください。メインスレッド（または他にもワーカー）でマークを作成した場合、ワーカースレッドではそのマークを見ることはできません。ウィンドウとワーカーのコンテキストで利用できる API は [`self.performance`](/ja/docs/Web/API/Window/performance) を参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`Performance` インターフェイスはプロパティを継承しません。_

- {{domxref("Performance.eventCounts")}} {{ReadOnlyInline}}

  - : イベント型ごとに配信されたイベント数を格納する {{domxref("EventCounts")}} マップです。

- {{domxref("Performance.navigation")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : 古い {{domxref("PerformanceNavigation")}} オブジェクトで、ページが読み込みか更新か、リダイレクトの発生回数など、`timing` にリストされている時間に含まれる操作に関する有用なコンテキストを提供します。

- {{domxref("Performance.timing")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : 古い {{domxref("PerformanceTiming")}} オブジェクトで、待ち時間関連のパフォーマンス情報を持っています。

- {{domxref("Performance.memory")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Chrome で追加された*標準外の*拡張子で、このプロパティは基本的なメモリー使用量情報を持つオブジェクトを提供します。_この標準外の API を**使うべきではありません**_。
- {{domxref("Performance.timeOrigin")}} {{ReadOnlyInline}}
  - : パフォーマンス測定の開始時刻の高解像度タイムスタンプを返します。

## インスタンスメソッド

_`Performance` インターフェイスはメソッドを継承しません。_

- {{domxref("Performance.clearMarks()")}}
  - : ブラウザーのパフォーマンス項目バッファーから指定された*マーク*を削除します。
- {{domxref("Performance.clearMeasures()")}}
  - : ブラウザーのパフォーマンス項目バッファーから指定された*メジャー*を削除します。
- {{domxref("Performance.clearResourceTimings()")}}
  - : ブラウザーのパフォーマンスデータバッファーから "`resource`" の {{domxref("PerformanceEntry.entryType","entryType")}} を持つすべての{{domxref("PerformanceEntry","パフォーマンス項目", "", 1)}}を削除します。
- {{domxref("Performance.getEntries()")}}
  - : 与えられた*フィルター*に基づく {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("Performance.getEntriesByName()")}}
  - : 指定された*名前*と*項目型*に基づいて {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("Performance.getEntriesByType()")}}
  - : 与えられた*項目型*の {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("Performance.mark()")}}
  - : 指定された名前でブラウザーの*パフォーマンス項目バッファー*に{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を作成します。
- {{domxref("Performance.measure()")}}
  - : 指定された 2 つのマーク (それぞれ*開始マーク*と*終了マーク*と呼ばれる) の間に、ブラウザーのパフォーマンス項目バッファー内に名前付き{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を作成します。
- {{domxref("Performance.measureUserAgentSpecificMemory()")}} {{Experimental_Inline}}
  - : すべての iframe とワーカーを含むウェブアプリケーションのメモリー使用量を推定します。
- {{domxref("Performance.now()")}}
  - : 参照時点から経過したミリ秒数を表す {{domxref("DOMHighResTimeStamp")}} を返します。
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : ブラウザーのリソースタイミングバッファーサイズを、指定された数の "`resource`" {{domxref("PerformanceEntry.entryType","型")}}の{{domxref("PerformanceEntry","パフォーマンス項目")}}オブジェクトに設定します。
- {{domxref("Performance.toJSON()")}}
  - : `Performance` オブジェクトの JSON 表現を返します。

## イベント

`addEventListener()` を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナを割り当てることで、イベントを監視します。

- {{DOMxRef("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
  - : ブラウザーの[リソースタイミングバッファー](/ja/docs/Web/API/Performance/setResourceTimingBufferSize)が満杯になったときに発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
