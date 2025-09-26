---
title: OscillatorNode.frequency
slug: Web/API/OscillatorNode/frequency
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{ APIRef("Web Audio API") }}

**`frequency`** は {{ domxref("OscillatorNode") }} インターフェイスのプロパティで、 [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} であり、これは発振器の周波数をヘルツ単位で表します。

> [!NOTE]
> 返される `AudioParam` は読み取り専用ですが、それが表す値は読み取り専用ではありません。

## 値

[a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} です。

## 例

以下の例は、発振器ノードを作成するための {{ domxref("AudioContext") }} の基本的な使用方法を示しています。応用例については、 [Violent Theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) を見てみてください。（関連するコードは [app.js](https://github.com/mdn/webaudio-examples/blob/master/violent-theremin/scripts/app.js) を参照）。

```js
// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
