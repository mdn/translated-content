---
title: TextTrack.activeCues
slug: Web/API/TextTrack/activeCues
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`activeCues`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、現在アクティブなキューを列挙した {{domxref("TextTrackCueList")}} オブジェクトを返します。

## 値

{{domxref("TextTrackCueList")}} オブジェクトです。

## 例

以下の例では、動画に新しい `TextTrack` を追加しています。 `activeCues` はコンソールに表示されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.activeCues);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
