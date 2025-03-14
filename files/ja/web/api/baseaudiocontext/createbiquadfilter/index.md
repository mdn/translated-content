---
title: "BaseAudioContext: createBiquadFilter() メソッド"
short-title: createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`createBiquadFilter()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("BiquadFilterNode") }} を生成し、いくつかの異なる共通フィルター型として設定可能な 2 次フィルターを表現します。

> **メモ:** {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}} コンストラクターが {{domxref("BiquadFilterNode")}} を作成するのに推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createBiquadFilter()
```

### 引数

なし。

### 返値

{{domxref("BiquadFilterNode")}} です。

## 例

次の例は、AudioContext で Biquad フィルターノードを作成するための基本的な使用方法を示しています。
より完全な応用例/情報については、[Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) デモを調べてください（関連コードについては、[app.js 行 108-193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) を参照してください）。

```js
const audioCtx = new AudioContext();

// このアプリで使う2つのノードを設定する
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

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

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
