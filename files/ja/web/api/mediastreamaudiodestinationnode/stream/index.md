---
title: "MediaStreamAudioDestinationNode: stream プロパティ"
slug: Web/API/MediaStreamAudioDestinationNode/stream
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} インターフェイスの `stream` プロパティは、ノード自身と同じ数のチャンネルを持つ単一の音声 {{domxref("MediaStreamTrack")}} を持った {{domxref("MediaStream")}} を表します。

このプロパティを用いて、ストリームを音声グラフから取り出し、[Media Recorder](/ja/docs/Web/API/MediaStream_Recording_API) などの他の構築に供給できます。

## 値

単一の音声トラックを持った {{domxref("MediaStream")}} です。この音声トラックは、{{domxref("MediaStreamTrack.kind", "kind")}} が `audio` である {{domxref("MediaStreamTrack")}} です。

## 例

[`AudioContext.createMediaStreamDestination()`](/ja/docs/Web/API/AudioContext/createMediaStreamDestination#例) に、`MediaStreamAudioDestinationNode` を生成し、その `stream` プロパティを録音する音声の音源として用いるサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
