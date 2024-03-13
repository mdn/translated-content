---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

**`TaskAttributionTiming`** インターフェイスは、長いタスクに関連する作業とそれに関連するフレームコンテキストに関する情報を返します。フレームコンテキストはコンテナーとも呼ばれ、長いタスクに関わる iframe、embed、object のことです。

通常、 `TaskAttributionTiming` オブジェクトを使って作業するのは、[長いタスク](/ja/docs/Web/API/PerformanceLongTaskTiming) を監視するときです。

`TaskAttributionTiming` は {{domxref("PerformanceEntry")}} を継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

このインターフェイスは、イベントタイミングパフォーマンス項目の以下の {{domxref("PerformanceEntry")}} プロパティを以下のように修飾して拡張します。

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスでは `duration` は適用されないので、常に `0` を返します。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 常に `taskattribution` を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 常の `"unknown"` を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 常の `0` を返します。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxref('TaskAttributionTiming.containerType')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : フレームコンテナーの種類（`iframe`、`embed`、`object` のいずれか）を返します。
- {{domxref('TaskAttributionTiming.containerSrc')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コンテナーの `src` 属性を返します。
- {{domxref('TaskAttributionTiming.containerId')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コンテナーの `id` 属性を返します。
- {{domxref('TaskAttributionTiming.containerName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コンテナーの `name` 属性を返します。

## インスタンスメソッド

- {{domxref("TaskAttributionTiming.toJSON()")}} {{Experimental_Inline}}
  - : `TaskAttributionTiming` オブジェクトの JSON 表現を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceLongTaskTiming")}}
