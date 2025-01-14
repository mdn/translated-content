---
title: Time to interactive (対話までの時間)
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 423bcae3e72a30248fdb446b0b036d4cb5df47b1
---

{{GlossarySidebar}}

**対話までの時間 (TTI)** は、ウェブパフォーマンスの標準外の 'progress' メトリクスで、最後の[長いタスク](/ja/docs/Web/API/PerformanceLongTaskTiming)が終了し、その後 5 秒間のネットワークとメインスレッドの非アクティブ状態が続いた時点として定義されています。

TTI は 2018 年に Web Incubator Community Group によって提案されたもので、ページまたはアプリケーションに有用なコンテンツが含まれ、メインスレッドがアイドル状態になり、イベントハンドラーの登録など、ユーザーの操作に自由に応答できるようになるメトリクスを提供します。

#### 警告

TTI は、{{domxref("Long Tasks API", "長いタスク API", "", 1)}} の情報を活用して導き出されています。 TTI はいくつかのパフォーマンス監視ツールで利用できますが、執筆時点では、どの公式ウェブ仕様にも属していません。

## 関連情報

- Web Incubator Community Group における [TTI の定義](https://github.com/WICG/time-to-interactive)
- [Time to Interactive — focusing on human-centric metrics](https://calibreapp.com/blog/time-to-interactive) by Radimir Bitsov
- [Tracking TTI](https://web.dev/user-centric-performance-metrics/#tracking_tti)
