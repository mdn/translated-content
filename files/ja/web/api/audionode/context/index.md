---
title: "AudioNode: context プロパティ"
short-title: context
slug: Web/API/AudioNode/context
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioNode")}} インターフェイスの読み取り専用プロパティ `context` は、関連付けられた {{domxref("BaseAudioContext")}}、すなわちこのノードが参加している処理グラフを表すオブジェクトを返します。

## 値

この `AudioNode` の構築に用いられた {{domxref("AudioContext")}} または {{domxref("OfflineAudioContext")}} です。

## 例

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.context); // AudioContext
console.log(oscillator.context === audioCtx); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
