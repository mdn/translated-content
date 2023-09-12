---
title: "VTTCue: size プロパティ"
short-title: size
slug: Web/API/VTTCue/size
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`size`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、キューの大きさを動画の大きさのパーセント値で表します。

## 値

数値で、キューの大きさを動画の大きさのパーセント値で表します。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成され、 `size` の値が `50` に設定されます。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.size = 50;
console.log(cue1.size);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
