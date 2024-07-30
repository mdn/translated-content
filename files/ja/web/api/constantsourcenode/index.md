---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("Web Audio API")}}

`ConstantSourceNode` インターフェイスはウェブオーディオ API の一部で、出力が 1 つの不変の値である音声ソース（{{domxref("AudioScheduledSourceNode") }} に基づいています）を表します。そのため、音声ソースから入ってくる値を一定に保つ必要がある場合に有益な値です。また、 {{domxref("ConstantSourceNode.offset", "offset")}} の値を自動化したり、他のノードを接続したりして、構成可能な {{domxref("AudioParam")}} として使用することができます。詳しくは [ConstantSourceNode による複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)を参照して下さい。

`ConstantSourceNode` は入力を持たず、ちょうど 1 つのモノラル（1 チャンネル）出力を持ちます。出力の値は常に {{domxref("ConstantSourceNode.offset", "offset")}} 引数の値と同じです。

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
  </tbody>
</table>

## コンストラクター

- {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}}
  - : 新しい `ConstantSourceNode` インスタンスを作成して返します。オプションとして、オブジェクトのプロパティの初期値を確立するためのオブジェクトを指定します。別の方法として、{{domxref("BaseAudioContext.createConstantSource()")}} ファクトリーメソッドを使用することができます。[AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## インスタンスプロパティ

_親インターフェイスである {{domxref("AudioScheduledSourceNode")}} からプロパティを継承しており、さらに以下のプロパティがあります。_

- {{domxref("ConstantSourceNode.offset", "offset")}}
  - : このソースが連続的に出力する値を指定する {{domxref("AudioParam")}}。既定値では 1.0 です。

### イベント

_親インターフェイスである {{domxref("AudioScheduledSourceNode")}} からイベントを継承しています。_

> [!NOTE]
> 一部のブラウザーでは、このイベントの実装は {{domxref("AudioScheduledSourceNode")}} インターフェイスの一部となっています。

- {{domxref("AudioScheduledSourceNode.ended_event","ended")}}
  - : {{domxref('ConstantSourceNode')}} データの再生が停止するたびに発生します。

## インスタンスメソッド

_親インターフェイスである {{domxref("AudioScheduledSourceNode")}} からメソッドを継承しています。_

> [!NOTE]
> 一部のブラウザーでは、これらのメソッドの実装は {{domxref("AudioScheduledSourceNode")}} インターフェイスの一部となっています。

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : 正確な時刻に音を再生するようにスケジュールします。
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : 正確な時刻に音を再生停止するようスケジュールします。

## 例

[ConstantSourceNode での複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)の記事では、 `ConstantSourceNode` を作成して 1 つのスライダーコントロールで 2 つの {{domxref("GainNode")}} のゲインを変更できるようにしています。 3 つのノードはこのように設定されています。

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;
volumeSliderControl.value = gainNode2.gain.value;

constantNode = context.createConstantSource();
constantNode.connect(gainNode2.gain);
constantNode.connect(gainNode3.gain);
constantNode.start();

gainNode2.connect(context.destination);
gainNode3.connect(context.destination);
```

このコードでは、まずゲインノードを作成し、それらとその値を調整するボリュームコントロールをすべて 0.5 に設定します。次に {{domxref("BaseAudioContext/createConstantSource", "AudioContext.createConstantSource()")}} を呼び出して `ConstantSourceNode` を作成し、 2 つのゲインノードのそれぞれのゲイン引数を `ConstantSourceNode` に接続します。定電位ソースの {{domxref("AudioScheduledSourceNode.start", "start()")}} メソッドを呼び出して定電位ソースを開始した後です。最後に、 2 つのゲインノードは音声出力先（通常はスピーカーまたはヘッドフォン）に接続されます。

これで {{domxref("ConstantSourceNode.offset", "constantNode.offset")}} の値が変わるたびに、 `gainNode2` と `gainNode3` のゲインは同じ値になるように変化します。

この例を実際に見るには、また、これらのスニペットから派生したコードの残りを読むには、 [ConstantSourceNode での複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioNode")}}
