---
title: OscillatorNode.detune
slug: Web/API/OscillatorNode/detune
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{ APIRef("Web Audio API") }}

`detune` は {{ domxref("OscillatorNode") }} インターフェイスのプロパティで、 [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} であり、発振器の離調を[セント](<https://ja.wikipedia.org/wiki/セント_(音楽)>)で表します。

> [!NOTE]
> 返される `AudioParam` は読み取り専用ですが、それが表す値は読み取り専用ではありません。

## 値

[a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} です。

## 例

以下の例では、発振器ノードを作成するための {{ domxref("AudioContext") }} の基本的な使い方を示しています。応用例や情報については、この [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) デモ（関連するコードは [app.js](https://github.com/mdn/webaudio-examples/blob/master/violent-theremin/scripts/app.js) を参照）をご覧ください。

```js
// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents
oscillator.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
