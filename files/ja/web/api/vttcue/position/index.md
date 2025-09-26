---
title: "VTTCue: position プロパティ"
short-title: position
slug: Web/API/VTTCue/position
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`position`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、キューの行内での字下げを表します。

## 値

数値、または `"auto"` でキューの行内での字下げを表します。

## 例

次の例では、新しい {{domxref("VTTCue")}} を作成し、 `position` の値を `2` に設定します。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.position = "2";
console.log(cue1.position);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
