---
title: "VTTCue: text プロパティ"
short-title: text
slug: Web/API/VTTCue/text
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`text`** は {{domxref("VTTCue")}} インターフェイスのプロパティで、このキューのテキストコンテンツを表します。

## 値

キューの生のテキストを保持する文字列です。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成され、 `size` の値には文字列 `"new cue value"` が設定されます。そして、その値がコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.text = "new cue value";
console.log(cue1.text); // 'new cue value';

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
