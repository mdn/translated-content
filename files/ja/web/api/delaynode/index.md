---
title: DelayNode
slug: Web/API/DelayNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

**`DelayNode`** は[信号遅延](https://en.wikipedia.org/wiki/Digital_delay_line)を表します。 {{domxref("AudioNode")}} の一種で、入力されたデータを指定された時間遅延して、出力します。

`DelayNode` の入力と出力は常に 1 つで、入力のチャンネル数と出力のチャンネル数は同じです。

![The DelayNode acts as a delay-line, here with a value of 1s.](webaudiodelaynode.png)

オーディオグラフに閉路がある場合、その中には最低 1 つの `DelayNode` がなければなりません。もし閉路中に `DelayNode` が存在しない場合、その閉路中のノードはミュートされます。

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

- {{domxref("DelayNode.DelayNode", "DelayNode()")}}
  - : DelayNode オブジェクトのインスタンスを新規に作成します。別の方法として、 {{domxref("BaseAudioContext.createDelay()")}} ファクトリーメソッドを使用することもできます。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## インスタンスプロパティ

_親である {{domxref("AudioNode")}} からプロパティを継承しています。_

- {{domxref("DelayNode.delayTime")}} {{ReadOnlyInline}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} で、遅延させる時間を秒単位で指定します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("AudioNode")}} からメソッドを継承しています。_

## 例

コード例については [`BaseAudioContext.createDelay()`](/ja/docs/Web/API/BaseAudioContext/createDelay#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
