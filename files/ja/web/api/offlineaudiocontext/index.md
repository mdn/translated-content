---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
---

{{APIRef("Web Audio API")}}`OfflineAudioContext` インターフェイスは {{domxref("AudioContext")}} インターフェイスの一種で、{{domxref("AudioNode")}} をつなげて造られる音声処理グラフを表しています。通常の {{domxref("AudioContext")}} と異なり、`OfflineAudioContext` で処理された音声はハードウェアから再生されることはありません。処理された結果は {{domxref("AudioBuffer")}} に出力されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("OfflineAudioContext.OfflineAudioContext()")}}
  - : 新しい `OfflineAudioContext` のインスタンスを作成します。

## プロパティ

_親インターフェイスである {{domxref("BaseAudioContext")}} からのプロパティも継承します。_

- {{domxref('OfflineAudioContext.length')}} {{readonlyinline}}
  - : サンプルフレーム数で表されるバッファの大きさの整数値。

### イベントハンドラー

- {{domxref("OfflineAudioContext.oncomplete")}}
  - : 処理終了時に呼ばれる {{event("Event_handlers", "event handler")}} イベントハンドラーです。 {{event("complete")}} イベント (型は {{domxref("OfflineAudioCompletionEvent")}} )を受け取ります。このイベントは、{{domxref("OfflineAudioContext.startRendering()")}} のイベント駆動型が利用された場合、処理終了時に送出さます。

## メソッド

_親インターフェースである {{domxref("BaseAudioContext")}} からのメソッドも継承します。_

- {{domxref("OfflineAudioContext.resume()")}}
  - : Resumes the progression of time in an audio context that has previously been suspended.
- {{domxref("OfflineAudioContext.suspend()")}}
  - : Schedules a suspension of the time progression in the audio context at the specified time and returns a promise.
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : Starts rendering the audio, taking into account the current connections and the current scheduled changes. This page covers both the event-based version and the promise-based version.

## 例

この例では、{{domxref("AudioContext")}} と `OfflineAudioContext` 二つのオブジェクトを作っています。`AudioContext` は XHR ({{domxref("AudioContext.decodeAudioData")}})でオーディオトラックを読み込むのに使い、`OfflineAudioContext` で{{domxref("AudioBufferSourceNode")}} の中に音声をレンダリングし、そしてその音声を再生します。オフライン音声グラフのセットアップが終わった後、{{domxref("OfflineAudioContext.startRendering")}} を使って {{domxref("AudioBuffer")}} にレンダリングする必要があります。

`startRendering()` の Promise が解決されるとレンダリングは完了し、出力結果の `AudioBuffer` が Promise の結果として戻されます。

At this point we create another audio context, create an {{domxref("AudioBufferSourceNode")}} inside it, and set its buffer to be equal to the promise `AudioBuffer`. This is then played as part of a simple standard audio graph.

> **メモ:** For a working example, see our [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) Github repo (see the [source code](https://github.com/mdn/webaudio-examples/tree/master/offline-audio-context-promise) too.)

```js
// オンラインとオフラインのオーディオコンテキストを定義

var audioCtx = new AudioContext();
var offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// XHRで音声トラックを読み込み、
// decodeAudioData でデコードして OfflineAudioContext で再生する。

function getData() {
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx.startRendering().then(function(renderedBuffer) {
        console.log('Rendering completed successfully');
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var song = audioCtx.createBufferSource();
        song.buffer = renderedBuffer;

        song.connect(audioCtx.destination);

        play.onclick = function() {
          song.start();
        }
      }).catch(function(err) {
          console.log('Rendering failed: ' + err);
          // 注意: OfflineAudioContext の startRendering が二回以上呼び出されるとPromise はリジェクトされます。
      });
    });
  }

  request.send();
}

// getData で処理を開始する。

getData();
```

## 仕様書

| 仕様書                                                                                               | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Audio API', '#OfflineAudioContext', 'OfflineAudioContext')}} | {{Spec2('Web Audio API')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.OfflineAudioContext")}}

## 関連情報

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
