---
title: AudioContext
slug: Web/API/AudioContext
---

{{APIRef("Web Audio API")}}

`AudioContext` インターフェイスは{{domxref("AudioNode")}}によって表現され、一緒にリンクした音声モジュールから作った音声処理グラフを表します。音声コンテキストはコンテキストを含むノードの作成と音声処理もしくはデコードの実行の両方を制御します。コンテキスト内部で全てのことが起こるので、何かをする前に `AudioContext` を作る必要があります。

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : `AudioContext` オブジェクトを新しく作成し、返します。

## プロパティ

_親インターフェイス{{domxref("BaseAudioContext")}}からプロパティを継承します。_

- {{domxref("AudioContext.baseLatency")}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref("AudioDestinationNode")}}から音声サブシステムまでの音声を渡す{{domxref("AudioContext")}}によって起きる処理レイテンシーの秒数を返します。
- {{domxref("AudioContext.outputLatency")}} {{readonlyinline}} {{experimental_inline}}
  - : 現在の音声コンテキストの出力レイテンシーの見積もりを返します。

## メソッド

親インターフェイス{{domxref("<em>BaseAudioContext</em>")}} からメソッドを継承します。

- {{domxref("AudioContext.close()")}}
  - : 任意のシステム音声リソースをリリースするために、音声コンテキストを閉じます。
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : {{domxref("HTMLMediaElement")}}と関連付けられた{{domxref("MediaElementAudioSourceNode")}}を生成します。これは{{HTMLElement("video")}}要素もしくは{{HTMLElement("audio")}}要素からの再生や操作をするために使うことができます。
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : ローカルのコンピューターのマイクもしくは他のソースから来る音声ストリームを表現している{{domxref("MediaStream")}}と関連付けられた{{domxref("MediaStreamAudioSourceNode")}}を生成します。
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : ローカルファイルに保存されたものかその他のコンピューターに送信された音声ストリームを表している{{domxref("MediaStream")}}と関連付けられた{{domxref("MediaStreamAudioDestinationNode")}}を生成します
- {{domxref("AudioContext.createMediaStreamTrackSource()")}}
  - : メディアストリームトラックを表している{{domxref("MediaStream")}}と関連づけられた{{domxref("MediaStreamTrackAudioSourceNode")}}を生成します。
- {{domxref("AudioContext.getOutputTimestamp()")}}
  - : 二つの関連づけられたコンテキストの音声ストリームの位置の値を含んでいる `AudioTimestamp` オブジェクトを新しく返します。
- {{domxref("AudioContext.suspend()")}}
  - : 一時的に音声ハードウェアアクセスを停止し、プロセスの CPU/バッテリー使用を減らすために、音声コンテキストの時間の進行を中断します。

### 非推奨メソッド

- {{domxref("AudioContext.resume()")}}

  - : あらかじめ中断させられた音声コンテキストの時間の進行を返します。

    注意: `resume()` メソッドはまだ利用することができます。このメソッドは{{domxref("BaseAudioContext")}}インターフェイス({{domxref("BaseAudioContext.resume()")}}を見てください)上で現在定義されています。したがって、{{domxref("AudioContext")}}インターフェイスと{{domxref("OfflineAudioContext")}}インターフェイスの両方でアクセスすることができます。

## 例

基本的な音声コンテキストの作成方法:

```js
var audioCtx = new AudioContext();
```

クロスブラウザー対応版:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;
// etc.
```

## 仕様

| 仕様書                                                                               | 策定状況                             | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Audio API', '#AudioContext', 'AudioContext')}} | {{Spec2('Web Audio API')}} |          |

## ブラウザーの互換性

{{Compat("api.AudioContext")}}

## 参考

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("OfflineAudioContext")}}
