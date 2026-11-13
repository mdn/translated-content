---
title: First Input Delay (FID)
slug: Glossary/First_input_delay
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

First Input Delay (FID) は、ユーザーがサイトに対して最初に行った操作 (リンクのクリック、ボタンのタップ、JavaScript で実装されたカスタムコントロールの操作など) から、ブラウザーがその操作に実際に応答できるようになるまでにかかる時間を測定する指標です。

> [!WARNING]
> FID は Google によって [Core Web Vitals](https://web.dev/articles/vitals) の指標の 1 つとして設計されましたが、[2024 年 5 月](https://web.dev/blog/inp-cwv-launch)に {{Glossary("Interaction to Next Paint")}} (INP) へ置き換えられました。

FID は、ウェブページ上で発生した最初のユーザー操作から、その操作に対するブラウザーの応答までの時間 (ミリ秒) を表します。スクロールやズーム操作は、この指標には含まれません。

コンテンツがページに描画されてから、すべての機能が人間の操作に反応できるようになるまでの時間は、メインスレッドでダウンロード・解析・実行される JavaScript の量や複雑さ、そしてデバイスの性能 (特に低スペックなモバイル端末など) によって大きく左右されます。遅延が長いほど、ユーザー体験は悪化します。サイトの初期化時間を短縮し、[長いタスク](/ja/docs/Web/API/PerformanceLongTaskTiming) を削減することで、First Input Delay を抑えることができます。

## 関連情報

- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) (web.dev、2024 年)
