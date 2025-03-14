---
title: "VTTCue: vertical プロパティ"
short-title: vertical
slug: Web/API/VTTCue/vertical
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`vertical`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、このキューの書字方向を表す文字列です。

## 値

文字列で、以下のいずれかの値になります。

- `""` （空文字列）
  - : 横書きであることを表します。
- `"rl"`
  - : 左方向に進む縦書きであることを表します。
- `"lr"`
  - : 右方向に進む縦書きであることを表します。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成され、 `vertical` の値が `"rl"` に設定されます。この値はコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.vertical = "rl";
console.log(cue1.vertical);

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
