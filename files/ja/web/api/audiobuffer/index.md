---
title: AudioBuffer
slug: Web/API/AudioBuffer
tags:
  - API
  - AudioBuffer
  - インターフェイス
  - リファレンス
  - ウェブ音声 API
browser-compat: api.AudioBuffer
translation_of: Web/API/AudioBuffer
---
{{APIRef("Web Audio API")}}

**`AudioBuffer`** インターフェイスはメモリー上の短い音声を表すもので、 {{ domxref("AudioContext.decodeAudioData()") }} メソッドで音声ファイルから生成されたり、 {{ domxref("AudioContext.createBuffer()") }} を使って生のデータから生成されたりします。 AudioBuffer に入れた後、その音声は {{ domxref("AudioBufferSourceNode") }} に渡せば再生できます。

これらのオブジェクトは短い、一般的には 45 秒未満の、断片的な音声を保持するために設計されています。それよりも長い音声は、 {{domxref("MediaElementAudioSourceNode")}} のオブジェクトが適しています。バッファーには、ノンインターリーブ IEEE754 32bit リニア PCM で、 `-1` から `+1` の範囲に正規化された形式で格納されます。。つまり、 32 ビット浮動小数点バッファーで、それぞれのサンプルは -1.0 から 1.0 の間です。 AudioBuffer に複数のチャンネルがある場合は、それぞれ分かれたバッファーに格納されます。

## コンストラクター

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : 新しい `AudioBuffer` オブジェクトのインスタンスを生成して返します。

## プロパティ

- {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}
  - : バッファーに格納された PCM データの 1 秒あたりのサンプル数であるサンプリングレートを表す float を返します。
- {{domxref("AudioBuffer.length")}} {{readonlyInline}}
  - : バッファーに格納された PCM データの秒数で長さを表す整数を返します。
- {{domxref("AudioBuffer.duration")}} {{readonlyInline}}
  - : バッファーに格納された PCM データの時間を秒単位で表す double 値を返します。
- {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}
  - : バッファーに格納された PCM データによって記述されるディスクリート音声チャンネルの数を表す整数を返します。

## メソッド

- {{domxref("AudioBuffer.getChannelData()")}}
  - : 引数 `channel` で定義されたチャンネルに関連付けられた PCM データを含む {{jsxref("Float32Array")}} を返します（`0` は最初のチャンネルを表します）。
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : `AudioBuffer` の指定されたチャンネルから、サンプルを配列 `destination` にコピーします。
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : 音声バッファー `AudioBuffer` の指定されたチャンネルに、配列 `source` からサンプルをコピーします。

## 例

次の簡単な例では、 `AudioBuffer` の生成し、バッファーにランダムなホワイトノイズを書き込む方法を示しています。 [webaudio-examples](https://github.com/mdn/webaudio-examples) リポジトリーには完全なソースコードと、[ライブ実行](https://mdn.github.io/webaudio-examples/audio-buffer/)版があります。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// AudioContextのサンプルレートで 3 秒間の空のステレオバッファーを生成する
var myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 3, audioCtx.sampleRate);

// バッファにホワイトノイズを書き込む
// -1.0 から 1.0 の間の乱数の値で埋めるだけ
for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // 実際のデータの配列を得る
  var nowBuffering = myArrayBuffer.getChannelData(channel);
  for (var i = 0; i < myArrayBuffer.length; i++) {
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
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
