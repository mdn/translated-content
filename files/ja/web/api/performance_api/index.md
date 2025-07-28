---
title: パフォーマンス API
slug: Web/API/Performance_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

パフォーマンス API は、ウェブアプリケーションのパフォーマンスを測定するために使用される一連の規格です。

## 概念と使用方法

ウェブアプリケーションを高速に動作させるためには、さまざまなパフォーマンス指標を測定・分析することが重要です。パフォーマンス API は、重要な組み込み指標と、ブラウザーのパフォーマンスタイムラインに自分自身で測定値を追加する機能を提供します。パフォーマンスタイムラインには高精度のタイムスタンプが含まれ、開発者ツールで表示することができます。また、このデータを分析エンドポイントに送信して、パフォーマンス指標を時刻とともに記録することもできます。

それぞれのパフォーマンス指標は単一の {{domxref("PerformanceEntry")}} で表されます。パフォーマンス項目には `name`, `duration`, `startTime`, そして `type` があります。すべてのパフォーマンス指標は `PerformanceEntry` インターフェイスを拡張し、さらにそれを修飾しています。

パフォーマンス項目のほとんどは、何もしなくても記録され、{{domxref("Performance.getEntries()")}} または {{domxref("PerformanceObserver")}} からアクセスできます。例えば、 {{domxref("PerformanceEventTiming")}} の項目は、設定された閾値より時間がかかるイベントに対して記録されます。しかし、パフォーマンス API では {{domxref("PerformanceMark")}} や {{domxref("PerformanceMeasure")}} インターフェイスを使用して、自分自身でカスタムイベントを定義したり記録したりすることも可能です。

主となる {{domxref("Performance")}} インターフェイスは {{domxref("Window.performance", "Window")}} および {{domxref("WorkerGlobalScope.performance", "Worker")}} グローバルスコーの両方にあり、独自のパフォーマンス項目を追加したり、パフォーマンス項目をクリアしたり、パフォーマンス項目を取得したりすることが可能です。

このインターフェイスでは、さまざまな種類のパフォーマンス項目が記録されるときに、それを待ち受けするために使用することができます。

より概念的な情報については、下記の[パフォーマンス API ガイド](#ガイド)を参照してください。

![パフォーマンス API の UML 図](diagram.svg)

## リファレンス

パフォーマンス API には、以下のインターフェイスが存在します。

- {{domxref("EventCounts")}}
  - : {{domxref("performance.eventCounts")}} によって返される、イベント種別毎に発送されたイベント数を保持する読み取り専用のマップです。
- {{domxref("LargestContentfulPaint")}}
  - : ビューポート内に表示される最大の画像またはテキストブロックのレンダリング時間を、ページの最初の読み込みを開始した時点から記録して測定します。
- {{domxref("LayoutShift")}}
  - : ページ上の要素の動きに基づいて、ウェブページのレイアウトの安定性に関する調査結果を提供します。
- {{domxref("LayoutShiftAttribution")}}
  - : シフトした要素に関するデバッグ情報を提供します。
- {{domxref("NotRestoredReasonDetails")}}
  - : ナビゲートされたページが、後方/前方キャッシュ ({{Glossary("bfcache")}}) を使用できない単一の理由を表します。
- {{domxref("NotRestoredReasons")}}
  - : ナビゲートされたページが、後方/前方キャッシュ ({{Glossary("bfcache")}}) を使用できない理由を含むレポートデータを提供します。
- {{domxref("Performance")}}
  - : パフォーマンス測定にアクセスするためのメインインターフェイスです。ウィンドウとワーカーのコンテキストで {{domxref("Window.performance")}} または {{domxref("WorkerGlobalScope.performance")}} を使用することで利用することができます。
- {{domxref("PerformanceElementTiming")}}
  - : 特定の要素のレンダリングタイムスタンプを測定します。
- {{domxref("PerformanceEntry")}}
  - : 単一のパフォーマンス指標をカプセル化したパフォーマンスタイムライン上の項目です。すべてのパフォーマンス指標はこのインターフェイスを継承します。
- {{domxref("PerformanceEventTiming")}}
  - : イベントの遅延時間と {{Glossary("Interaction to Next Paint")}} (INP) を測定します。
- {{domxref("PerformanceLongAnimationFrameTiming")}}
  - : レンダリングを専有し、他のタスクの実行を妨げる[長時間アニメーションフレーム (LoAF)](/ja/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) に関する指標を提供します。
- {{domxref("PerformanceLongTaskTiming")}}
  - : レンダリングを専有し、他のタスクの実行を妨げる[長時間のタスク](/ja/docs/Glossary/Long_task)に関する指標を提供します。
- {{domxref("PerformanceMark")}}
  - : パフォーマンスタイムライン上に自分自身で記入するためのカスタムマーカー。
- {{domxref("PerformanceMeasure")}}
  - : 2 つのパフォーマンス項目間の時刻をカスタム測定します。
- {{domxref("PerformanceNavigationTiming")}}
  - : 文書を読み込むのにかかる時間など、文書内のナビゲーションイベントを測定します。
- {{domxref("PerformanceObserver")}}
  - : パフォーマンスタイムラインに記録される新しいパフォーマンス項目を待ち受けします。
- {{domxref("PerformanceObserverEntryList")}}
  - : パフォーマンスオブザーバーで観測された項目のリスト。
- {{domxref("PerformancePaintTiming")}}
  - : ウェブページ構築時のレンダリング処理を測定します。
- {{domxref("PerformanceResourceTiming")}}
  - : 画像、スクリプト、フェッチ呼び出しなどのリソースのリダイレクト開始・終了時刻、フェッチ開始時刻、 DNS ルックアップ開始・終了時刻、レスポンス開始・終了時刻などのネットワーク負荷の指標を測定します。
- {{domxref("PerformanceScriptTiming")}}
  - : [長時間アニメーションフレーム (LoAF)](/ja/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) の発生原因となる個々のスクリプトに関する指標を提供します。
- {{domxref("PerformanceServerTiming")}}
  - : HTTP の {{HTTPHeader("Server-Timing")}} ヘッダーのレスポンスで送られてくるサーバー指標を示します。
- {{domxref("TaskAttributionTiming")}}
  - : タスクの種類と、長時間のタスクを担当するコンテナーを特定します。
- {{domxref("VisibilityStateEntry")}}
  - : ページの可視状態が変化した時点を測定します。例えば、タブがフォアグラウンドからバックグラウンド、またはその逆に切り替わった時点です。

## ガイド

以下のガイドは、パフォーマンス API の主要な概念を理解し、その能力の概要を提供するのに役立つでしょう。

- [パフォーマンスデータ](/ja/docs/Web/API/Performance_API/Performance_data): パフォーマンスデータの収集、アクセス、作業を行います。
- [高精度タイミング](/ja/docs/Web/API/Performance_API/High_precision_timing): 高精度な時刻及びモノトニック時計を測定します。
- [リソースタイミング](/ja/docs/Web/API/Performance_API/Resource_timing): 画像、CSS、JavaScript などの取得したリソースのネットワークタイミングを測定します。
- [ナビゲーションタイミング](/ja/docs/Web/API/Performance_API/Navigation_timing): 文書内のナビゲーションのタイミングを測定します。
- [ユーザータイミング](/ja/docs/Web/API/Performance_API/User_timing): 自分のアプリケーションに合わせたパフォーマンスデータの測定と記録を行います。
- [サーバータイミング](/ja/docs/Web/API/Performance_API/Server_timing): サーバー側の指標を収集します。
- [長時間アニメーションフレームタイミング](/ja/docs/Web/API/Performance_API/Long_animation_frame_timing): 長時間アニメーションフレーム (LoAF) とその発生要因に関するメトリクスを収集します。
- [bfcache のブロック理由の監視](/ja/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): 現在の文書がバック/フォワードキャッシュ ({{Glossary("bfcache")}}) の使用をブロックされた理由を報告します。

## 仕様書

{{Specifications}}

## 関連情報

- [ウェブパフォーマンス](/ja/docs/Web/Performance)
- [学習: ウェブパフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance)
