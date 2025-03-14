---
title: "AudioNode: numberOfOutputs プロパティ"
short-title: numberOfOutputs
slug: Web/API/AudioNode/numberOfOutputs
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{ domxref("AudioNode") }} インターフェイスの `numberOfOutputs` プロパティは、このノードからの出力の数を返します。出力先ノード ({{domxref("AudioDestinationNode") }} など) では、この属性の値は 0 です。

## 値

0 以上の整数です。

## 例

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfOutputs); // 1
console.log(gainNode.numberOfOutputs); // 1
console.log(audioCtx.destination.numberOfOutputs); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
