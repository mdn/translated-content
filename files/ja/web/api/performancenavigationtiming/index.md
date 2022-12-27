---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

**`PerformanceNavigationTiming`** インターフェイスは、ブラウザーの文書ナビゲーションイベントに関するメトリックを格納および取得するためのメソッドとプロパティを提供します。たとえば、このインターフェイスを使用して、文書のロードまたはアンロードにかかる時間を判断できます。

{{InheritanceDiagram}}

## プロパティ

このインターフェイスは、ナビゲーションパフォーマンスエントリタイプの以下の {{domxref('PerformanceEntry')}} プロパティを次のように限定して制限することで拡張します。

- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : `"navigation"` を返します。
- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : [文書のアドレス](https://dom.spec.whatwg.org/#concept-document-url) を返します。
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : 値 "`0`" を持つ {{domxref("DOMHighResTimeStamp")}} を返します。
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : {{domxref("PerformanceNavigationTiming.loadEventEnd")}} と {{domxref("PerformanceEntry.startTime")}} の各プロパティの差である {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

このインターフェイスは、ナビゲーションパフォーマンスエントリタイプの以下の {{domxref('PerformanceResourceTiming')}} プロパティも、次のように修飾して制約することで拡張します。

- {{domxref('PerformanceResourceTiming.initiatorType')}}{{readonlyInline}}
  - : `"navigation"` を返します。

インターフェイスは以下のプロパティもサポートします。

- {{domxref('PerformanceNavigationTiming.domComplete')}} {{readonlyInline}}
  - : ブラウザーが現在の文書の現在の文書レディネスを*[完了](https://html.spec.whatwg.org/multipage/syntax.html#the-end)*に設定する直前の時間と等しい時間値を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{readonlyInline}}
  - : 現在の文書の [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) イベントが完了した直後の時間と等しい時間値を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{readonlyInline}}
  - : 現在の文書でユーザーエージェントが [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) イベントを起動する直前の時間と等しい時間値を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{readonlyInline}}
  - : ユーザーエージェントが現在の文書の現在の文書の準備状態を [interactive](https://html.spec.whatwg.org/multipage/syntax.html#the-end) に設定する直前の時間に等しい時間値を表す{{domxref("DOMHighResTimeStamp","タイムスタンプ")}}を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{readonlyInline}}
  - : 現在の文書の load イベントが完了した時刻を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{readonlyInline}}
  - : 現在の文書の load イベントが発生する直前の時間と等しい時間値を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{readonlyInline}}
  - : 現在の閲覧コンテキストでの最後のリダイレクト以外のナビゲーション以降のリダイレクト数を表す数値。
    リダイレクトがなかった場合、またはリダイレクトが別のオリジンからのもので、そのオリジンが現在のオリジンにタイミング情報を公開することを許可していない場合、値は 0 になります。
- {{domxref('PerformanceNavigationTiming.requestStart')}} {{readonlyInline}}
  - : ユーザーエージェントがサーバー、または関連するアプリケーションキャッシュから、あるいはローカルリソースからリソースを要求し始める直前の時間を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.responseStart')}} {{readonlyInline}}
  - : ユーザーエージェントの HTTP パーサーが関連するアプリケーションキャッシュ、またはローカルリソースから、あるいはサーバーからレスポンスの最初のバイトを受け取った直後の時間を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.type')}} {{readonlyInline}}
  - : ナビゲーションタイプを表す {{domxref("DOMString","文字列")}}。"`navigate`"、"`reload`"、"`back_forward`"、"`prerender`"のいずれかです。
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{readonlyInline}}
  - : ユーザーエージェントが前の文書の unload イベントを終了した直後の時間と等しい時間値を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{readonlyInline}}
  - : ユーザーエージェントが前の文書の unload イベントを開始する直前の時間と等しい時間値を表す {{domxref("DOMHighResTimeStamp")}}。

## メソッド

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : {{domxref("PerformanceNavigationTiming")}} オブジェクトの JSON 表現である {{domxref("DOMString")}} を返します。

## 仕様書

| 仕様書                                                                                                                                           | 状態                                                 | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | -------- |
| {{SpecName('Navigation Timing Level 2', '#sec-PerformanceNavigationTiming', 'PerformanceNavigationTiming')}} | {{Spec2('Navigation Timing Level 2')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceNavigationTiming")}}

## 関連情報

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
