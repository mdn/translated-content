---
title: "BaseAudioContext: createScriptProcessor() メソッド"
short-title: createScriptProcessor()
slug: Web/API/BaseAudioContext/createScriptProcessor
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

`createScriptProcessor()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、直接音声処理に用いられる {{domxref("ScriptProcessorNode")}} を生成します。

> [!NOTE]
> この機能は [AudioWorklet](/ja/docs/Web/API/AudioWorklet) と {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## 構文

```js-nolint
createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels)
```

### 引数

- `bufferSize`
  - : サンプルフレーム単位でのバッファーサイズ。指定する場合、 bufferSize は 256, 512, 1024, 2048, 4096, 8192, 16384 の値のいずれかでなければなりません。これが渡されなかった場合、あるいは値が 0 の場合、実装は与えられた環境に最適なバッファーサイズを選択し、それはノードの寿命を通じて 2 の一定乗となります。

    この値は、`audioprocess` イベントが配信される頻度と、各呼び出しで処理される必要があるサンプルフレームの数を制御します。 `bufferSize` の値を小さくすると、遅延は小さく（良く）なります。音声が中断したりグリッチを避けるためには、より高い値が必要です。作者はこのバッファーサイズを指定せず、遅延と音質のバランスをとるために、実装が適切なバッファーサイズを選択できるようにすることをお勧めします。

- `numberOfInputChannels`
  - : 整数で、このノードの入力のチャンネル数を指定します。既定値は 2 です。32 までの値に対応しています。
- `numberOfOutputChannels`
  - : 整数で、このノードの出力のチャンネル数を指定します。既定値は 2 です。32 までの値に対応しています。

> [!WARNING]
> Webkit は現在（バージョン 31）、このメソッドを呼び出すときに有効な `bufferSize` を渡すことを要求しています。

> [!NOTE]
> numberOfInputChannels`と`numberOfOutputChannels` の両方が 0 にするのは無効です。

### 返値

{{domxref("ScriptProcessorNode")}} です。

## 例

### スクリプトプロセッサーを使用してホワイトノイズを追加

次の例は、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} によって読み込んだトラックを、入力トラック（バッファー）のそれぞれの音声サンプルにホワイトノイズを加えて処理し {{domxref("AudioDestinationNode")}} によって再生する `ScriptProcessorNode` の基本的な使用方法を示しています。

各チャンネルと各サンプルフレームに対して、スクリプトノードの {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} イベントハンドラーが関連する `audioProcessingEvent` を使用し、入力バッファーの各チャンネルと各チャンネルの各サンプルを通してループし、少量のホワイトノイズを追加してからその結果を各ケースで出力サンプルとしてセットします。

> [!NOTE]
> [完全な例をライブで実行](https://mdn.github.io/webaudio-examples/script-processor-node/)したり、[ソースを表示](https://github.com/mdn/webaudio-examples/blob/main/script-processor-node/)したりすることができます。

```js
const myScript = document.querySelector("script");
const myPre = document.querySelector("pre");
const playButton = document.querySelector("button");

// Create AudioContext and buffer source
let audioCtx;

async function init() {
  audioCtx = new AudioContext();
  const source = audioCtx.createBufferSource();

  // Create a ScriptProcessorNode with a bufferSize of 4096 and
  // a single input and output channel
  const scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);

  // Load in an audio track using fetch() and decodeAudioData()
  try {
    const response = await fetch("viper.ogg");
    const arrayBuffer = await response.arrayBuffer();
    source.buffer = await audioCtx.decodeAudioData(arrayBuffer);
  } catch (err) {
    console.error(
      `Unable to fetch the audio file: ${name} Error: ${err.message}`,
    );
  }

  // Give the node a function to process audio events
  scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
    // The input buffer is the song we loaded earlier
    let inputBuffer = audioProcessingEvent.inputBuffer;

    // The output buffer contains the samples that will be modified and played
    let outputBuffer = audioProcessingEvent.outputBuffer;

    // Loop through the output channels (in this case there is only one)
    for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
      let inputData = inputBuffer.getChannelData(channel);
      let outputData = outputBuffer.getChannelData(channel);

      // Loop through the 4096 samples
      for (let sample = 0; sample < inputBuffer.length; sample++) {
        // make output equal to the same as the input
        outputData[sample] = inputData[sample];

        // add noise to each output sample
        outputData[sample] += (Math.random() * 2 - 1) * 0.1;
      }
    }
  });

  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();

  // When the buffer source stops playing, disconnect everything
  source.addEventListener("ended", () => {
    source.disconnect(scriptNode);
    scriptNode.disconnect(audioCtx.destination);
  });
}

// wire up play button
playButton.addEventListener("click", () => {
  if (!audioCtx) {
    init();
  }
});
```

## 仕様書

2014 年 8 月 29 日の[ウェブオーディオ API 仕様書](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createscriptprocessor)公開以降、この機能は非推奨となりました。標準化の目処が立たなくなりました。

これは [AudioWorklet](/ja/docs/Web/API/AudioWorklet) と {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
