---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
l10n:
  sourceCommit: cf2b7261998f53f10775c1913c3e36cb8a6ced46
---

{{APIRef("Web Audio API")}}

`ChannelSplitterNode` インターフェイスは、よく反対の {{domxref("ChannelMergerNode")}} とともに用いられ、音声入力のそれぞれのチャンネルをモノラル出力の組に分離します。これは、各チャンネルに別々にアクセスするのに便利です。たとえば、各チャンネルのゲインを別々に制御する必要があるチャンネルミキシングを行うのに便利です。

![1 個の入力を 6 個のモノラル出力に分離するデフォルトの ChannelSplitterNode](webaudiosplitter.png)

`ChannelSplitterNode` の入力が常に 1 個だけの場合、出力の数はコンストラクターや {{domxref("BaseAudioContext/createChannelSplitter", "AudioContext.createChannelSplitter()")}} の引数によって決まります。値が指定されなかった場合は、既定の `6` になります。入力のチャンネル数が出力数より少ない場合は、余った出力は無音になります。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td>可変。既定値は<code>6</code> です。</td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウントモード</th>
      <td>
        <code>"explicit"</code> 古い実装では、仕様書の以前のバージョンに従って
        <code>"max"</code> が使用されます。
      </td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td>
        出力数に固定されます。古い実装では、仕様書の以前のバージョンに従って
        <code>2</code> が使用されます。(既定のカウントモードでは使用されません)
      </td>
    </tr>
    <tr>
      <th scope="row">チャンネルの意味</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("ChannelSplitterNode.ChannelSplitterNode()","ChannelSplitterNode()")}}
  - : 新しい `ChannelSplitterNode` のオブジェクトのインスタンスを作成します。

## インスタンスプロパティ

_専用のプロパティはありません。親の {{domxref("AudioNode")}} からプロパティを継承します。_

## インスタンスメソッド

_専用のメソッドはありません。親の {{domxref("AudioNode")}} からメソッドを継承します。_

## 例

[`BaseAudioContext.createChannelSplitter()`](/ja/docs/Web/API/BaseAudioContext/createChannelSplitter#%E4%BE%8B) にサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
