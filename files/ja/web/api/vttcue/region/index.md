---
title: "VTTCue: region プロパティ"
short-title: region
slug: Web/API/VTTCue/region
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`region`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、このキューが所属する {{domxref("VTTRegion")}} を返したり設定したりします。

## 値

{{domxref("VTTRegion")}} オブジェクトです。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成され、 `region` の値がコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
console.log(cue1.region);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
