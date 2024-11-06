---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMeasure`** は、{{domxref("PerformanceEntry")}} オブジェクトのうち {{domxref("PerformanceEntry.entryType","entryType")}} が "`measure`" であるものの抽象インターフェイスです。この型の項目は、{{domxref("Performance.measure","performance.measure()")}} を呼び出して、ブラウザーのパフォーマンスタイムラインの 2 つのマークの間の*名前付き* {{domxref("DOMHighResTimeStamp")}} (_範囲_) を追加することによって作成されます。

{{InheritanceDiagram}}

## インスタンスプロパティ

このインターフェイスは次のものを定義しています。

- {{domxref("PerformanceMeasure.detail")}}
  - : この範囲に関する任意のメタデータを格納します。

このインターフェイスはプロパティを持ちませんが、以下のようにプロパティを修飾/制約することで以下の {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.entryType")}}
  - : "`measure`" を返します。
- {{domxref("PerformanceEntry.name")}}
  - : 範囲が {{domxref("Performance.measure()","performance.measure()")}} の呼び出しで作成されたときに範囲に付けられた名前を返します。
- {{domxref("PerformanceEntry.startTime")}}
  - : {{domxref("Performance.measure()","performance.measure()")}} が呼び出されたときに範囲に与えられた{{domxref("DOMHighResTimeStamp","タイムスタンプ","",1)}}を返します。
- {{domxref("PerformanceEntry.duration")}}
  - : 範囲の長さである {{domxref("DOMHighResTimeStamp")}} を返します（通常、範囲の終了マークのタイムスタンプから開始マークのタイムスタンプを引いたもの）。

## メソッド

このインターフェイスにはメソッドがありません。

## 例

[ユーザータイミング API の使用](/ja/docs/Web/API/Performance_API/User_timing)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ユーザータイミング（概要）](/ja/docs/Web/API/Performance_API/User_timing)
- [ユーザータイミング API の使用](/ja/docs/Web/API/Performance_API/User_timing)
