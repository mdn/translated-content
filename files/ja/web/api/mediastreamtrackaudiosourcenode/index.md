---
title: MediaStreamTrackAudioSourceNode
slug: Web/API/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

**`MediaStreamTrackAudioSourceNode`** インターフェイスは {{domxref("AudioNode")}} の一種で、[WebRTC](/ja/docs/Web/API/WebRTC_API) や[メディアキャプチャとストリーム](/ja/docs/Web/API/Media_Capture_and_Streams_API) API から得られた特定の {{domxref("MediaStreamTrack")}} からデータを取得する音源を表します。

音声自体は、マイクやその他の音声サンプリングデバイスからの入力かもしれないし、{{domxref("RTCPeerConnection")}} から受信したものかもしれないし、その他かもしれません。

`MediaStreamTrackAudioSourceNode` は入力を持たず、ちょうど 1 個の出力を持ち、{{domxref("AudioContext.createMediaStreamTrackSource()")}} メソッドにより生成されます。このインターフェイスは、ストリームの最初の音声トラックで決め打ちするのではなく使用するトラックを明示できるという点以外、{{domxref("MediaStreamAudioSourceNode")}} に似ています。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td>
        生成時に {{domxref("AudioContext.createMediaStreamTrackSource()")}} メソッドに渡された最初の音声 {{domxref("MediaStreamTrack")}} により定義されます。
      </td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("MediaStreamTrackAudioSourceNode.MediaStreamTrackAudioSourceNode", "new MediaStreamTrackAudioSourceNode()")}}
  - : オプションを指定して新しい `MediaStreamTrackAudioSourceNode` オブジェクトを生成します。

## インスタンスプロパティ

_`MediaStreamTrackAudioSourceNode` インターフェイスは自身のプロパティを持ちません。しかし、親の {{domxref("AudioNode")}} のプロパティを継承します。_

## インスタンスメソッド

_親の {{domxref("AudioNode")}} からメソッドを継承します。_

## 例

[`AudioContext.createMediaStreamSource()`](/ja/docs/Web/API/AudioContext/createMediaStreamSource#例) に、このオブジェクトを用いるサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- [メディアキャプチャとストリーム API (メディアストリーム)](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStreamAudioSourceNode")}}
