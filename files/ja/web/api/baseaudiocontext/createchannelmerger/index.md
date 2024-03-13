---
title: BaseAudioContext.createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
---

{{ APIRef("Web Audio API") }}

`createChannelMerger()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、 {{domxref("ChannelMergerNode")}} を作成します。これは複数の音声ストリームのチャンネルを一つの音声ストリームに結合します。

> **メモ:** {{domxref("ChannelMergerNode.ChannelMergerNode", "ChannelMergerNode()")}} コンストラクターは {{domxref("ChannelMergerNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createChannelMerger(numberOfInputs);
```

### 引数

- numberOfInputs
  - : 出力ストリームに含まれる、入力オーディオストリームのチャンネル数です。この引数が指定されていない場合の既定値は 6 です。

### 返値

{{domxref("ChannelMergerNode")}} です。

## 例

次の例では、ステレオトラック（例えば音楽）を分離し、左チャンネルと右チャンネルを別々に処理する方法を示しています。これを使うには、 {{domxref("AudioNode/connect", "AudioNode.connect(AudioNode)")}} メソッドの第 2、第 3 引数を使って、接続元のチャンネルのインデックスと接続先のチャンネルのインデックスの両方を指定することが必要です。

```js
var ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, function (data) {
  var source = ac.createBufferSource();
  source.buffer = data;
  var splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  var merger = ac.createChannelMerger(2);

  // 左チャンネルのボリュームのみ小さくする
  var gainNode = ac.createGain();
  gainNode.gain.setValueAtTime(0.5, ac.currentTime);
  splitter.connect(gainNode, 0);

  // スプリッターをマージャーの 2 番目の入力に接続すると、チャンネルが効果的に交換され、
  // ステレオイメージが反転します。
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  var dest = ac.createMediaStreamDestination();

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
