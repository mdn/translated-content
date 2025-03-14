---
title: "BaseAudioContext: createBufferSource() メソッド"
short-title: createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

`createBufferSource()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、新しい {{ domxref("AudioBufferSourceNode") }} を作成するために使用します。これは {{ domxref("AudioBuffer") }} オブジェクトに含まれる音声データを再生するために使用されます。 {{domxref("AudioBuffer")}} は {{domxref("BaseAudioContext.createBuffer")}} で生成さされたり、音声トラックのデコードに成功したときに {{domxref("BaseAudioContext.decodeAudioData")}} から返されたりします。

> **メモ:** {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}} コンストラクターは、 {{domxref("AudioBufferSourceNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createBufferSource()
```

### 引数

なし。

### 返値

{{domxref("AudioBufferSourceNode")}} です。

## 例

この例では、 2 秒間のバッファーを作成してホワイトノイズで満たし、 {{ domxref("AudioBufferSourceNode") }} で再生しています。コメントでは、何が起こっているのかを簡単に説明しています。

> **メモ:** [コードをライブで実行](https://mdn.github.io/webaudio-examples/audio-buffer/)したり、[ソースを閲覧](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html)したりすることもできます。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// ステレオ
const channels = 2;
// AudioContext のサンプリングレートで 2 秒間の
// 空のステレオバッファーを生成する
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(
  channels,
  frameCount,
  audioCtx.sampleRate,
);

button.onclick = () => {
  // バッファーにホワイトノイズを書き込む
  // -1.0 から 1.0 の間の乱数の値
  for (let channel = 0; channel < channels; channel++) {
    // 実際のデータの配列を得る
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() は [0; 1.0] である
      // 音声は [-1.0; 1.0] である必要がある
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // AudioBufferSourceNode を得る
  // これは AudioBuffer を再生するときに使う AudioNode である
  const source = audioCtx.createBufferSource();
  // AudioBufferSourceNode にバッファーを設定する
  source.buffer = myArrayBuffer;
  // AudioBufferSourceNode を出力先に接続すると
  // 音声が聞こえるようになる
  source.connect(audioCtx.destination);
  // 音源の再生を始める
  source.start();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
