---
title: "PerformanceEntry: entryType プロパティ"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`entryType`** プロパティは読み取り専用で、この項目が表すパフォーマンス指標の種類を表す文字列です。

対応している `entryTypes` はすべて、静的プロパティである {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} を使用して得ることができます。

## 値

文字列です。返値は `PerformanceEntry` オブジェクトのサブタイプに依存します。一部のサブタイプには複数の `entryType` があります。

- `element`
  - : 要素の読み込み時間を報告します。

    項目のインスタンスは {{domxref("PerformanceElementTiming")}} オブジェクトです。

- `event`
  - : イベントの待ち時間を報告します。

    項目のインスタンスは {{domxref("PerformanceEventTiming")}} オブジェクトです。

- `first-input`
  - : {{Glossary("first input delay")}} (FID) を報告します。

    項目のインスタンスは {{domxref("PerformanceEventTiming")}} オブジェクトです。

- `largest-contentful-paint`
  - : 画面で起動された要素の最大の描画を報告します。

    項目のインスタンスは {{domxref("LargestContentfulPaint")}} オブジェクトです。

- `layout-shift`
  - : ページ上の要素の動きに基づいて、ウェブページのレイアウトの安定性を報告します。

    項目のインスタンスは {{domxref("LayoutShift")}} オブジェクトです。

- `longtask`
  - : 長いタスクのインスタンスを報告します。

    項目のインスタンスは {{domxref("PerformanceLongTaskTiming")}} オブジェクトです。

- `mark`
  - : 独自のパフォーマンスマーカーを報告します。

    項目のインスタンスは {{domxref("PerformanceMark")}} オブジェクトです。

- `measure`
  - : 独自のパフォーマンス指標を報告します。

    項目のインスタンスは {{domxref("PerformanceMeasure")}} オブジェクトです。

- `navigation`
  - : 文書のナビゲーションタイミングを報告します。

    項目のインスタンスは {{domxref("PerformanceNavigationTiming")}} オブジェクトです。

- `paint`
  - : ページ読み込み中の文書レンダリングの主要な瞬間（最初の描画、最初のコンテンツ描画）を報告します。

    項目のインスタンスは {{domxref("PerformancePaintTiming")}} オブジェクトです。

- `resource`
  - : 文書内のリソースのタイミング情報を報告します。

    項目のインスタンスは {{domxref("PerformanceResourceTiming")}} オブジェクトです。

- `taskattribution`
  - : 長いタスクに大きく貢献した作業タイプを報告します。

    項目のインスタンスは {{domxref("TaskAttributionTiming")}} オブジェクトです。

- `visibility-state`
  - : タブがフォアグラウンドからバックグラウンドへ、またはその逆へ変化したときなど、ページの表示状態が変化した時刻を報告します。

    項目のインスタンスは {{domxref("VisibilityStateEntry")}} オブジェクトです。

## 例

### パフォーマンス項目を種類別に絞り込み

`entryType` プロパティは、固有のパフォーマンス項目を絞り込みする際に有益なものです。例えば、すべてのスクリプトリソースを調べたい場合、 `entryType` が `"resource"` で {{domxref("PerformanceResourceTiming.initiatorType", "initiatorType")}} が `"script"` であることをチェックしてください。

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### パフォーマンス項目を種類別に取得

{{domxref("Performance")}} と {{domxref("PerformanceObserver")}} はどちらも、パフォーマンス項目を種類別に直接取得するメソッドを提供します。代わりに {{domxref("Performance.getEntriesByType()")}} または {{domxref("PerformanceObserverEntryList.getEntriesByType()")}} を使用することができます。

また、 {{domxref("PerformanceObserver")}} で監視する場合、 {{domxref("PerformanceObserver.observe", "observe()")}} メソッドはオプションオブジェクトに `entryTypes` の配列を受け取り、そこで監視する項目の種類を決めることができます。

```js
// この時点ですべてのリソース項目をログ出力
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});

// PerformanceObserver 版
// 利用できるすべてのリソース項目をログ出力
function perfObserver(list, observer) {
  list.getEntriesByType("resource").forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["resource", "navigation"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}
- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByType()")}}
