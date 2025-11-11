---
title: TextTrackCue.id
slug: Web/API/TextTrackCue/id
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`id`** は {{domxref("TextTrackCue")}} インターフェイスのプロパティで、このキューの識別子を返したり設定したりします。

## 値

このキューの ID を持つ文字列です。

## 例

以下の例では、新しい {{domxref("VTTCue")}} （`TextTrackCue` を継承したもの）が作成されます。そして、キューを追加する前に、 `id` プロパティを "first" に設定しています。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.id = "first";
track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
