---
title: OscillatorNode
slug: Web/API/OscillatorNode
l10n:
  sourceCommit: 41a60bd5745ad1a068f858186e31bb538701e728
---

{{APIRef("Web Audio API")}}

**`OscillatorNode`** インターフェイスは、正弦波などの周期的な波形を表します。これは、 {{domxref("AudioScheduledSourceNode")}} 音声処理モジュールの一種で、指定された周波数の波を作成させ、実質的には一定の音になります。

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
      <th scope="row">チャンネルカウントモード</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウント</th>
      <td><code>2</code> (デフォルトのカウントモードでは使用されません。)</td>
    </tr>
    <tr>
      <th scope="row">チャンネルの解釈</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
  - : 新しい `OscillatorNode` オブジェクトのインスタンスを作成します。オプションとして、ノードの[プロパティ](#プロパティ)に既定値を指定したオブジェクトを提供します。別の方法として、 {{domxref("BaseAudioContext.createOscillator()")}} ファクトリーメソッドを使用することも可能です。[AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の作成)を参照してください。

## プロパティ

_親インターフェイスである {{domxref("AudioScheduledSourceNode")}} からプロパティを継承しており、さらに以下のプロパティがあります。_

- {{domxref("OscillatorNode.frequency")}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} であり、振動数・周波数をヘルツ（hertz、記号：Hz）で表わしたものです。（`AudioParam` は読み取り専用ですが、この値はそうではありません）。初期値は 440 Hz （中央 A （ラ）音）です。
- {{domxref("OscillatorNode.detune")}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} であり、発振音の離調をセント単位で表します（`AudioParam` は読み取り専用ですが、この値が表す値はそうでありません）。既定値は 0 です。
- {{domxref("OscillatorNode.type")}}
  - : 再生する波形の種類を指定する文字列です。いくつかの標準値の中から 1 つ、または、 `custom` で {{domxref("PeriodicWave")}} を使用したカスタム波形を設定することができます。波形が異なれば、音色も異なります。標準的な値は `"sine"`, `"square"`, `"sawtooth"`, `"triangle"`, `"custom"` です。既定値は `"sine"` です。

### イベントハンドラー

- {{domxref("OscillatorNode.onended")}}
  - : 音の再生が停止したときに発行される {{domxref("AudioScheduledSourceNode/ended_event", "ended")}} イベントに対するイベントハンドラーを設定します。

## メソッド

_親インターフェイスである {{domxref("AudioScheduledSourceNode")}} からメソッドを継承しており、さらに以下のメソッドがあります。_

- {{domxref("OscillatorNode.setPeriodicWave()")}}
  - : 標準的な波形の代わりに使用する、周期的な波形を記述した {{domxref("PeriodicWave")}} を設定します。これを呼び出すと `type` は `custom` に設定されます。
- {{domxref("OscillatorNode.start()")}}
  - : 音色の再生を開始する正確な時間を指定します。
- {{domxref("OscillatorNode.stop()")}}
  - : 音色の再生を停止する時間を指定します。

## 例

以下の例は、 {{domxref("AudioContext")}} を使用して発振器ノードを作成し、その上で音の再生を開始する基本的な使用方法を示しています。応用例としては、 [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) をご覧ください（関連するコードは [app.js](https://github.com/mdn/webaudio-examples/blob/master/violent-theremin/scripts/app.js) を参照してください）。

```js
// ウェブオーディオ API コンテキストの作成
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Oscillator　ノードを作成します。
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // ヘルツ単位の値
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
