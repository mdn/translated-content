---
title: "BaseAudioContext: createChannelSplitter() メソッド"
short-title: createChannelSplitter()
slug: Web/API/BaseAudioContext/createChannelSplitter
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`createChannelSplitter()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、 {{domxref("ChannelSplitterNode")}} を作成します。これは音声ストリームの個々のチャンネルにアクセスし、それらを個別に処理するために使用されます。

> **メモ:** {{domxref("ChannelSplitterNode.ChannelSplitterNode", "ChannelSplitterNode()")}} コンストラクターは {{domxref("ChannelSplitterNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createChannelSplitter(numberOfOutputs)
```

### 引数

- `numberOfOutputs`
  - : 入力オーディオストリームのうち、個別に出力したいチャンネル数です。この引数が指定されていない場合の既定値は 6 です。

### 返値

{{domxref("ChannelSplitterNode")}} です。

## 例

次の単純な例では、ステレオトラック（例えば音楽）を分離し、左チャンネルと右チャンネルを別々に処理する方法を示しています。これを使うには、 {{domxref("AudioNode/connect", "AudioNode.connect(AudioNode)")}} メソッドの第 2、第 3 引数を使って、接続元のチャンネルのインデックスと接続先のチャンネルのインデックスを指定することが必要です。

```js
const ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, (data) => {
  const source = ac.createBufferSource();
  source.buffer = data;
  const splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  const merger = ac.createChannelMerger(2);

  // 左チャンネルのボリュームのみ小さくする
  const gainNode = ac.createGain();
  gainNode.gain.setValueAtTime(0.5, ac.currentTime);
  splitter.connect(gainNode, 0);

  // スプリッターをマージャーの 2 番目の入力に接続すると、チャンネルが効果的に交換され、
  // ステレオイメージが反転します。
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  const dest = ac.createMediaStreamDestination();

  // ChannelMergerNode を使っているので、ステレオの MediaStream が
  // できました。これでウェブオーディオグラフを WebRTC や MediaRecorder などに
  // パイプするのに使えます。
  merger.connect(dest);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
