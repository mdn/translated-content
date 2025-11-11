---
title: TextTrack.cues
slug: Web/API/TextTrack/cues
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`cues`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、トラックのこのすべてのキューが入った {{domxref("TextTrackCueList")}} オブジェクトを返します。

## 値

{{domxref("TextTrackCueList")}} オブジェクトです。

## 例

以下の例では、 `addCue()` を使用して、動画のテキストトラックに 2 つのキューを追加しています。 `cues` の値はコンソールに表示されます。返された {{domxref("TextTrackCueList")}} オブジェクトには、 2 つのキューが格納されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
console.log(track.cues);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
