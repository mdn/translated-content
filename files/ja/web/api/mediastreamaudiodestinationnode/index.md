---
title: MediaStreamAudioDestinationNode
slug: Web/API/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("Web Audio API")}}

`MediaStreamAudioDestinationNode` インターフェイスは、単一の `AudioMediaStreamTrack` を持つ [WebRTC](/ja/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} からなる音声の出力先を表します。これは、{{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} で取得した `MediaStream` と同様に用いることができます。

これは音声の出力先としてふるまう {{domxref("AudioNode")}} であり、{{domxref("AudioContext.createMediaStreamDestination()")}} メソッドで生成できます。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウントモード</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウントの解釈</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode", "MediaStreamAudioDestinationNode()")}}
  - : 新しい `MediaStreamAudioDestinationNode` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxref("AudioNode")}} からプロパティを継承します。_

- {{domxref("MediaStreamAudioDestinationNode.stream")}}
  - : {{domxref("MediaStreamTrack.kind", "kind")}} が `audio` であり、ノードと同じ数のチャンネルを持つ単一の {{domxref("MediaStreamTrack")}} からなる {{domxref("MediaStream")}} です。このプロパティを用いて、ストリームを音声グラフから取り出し、[Media Recorder](/ja/docs/Web/API/MediaStream_Recording_API) などの他の構築に供給できます。

## インスタンスメソッド

_親の {{domxref("AudioNode")}} からメソッドを継承します。_

## 例

[`AudioContext.createMediaStreamDestination()`](/ja/docs/Web/API/AudioContext/createMediaStreamDestination#例) に、`MediaStreamAudioDestinationNode` を生成し、それを録音する音声の音源として用いるサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
