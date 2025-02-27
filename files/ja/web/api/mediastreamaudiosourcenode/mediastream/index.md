---
title: "MediaStreamAudioSourceNode: mediaStream プロパティ"
short-title: mediaStream
slug: Web/API/MediaStreamAudioSourceNode/mediaStream
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Audio API")}}

{{domxref("MediaStreamAudioSourceNode")}} インターフェイスの読み取り専用プロパティ **`mediaStream`** は、このノードが音声を受信する元の音声トラックがある {{domxref("MediaStream")}} を示します。

このストリームは、ノードが {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} コンストラクターまたは {{domxref("AudioContext.createMediaStreamSource()")}} メソッドにより最初に作成されたときに指定されたものです。

## 値

コードの音源として働いている {{domxref("MediaStreamTrack")}} があるストリームを表す {{domxref("MediaStream")}} です。

{{Glossary("user agent", "ユーザーエージェント")}}は、指定されたストリームで見つかった最初の音声トラックをこのノード用に用います。しかし、複数のトラックからなるストリームにおいて、どのトラックが使用されているかを確実に知る方法はありません。どのトラックが使われているかが重要な場合や、トラック自体にアクセスしたい場合は、かわりに {{domxref("MediaStreamTrackAudioSourceNode")}} を用いるべきです。

## 例

```js
const audioCtx = new window.AudioContext();
let options = {
  mediaStream: stream,
};

let source = new MediaStreamAudioSourceNode(audioCtx, options);
console.log(source.mediaStream);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
