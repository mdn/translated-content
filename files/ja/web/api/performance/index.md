---
title: Performance
slug: Web/API/Performance
---

{{APIRef("High Resolution Time")}}

**`Performance`** インターフェイスは、現在のページのパフォーマンス関連情報へのアクセスを提供します。これは High Resolution Time API の一部ですが、Performance Timeline API、Navigation Timing API、User Timing API、および Resource Timing API によって拡張されています。

このタイプのオブジェクトは読み取り専用属性 {{domxref("window.performance")}} を呼び出すことで取得できます。

> **メモ:** このインターフェイスとそのメンバーは、以下に示されている場合を除き、[Web Workers](/ja/docs/Web/API/Web_Workers_API) で利用可能です。 パフォーマンスマーカーと測定値はコンテキストごとにあることにも注意してください。メインスレッド (または他のワーカー) にマークを作成した場合、それを Worker スレッドには表示できません (その逆も同様)。

## プロパティ

_`Performance` インターフェイスはプロパティを継承しません。_

- {{deprecated_inline}} {{domxref("performance.navigation")}} {{readonlyInline}}
  - : ページがロードかリフレッシュか、リダイレクトの発生回数など、`timing` にリストされている時間に含まれる操作に関する有用なコンテキストを提供するレガシー {{domxref("PerformanceNavigation")}} オブジェクト。Worker では利用できません。
- {{deprecated_inline}} {{domxref("performance.timing")}} {{readonlyInline}}
  - : 待ち時間関連のパフォーマンス情報を含むレガシー {{domxref("PerformanceTiming")}} オブジェクト。Worker には利用できません。
- {{domxref("performance.memory", "performance.memory")}} {{Non-standard_inline}}
  - : Chrome で追加された*非標準の*拡張子で、このプロパティは基本的なメモリ使用量情報を持つオブジェクトを提供します。_この非標準の API を**使うべきではありません**_。
- {{domxref("performance.timeOrigin")}} {{readonlyInline}} {{Non-standard_inline}}
  - : パフォーマンス測定の開始時刻のハイレゾリューションタイムスタンプを返します。

## メソッド

_`Performance` インターフェイスはメソッドを継承しません。_

- {{domxref("performance.clearMarks()")}}
  - : ブラウザーのパフォーマンスエントリバッファから指定された*マーク*を削除します。
- {{domxref("performance.clearMeasures()")}}
  - : ブラウザーのパフォーマンスエントリバッファから指定された*数値*を削除します。
- {{domxref("performance.clearResourceTimings()")}}
  - : ブラウザーのパフォーマンスデータバッファから "`resource`" の {{domxref("PerformanceEntry.entryType","entryType")}} を持つすべての {{domxref("PerformanceEntry","performance entries")}} を削除します。
- {{domxref("performance.getEntries()")}}
  - : 与えられた*フィルタ*に基づく {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("performance.getEntriesByName()")}}
  - : 指定された*名前*と*エントリタイプ*に基づいて {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("performance.getEntriesByType()")}}
  - : 与えられた*エントリタイプ*の {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。
- {{domxref("performance.mark()")}}
  - : 指定された名前でブラウザーの*パフォーマンスエントリバッファ*に{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を作成します。
- {{domxref("performance.measure()")}}
  - : 指定された 2 つのマーク (それぞれ*開始マーク*と*終了マーク*と呼ばれる) の間に、ブラウザーのパフォーマンスエントリバッファ内に名前付き{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を作成します。
- {{domxref("performance.now()")}}
  - : 参照時点から経過したミリ秒数を表す {{domxref("DOMHighResTimeStamp")}} を返します。
- {{domxref("performance.setResourceTimingBufferSize()")}}
  - : ブラウザーのリソースタイミングバッファサイズを、指定された数の "`resource`" {{domxref("PerformanceEntry.entryType","タイプ")}} {{domxref("PerformanceEntry","パフォーマンスエントリ")}} オブジェクトに設定します。
- {{domxref("performance.toJSON()")}}
  - : `Performance` オブジェクトを表す json オブジェクトを返す jsonizer です。

## イベント

`addEventListener()` を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナを割り当てることで、イベントを監視します。

- [`resourcetimingbufferfull`](/ja/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : ブラウザーの[リソースタイミングバッファ](/ja/docs/Web/API/Performance/setResourceTimingBufferSize)がいっぱいになったときに発生します。[`onresourcetimingbufferfull`](/ja/docs/Web/API/Performance/onresourcetimingbufferfull) プロパティからも利用できます。

## 仕様書

| 仕様書                                                                                                                                                     | ステータス                                               | コメント                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Highres Time Level 2', '#the-performance-interface', 'toJSON()')}}                                                 | {{Spec2('Highres Time Level 2')}}             | `toJson()` メソッドを定義します。                                                                                                  |
| {{SpecName('Highres Time', '#the-performance-interface', 'Performance')}}                                                         | {{Spec2('Highres Time')}}                         | `now()` メソッドを定義します。.                                                                                                    |
| {{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance')}}                                         | {{Spec2('Navigation Timing')}}                 | `timing` と `navigation` プロパティを定義します。                                                                                  |
| {{SpecName('Performance Timeline Level 2', '#extensions-to-the-performance-interface', 'Performance extensions')}} | {{Spec2('Performance Timeline Level 2')}} | `getEntries()` インターフェイスを変更します。                                                                                      |
| {{SpecName('Performance Timeline', '#sec-window.performance-attribute', 'Performance extensions')}}                     | {{Spec2('Performance Timeline')}}             | `getEntries()`、`getEntriesByType()` および `getEntriesByName()` メソッドを定義します。                                            |
| {{SpecName('Resource Timing', '#extensions-performance-interface', 'Performance extensions')}}                             | {{Spec2('Resource Timing')}}                     | `clearResourceTimings()` と `setResourceTimingBufferSize()` メソッド、そして `onresourcetimingbufferfull` プロパティを定義します。 |
| {{SpecName('User Timing Level 2', '#extensions-performance-interface', 'Performance extensions')}}                     | {{Spec2('User Timing Level 2')}}             | `mark()`、`clearMark()`、`measure()` および `clearMeasure()` インターフェイスを明確にします。                                      |
| {{SpecName('User Timing', '#extensions-performance-interface', 'Performance extensions')}}                                 | {{Spec2('User Timing')}}                         | `mark()`, `clearMark()`, `measure()` および `clearMeasure()` インターフェイスを定義します。                                        |

## ブラウザーの互換性

{{Compat("api.Performance")}}
