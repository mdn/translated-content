---
title: PerformanceMark
slug: Web/API/PerformanceMark
---

{{APIRef("User Timing API")}}

**`PerformanceMark`** は {{domxref("PerformanceEntry.entryType","entryType")}} の "`mark`" を持つ{{domxref("PerformanceEntry")}} オブジェクトの抽象インターフェイスです。
このタイプのエントリは、{{domxref("Performance.mark","performance.mark()")}} を呼び出して、ブラウザーの*パフォーマンスタイムライン*に*名前付き* {{domxref("DOMHighResTimeStamp")}} (_mark_) を追加することによって作成されます。

{{InheritanceDiagram}}

## プロパティ

このインターフェイスはプロパティを持ちませんが、以下のようにプロパティを修飾/制約することで以下の {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.entryType")}}
  - : "`mark`" を返します。
- {{domxref("PerformanceEntry.name")}}
  - : マークが{{domxref("Performance.mark()","performance.mark()")}} を呼び出して作成されたときに付けられた名前を返します。
- {{domxref("PerformanceEntry.startTime")}}
  - : {{domxref("Performance.mark()","performance.mark()")}} が呼び出されたときに {{domxref("DOMHighResTimeStamp")}} を返します。
- {{domxref("PerformanceEntry.duration")}}
  - : "`0`" を返します (マークには*期間*がありません)

## メソッド

このインターフェイスにはメソッドがありません。

## 例

[ユーザータイミング API の使用](/Web/API/User_Timing_API/Using_the_User_Timing_API)の例を参照してください。

## 仕様書

| 仕様書                                                                                               | ステータス                                   | コメント     |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------ |
| {{SpecName('User Timing Level 2', '#performancemark', 'PerformanceMark')}} | {{Spec2('User Timing Level 2')}} |              |
| {{SpecName('User Timing', '#performancemark', 'PerformanceMark')}}             | {{Spec2('User Timing')}}             | 基本的な定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceMark")}}

## あわせて参照

- [User Timing (Overview)](/Web/API/User_Timing_API)
- [Using the User Timing API](/Web/API/User_Timing_API/Using_the_User_Timing_API)
