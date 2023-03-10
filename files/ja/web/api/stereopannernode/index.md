---
title: StereoPannerNode
slug: Web/API/StereoPannerNode
---

{{APIRef("Web Audio API")}}

`StereoPannerNode` は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のインターフェイスで、音声ストリームを左右にパンすることができる、シンプルなステレオのパンニングを行うノードを表します。これは {{domxref("AudioNode")}} の一種で、コストが低くパワーの変わらない [アルゴリズム](http://webaudio.github.io/web-audio-api/#panning-algorithm)を用います。

{{domxref("StereoPannerNode.pan", "pan")}} 属性には -1 （完全に左へパンニング）から 1（完全に右へパンニング）までの実数値を単位をつけずに指定します。このインターフェイスにより、{{domxref("PannerNode")}} よりシンプルにパンを指定できます。

![](stereopannernode.png)

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
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの意味</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}}
  - : `StereoPannerNode` オブジェクトの新しいインスタンスを作成します。

## プロパティ

_親である {{domxref("AudioNode")}} からプロパティを継承しています_。

- {{domxref("StereoPannerNode.pan")}} {{readonlyinline}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} で、パンニングの量を指定できます。

## メソッド

_固有のメソッドはありません。親である {{domxref("AudioNode")}} からメソッドを継承しています_。

## 例

コード例については [`BaseAudioContext.createStereoPanner()`](/ja/docs/Web/API/BaseAudioContext/createStereoPanner#example) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
