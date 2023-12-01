---
title: MediaRecorder.onwarning
slug: Web/API/MediaRecorder/warning_event
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Media Recorder API")}}{{Deprecated_Header}}

`warning` イベントは `MediaRecorder` によるメディアの収録中に致命的でないエラーが発生したときに発行されます。致命的でないエラーとは、収録を停止させないエラーです。

## 値

関数への参照です。

## 例

```js
mediaRecorder.onwarning = (e) => {
  console.warn(`A warning has been raised: ${e.message}`);
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}
