---
title: Navigation Timing API
slug: Web/API/Performance_API/Navigation_timing
---

{{DefaultAPISidebar("Navigation Timing")}}

**Navigation Timing API** は、ウェブサイトのパフォーマンス計測に使用できるデータを提供します。同じ目的に使用される他の JavaScript ベースの機構と異なり、この API はエンドツーエンドのさらに役立つ正確な遅延データを提供できます。

以下の例は、知覚できる読み込み時間の計測方法です:

```
function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
}
```

数ミリ秒の間に多くの計測イベントが発生し、これらは {{domxref("PerformanceTiming")}} インターフェイスを通してアクセスできます。以下は発生順のイベントリストです:

- navigationStart
- unloadEventStart
- unloadEventEnd
- redirectStart
- redirectEnd
- fetchStart
- domainLookupStart
- domainLookupEnd
- connectStart
- connectEnd
- secureConnectionStart
- requestStart
- responseStart
- responseEnd
- domLoading
- domInteractive
- domContentLoadedEventStart
- domContentLoadedEventEnd
- domComplete
- loadEventStart
- loadEventEnd

`window.performance.navigation` オブジェクトは 2 個の属性を格納しており、ページの読み込みが何によって起こされたか (リダイレクト、戻る・進むボタン、通常の URL 読み込み) を知るために使用します。

window\.performance.navigation.type:

| 定数                | 値  | 説明                                                                                                                                                                                                                  |
| ------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TYPE_NAVIGATE`     | 0   | リンクのクリックにより開始されたナビゲーション、ユーザーエージェントのアドレスバーへの URL 入力、フォーム送信、または下記の TYPE_RELOAD および TYPE_BACK_FORWARD の使用によるもの以外のスクリプト操作を通した初期化。 |
| `TYPE_RELOAD`       | 1   | 再読み込み操作を通したナビゲーションまたは location.reload() メソッド。                                                                                                                                               |
| `TYPE_BACK_FORWARD` | 2   | 履歴をたどる操作を通したナビゲーション。 Navigation through a history traversal operation.                                                                                                                            |
| `TYPE_UNDEFINED`    | 255 | 上記に定義されていない形式の任意のナビゲーション。                                                                                                                                                                    |

`window.performance.navigation.redirectCount` は、リダイレクトが発生した場合の、最終的なページへ到達するまでの間のリダイレクト数を示します。

Navigation Timing API は、クライアント側でパフォーマンスデータを収集して XHR 経由でサーバーへ送信することに使用できます。また、前のページのアンロード時間やドメインの検索時間、window\.onload の合計時間など、計測が困難なデータの計測に使用できます。

## 例

ページの読み込みに必要な合計時間を計算します:

```
var perfData = window.performance.timing;
var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
```

リクエストの応答時間を計算します:

```
var connectTime = perfData.responseEnd - perfData.requestStart;
```

### 仕様

- <https://w3c.github.io/navigation-timing/>

## ブラウザーの実装状況

{{Compat}}
