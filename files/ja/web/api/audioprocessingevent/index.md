---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

`AudioProcessingEvent` は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のインターフェイスで、{{domxref("ScriptProcessorNode")}} 入力バッファーが処理可能な状態になったときに発生するイベントを表します。

このインターフェイスを持つ `audioprocess` イベントは、音声処理が必要なときに {{domxref("ScriptProcessorNode")}} で発生します。音声処理中、入力バッファーが読み込まれ、処理されて出力音声データが生成され、出力バッファーに書き込まれます。

> **警告:** この機能は非推奨となったので、[`AudioWorklet`](/ja/docs/Web/API/AudioWorklet) で置き換えてください。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AudioProcessingEvent.AudioProcessingEvent", "AudioProcessingEvent()")}} {{Deprecated_Inline}}
  - : 新しい `AudioProcessingEvent` オブジェクトを生成します。

## インスタンスプロパティ

_親プロパティである {{domxref("Event")}} から継承されたプロパティも実装しています_。

- {{domxref("AudioProcessingEvent.playbackTime", "playbackTime")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : double 型で、音声が再生される時間を表します。 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} の時刻で定義されます。
- {{domxref("AudioProcessingEvent.inputBuffer", "inputBuffer")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 処理する入力音声データを含むバッファーである {{domxref("AudioBuffer")}} を指定します。
    チャンネル数はファクトリーメソッド {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} の引数 `numberOfInputChannels` として定義されています。
    なお、返された <code>AudioBuffer</code> は、イベントハンドラーのスコープ内のみで有効であることに注意してください。
- {{domxref("AudioProcessingEvent.outputBuffer", "outputBuffer")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 出力する音声データを書き込むバッファーである {{domxref("AudioBuffer")}} を指定します。
    チャンネル数はファクトリーメソッド {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} の引数 <code>numberOutputChannels</code> として定義されています。
    なお、返された <code>AudioBuffer</code> は、イベントハンドラーのスコープ内のみで有効であることに注意してください。

## 例

次の例は、`ScriptProcessorNode` を使用して、{{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} で読み込んだ音声を{{domxref("AudioDestinationNode")}} で処理し、入力トラック（バッファー）の各音声サンプルにホワイトノイズを追加し、{{domxref("AudioDestinationNode")}} を通して再生する方法を示しています。 各チャンネルと各サンプルフレームに対して、`scriptNode.onaudioprocess` 関数は関連する `audioProcessingEvent` を受け取り、それを用いて入力バッファー内の各チャンネルと各チャンネル内の各サンプルをループし、少量のホワイトノイズを追加してから、その結果をそれぞれのケースで出力サンプルに設定します。

> **メモ:** 完全な動作する例は、GitHub の [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/) リポジトリーを参照してください（[ソースコード](https://github.com/mdn/webaudio-examples/blob/master/script-processor-node/index.html)にもアクセスできます）。

```js
const myScript = document.querySelector("script");
const myPre = document.querySelector("pre");
const playButton = document.querySelector("button");

// Create AudioContext and buffer source
const audioCtx = new AudioContext();
const source = audioCtx.createBufferSource();

// Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel
const scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
console.log(scriptNode.bufferSize);

// load in an audio track via XHR and decodeAudioData

function getData() {
  request = new XMLHttpRequest();
  request.open("GET", "viper.ogg", true);
  request.responseType = "arraybuffer";
  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      (buffer) => {
        myBuffer = buffer;
        source.buffer = myBuffer;
      },
      (e) => console.error(`Error with decoding audio data: ${e.err}`),
    );
  };
  request.send();
}

// Give the node a function to process audio events
scriptNode.onaudioprocess = (audioProcessingEvent) => {
  // The input buffer is the song we loaded earlier
  const inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  const outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (let sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += (Math.random() * 2 - 1) * 0.2;
    }
  }
};

getData();

// Wire up the play button
playButton.onclick = () => {
  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();
};

// When the buffer source stops playing, disconnect everything
source.onended = () => {
  source.disconnect(scriptNode);
  scriptNode.disconnect(audioCtx.destination);
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
