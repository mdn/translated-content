---
title: "AudioProcessingEvent: outputBuffer プロパティ"
short-title: outputBuffer
slug: Web/API/AudioProcessingEvent/outputBuffer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}{{Deprecated_header}}

**`outputBuffer`** は {{domxref("AudioProcessingEvent")}} インターフェイスの読み取り専用プロパティで、音声処理イベントの出力バッファーを表します。

出力バッファーは {{domxref("AudioBuffer")}} オブジェクトで表されます。このオブジェクトは音声チャンネルの集合を格納し、各チャンネルは一連の振幅としてエンコードされた音声信号波形を表す浮動小数点数の値の配列です。チャンネルの数と各チャンネルの長さは `AudioBuffer` のチャンネル数とバッファーサイズのプロパティによって決まります。

## 値

{{domxref("AudioBuffer")}} オブジェクトです。

## 例

この例では、{{domxref("ScriptProcessorNode")}} が 256 サンプルのバッファーサイズ、2 つの入力チャンネル、2 つの出力チャンネルで作成されています。{{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}} イベントが発行されると、入力バッファーと出力バッファーがイベントオブジェクトから取得されます。入力バッファー内の音声データが処理され、結果が出力バッファーに書き込まれます。この場合、音声データは 0.5 倍に縮小されます。

```js
const audioContext = new AudioContext();
const processor = audioContext.createScriptProcessor(256, 2, 2);

processor.addEventListener("audioprocess", (event) => {
  const inputBuffer = event.inputBuffer;
  const outputBuffer = event.outputBuffer;

  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Process the audio data here
    for (let i = 0; i < outputBuffer.length; i++) {
      outputData[i] = inputData[i] * 0.5;
    }
  }
});

processor.connect(audioContext.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AudioProcessingEvent.inputBuffer")}}
- {{domxref("ScriptProcessorNode")}}
