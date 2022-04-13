---
title: AudioBuffer.getChannelData()
slug: Web/API/AudioBuffer/getChannelData
tags:
  - API
  - AudioBuffer
  - メソッド
  - リファレンス
  - ウェブ音声 API
browser-compat: api.AudioBuffer.getChannelData
translation_of: Web/API/AudioBuffer/getChannelData
---
{{ APIRef("Web Audio API") }}

**`getChannelData()`** は {{ domxref("AudioBuffer") }} インターフェイスのメソッドで、 channel 引数（0 が最初のチャンネル）で定義されたチャンネルに結び付けられた PCM データを {{jsxref("Float32Array")}} で返します。

## 構文

```js
getChannelData(channel);
```

### 引数

- channel
  - : channel プロパティで、データを取得する特定のチャンネルを表すインデックスです。インデックス値 0 は、最初のチャンネルを表します。もし `channel` インデックスの値が {{domxref("AudioBuffer.numberOfChannels")}} よりも大きいか等しい場合は、`INDEX_SIZE_ERR` 例外が発生します。

### 返値

{{jsxref("Float32Array")}} です。

## 例

次の例は、 2 秒間のバッファーを生成し、ホワイトノイズを書き込み、 {{ domxref("AudioBufferSourceNode") }} で再生します。コメントは何をしているかを簡単に説明しています。[コードをすぐに実行する](https://mdn.github.io/audio-buffer/)ことや、[ソースコードを閲覧する](https://github.com/mdn/audio-buffer)こともできます。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// ステレオ
var channels = 2;
// AudioContext のサンプルレートで 2 秒間の空のステレオバッファーを生成する
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // バッファーにホワイトノイズを書き込む;
  // 単なる -1.0 から 1.0 の間の乱数の値である
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
  // AudioBufferSourceNode を出力先に接続すると音声が聞こえるようになる
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
