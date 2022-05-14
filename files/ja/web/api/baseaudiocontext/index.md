---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
tags:
  - API
  - 音声
  - BaseAudioContext
  - コンテキスト
  - インターフェイス
  - リファレンス
  - ウェブ音声 API
  - sound
browser-compat: api.BaseAudioContext
translation_of: Web/API/BaseAudioContext
---
{{APIRef("Web Audio API")}}

`BaseAudioContext` は[ウェブ音声 API](/ja/docs/Web/API/Web_Audio_API) のインターフェイスで、 {{domxref("AudioContext")}} と {{domxref("OfflineAudioContext")}} で表されるオンラインとオフラインのオーディオ処理グラフの基本定義として動作します。 `BaseAudioContext` を直接使用することはありません。これらの 2 つの継承されたインターフェースのいずれかを介して、その機能を使用することになります。

`BaseAudioContext` はイベントのターゲットとなることができるので、 {{domxref("EventTarget")}} インターフェイスを実装しています。

{{InheritanceDiagram}}

## プロパティ

- {{domxref("BaseAudioContext.audioWorklet")}} {{experimental_inline}} {{readonlyInline}} {{securecontext_inline}}
  - : {{domxref("AudioWorklet")}} オブジェクトを返します。これは {{domxref("AudioNode")}} を JavaScript コードで作成および管理するために使用することができ、 {{domxref("AudioWorkletProcessor")}} インターフェイスを実装していて、バックグラウンドで実行して音声データを処理することができます。
- {{domxref("BaseAudioContext.currentTime")}} {{readonlyInline}}
  - : スケジューリングに使用される秒単位で増加するハードウェア時間を表す倍精度浮動小数点値を返します。 `0` から始まります。
- {{domxref("BaseAudioContext.destination")}} {{readonlyInline}}
  - : このコンテキストですべての音声の最終的な出力先を表す {{domxref("AudioDestinationNode")}} を返します。 オーディオレンダリングデバイスと考えることができます。
- {{domxref("BaseAudioContext.listener")}} {{readonlyInline}}
  - : 三次元空間化に使用される {{domxref("AudioListener")}} オブジェクトを返します。
- {{domxref("BaseAudioContext.sampleRate")}} {{readonlyInline}}
  - : このコンテキスト内のすべてのノードで使用されるサンプリングレート（サンプル/秒）を単精度浮動小数点値で返します。 {{domxref("AudioContext")}} のサンプリングレートを変更することはできません。
- {{domxref("BaseAudioContext.state")}} {{readonlyInline}}
  - : 現在の `AudioContext` の状態を返します。

### イベント

- {{domxref("BaseAudioContext.statechange_event", "statechange")}}
  - : 状態変化メソッド（{{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, {{domxref("AudioContext.close")}}）のいずれかが呼ばれたことによって `AudioContext` の状態が変化したときに発生します。

## メソッド

_{{domxref("EventTarget")}} インターフェイスから継承しているメソッドもあります。_

- {{domxref("BaseAudioContext.createAnalyser()")}}
  - :  {{domxref("AnalyserNode")}} を作成します。これは音声の時間と周波数データを公開し、データの可視化などに利用できます。
- {{domxref("BaseAudioContext.createBiquadFilter()")}}
  - :  {{domxref("BiquadFilterNode")}} を作成します。これはハイパス、ローパス、バンドパスなどの一般的なフィルター型として設定可能な 2 次フィルターを表します。
- {{domxref("BaseAudioContext.createBuffer()")}}
  - : 新しい空の {{ domxref("AudioBuffer") }} オブジェクトを作成します。これにデータを入力して {{ domxref("AudioBufferSourceNode") }} で再生できます。
- {{domxref("BaseAudioContext.createBufferSource()")}}
  - : {{domxref("AudioBufferSourceNode")}} を作成します。これは {{domxref("AudioBuffer") }} オブジェクトに含まれる音声データを再生または操作するために使用することができます。 {{ domxref("AudioBuffer") }} は {{domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()")}} によって生成されるか、オーディオトラックのデコードに成功すると {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} によって返されます。
- {{domxref("BaseAudioContext.createConstantSource()")}}
  - : {{domxref("ConstantSourceNode")}} オブジェクトを作成します。これはすべてのサンプルが同じ値を持つモノラル（1 チャンネル）音声信号を連続的に出力する音声ソースです。
- {{domxref("BaseAudioContext.createChannelMerger()")}}
  - : {{domxref("ChannelMergerNode")}} を作成します。これは複数の音声ストリームのチャンネルを 1 つの音声ストリームに結合するために使用します。
- {{domxref("BaseAudioContext.createChannelSplitter()")}}
  - : {{domxref("ChannelSplitterNode")}} を作成します。これは音声ストリームの個々のチャンネルにアクセスし、それらを個別に処理するために使用されます。
- {{domxref("BaseAudioContext.createConvolver()")}}
  - : {{domxref("ConvolverNode")}} を作成します。これはオーディオグラフにコンボリューション効果（残響効果など）を適用するために使用されます。
- {{domxref("BaseAudioContext.createDelay()")}}
  - : {{domxref("DelayNode")}} を作成します。これは入力される音声信号を一定時間遅延させるために使用します。このノードは、ウェブ音声 API グラフでフィードバックループを作成する際にも便利です。
- {{domxref("BaseAudioContext.createDynamicsCompressor()")}}
  - : {{domxref("DynamicsCompressorNode")}} を作成します。これは音声信号に音響圧縮をかけるために使用します。
- {{domxref("BaseAudioContext.createGain()")}}
  - :  {{domxref("GainNode")}} を作成します。これはオーディオグラフの全体的な音量を制御するために使用することができます。
- {{domxref("BaseAudioContext.createIIRFilter()")}}
  - : {{domxref("IIRFilterNode")}} を作成します。これは複数の異なる一般的なフィルター種別として設定可能な二次フィルタを表します。
- {{domxref("BaseAudioContext.createOscillator()")}}
  - : {{domxref("OscillatorNode")}} を作成します。これは周期的な波形を表すソースです。基本的には音程を生成します。
- {{domxref("BaseAudioContext.createPanner()")}}
  - : {{domxref("PannerNode")}} を作成します。これは入力されるオーディオストリームを三次元空間で空間化するために使用されます。
- {{domxref("BaseAudioContext.createPeriodicWave()")}}
  - : {{domxref("PeriodicWave")}} を作成します。これは、{{ domxref("OscillatorNode") }} の出力を決定するために使用できる、周期的な波形を定義するために使用します。
- {{domxref("BaseAudioContext.createScriptProcessor()")}} {{deprecated_inline}}
  - : {{domxref("ScriptProcessorNode")}} を作成します。これは JavaScript で直接音声処理を行うために使用します。
- {{domxref("BaseAudioContext.createStereoPanner()")}}
  - :  {{domxref("StereoPannerNode")}} を作成します。これは音声ソースにステレオパニングを適用するために使用することができます。
- {{domxref("BaseAudioContext.createWaveShaper()")}}
  - : 非線形歪み効果を実装するために使用される {{domxref("WaveShaperNode")}} を作成します。
- {{domxref("BaseAudioContext.decodeAudioData()")}}
  - : {{jsxref("ArrayBuffer")}} に格納された音声ファイルのデータを非同期にデコードします。この場合、 `ArrayBuffer` は通常 {{domxref("XMLHttpRequest")}} の `response` 属性に `responseType` を設定した後に読み込まれます。このメソッドは完全なファイルに対してのみ動作し、音声ファイルの断片に対しては動作しません。

## 例

基本的なオーディオコンテキストの宣言:

```js
const audioContext = new AudioContext();
```

クロスブラウザー対応の変化形:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const oscillatorNode = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const finish = audioContext.destination;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioContext")}}
- {{domxref("OfflineAudioContext")}}
