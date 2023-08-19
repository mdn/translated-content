---
title: MediaRecorder.stream
slug: Web/API/MediaRecorder/stream
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.stream`** は読み取り専用プロパティで、 `MediaRecorder` を作成したときに `MediaRecorder()` コンストラクターに渡したストリームを返します。

## 値

最初に `MediaRecorder` を作成したとき `MediaRecorde()` コンストラクターに渡した {{domxref("MediaStream")}} です。

## 例

```js
if (navigator.getUserMedia) {
  console.log("getUserMediaがサポートされています。");
  navigator.getUserMedia(
    // 制約 - このアプリに必要なのは音声のみ
    {
      audio: true,
    },

    // 成功コールバック
    (stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      const myStream = mediaRecorder.stream;
      console.log(myStream);
    },
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + ウェブオーディオ API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。（英語）
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}
