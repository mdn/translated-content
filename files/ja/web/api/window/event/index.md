---
title: "Window: event プロパティ"
short-title: event
slug: Web/API/Window/event
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{domxref("Window")}} の読み取り専用プロパティである **`event`** は、現在サイトのコードが処理している {{domxref("Event")}} を返します。イベントハンドラーのコンテキスト外では、この値は常に `undefined` になります。

新しいコードではこのプロパティの使用を*避けるべき*であり、代わりにイベントハンドラー関数になる {{domxref("Event")}} を使用してください。このプロパティは広く対応されておらず、また対応されていてもコードが壊れやすくなるおそれがあります。

> [!NOTE]
> このプロパティは、返された `Event` が期待する値ではない状況になる場合があり、壊れやすい可能性があります。加えて `Window.event` は、{{Glossary("shadow tree", "シャドウツリー")}}で発生したイベントに対して不適格です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Event.srcElement")}}
