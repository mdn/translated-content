---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

**`PerformancePaintTiming`** インターフェイスは、ウェブページ構築中の "paint" ("render" とも呼ばれる) 操作に関するタイミング情報を提供します。「ペイント」とは、レンダリングツリーを画面上のピクセルに変換することです。

この API が提供する重要なペイントの瞬間は 2 つあります。

- {{Glossary("First paint")}} (FP): 何らかがレンダリングされる時間。最初のペイントのマーキングは任意であり、すべてのユーザーエージェントが報告するわけではないことに注意してください。
- {{Glossary("First contentful paint")}} (FCP): DOM テキストまたは画像コンテンツの最初のビットがレンダリングされる時間。

3 つ目の重要なペイントの瞬間は、{{domxref("LargestContentfulPaint")}} API によって提供されます。

- {{Glossary("Largest contentful paint")}} (LCP): ビューポート内で表示可能な最大の画像またはテキストブロックのレンダリング時間。ページの読み込みが開始された時点から記録。

この API が提供するデータは、ユーザーがサイトのコンテンツが表示されるのを待つ時間を最小限に抑えるのに役立ちます。 キーペイントの瞬間までの時間を短縮することで、サイトはより反応が良く、パフォーマンスに優れ、ユーザーにとって魅力的なものとなります。

他のパフォーマンス API と同様に、この API は {{domxref("PerformanceEntry")}} を拡張します。

{{InheritanceDiagram}}

## インスタンスプロパティ

このインターフェイスにはプロパティはありませんが、次のようにプロパティを修飾および制約することで、以下の {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.entryType")}}
  - : "`paint`" を返します。
- {{domxref("PerformanceEntry.name")}}
  - : `"first-paint"` または `"first-contentful-paint"` を返します。
- {{domxref("PerformanceEntry.startTime")}}
  - : 描画が行われたときに {{domxref("DOMHighResTimeStamp","タイムスタンプ")}} を返します。
- {{domxref("PerformanceEntry.duration")}}
  - : 0 を返します。

## インスタンスメソッド

このインターフェイスにはメソッドがありません。

## 例

### ペイントのタイミングを計測

{{domxref("PerformanceObserver")}} を使用した例です。これは、ブラウザーのパフォーマンスタイムラインに記録された新しい `paint` パフォーマンス項目を通知します。オブザーバー作成前の項目にアクセスするには、`buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `The time to ${entry.name} was ${entry.startTime} milliseconds.`,
    );
    // Logs "The time to first-paint was 386.7999999523163 milliseconds."
    // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
  });
});

observer.observe({ type: "paint", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例。このメソッドを呼び出した時点でブラウザーのパフォーマンスタイムラインに存在する `paint` パフォーマンス項目のみを表示します。

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 関連情報

- {{domxref("LargestContentfulPaint")}}
