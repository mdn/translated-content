---
title: Long Tasks API
slug: Web/API/Long_Tasks_API
---

{{DefaultAPISidebar("Long Tasks")}}

## 動機

実験的な Long Tasks API（長いタスク API）により、50 ミリ秒以上かかるタスクを可視化できます。 50 ミリ秒のしきい値は、[RAIL モデル](https://developers.google.com/web/fundamentals/performance/rail)、特に「[Response: process events in under 50ms](https://developers.google.com/web/fundamentals/performance/rail#response)（応答: 50 ミリ秒未満でイベントを処理、英語版を参照のこと）」のセクションから来ています。

50 ミリ秒以上メインスレッドをブロックするタスクは、次のような問題があります。

- 「{{glossary("Time to interactive","対話までの時間")}}」の遅延
- 高/可変入力待ち時間
- 高/可変イベント処理待ち時間
- ぎくしゃくしたアニメーションとスクロール

## 概念

Long Tasks API によって使用されるいくつかの重要な用語またはアイデア。

### 長いタスク

メイン UI スレッドが 50 ミリ秒以上ビジーである継続期間。 一般的な例は次のとおりです。

- 長期実行イベントハンドラ
- 高価なリフローやその他の再レンダリング
- 50 ミリ秒を超えるイベントループの異なるターンの間にブラウザーが実行する作業

### 犯人の閲覧コンテキストコンテナ

「犯人の閲覧コンテキストコンテナ（Culprit browsing context container）」、または略して「コンテナ」は、タスクが発生した最上位ページ、iframe、embed、object です。

### 帰属（Attributions）

タスクが発生したコンテナのリスト。 トップレベルページ内で発生しないタスクの場合、`containerId`、`containerName`、`containerSrc` の各フィールドは、タスクのソースに関する情報を提供することがあります。

## 使用法

```js
var observer = new PerformanceObserver(function(list) {
    var perfEntries = list.getEntries();
    for (var i = 0; i < perfEntries.length; i++) {
        // 長いタスク通知を処理します
        // 分析とモニタリングについて報告する
        // ...
    }
});
// 長いタスク通知用のオブザーバーを登録する
observer.observe({entryTypes: ["longtask"]});
// この後スクリプトを長時間実行すると、オブザーバー内で
// "longtask" エントリがキューに入れられ、受信されます。
```

## インターフェイス

- {{domxref('PerformanceLongTaskTiming')}}
  - : 長いタスクのインスタンスを報告します。
- {{domxref("TaskAttributionTiming")}}
  - : 長いタスクに関連する作業とそれに関連するフレームコンテキストに関する情報を返します。

## 仕様

| 仕様                                 | 状態                             | コメント |
| ------------------------------------ | -------------------------------- | -------- |
| {{SpecName('Long Tasks')}} | {{Spec2('Long Tasks')}} | 初期定義 |

## ブラウザーの互換性

### `PerformanceLongTaskTiming`

{{Compat("api.PerformanceLongTaskTiming")}}

### `TaskAttributionTiming`

{{Compat("api.TaskAttributionTiming")}}

## 関連情報

- [GitHub リポジトリ](https://github.com/w3c/longtasks)にはドキュメントといくつかのコードサンプルが含まれています。
- 2017 年 12 月 20 日の Long Tasks API に関する [PerfPlanet の記事](https://calendar.perfplanet.com/2017/tracking-cpu-with-long-tasks-api/)。
