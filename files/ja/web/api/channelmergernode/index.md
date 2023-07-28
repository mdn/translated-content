---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
---

{{APIRef("Web Audio API")}}

`ChannelMergerNode` インターフェイスは、反対の機能の {{domxref("ChannelSplitterNode")}} と組み合わせて使用されることが多く、さまざまなモノラル入力を単一の出力に再結合します。 各入力は、出力のチャンネルを埋めるために使用されます。 これは各チャンネルに別々にアクセスするのに便利です、つまり 各チャンネルでゲインを別々に制御する必要がある場合にミキシングするのに有効です。

![](webaudiomerger.png)

もし `ChannelMergerNode` の出力が 1 つであるが、マージするチャンネルと同じ数の入力がある場合、入力数はそのコンストラクターおよび {{domxref("AudioContext.createChannelMerger()")}} の呼び出しの引数で指定されただけの数になります。値が指定されていない場合は、既定の `6` になります。

`ChannelMergerNode` を使用すると、レンダリングハードウェアが処理できるよりも多くのチャンネルで出力を作成することが可能です。その場合、シグナルが{{domxref("AudioContext.listener")}} オブジェクトに送信されると、余分なチャンネルは無視されます。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td>可変。既定値は <code>6</code> です。</td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウントモード</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウント</th>
      <td><code>2 </code>(既定のカウントモードでは使用されません)</td>
    </tr>
    <tr>
      <th scope="row">チャンネル判別</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}}
  - : 新しい `ChannelMergerNode` オブジェクトインスタンスを生成します。

## プロパティ

_特有のプロパティはありません。 親である {{domxref("AudioNode")}} からプロパティを継承しています。_

## メソッド

_特有のメソッドはありません。 親である {{domxref("AudioNode")}} からメソッドを継承しています。_

## 例

コード零については [`BaseAudioContext.createChannelMerger()`](/ja/docs/Web/API/BaseAudioContext/createChannelMerger#example) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
