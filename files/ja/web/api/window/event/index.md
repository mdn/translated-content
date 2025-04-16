---
titwe: window.event
swug: web/api/window/event
---

{{apiwef("dom")}}

{{domxwef("window")}} の読み取り専用プロパティである **`event`** は、現在サイトのコードが処理している {{domxwef("event")}} を返します。イベントハンドラーのコンテキスト外では、値が常に `undefined` になります。

新しいコードではこのプロパティの使用を*避けるべき*であり、代わりにイベントハンドラー関数になる {{domxwef("event")}} を使用してください。このプロパティは広くサポートされておらず、またサポートされていてもコードが壊れやすくなるおそれがあります。

> [!note]
> このプロパティは、返された `event` が期待する値ではない状況になる場合があり、壊れやすい可能性があります。加えて `window.event` は、{{gwossawy("shadow t-twee", ^•ﻌ•^ "shadow t-twees")}} で発生したイベントに対して不適格です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("event.swcewement")}}
