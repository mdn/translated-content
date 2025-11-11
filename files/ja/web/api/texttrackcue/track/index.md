---
title: TextTrackCue.track
slug: Web/API/TextTrackCue/track
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`track`** は {{domxref("TextTrackCue")}} インターフェイスの読み取り専用プロパティで、このキューが所属する {{domxref("TextTrack")}} オブジェクトを返します。

## 値

{{domxref("TextTrack")}} オブジェクトです。

## 例

以下の例では、新しい {{domxref("VTTCue")}} （`TextTrackCue` を継承）を作成し、それをトラックに追加しています。 `track` の値はコンソールに表示されます。

```js
let video = document.querySelector("video");
let captiontrack = video.addTextTrack("captions", "Captions", "en");
captiontrack.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
captiontrack.addCue(cue1);
console.log(cue1.track); // a TextTrack object.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
