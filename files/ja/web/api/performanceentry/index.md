---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceEntry`** オブジェクトは、パフォーマンスタイムラインの一部である単一のパフォーマンス指標をカプセル化します。

パフォーマンス API は、 `PerformanceEntry` の特殊なサブクラスである組み込み指標を提供します。これには、リソース読み込み、イベント時刻、{{Glossary("first input delay", "最初の入力遅延")}} (FID) などの項目が含まれます。

パフォーマンス項目は、アプリケーション内の明示的な時点で {{domxref("Performance.mark()")}} または {{domxref("Performance.measure()")}} メソッドを作成することでも作成できます。これによって、パフォーマンスタイムラインに自分の指標を追加することができます。

`PerformanceEntry` インスタンスは常に次のサブクラスのいずれかになります。

- {{domxref("LargestContentfulPaint")}}
- {{domxref("LayoutShift")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceServerTiming")}}
- {{domxref("TaskAttributionTiming")}}
- {{domxref("VisibilityStateEntry")}}

## インスタンスプロパティ

- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : パフォーマンス項目の名前を表す文字列です。この値はサブタイプによって異なります。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : パフォーマンス指標の種類を表す文字列です。たとえば "`mark`" であれば {{domxref("PerformanceMark")}} が使用されています。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : パフォーマンス指標の開始時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : パフォーマンスイベントの期間を表す {{domxref("DOMHighResTimeStamp")}} です。

## インスタンスメソッド

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : `PerformanceEntry` オブジェクトの JSON 表現を返します。

## 例

### パフォーマンス項目での作業

次の例では、{{domxref("PerformanceMark")}} 型と {{domxref("PerformanceMeasure")}} 型の `PerformanceEntry` オブジェクトを作成します。
`PerformanceMark` と `PerformanceMeasure` のサブクラスは `PerformanceEntry` から `duration`、`entryType`、`name`、`startTime` プロパティを継承し、適切な値に設定します。

```js
//コードの ログインを開始する場所に配置する
performance.mark("login-started");

// コードのログインが完了する場所に配置する
performance.mark("login-finished");

// ログイン期間を測定
performance.measure("login-duration", "login-started", "login-finished");

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
