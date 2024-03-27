---
title: "VTTCue: align プロパティ"
short-title: align
slug: Web/API/VTTCue/align
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`align`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、このテキストボックス内のテキストの行すべての配置を表します。

## 値

文字列で、以下のいずれかの値になります。

- `"start"`
  - : 先頭への配置。
- `"center"`
  - : 中央への配置。
- `"end"`
  - : 末尾への配置。
- `"left"`
  - : 左への配置。
- `"right"`
  - : 右への配置。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成され、 `align` の値に `"start"` が設定されます。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.align = "start";
console.log(cue1.align);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
