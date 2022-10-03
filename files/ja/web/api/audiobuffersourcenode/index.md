---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
---

{{APIRef("Web Audio API")}}

**`AudioBufferSourceNode`** は{{domxref("AudioScheduledSourceNode")}}を継承するインタフェースで、{{domxref("AudioBuffer")}}に保存されたインメモリ音声データからなるオーディオソースを表します。`AudioBufferSourceNode`は、再生するタイミングに高い正確性が求められる音声を繰り返し再生する場合特に有益です。例えば、特定のリズムに合わせて、ディスクやネットワークからではなくメモリから読みだした音声を再生するといった場合です。正確なタイミングで音声を再生したいものの、音声データがディスクやネットワークから読み込まれる必要がある場合は{{domxref("AudioWorkletNode")}}を使用してください。

{{InheritanceDiagram(600, 140)}}

`AudioBufferSourceNode` は入力がなく、その出力は 1 つで、出力されるチャンネル数は AudioBufferSourceNode.buffer で参照される {{domxref("AudioBuffer")}} のチャンネル数によって決まります。この属性値が NULL の場合、つまりバッファがセットされていない場合、無音が出力されます。{{domxref("AudioBufferSourceNode")}}は一度しか再生できません。つまり、`AudioBufferSourceNode.start()`の呼び出しは一度しかできません。もし、再び再生するならば、別の`AudioBufferSourceNode`を生成する必要があります。これらのノードは安価に生成でき、`AudioBuffer`は何度も再生できます。よく`AudioBufferSourceNode`は「撃ちっぱなし」で使わなければならない、と言われます。つまり、一度再生を始めると、そのノードへの参照はなくなり、自動的にガベージコレクトされます。

`AudioBufferSourceNode.stop()`は何度も呼ぶことができます。`AudioBufferSourceNode`がバッファの最後に達していないならば、最後の呼び出しがその前の呼び出しを上書きします。

![The AudioBufferSourceNode takes the content of an AudioBuffer and m](WebAudioAudioBufferSourceNode.png)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td>defined by the associated {{domxref("AudioBuffer")}}</td>
    </tr>
  </tbody>
</table>

## コンストラクタ

- {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}}
  - : `AudioBufferSourceNode` オブジェクトを新しく作成して返します。{{domxref("AudioBufferSourceNode")}}は{{domxref("AudioContext.createBufferSource()")}}メソッドを用いてインスタンス化することができます。

## プロパティ

_親である{{domxref("AudioNode")}}のプロパティを継承しています。_

- {{domxref("AudioBufferSourceNode.buffer")}}
  - : 再生される音声の{{domxref("AudioBuffer")}}です。NULL の場合 1 チャンネルからなる無音の音声（すべてのサンプルが 0.0）です。
- {{domxref("AudioBufferSourceNode.detune")}}
  - : [セント](https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%B3%E3%83%88_%28%E9%9F%B3%E6%A5%BD%29)単位のデチューンを表す[k-rate](/ja/docs/DOM/AudioParam#k-rate){{domxref("AudioParam")}}です。この値と`playbackRate`の組み合わせで音声が再生される速度が決定されます。デフォルト値は 0（デチューンなし）で、公称範囲は -∞ から ∞ です。
- {{domxref("AudioBufferSourceNode.loop")}}
  - : {{domxref("AudioBuffer")}}の最後に達したとき再び再生するかを表すブール値です。デフォルトは`false`です。
- {{domxref("AudioBufferSourceNode.loopStart")}} {{optional_inline}}
  - : `loop`が`true`のとき、{{domxref("AudioBuffer")}}を再び再生する位置(秒単位)を表す浮動小数点数です。デフォルトは 0 で、これは音声の初めからループが始まることを意味します。
- {{domxref("AudioBufferSourceNode.loopEnd")}} {{optional_inline}}
  - : `loop`が`true`のとき、{{domxref("AudioBuffer")}}の再生を停止して`loopStart`の地点に戻る位置(秒単位)を表す浮動小数点数です。デフォルトは 0 です。
- {{domxref("AudioBufferSourceNode.playbackRate")}}
  - : 再生される音声の速度要素を表す[a-rate](/ja/docs/Web/API/AudioParam#a-rate){{domxref("AudioParam")}}です。この値が 1.0 のとき通常のサンプリングレートで出力されます。出力にピッチの修正が適用されない場合は、サンプルのピッチの変更に使うことができます。この値と`detune`の組み合わせで音声が再生される速度が決定されます。

### イベントハンドラ

_親である{{domxref("AudioScheduledSourceNode")}}のイベントハンドラを継承しています。_

- {{domxref("AudioBufferSourceNode.onended")}}
  - : {{event("ended_(Web_Audio)", "ended")}}イベントに関するコールバックを格納したイベントハンドラです。

## メソッド

_親である{{domxref("AudioNode")}}のメソッドを継承しています。_

- {{domxref("AudioBufferSourceNode.start()")}}
  - : 設定された音声の再生をスケジュールするか、直ちに再生します。
- {{domxref("AudioBufferSourceNode.stop()")}}
  - : 設定された音声の再生の停止をスケジュールするか、直ちに停止します。

## 例

次の例は、2 秒間のバッファを生成し、ホワイトノイズを書き込み、[`AudioBufferSourceNode`](/ja/docs/Web/API/AudioBufferSourceNode)で再生します。コメントは何をしているかを簡単に説明しています。

> **メモ:** [コードをすぐに実行する](https://mdn.github.io/webaudio-examples/audio-buffer/)ことや、[ソースコードを閲覧する](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html)こともできます。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// ステレオ
var channels = 2;
// AudioContextのサンプルレートで2秒間の空のステレオバッファを生成する
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // バッファにホワイトノイズを書き込む;
  // 単なる-1.0から1.0の間の乱数の値である
  for (var channel = 0; channel < channels; channel++) {
   // 実際のデータの配列を得る
   var nowBuffering = myArrayBuffer.getChannelData(channel);
   for (var i = 0; i < frameCount; i++) {
     // Math.random()は[0; 1.0]である
     // 音声は[-1.0; 1.0]である必要がある
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // AudioBufferSourceNodeを得る
  // これはAudioBufferを再生するときに使うAudioNodeである
  var source = audioCtx.createBufferSource();
  // AudioBufferSourceNodeにバッファを設定する
  source.buffer = myArrayBuffer;
  // AudioBufferSourceNodeを出力先に接続すると音声が聞こえるようになる
  source.connect(audioCtx.destination);
  // 音源の再生を始める
  source.start();
}
```

> **メモ:** `decodeAudioData`の例は、{{domxref("AudioContext.decodeAudioData")}}のページを参照してください。

## 仕様

| Specification                                                                                                        | Status                               | Comment |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#AudioBufferSourceNode-section', 'AudioBufferSourceNode')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザ互換性

{{Compat("api.AudioBufferSourceNode")}}

### Chrome notes

The buffer property was removed in {{CompatChrome(44.0)}}.

## 関連情報

- [Using the Web Audio API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
