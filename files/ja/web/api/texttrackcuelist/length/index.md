---
title: "TextTrackCueList: length プロパティ"
short-title: length
slug: Web/API/TextTrackCueList/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

**`length`** は {{domxref("TextTrackCueList")}} インターフェイスの読み取り専用プロパティで、リスト中のキューの数を返します。

## 値

`unsigned long` で、リスト中のキューの数を返します。

## 例

{{domxref("TextTrack.cues")}} プロパティは、特定のトラックの現在のキューを格納した {{domxref("TextTrackCueList")}} を返します。下記の WebVTT トラックを使用すると、`length` の値は 5 になります。

```
WEBVTT

first
00:00:00.000 --> 00:00:00.999  line:80%
Hildy!

second
00:00:01.000 --> 00:00:01.499 line:80%
How are you?

third
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the ruler of the universe in?

fourth
00:00:03.000 --> 00:00:04.299 line:80%
Yes, they're in - in a bad humor

fifth
00:00:04.300 --> 00:00:06.000 line:80%
Somebody must've stolen the crown jewels
```

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues.length); // 5
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
