---
title: TextTrackCue.startTime
slug: Web/API/TextTrackCue/startTime
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`startTime`** は {{domxref("TextTrackCue")}} インターフェイスのプロパティで、このキューの開始時刻を返したり設定したりします。

## 値

数値で、開始時刻を秒単位で表します。

## 例

以下の例では、 0.1 秒から始まり 0.9 秒で終わる新しい {{domxref("VTTCue")}} （`TextTrackCue` を継承したもの）が作成されます。そして、 `startTime` プロパティがコンソールに表示されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0.1, 0.9, "Hildy!");
console.log(cue1.startTime); // 0.1
track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
