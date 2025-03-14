---
title: "AudioNode: numberOfInputs プロパティ"
short-title: numberOfInputs
slug: Web/API/AudioNode/numberOfInputs
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioNode")}} インターフェイスの `numberOfInputs` は、このノードに供給される入力の数を返します。音源ノードは `numberOfInputs` の値が 0 であるノードという定義です。

## 値

0 以上の整数です。

## 例

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfInputs); // 0
console.log(gainNode.numberOfInputs); // 1
console.log(audioCtx.destination.numberOfInputs); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
