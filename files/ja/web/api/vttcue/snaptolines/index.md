---
title: "VTTCue: snapToLines プロパティ"
short-title: snapToLines
slug: Web/API/VTTCue/snapToLines
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`snapToLines`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、 {{domxref("VTTCue.line")}} プロパティが行の数を表す整数であるか、動画の大きさに対するパーセント値であるかを示す論理値 ({{jsxref("Boolean")}}) です。

## 値

論理値 ({{jsxref("Boolean")}}) です。

## 例

次の例では、新しい {{domxref("VTTCue")}} を作成し、 `snapToLines` の値を `true` に設定します。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.snapToLines = true;
console.log(cue1.snapToLines);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
