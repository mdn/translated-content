---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
---

{{APIRef("Web Audio API")}}

[ウェブ音声 API](/ja/docs/Web/API/Web_Audio_API) の `AudioProcessingEvent` は {{domxref("ScriptProcessorNode")}} 入力バッファーが処理可能な状態になったときに発生するイベントを表します。

> **メモ:** 2014 年 8 月 29 日のウェブ音声 API 仕様書公開時点で、この機能は非推奨とされ、まもなく [AudioWorklet](https://webaudio.github.io/web-audio-api/#audioworklet) に置き換わる予定です。

{{InheritanceDiagram}}

## コンストラクター

- `AudioProcessingEvent()`
  - : 新しい `AudioProcessingEvent` オブジェクトを生成します。

## プロパティ

_親プロパティである {{domxref("Event")}} から継承されたプロパティも実装しています_。

- `playbackTime` {{ReadOnlyInline}}
  - : double 型で、音声が再生される時間を表します。 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} の時刻で定義されます。
- `inputBuffer` {{ReadOnlyInline}}
  - : 処理する入力音声データを含むバッファーである {{domxref("AudioBuffer")}} を指定します。
    チャンネル数はファクトリーメソッド {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} の引数 `numberOfInputChannels` として定義されています。
    なお、返された <code>AudioBuffer</code> は、イベントハンドラーのスコープ内のみで有効であることに注意してください。
- `outputBuffer` {{ReadOnlyInline}}
  - : 出力する音声データを書き込むバッファーである {{domxref("AudioBuffer")}} を指定します。
    チャンネル数はファクトリーメソッド {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}} の引数 <code>numberOutputChannels</code> として定義されています。
    なお、返された <code>AudioBuffer</code> は、イベントハンドラーのスコープ内のみで有効であることに注意してください。

## 例

`AudioProcessingEvent` を使用したコード例は [`BaseAudioContext.createScriptProcessor()`](/ja/docs/Web/API/BaseAudioContext/createScriptProcessor#例) を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
