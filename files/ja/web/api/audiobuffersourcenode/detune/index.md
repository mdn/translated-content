---
title: AudioBufferSourceNode.detune
slug: Web/API/AudioBufferSourceNode/detune
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("Web Audio API")}}

**`detune`** は {{domxref("AudioBufferSourceNode")}} インターフェイスのプロパティで、[k-rate](/ja/docs/Web/API/AudioParam#k-rate) の {{domxref("AudioParam")}} 再生時の離調を[セント](<https://ja.wikipedia.org/wiki/セント_(音楽)>)単位で表します。

例えば、 +100 と -100 の値は半音ずつ上下に離調し、 +1200 と -1200 の値は 1 オクターブずつ上下に離調します。

## 値

A [k-rate](/ja/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}
whose value indicates the detuning of oscillation in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).

> **メモ:** `AudioParam` は読み取り専用の値を返しますが、値は読み取り専用ではありません。

## 例

```js
const audioCtx = new AudioContext();

const channelCount = 2;
const frameCount = audioCtx.sampleRate * 2.0; // 2 seconds

const myArrayBuffer = audioCtx.createBuffer(
  channelCount,
  frameCount,
  audioCtx.sampleRate,
);

for (let channel = 0; channel < channelCount; channel++) {
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < frameCount; i++) {
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

const source = audioCtx.createBufferSource();
source.buffer = myArrayBuffer;
source.connect(audioCtx.destination);
source.detune.value = 100; // value in cents
source.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
