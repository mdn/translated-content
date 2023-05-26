---
title: GainNode
slug: Web/API/GainNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

`GainNode` インターフェイスは、音量の変更を表します。これは {{domxref("AudioNode")}} 音声処理モジュールで、入力データが出力に伝搬する前に指定のゲインを適用します。`GainNode` は常にちょうど 1 個の入力と 1 個の出力を持ち、入力と出力のチャンネル数は同じです。

ゲインは単位の無い値で、時間とともに変化し、全入力チャンネルの対応するサンプルに乗算されます。ゲインが変更されると、新しいゲインは即座に適応され、出力の音声に不快な「クリック」が発生します。これを回避するためには、値を直接変更せず、{{domxref("AudioParam")}} インターフェイスの指数関数的に変化させるメソッドを用いるといいです。

![GainNode が出力のゲインを上げています。](webaudiogainnode.png)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウントモード</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>2</code> (既定のカウントモードでは未使用)</td>
    </tr>
    <tr>
      <th scope="row">チャンネルの意味</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : 新しい `GainNode` オブジェクトを作成して返します。別の方法として、{{domxref("BaseAudioContext.createGain()")}} ファクトリーメソッドを使うこともできます。[AudioNode の生成](/ja/docs/Web/API/AudioNode#audionode_%E3%81%AE%E7%94%9F%E6%88%90)を参照してください。

## インスタンスプロパティ

_親の {{domxref("AudioNode")}} からプロパティを継承します。_

- {{domxref("GainNode.gain")}} {{ReadOnlyInline}}
  - : 適用するゲインを表す [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} です。適用するゲインを変更するには、{{domxref("AudioParam.value")}} を設定するか、`AudioParam` のメソッドを用いる必要があります。

## インスタンスメソッド

_専用のメソッドはありません。親の {{domxref("AudioNode")}} からメソッドを継承します。_

## 例

[`BaseAudioContext.createGain()`](/ja/docs/Web/API/BaseAudioContext/createGain#%E4%BE%8B) に`AudioContext` を用いて `GainNode` を生成するサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
