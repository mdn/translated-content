---
title: Time to interactive (対話時間)
slug: Glossary/Time_to_interactive
---

**対話時間 (TTI)** は、最後の[ロングタスク](/ja/docs/Web/API/Long_Tasks_API)が終了し、その後 5 秒間のネットワークとメインスレッドの非アクティブ状態が続いた時点として定義される、標準化されていない Web パフォーマンスの「進行状況」メトリクスです。

2018 年に Web Incubator Community Group によって提案された TTI は、ページまたはアプリケーションに有用なコンテンツが含まれ、メインスレッドがアイドル状態になり、イベントハンドラの登録など、ユーザの操作に自由にレスポンスできるようになるメトリクスを提供します。

#### 警告:

TTI は、{{domxref("Long Tasks API")}} からの情報を利用して導出されます。一部のパフォーマンス監視ツールで利用可能ですが、TTI は執筆時点で公式の Web 仕様の一部ではありません。

## あわせて参照

- Web Incubator Community Group からの [TTI の定義](https://github.com/WICG/time-to-interactive)
- [Time to Interactive — focusing on human-centric metrics](https://building.calibreapp.com/time-to-interactive-focusing-on-the-human-centric-metrics-22eb7e64dd23) by Radimir Bitsov
- [Tracking TTI](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#tracking_tti)
