---
title: "GainNode: gain プロパティ"
short-title: gain
slug: Web/API/GainNode/gain
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{ APIRef("Web Audio API") }}

{{ domxref("GainNode") }} インターフェイスの `gain` プロパティは、適用するゲインを表す [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} です。

## 値

{{domxref("AudioParam")}} です。

> [!NOTE]
> 返される `AudioParam` は読み取り専用ですが、それが表す値は読み取り専用ではありません。

## 例

[`BaseAudioContext.createGain()`](/ja/docs/Web/API/BaseAudioContext/createGain#%E4%BE%8B) に、`AudioContext` を用いて `GainNode` を作成し、その `gain` プロパティの値を変えることで音声を消音したり消音解除したりするサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
