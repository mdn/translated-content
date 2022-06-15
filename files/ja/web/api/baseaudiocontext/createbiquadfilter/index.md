---
title: BaseAudioContext.createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - メソッド
  - リファレンス
  - ウェブ音声 API
  - createBiquadFilter
browser-compat: api.BaseAudioContext.createBiquadFilter
translation_of: Web/API/BaseAudioContext/createBiquadFilter
original_slug: Web/API/AudioContext/createBiquadFilter
---
{{ APIRef("Web Audio API") }}

`createBiquadFilter()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("BiquadFilterNode") }} を生成し、いくつかの異なる共通フィルター型として設定可能な 2 次フィルターを表現します。

> **Note:** {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}} コンストラクターが {{domxref("BiquadFilterNode")}} を作成するのに推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createBiquadFilter()
```

### 引数

なし。

### 返値

{{domxref("BiquadFilterNode")}} です。

## 例

次の例は AudioContext で Biquad フィルターノードを作成する基本的な使い方を示しています。完全に動作する例は、 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) を参照してください（[ソースコード](https://github.com/mdn/voice-change-o-matic)も参照してください）。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// このアプリで使う2つのノードを設定する
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();

// ノードを接続する

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// 二次フィルターで操作する

biquadFilter.type = "lowshelf";
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
