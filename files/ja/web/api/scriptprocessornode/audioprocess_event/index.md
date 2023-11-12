---
title: "ScriptProcessorNode: audioprocess イベント"
slug: Web/API/ScriptProcessorNode/audioprocess_event
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

{{domxref("ScriptProcessorNode")}} インターフェイスの `audioprocess` イベントは、スクリプトプロセッサーの入力バッファーが処理される準備ができた時発火します。

> **メモ:** この機能は [AudioWorklets](/ja/docs/Web/API/AudioWorklet) および {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

このイベントはキャンセル不可で、バブルしません。

## イベント型

{{domxref("AudioProcessingEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("AudioProcessingEvent")}}

## イベントプロパティ

_親の {{domxref("Event")}} から継承したプロパティも実装しています。_

- `playbackTime` {{ReadOnlyInline}}
  - : 音声が再生される時間を表す `double` の値です。{{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} の時間として定義されます。
- `inputBuffer` {{ReadOnlyInline}}
  - : 処理対象の入力音声データが格納されたバッファーの {{domxref("AudioBuffer")}} です。
    チャンネル数はファクトリーメソッド {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} の引数 `numberOfInputChannels` で指定した数です。
    返される `AudioBuffer` はイベントハンドラーのスコープでのみ有効であることに注意してください。
- `outputBuffer` {{ReadOnlyInline}}
  - : 出力音声データを格納する先であるバッファーの {{domxref("AudioBuffer")}} です。
    チャンネル数はファクトリーメソッド {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} の引数 `numberOfOutputChannels` で指定した数です。
    返される `AudioBuffer` はイベントハンドラーのスコープでのみ有効であることに注意してください。

## 例

```js
scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
  // 入力バッファーは、前に読み込んだ歌です
  const inputBuffer = audioProcessingEvent.inputBuffer;

  // 出力バッファーには、変更されて再生されるサンプルが入ります
  const outputBuffer = audioProcessingEvent.outputBuffer;

  // 出力の各チャンネルについてループします (今回は 1 個のみ)
  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // 4096 個のサンプルについてループします
    for (let sample = 0; sample < inputBuffer.length; sample++) {
      // 出力を入力と同じにします
      outputData[sample] = inputData[sample];

      // 出力の各サンプルにノイズを加えます
      outputData[sample] += (Math.random() * 2 - 1) * 0.2;
    }
  }
});
```

イベントハンドラーを `onaudioprocess` プロパティを用いて設定することもできます。

```js
scriptNode.onaudioprocess = (audioProcessingEvent) => {
  // ...
};
```

## 仕様書

2014 年 8 月 29 日の [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) の発行以降、この機能は非推奨になりました。この機能は標準化を検討されていません。

この機能は [AudioWorklets](/ja/docs/Web/API/AudioWorklet) および {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)
