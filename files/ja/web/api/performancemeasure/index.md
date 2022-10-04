---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
---

{{APIRef("User Timing API")}}

**`PerformanceMeasure`** は、"`measure`" の {{domxref("PerformanceEntry.entryType","entryType")}} を持つ{{domxref("PerformanceEntry")}} オブジェクトの抽象インターフェイスです。このタイプのエントリは、{{domxref("Performance.measure","performance.measure()")}} を呼び出して、ブラウザーのパフォーマンスタイムラインの 2 つのマークの間に*名前付き* {{domxref("DOMHighResTimeStamp")}} (_measure_) を追加することによって作成されます。

{{InheritanceDiagram}}

## プロパティ

このインターフェイスはプロパティを持ちませんが、以下のようにプロパティを修飾/制約することで以下の {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.entryType")}}
  - : "`measure`" を返します。
- {{domxref("PerformanceEntry.name")}}
  - : メジャーが{{domxref("Performance.measure()","performance.measure()")}}の呼び出しで作成されたときにメジャーに付けられた名前を返します。
- {{domxref("PerformanceEntry.startTime")}}
  - : {{domxref("Performance.measure()","performance.measure()")}} が呼び出されたときにメジャーに与えられた{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を返します。
- {{domxref("PerformanceEntry.duration")}}
  - : 小節の長さである {{domxref("DOMHighResTimeStamp")}} を返します (通常、小節の終了マークのタイムスタンプから開始マークのタイムスタンプを引いたもの)。

## メソッド

このインターフェイスにはメソッドがありません。

## 例

[ユーザータイミング API の使用](/Web/API/User_Timing_API/Using_the_User_Timing_API)の例を参照してください。

## 仕様書

| 仕様書                                                                                                           | ステータス                                   | コメント     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------ |
| {{SpecName('User Timing Level 2', '#dom-performance-measure', 'PerformanceMeasure')}} | {{Spec2('User Timing Level 2')}} |              |
| {{SpecName('User Timing', '#performancemeasure', 'PerformanceMeasure')}}                 | {{Spec2('User Timing')}}             | 基本的な定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceMeasure")}}

## あわせて参照

- [User Timing (Overview)](/Web/API/User_Timing_API)
- [Using the User Timing API](/Web/API/User_Timing_API/Using_the_User_Timing_API)
