---
title: BaseAudioContext.createScriptProcessor()
slug: Web/API/BaseAudioContext/createScriptProcessor
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - メソッド
  - リファレンス
  - ウェブ音声 API
  - createScriptProcessor
browser-compat: api.BaseAudioContext.createScriptProcessor
translation_of: Web/API/BaseAudioContext/createScriptProcessor
original_slug: Web/API/AudioContext/createScriptProcessor
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

`createScriptProcessor()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、直接音声処理に用いられる {{domxref("ScriptProcessorNode")}} を生成します。

> **Note:** この機能は [AudioWorklet](/ja/docs/Web/API/AudioWorklet) と {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## 構文

```js
createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels)
```

### 引数

- `bufferSize`

  - : サンプルフレーム単位でのバッファーサイズ。指定する場合、 bufferSize は 256, 512, 1024, 2048, 4096, 8192, 16384 の値のいずれかでなければなりません。これが渡されなかった場合、あるいは値が 0 の場合、実装は与えられた環境に最適なバッファーサイズを選択し、それはノードの寿命を通じて 2 の一定乗となります。

    この値は、`audioprocess` イベントが配信される頻度と、各呼び出しで処理される必要があるサンプルフレームの数を制御します。 `bufferSize` の値を小さくすると、遅延は小さく（良く）なります。音声が中断したりグリッチを避けるためには、より高い値が必要です。作者はこのバッファーサイズを指定せず、遅延と音質のバランスをとるために、実装が適切なバッファーサイズを選択できるようにすることをお勧めします。

- `numberOfInputChannels`
  - : 整数で、このノードの入力のチャンネル数を指定します。既定値は 2 です。
- `numberOfOutputChannels`
  - : 整数で、このノードの出力のチャンネル数を指定します。既定値は 2 です。

> **Warning:** Webkit は現在（バージョン 31）、このメソッドを呼び出すときに有効な `bufferSize` を渡すことを要求しています。

> **Note:** numberOfInputChannels` と `numberOfOutputChannels` の両方が 0 にするのは無効です。

### 返値

{{domxref("ScriptProcessorNode")}} です。

## 例

次の例は、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} によって読み込んだトラックを、入力トラック（バッファー）のそれぞれの音声サンプルにホワイトノイズを加えて処理し {{domxref("AudioDestinationNode")}} によって再生する `ScriptProcessorNode` の基本的な使用方法を示しています。各チャンネルと各サンプルフレームに対して、`scriptNode.onaudioprocess`関数は関連する `audioProcessingEvent` を受け取り、それを使って入力バッファの各チャンネルと各チャンネルの各サンプルを通してループし、少量のホワイトノイズを追加してからその結果を各ケースで出力サンプルとしてセットします。

> **Note:** 完全な動作する例については、 GitHub の [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/) リポジトリを参照してください（[ソースコード](https://github.com/mdn/webaudio-examples/blob/master/script-processor-node/index.html)も見てください）。

```js
var myScript = document.querySelector('script');
var myPre = document.querySelector('pre');
var playButton = document.querySelector('button');

// Create AudioContext and buffer source
var audioCtx = new AudioContext();
source = audioCtx.createBufferSource();

// Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel
var scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
console.log(scriptNode.bufferSize);

// load in an audio track via XHR and decodeAudioData

function getData() {
  request = new XMLHttpRequest();
  request.open('GET', 'viper.ogg', true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
    },
    function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
}

// Give the node a function to process audio events
scriptNode.onaudioprocess = function(audioProcessingEvent) {
  // The input buffer is the song we loaded earlier
  var inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  var outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    var inputData = inputBuffer.getChannelData(channel);
    var outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (var sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += ((Math.random() * 2) - 1) * 0.2;
    }
  }
}

getData();

// wire up play button
playButton.onclick = function() {
  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();
}

// When the buffer source stops playing, disconnect everything
source.onended = function() {
  source.disconnect(scriptNode);
  scriptNode.disconnect(audioCtx.destination);
}
```

## 仕様書

2014 年 8 月 29 日の[ウェブ音声 API 仕様書](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createscriptprocessor)公開以降、この機能は非推奨となりました。標準化の目処が立たなくなりました。

これは [AudioWorklet](/ja/docs/Web/API/AudioWorklet) と {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
