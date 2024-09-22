---
title: "Performance: eventCounts プロパティ"
short-title: eventCounts
slug: Web/API/Performance/eventCounts
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

読み取り専用の `performance.eventCounts` は {{domxref("EventCounts")}} マップで、イベント型ごとに配信されたイベントの数を含みます。

すべてのイベント型が公開されているわけではありません。 {{domxref("PerformanceEventTiming")}} インターフェイスで対応しているイベント型のみカウントを取得することができます。

## 値

{{domxref("EventCounts")}} のマップです。
（読み取り専用の {{jsxref("Map")}} で、`clear()`、`delete()`、`set()` メソッドがありません。）

## 例

### イベント型とその回数の報告

イベント回数をアナリティクスに送信したい場合は、 `sendToEventAnalytics` のような関数を実装して、 `performance.eventCounts` マップからイベント回数を取得し、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用してデータをエンドポイントに送信します。

```js
// 公開されるイベントをすべて報告
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
  // sendToEventAnalytics(type, count);
}

// 特定のイベントの報告
const clickCount = performance.eventCounts.get("click");
// sendToEventAnalytics("click", clickCount);

// ある型に対してイベントカウントが公開されているか調べる
const isExposed = performance.eventCounts.has("mousemove"); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventCounts")}}
- {{domxref("PerformanceEventTiming")}}
- {{jsxref("Map")}}
