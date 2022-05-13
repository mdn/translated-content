---
title: BaseAudioContext.createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - メソッド
  - リファレンス
  - ウェブ音声 API
  - createBufferSource
browser-compat: api.BaseAudioContext.createBufferSource
translation_of: Web/API/BaseAudioContext/createBufferSource
original_slug: Web/API/AudioContext/createBufferSource
---
{{ APIRef("Web Audio API") }}

`createBufferSource()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、新しい {{ domxref("AudioBufferSourceNode") }} を作成するために使用します。これは {{ domxref("AudioBuffer") }} オブジェクトに含まれる音声データを再生するために使用されます。 {{ domxref("AudioBuffer") }} は {{domxref("BaseAudioContext.createBuffer")}} で生成さされたり、音声トラックのデコードに成功したときに {{domxref("BaseAudioContext.decodeAudioData")}} から返されたりします。

> **Note:** {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}} コンストラクターは、 {{domxref("AudioBufferSourceNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createBufferSource()
```

### 引数

なし。

### 返値

{{domxref("AudioBufferSourceNode")}} です。

## 例

この例では、 2 秒間のバッファーを作成してホワイトノイズで満たし、 {{ domxref("AudioBufferSourceNode") }} で再生しています。コメントでは、何が起こっているのかを簡単に説明しています。

> **Note:** [コードをライブで実行](https://mdn.github.io/webaudio-examples/audio-buffer/)したり、[ソースを閲覧](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html)したりすることもできます。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// ステレオ
var channels = 2;
// AudioContext のサンプリングレートで 2 秒間の
// 空のステレオバッファーを生成する
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // バッファにホワイトノイズを書き込む
  // -1.0 から 1.0 の間の乱数の値
  for (var channel = 0; channel < channels; channel++) {
   // 実際のデータの配列を得る
   var nowBuffering = myArrayBuffer.getChannelData(channel);
   for (var i = 0; i < frameCount; i++) {
     // Math.random() は [0; 1.0] である
     // 音声は [-1.0; 1.0] である必要がある
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // AudioBufferSourceNode を得る
  // これは AudioBuffer を再生するときに使う AudioNode である
  var source = audioCtx.createBufferSource();
  // AudioBufferSourceNode にバッファーを設定する
  source.buffer = myArrayBuffer;
  // AudioBufferSourceNode を出力先に接続すると
  // 音声が聞こえるようになる
  source.connect(audioCtx.destination);
  // 音源の再生を始める
  source.start();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
