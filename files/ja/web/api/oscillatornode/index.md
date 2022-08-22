---
title: OscillatorNode
slug: Web/API/OscillatorNode
translation_of: Web/API/OscillatorNode
---
{{APIRef("Web Audio API")}}

**OscillatorNode** インタフェースは、正弦波などの周期的な波形を表します。これは、指定された波形で、特定の周波数の一定のトーンを発生させる、オーディオ処理モジュール {{domxref("AudioScheduledSourceNode")}} です。

この OscillatorNode は {{domxref("AudioContext.createOscillator()")}} で生成されます。常に 1 つの出力だけをもち、入力はありません。基本的なプロパティのデフォルト値 （定義 については {{domxref("AudioNode")}} を参照）は、次のとおりです。

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
      <th scope="row">チャンネル カウントモード</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル カウント</th>
      <td><code>2</code> (デフォルトのカウントモードでは使用されません。)</td>
    </tr>
    <tr>
      <th scope="row">チャンネル 解釈</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## コンストラクタ

- {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
  - : ノードの [properties](#properties) の初期値を任意で設定し、新しい OscillatorNode のインスタンスを作成します。
    任意なプロパティ変更が不要で、初期値そのままで良いならば、単にファクトリメソッド、{{domxref("AudioContext.createOscillator()")}} を呼び出すことができます。

## プロパティ

親インターフェース、_{{domxref("AudioScheduledSourceNode")}}_ のプロパティ継承に加え、以下のプロパティがあります。

- {{domxref("OscillatorNode.frequency")}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} であり、振動数・周波数をヘルツ (hertz、記号：Hz)で表わしたものです。(AudioParam は読み取り専用ですが、この値は設定できます。)初期値は 440 HZ (標準 A(ラ) 音) です。

<!---->

- {{domxref("OscillatorNode.detune")}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} であり、振動の離調をセントで表わしたものです。(AudioParam は読み取り専用ですが、この値は設定できます。)初期値は 0 です。

<!---->

- {{domxref("OscillatorNode.type")}}
  - : 再生する波形の種類を指定する文字列です。いくつかの標準値の中から 1 つ、または、{{domxref("PeriodicWave")}} を使用した、カスタム波形を設定することができます。設定する波の種類により、それぞれに合わせたトーンが生成されます。初期値は sine (サイン波) です。

## メソッド

親である _{{domxref("AudioScheduledSourceNode")}}_ のメソッド継承に加え、以下のメソッドがあります。

- {{domxref("OscillatorNode.setPeriodicWave()")}}
  - : 標準的な波形の代わりに、{{domxref("PeriodicWave")}} で設定した周期的な波形が、カスタムな波形として設定されます。これは、廃止された {{domxref("OscillatorNode.setWaveTable()")}} メソッドの代わりです。

## Examples

次の例は、AudioContext を使用し、オシレーターノードでトーンを再生する、基本的な例です。応用例については、[Violent Theremin のデモ](http://mdn.github.io/violent-theremin/)をチェックしてみてください。 (コードは [app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) を参照してください。)

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.value = 440; // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## Specifications

| Specification                                                                                                | Status                               | Comment |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#the-oscillatornode-interface', 'OscillatorNode')}} | {{Spec2('Web Audio API')}} |         |

## Browser compatibility

{{Compat("api.OscillatorNode")}}

## See also

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
