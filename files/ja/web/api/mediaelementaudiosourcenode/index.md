---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

`MediaElementAudioSourceNode` インターフェイスは、HTML の {{ htmlelement("audio") }} 要素または {{ htmlelement("video") }} 要素からなる音源を表し、音源としてふるまいます。

`MediaElementAudioSourceNode` は入力を持たず、ちょうど 1 個の出力を持ち、{{domxref("AudioContext.createMediaElementSource()")}} メソッドにより生成されます。出力のチャンネル数はノードの生成時に用いられた {{domxref("HTMLMediaElement")}} が参照する音声のチャンネル数で、{{domxref("HTMLMediaElement")}} が音声を持たないときは 1 です。

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
        2 (ただし、{{domxref("AudioNode.channelCount")}} は {{domxref("AudioNode")}} の入力のアップミキシングやダウンミキシングにのみ用いられ、{{domxref("MediaElementAudioSourceNode")}} には入力がありません)
      </td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode", "MediaElementAudioSourceNode()")}}
  - : 新しい `MediaElementAudioSourceNode` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxref("AudioNode")}} からプロパティを継承します。_

- {{domxref("MediaElementAudioSourceNode.mediaElement", "mediaElement")}} {{ReadOnlyInline}}
  - : この `MediaStreamAudioSourceNode` の構築時に用いられた {{domxref("HTMLMediaElement")}} です。

## インスタンスメソッド

_親の {{domxref("AudioNode")}} からメソッドを継承します。_

## 例

サンプルコードは、[`AudioContext.createMediaElementSource()`](/ja/docs/Web/API/AudioContext/createMediaElementSource#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
