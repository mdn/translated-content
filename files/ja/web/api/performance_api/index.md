---
title: パフォーマンス API
slug: Web/API/Performance_API
---

{{DefaultAPISidebar("Performance API")}}

パフォーマンス API は、ウェブアプリケーションのパフォーマンスを測定するために使用される一連の規格です。

## 概念と使用方法

ウェブアプリケーションを高速に動作させるためには、さまざまなパフォーマンス指標を測定・分析することが重要です。パフォーマンス API は、重要な組み込み指標と、ブラウザーのパフォーマンスタイムラインに自分自身で測定値を追加する機能を提供します。パフォーマンスタイムラインには高精度のタイムスタンプが含まれ、開発者ツールで表示することができます。また、このデータを分析エンドポイントに送信して、パフォーマンス指標を時刻とともに記録することもできます。

それぞれのパフォーマンス指標は単一の {{domxref("PerformanceEntry")}} で表されます。パフォーマンス項目には `name`, `duration`, `startTime`, そして `type` があります。すべてのパフォーマンス指標は `PerformanceEntry` インターフェイスを拡張し、さらにそれを修飾しています。

パフォーマンス項目のほとんどは、何もしなくても記録され、{{domxref("Performance.getEntries()")}} または {{domxref("PerformanceObserver")}} からアクセスできます。例えば、 {{domxref("PerformanceEventTiming")}} の項目は、設定された閾値より時間がかかるイベントに対して記録されます。しかし、パフォーマンス API では {{domxref("PerformanceMark")}} や {{domxref("PerformanceMeasure")}} インターフェイスを使用して、自分自身でカスタムイベントを定義したり記録したりすることも可能です。

主となる {{domxref("Performance")}} インターフェイスは {{domxref("performance_property", "self.performance")}} を使用して各グローバルで使用でき、独自のパフォーマンス項目を追加したり、パフォーマンス項目をクリアしたり、パフォーマンス項目を取得したりすることが可能です。

このインターフェイスでは、さまざまな種類のパフォーマンス項目が記録されるときに、それを待ち受けするために使用することができます。

![パフォーマンス API の UML 図](diagram.svg)

## インターフェイス

- {{domxref("EventCounts")}}
  - : {{domxref("performance.eventCounts")}} によって返される、イベント種別毎に発送されたイベント数を保持する読み取り専用のマップです。
- {{domxref("LargestContentfulPaint")}}
  - : ビューポート内に表示される最大の画像またはテキストブロックのレンダリング時間を、ページの最初の読み込みを開始した時点から記録して測定します。
- {{domxref("Performance")}}
  - : パフォーマンス測定にアクセスするためのメインインターフェイスです。ウィンドウとワーカーのコンテキストで {{domxref("performance_property", "self.performance")}} を使用することで利用することができます。
- {{domxref("PerformanceElementTiming")}}
  - : 特定の要素のレンダリングタイムスタンプを測定します。
- {{domxref("PerformanceEntry")}}
  - : 単一のパフォーマンス指標をカプセル化したパフォーマンスタイムライン上の項目です。すべてのパフォーマンス指標はこのインターフェイスを継承します。
- {{domxref("PerformanceEventTiming")}}
  - : イベントの遅延時間、最初の入力遅延 (FID) を測定します。
- {{domxref("PerformanceLongTaskTiming")}}
  - : レンダリングを占有し、他のタスクの実行を妨害する長時間のタスクを検出します。
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
- {{domxref("PerformanceServerTiming")}}
  - : HTTP の {{HTTPHeader("Server-Timing")}} ヘッダーのレスポンスで送られてくるサーバー指標を示します。
- {{domxref("TaskAttributionTiming")}}
  - : タスクの種類と、長時間のタスクを担当するコンテナーを特定します。

## ガイドとチュートリアル

- [パフォーマンス API の使用](/ja/docs/Web/API/Performance_API/Using_the_Performance_API)
- [パフォーマンスタイムラインの使用](/ja/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
- [ユーザータイミング API の使用](/ja/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
- [ナビゲーションタイミング API の使用](/ja/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing)
- [リソースタイミング API の使用](/ja/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)

## 仕様書

{{Specifications}}

## 関連情報

- [ウェブパフォーマンス](/ja/docs/Web/Performance)
- [学習: ウェブパフォーマンス](/ja/docs/Learn/Performance)
