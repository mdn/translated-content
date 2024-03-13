---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
l10n:
  sourceCommit: 6b8b53f565c67eb22fd78f8dec036c4694ad18d4
---

{{APIRef("Web Audio API")}}

**`AudioBufferSourceNode`** は {{domxref("AudioScheduledSourceNode")}} を継承するインタフェースで、 {{domxref("AudioBuffer")}} に保存されたメモリー内の音声データからなる音声ソースを表します。

このインターフェイスは、再生するタイミングに高い正確性が求められる音声を繰り返し再生する場合特に有益です。例えば、特定のリズムに合わせて、ディスクやネットワークからではなくメモリーから読み出した音声を再生するといった場合です。正確なタイミングで音声を再生したいものの、音声データをディスクやネットワークから読み込む必要がある場合は {{domxref("AudioWorkletNode")}} を使用してください。

{{InheritanceDiagram}}

`AudioBufferSourceNode` は入力がなく、その出力は 1 つで、出力されるチャンネル数は `AudioBuffer` の {{domxref("AudioBufferSourceNode.buffer", "buffer")}} プロパティで示します。バッファーが設定されていない場合、すなわち、 `buffer` が `null` である場合、出力は無音（すべてのサンプルが 0）の単一のチャンネルとなります。

`AudioBufferSourceNode` は一度しか再生できません。つまり、同じ音を再び再生したいのであれば、 {{domxref("AudioScheduledSourceNode.start", "start()")}} を呼び出すたびに新しいノードを作成する必要があります。幸いなことに、これらのノードはとても安価に作成でき、実際の `AudioBuffer` は複数回のサウンド再生に再利用することができます。実際、これらのノードは「使い捨て」で使用することができます。ノードを作成し、 `start()` を呼び出して音の再生を始め、わざわざそのノードの参照を保持する必要はないでしょう。このノードは適切なタイミングで自動的にガベージコレクションされますが、それはサウンドの再生が完了した後しばらくしてからになります。

{{domxref("AudioScheduledSourceNode/stop", "stop()")}} は何度も呼び出すことができます。 `AudioBufferSourceNode` がバッファのー最後に達していないならば、最後の呼び出しがその前の呼び出しを上書きします。

![AudioBufferSourceNodeは、AudioBufferの中身を受け取る](webaudioaudiobuffersourcenode.png)

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
      <td>関連付けられた {{domxref("AudioBuffer")}} によって定義される</td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}}
  - : 新しい `AudioBufferSourceNode` オブジェクトを作成して返します。代替手段として、 {{domxref("BaseAudioContext.createBufferSource()")}} を使用することもできます。詳しくは [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の作成)を参照してください。

## プロパティ

_親である {{domxref("AudioScheduledSourceNode")}} のプロパティを継承しています。_

- {{domxref("AudioBufferSourceNode.buffer")}}
  - : 再生する音声資産を定義する {{domxref("AudioBuffer")}} で、この値を `null` に設定すると、 1 つの無音チャンネル（すべてのサンプルが 0.0 になる）を定義します。
- {{domxref("AudioBufferSourceNode.detune")}}
  - : [k-rate](/ja/docs/Web/API/AudioParam#k-rate) の {{domxref("AudioParam")}} 再生時の離調を[セント](<https://ja.wikipedia.org/wiki/セント_(音楽)>)単位で表します。この値は `playbackRate` と合成され、音を再生する速度を決定します。既定値で `0` （離調なし）、公称範囲は -∞ から ∞ です。
- {{domxref("AudioBufferSourceNode.loop")}}
  - : 論理値で、 {{domxref("AudioBuffer")}} の終わりに達したとき、音声資産を再生しなければならないかどうかを示します。既定値は `false` です。
- {{domxref("AudioBufferSourceNode.loopStart")}} {{optional_inline}}
  - : 浮動小数点数で、 `loop` が `true` のときに {{domxref("AudioBuffer")}} の再生を開始しなければならない時刻を秒単位で表します。既定値では `0` です（各ループの開始時に、音声バッファの先頭から再生が始まることを意味します）。
- {{domxref("AudioBufferSourceNode.loopEnd")}} {{optional_inline}}
  - : 浮動小数点数で、 `loop` が `true` の場合に {{domxref("AudioBuffer")}} の再生が停止して `loopStart` で示した時刻に戻る時刻を、秒単位で表します。既定値は `0` です。
- {{domxref("AudioBufferSourceNode.playbackRate")}}
  - : [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} 音声資産を再生する際の速度係数を定義したもので、値 1.0 は音声の自然サンプリングレートとなります。出力にはピッチ補正が適用されないので、サンプルのピッチを変更するために使用することができます。この値は `detune` と合成され、最終的な再生レートを決定します。

## メソッド

_親である {{domxref("AudioScheduledSourceNode")}} のメソッドを継承しています。_

- {{domxref("AudioBufferSourceNode.start()")}}
  - : バッファーに格納された音声データの再生予約を行うか、または直ちに再生を開始します。また、開始オフセットと再生時間を設定することができます。

### イベントハンドラー

_親である {{domxref("AudioScheduledSourceNode")}} のイベントハンドラーを継承しています。_

## 例

次の例は、2 秒間のバッファをー生成し、ホワイトノイズを書き込み、 `AudioBufferSourceNode` で再生します。コメントは何をしているかを簡単に説明しています。

> **メモ:** [コードをライブで実行](https://mdn.github.io/webaudio-examples/audio-buffer/)したり、[ソースコードを閲覧](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html)したりすることもできます。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// AudioContext のサンプリングレートで空の 3 秒のステレオバッファーを作成
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// バッファーにホワイトノイズを書き込む
// 単なる -1.0 から 1.0 の間の乱数の値である
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // 実際のデータの配列を得る
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < myArrayBuffer.length; i++) {
    // Math.random() は [0; 1.0] である
    // 音声は [-1.0; 1.0] である必要がある
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// AudioBufferSourceNode を得る
// これは AudioBuffer を再生するときに使う AudioNode である
const source = audioCtx.createBufferSource();
// AudioBufferSourceNode にバッファーを設定する
source.buffer = myArrayBuffer;
// AudioBufferSourceNode を出力先に接続すると
// 音声が聞こえるようになる
source.connect(audioCtx.destination);
// 音源の再生を始める
source.start();
```

> **メモ:** `decodeAudioData()` の例は 、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザ互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
