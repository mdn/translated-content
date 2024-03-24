---
title: BaseAudioContext.createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
---

{{ APIRef("Web Audio API") }}

`createBuffer()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、新しい空の {{ domxref("AudioBuffer") }} オブジェクトを生成するために使用されます。このオブジェクトにデータを代入し、{{ domxref("AudioBufferSourceNode") }} を介して再生することができます。

音声バッファーの詳細については、 {{ domxref("AudioBuffer") }} のリファレンスページを参照してください。

> **メモ:** 以前は `createBuffer()` が圧縮されたデータを受け取り、デコードされたサンプルを返すことができましたが、デコードがすべてメインスレッドで行われるため `createBuffer()` が他のコードの実行をブロックするので、この機能は仕様書から削除されました。非同期メソッド `decodeAudioData()` は同じことをします。 MP3 ファイルのような圧縮された音声を受け取り、{{ domxref("AudioBuffer") }} を直接返します。そして {{ domxref("AudioBufferSourceNode") }} で再生することができるのです。 MP3 を再生するような単純な用途では、 `decodeAudioData()` を使用する必要があります。

## 構文

```js
createBuffer(numOfChannels, length, sampleRate);
```

### 引数

> **メモ:** 音声バッファーの仕組みと、これらの引数の意味についての詳しい説明は、基本概念ガイドの[音声バッファー：フレーム、サンプル、チャンネル](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers.3a_frames.2c_samples_and_channels)に書かれています。

- `numOfChannels`
  - : 整数で、このバッファーが持つべきチャンネル数を表します。既定値は 1 で、すべてのユーザエージェントは少なくとも 32 チャンネルに対応しなければなりません。
- `length`
  - : 整数で、バッファーのサイズをサンプルフレーム単位で表します（各サンプルフレームは、バイト単位のサンプルのサイズに `numOfChannels` を掛けたものとなります）。特定の秒数の音声に使用する `length` を決定するには、 `numSeconds * sampleRate` を使用します。
- `sampleRate`
  - : 線形音声データのサンプリングレート（1 秒あたりのサンプルフレーム数）です。すべてのブラウザーは、少なくとも 8,000Hz から 96,000Hz の範囲のサンプリングレートに対応する必要があります。

### 返値

指定されたオプションに基づいて構成された {{domxref("AudioBuffer")}} です。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 1 つ以上のオプションが負の値であるか、あるいは無効な値である場合に発生します（例えば `numberOfChannels` が対応しているよりも大きいか、 `sampleRate` が公称範囲外である場合など）。
- {{jsxref("RangeError")}}
  - : バッファーを割り当てるのに十分なメモリーがない場合に発生します。

## 例

まず、引数の使い方を説明するために、簡単な例をいくつか挙げます。

```js
var audioCtx = new AudioContext();
var buffer = audioCtx.createBuffer(2, 22050, 44100);
```

この呼び出しを使用すると、ステレオバッファー（2 チャンネル）が得られ、 AudioContext が 44100Hz （とても一般的で、ほとんどの通常のサウンドカードはこのレートで動作します）で動作しているいる状態で再生すると、 0.5 秒間（22050 フレーム / 44100Hz = 0.5 秒）になります。

```js
var audioCtx = new AudioContext();
var buffer = audioCtx.createBuffer(1, 22050, 22050);
```

この呼び出しを使用した場合、モノラルバッファー（1 チャネル）が得られ、 AudioContext が 44100Hz で動作している状態で再生すると、自動的に\*リサンプル\*されて 44100Hz となり（すなわち 44100 フレームになる）、 1.0 秒間（44100 フレーム / 44100Hz = 1 秒）になります。

> **メモ:** 音声のリサンプリングは、画像のリサイズにとても似ています。 16 x 16 の画像を持っていて、それを 32 x 32 の領域いっぱいにしたい場合、それをリサイズ（リサンプリング）します。結果は、（リサイズのアルゴリズムによっては、ぼやけたりエッジが立ったりして）品質が落ちますが、うまくいき、リサイズした画像はよりスペースが小さくなります。リサンプルされた音声も全く同じで、スペースは節約できますが、実際には高い周波数のコンテンツ（高音）を適切に再生することはできません。

次は少し複雑な `createBuffer()` の例を見てみましょう。 3 秒間のバッファーを生成し、ホワイトノイズを書き込み、 {{ domxref("AudioBufferSourceNode") }} で再生します。コメントでは、何が起こっているのかを明確に説明しています。 [コードをライブで実行](https://mdn.github.io/webaudio-examples/audio-buffer/)したり、[ソースを表示](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html)したりすることができます。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// AudioContext のサンプリングレートで空の 3 秒のステレオバッファーを作成する
var myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// バッファーにホワイトノイズを書き込む
// 単なる -1.0 から 1.0 の間の乱数の値
for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // データを格納した実際の ArrayBuffer が得られる．
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
// AudioBufferSourceNode を出力先に接続すると
// 音声が聞こえるようになる
source.connect(audioCtx.destination);
// 音源の再生を始める
source.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
