---
title: "VTTCue: lineAlign プロパティ"
short-title: lineAlign
slug: Web/API/VTTCue/lineAlign
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`lineAlign`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、この VTT キューの配置を表します。

## 値

文字列で、以下のいずれかの値になります。

- `"start"`
  - : 先頭への配置。
- `"center"`
  - : 中央への配置。
- `"end"`
  - : 末尾への配置。

## 例

次の例では、新しい {{domxref("VTTCue")}} を作成し、 `lineAlign` の値を `"center"` に設定します。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.lineAlign = "center";
console.log(cue1.lineAlign);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
