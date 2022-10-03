---
title: Window.event
slug: Web/API/Window/event
---

{{APIRef("DOM")}}

{{domxref("Window")}} の読み取り専用プロパティである **`event`** は、現在サイトのコードが処理している {{domxref("Event")}} を返します。イベントハンドラーのコンテキスト外では、値が常に `undefined` になります。

新しいコードではこのプロパティの使用を*避けるべき*であり、代わりにイベントハンドラー関数になる {{domxref("Event")}} を使用してください。このプロパティは広くサポートされておらず、またサポートされていてもコードが壊れやすくなるおそれがあります。

> **メモ:** このプロパティは、返された `Event` が期待する値ではない状況になる場合があり、壊れやすい可能性があります。加えて `Window.event` は、{{Glossary("shadow tree", "shadow trees")}} で発生したイベントに対して不適格です。

## 仕様

| 仕様書                                                                                           | 策定状況                         | コメント |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('DOM WHATWG', "#ref-for-dom-window-event", "Window.event")}} | {{Spec2('DOM WHATWG')}} | 初期定義 |

## ブラウザー実装状況

{{Compat("api.Window.event")}}

## 関連情報

- {{domxref("Event.srcElement")}}
