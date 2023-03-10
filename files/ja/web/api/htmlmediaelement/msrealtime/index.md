---
title: HTMLMediaElement.msRealTime
slug: Web/API/HTMLMediaElement/msRealTime
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

**`msRealTime`** プロパティは、メディア要素で低遅延再生を有効にするかどうかを指定します。

この独自のプロパティは、インターネットエクスプローラとマイクロソフトエッジに特有のものです。

## 値

このプロパティは、メディア要素で低遅延再生が有効になることを示す論理 値を格納します（`true`に設定された場合）。低遅延再生は通信やいくつかのゲーム場面で有益ですが、消費電力が高く、スムーズなメディア再生の信頼性は低くなります。

`msRealTime` は {{domxref("HTMLMediaElement.src", "src")}} プロパティを設定する前に設定する必要があります。

`msRealTime` は音声と映像の再生のようなリアルタイムではなく、通信のない場面では使用しないでください。これは音声や映像の再生の起動レイテンシーに影響を与える可能性があります。
