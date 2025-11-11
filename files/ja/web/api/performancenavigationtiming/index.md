---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{APIRef("Performance API")}}

**`PerformanceNavigationTiming`** インターフェイスは、ブラウザーの文書ナビゲーションイベントに関するメトリックを格納および取得するためのメソッドとプロパティを提供します。たとえば、このインターフェイスを使用して、文書のロードまたはアンロードにかかる時間を判断できます。

パフォーマンスタイムラインに記載されるのは現在の文書のみなので、パフォーマンスタイムライン内の `PerformanceNavigationTiming` オブジェクトは 1 つだけです。このオブジェクトは {{domxref("PerformanceResourceTiming")}} と {{domxref("PerformanceEntry")}} のプロパティとメソッドをすべて継承します。

{{InheritanceDiagram}}

以下は `PerformanceNavigationTiming` で定義するタイムスタンププロパティをすべて表示させたものです。

![文書内の取得したタイムスタンプを記録順に並べたタイムスタンプ図](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## インスタンスプロパティ

このインターフェイスは、以下の {{domxref('PerformanceEntry')}} プロパティを修飾および制約することで拡張します。

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : `"navigation"` を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : [文書の URL](/ja/docs/Web/API/Document/URL) を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : 値 "`0`" を持つ {{domxref("DOMHighResTimeStamp")}} を返します。
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : {{domxref("PerformanceNavigationTiming.loadEventEnd")}} と {{domxref("PerformanceEntry.startTime")}} の各プロパティの差である {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

このインターフェイスは、ナビゲーションパフォーマンス項目型の以下の {{domxref('PerformanceResourceTiming')}} プロパティも、次のように修飾して制約することで拡張します。

- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : `"navigation"` を返します。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxref('PerformanceNavigationTiming.activationStart')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、文書が事前レンダリングを始めてから有効になるまでの時間を表します。
- {{domxref('PerformanceNavigationTiming.domComplete')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、ブラウザーが現在の文書の現在の文書レディネスを*[完了](https://html.spec.whatwg.org/multipage/syntax.html#the-end)*に設定する直前の時間と等しい時間値を表します。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、現在の文書の [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event) イベントが完了した直後の時間と等しい時間値を表します。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、現在の文書でユーザーエージェントが [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event) イベントを起動する直前の時間と等しい時間値を表します。
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、ユーザーエージェントがこの文書の [`readyState`](/ja/docs/Web/API/Document/readyState) を `"interactive"` に設定する直前の時刻を表します。
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、現在の文書の [`load`](/ja/docs/Web/API/Window/load_event) イベントが完了した時刻を表します。
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、現在の文書の [`load`](/ja/docs/Web/API/Window/load_event) イベントが発生する直前の時間と等しい時間値を表します。
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{ReadOnlyInline}}
  - : 現在の閲覧コンテキストでの最後のリダイレクト以外のナビゲーション以降のリダイレクト数を表す数値。
- {{domxref('PerformanceNavigationTiming.type')}} {{ReadOnlyInline}}
  - : 文字列で、ナビゲーションの種類を表します。 `"navigate"`、`"reload"`、`"back_forward"`、`"prerender"` のいずれかです。
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、ユーザーエージェントが前の文書の [`unload`](/ja/docs/Web/API/Window/unload_event) イベントを完了した直後の時間と等しい時間値を表します。
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、ユーザーエージェントが前の文書の [`unload`](/ja/docs/Web/API/Window/unload_event) イベントを開始する直前の時間と等しい時間値を表します。

## インスタンスメソッド

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : `PerformanceNavigationTiming` オブジェクトの JSON 表現を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
