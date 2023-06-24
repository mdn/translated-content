---
title: "TextTrackCueList: getCueById() メソッド"
short-title: getCueById()
slug: Web/API/TextTrackCueList/getCueById
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

**`getCueById()`** は {{domxref("TextTrackCueList")}} インターフェイスのメソッドで、`TextTrackCueList` オブジェクトが表すリストの中で、識別子が `id` の値と一致する最初の {{domxref("VTTCue")}} を返します。

## 構文

```js-nolint
getCueById(id)
```

### 引数

- `id`
  - : キューの識別子の文字列です。

### 返値

{{domxref("VTTCue")}} オブジェクトです。

## 例

{{domxref("TextTrack.cues")}} プロパティは、その具体的なトラックの現在のキューを格納した {{domxref("TextTrackCueList")}} を返します。`cues.getCueById("second")` を呼び出すと、{{domxref("VTTCue")}} のうち ID が "second" のものを返します。

```
WEBVTT

first
00:00:00.000 --> 00:00:00.999 line:80%
Hildy!

second
00:00:01.000 --> 00:00:01.499 line:80%
How are you?
```

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues.getCueById("second")); // a VTTCue object;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
