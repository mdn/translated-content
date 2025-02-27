---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceObserver`** インターフェイスは、パフォーマンス測定イベントを監視し、ブラウザーのパフォーマンスタイムラインに記録されるものとして、新しい{{domxref("PerformanceEntry","パフォーマンス項目", '', 'true')}}の通知を受けるために使用されます。

## コンストラクター

- {{domxref("PerformanceObserver.PerformanceObserver","PerformanceObserver()")}}
  - : 新しい `PerformanceObserver` オブジェクトを作成して返します。

## 静的プロパティ

- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} {{ReadOnlyInline}}
  - : ユーザーエージェントが対応している {{domxref("PerformanceEntry.entryType","entryType")}} 値の配列を返します。

## インスタンスメソッド

- {{domxref("PerformanceObserver.observe","PerformanceObserver.observe()")}}
  - : 観測する項目型を設定します。パフォーマンスオブザーバーのコールバック関数は、指定した `entryTypes` のいずれかにパフォーマンス項目が記録されたときに呼び出されます。
- {{domxref("PerformanceObserver.disconnect","PerformanceObserver.disconnect()")}}
  - : パフォーマンスオブザーバーコールバックがパフォーマンス項目を受け取るのを停止します。
- {{domxref("PerformanceObserver.takeRecords","PerformanceObserver.takeRecords()")}}
  - : パフォーマンスオブザーバーに格納されているパフォーマンス項目の現在のリストを空にして返します。

## 例

### PerformanceObserver の作成

次の例では、 "mark" ({{domxref("PerformanceMark")}}) および "measure" ({{domxref("PerformanceMeasure")}}) イベントを監視する `PerformanceObserver` を作成します。
`perfObserver` コールバックは `list` ({{domxref("PerformanceObserverEntryList")}}) を提供し、監視しているパフォーマンス項目を取得することができます。

```js
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

## 関連情報

- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
