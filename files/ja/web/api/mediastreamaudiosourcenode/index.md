---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

**`MediaStreamAudioSourceNode`** インターフェイスは {{domxref("AudioNode")}} の一種で、WebRTC またはメディアキャプチャとストリーム API で取得した {{domxref("MediaStream")}} から音声を取得する音源として働きます。

音声は、({{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 経由の) マイクから得られたものも使用できますし、({{domxref("RTCPeerConnection")}} の音声トラックを用いた) WebRTC による通話相手から受信したものも使用できます。

`MediaStreamAudioSourceNode` は入力を持たず、出力をちょうど 1 個持ちます。また、{{domxref("AudioContext.createMediaStreamSource()")}} メソッドにより作成されます。

`MediaStreamAudioSourceNode` は {{domxref("MediaStreamTrack.kind", "kind")}} 属性の値が `audio` である _最初の_ {{domxref("MediaStreamTrack")}} から音声を取得します。トラックの順番について詳しくは[トラックの順序付け](#%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%81%AE%E9%A0%86%E5%BA%8F%E4%BB%98%E3%81%91)を参照してください。

このノードの出力のチャンネル数は、選択された音声トラックで見つかったトラックの数と一致します。

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
        2 (ただし、{{domxref("AudioNode.channelCount")}} は {{domxref("AudioNode")}} の入力のアップミキシングおよびダウンミキシングにのみ用いられ、{{domxref("MediaStreamAudioSourceNode")}} は入力を持ちません)
      </td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "new MediaStreamAudioSourceNode()")}}
  - : 指定したオプションを用いて新しい `MediaStreamAudioSourceNode` オブジェクトを作成します。

## インスタンスプロパティ

_以下のプロパティに加え、`MediaStreamAudioSourceNode` は親の {{domxref("AudioNode")}} からプロパティを継承します。_

- {{domxref("MediaStreamAudioSourceNode.mediaStream", "mediaStream")}} {{ReadOnlyInline}}
  - : この `MediaStreamAudioSourceNode` の生成時に用いられた {{domxref("MediaStream")}} です。

## インスタンスメソッド

_親の {{domxref("AudioNode")}} からメソッドを継承します。_

## 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 引数 `mediaStream` により指定されたストリームに音声トラックが無いとき投げられます。

## 使用時の注意

### トラックの順序付け

`MediaStreamTrackAudioSourceNode` インターフェイスでは、ストリーム内の音声トラックの順番は、{{domxref("MediaStreamTrack.kind", "kind")}} が `audio` であるトラックを抽出し、抽出したトラックを {{domxref("MediaStreamTrack.id", "id")}} プロパティの値の Unicode のコードポイント順 (本質的には、ID が単純なアルファベットからなる文字列のときはアルファベット順 (辞書順)) でソートすることで決定されます。

そして、**最初の** トラックとは、トラックの ID が Unicode のコードポイント順でソートされたとき `id` が最初に来るトラックのことです。

しかし、重要な点として、この順序付けを確立するルールは、このインターフェイスが最初に [Web Audio API](/ja/docs/Web/API/Web_Audio_API) に追加されてからだいぶ後に追加されました。そのため、この順序付けがどの 2 種類のブラウザーやブラウザーのバージョンでも同じになるとして簡単に依存することはできません。

{{domxref("MediaStreamTrackAudioSourceNode")}} インターフェイスは `MediaStreamAudioSourceNode` に似ていますが、使用するトラックを指定できるようにすることでこの問題を回避しています。

## 例

このオブジェクトを使用するコードの例は、[`AudioContext.createMediaStreamSource()`](/ja/docs/Web/API/AudioContext/createMediaStreamSource#%E4%BE%8B) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- [メディアキャプチャとストリーム API (メディアストリーム)](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStreamTrackAudioSourceNode")}}
