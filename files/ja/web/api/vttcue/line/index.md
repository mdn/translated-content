---
title: "VTTCue: line プロパティ"
short-title: line
slug: Web/API/VTTCue/line
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{DefaultAPISidebar("")}}

**`line`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、この WebVTT キューのキュー行を表します。

## 値

この WebVTT キューのキュー行を表す数値、または `"auto"` です。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成され、`line` の値に `1` が設定されます。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.line = "1";
console.log(cue1.line);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
