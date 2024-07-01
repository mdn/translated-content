---
title: "MediaStreamTrackAudioSourceNode: MediaStreamTrackAudioSourceNode() コンストラクター"
slug: Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ja/docs/Web/API/Web_Audio_API) の **`MediaStreamTrackAudioSourceNode()`** コンストラクターは、オプションオブジェクトで指定された {{domxref("MediaStreamTrack")}} から音声を取得する新しい {{domxref("MediaStreamTrackAudioSourceNode")}} オブジェクトを生成して返します。

`MediaStreamTrackAudioSourceNode` を生成する別の方法は、音声の取得元とする {{domxref("MediaStreamTrack")}} を指定して {{domxref("AudioContext.createMediaStreamTrackSource()")}} メソッドを呼び出すことです。

## 構文

```js-nolint
new MediaStreamTrackAudioSourceNode(context, options)
```

### 引数

- `context`
  - : このノードを関連付ける音声コンテキストを表す {{domxref("AudioContext")}} です。
- `options`

  - : `MediaStreamTrackAudioSourceNode` に持たせる性質を定義するオブジェクトです。

    - `mediaStreamTrack`
      - : このノードの出力とする音声のデータの取得元とする {{domxref("MediaStreamTrack")}} です。

### 返値

メディアを指定のメディアトラックから取得する音声ノードを表す新しい {{domxref("MediaStreamTrackAudioSourceNode")}} オブジェクトです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定の `context` が {{domxref("AudioContext")}} でないとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 指定の {{domxref("MediaStreamTrack")}} が音声トラックでない (すなわち、{{domxref("MediaStreamTrack.kind", "kind")}} プロパティが `audio` でない) とき投げられます。

## 例

この例では、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を用いてユーザーのカメラにアクセスし、そのデバイスが提供する最初の音声トラックから新しい {{domxref("MediaStreamAudioSourceNode")}} を生成します。

```js
const audioCtx = new AudioContext();

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: false,
    })
    .then((stream) => {
      const options = {
        mediaStreamTrack: stream.getAudioTracks()[0],
      };

      const source = new MediaStreamTrackAudioSourceNode(audioCtx, options);
      source.connect(audioCtx.destination);
    })
    .catch((err) => {
      console.error(`以下の gUM エラーが発生しました: ${err}`);
    });
} else {
  console.log("このブラウザーは新しい getUserMedia に対応していません！");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
