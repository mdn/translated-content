---
title: "AudioProcessingEvent: playbackTime プロパティ"
short-title: playbackTime
slug: Web/API/AudioProcessingEvent/playbackTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}{{Deprecated_header}}

**`playbackTime`** は {{domxref("AudioProcessingEvent")}} インターフェイスのプロパティで、音声が再生される時間を表します。 これは {{domxref("AudioContext")}} が使用している時間と同じ座標系です。

## 値

数値で、整数とは限りません。

## 例

```js
const audioContext = new AudioContext();
const processor = audioContext.createScriptProcessor(256, 2, 2);

processor.addEventListener("audioprocess", (event) => {
  const inputBuffer = event.inputBuffer;
  const outputBuffer = event.outputBuffer;

  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Log the corresponding time for this audio buffer
    console.log(`Received audio data to be played at ${event.playbackTime}`);

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

- {{domxref("AudioProcessingEvent")}}
- {{domxref("ScriptProcessorNode")}}
