---
title: PerformanceFrameTiming
slug: orphaned/Web/API/PerformanceFrameTiming
original_slug: Web/API/PerformanceFrameTiming
---

{{APIRef("Frame Timing API")}}{{SeeCompatTable}}**`PerformanceFrameTiming`** は、ブラウザーのイベントループに関するフレームタイミングデータを提供する抽象インターフェイスです。 フレームは、DOM イベントの処理、サイズ変更、スクロール、レンダリング、CSS アニメーションなど、[1 つのイベントループ](https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8)でブラウザーが実行する作業量を表します。60 Hz のリフレッシュレートに対して 60 fps (フレーム/秒) のフレームレートは、応答性の良いユーザーエクスペリエンスの目標です。これはブラウザーが約 16.7 ms でフレームを処理するはずであることを意味します。

アプリケーションは、"`frame`" {{domxref("PerformanceEntry","パフォーマンスエントリタイプ")}}に {{domxref("PerformanceObserver")}} を登録することができます。オブザーバーは各フレームイベントの期間に関するデータを取得できます。この情報は、優れたユーザーエクスペリエンスを提供するのに時間がかかりすぎる領域を特定するのに役立ちます。

{{InheritanceDiagram}}

## プロパティ

このインターフェイスにはプロパティはありませんが、次のようにプロパティを修飾および制約することで、次の {{domxref("PerformanceEntry")}} プロパティ ("`frame`" {{domxref ("PerformanceEntry.entryType","performance entry types")}} 用) を拡張します。

- {{domxref("PerformanceEntry.entryType")}}
  - : "`frame`" を返します。
- {{domxref("PerformanceEntry.name")}}
  - : [ドキュメントのアドレス](https://dom.spec.whatwg.org/#concept-document-url)を返します。
- {{domxref("PerformanceEntry.startTime")}}
  - : フレームが開始されたときに {{domxref("DOMHighResTimeStamp","タイムスタンプ")}} を返します。
- {{domxref("PerformanceEntry.duration")}}
  - : 連続する 2 つのフレームの `startTime` 間の差を示す {{domxref("DOMHighResTimeStamp","タイムスタンプ")}} を返します。

## メソッド

このインターフェイスにはメソッドがありません。

## 例

[フレームタイミング API の使用](/ja/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)の例を参照してください。

## 仕様書

| 仕様書                                                                                                           | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Frame Timing', '#performancereframetiming', 'PerformanceFrameTiming')}} | {{Spec2('Frame Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceFrameTiming")}}

## あわせて参照

- {{domxref("PerformanceObserver")}}
- [フレームレート (Firefox パフォーマンスツール)](/ja/docs/Tools/Performance/Frame_rate)
- [フレームタイミング (概要)](/ja/docs/Web/API/Frame_Timing_API)
- [フレームタイミング API の使用](/ja/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
