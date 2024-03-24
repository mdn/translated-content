---
title: BaseAudioContext.createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
---

{{ APIRef("Web Audio API") }}

`createWaveShaper()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("WaveShaperNode") }} を生成します。これは非線形な歪みを表現します。オーディオに歪み効果を適用するために使用されます。

> **メモ:** {{domxref("WaveShaperNode.WaveShaperNode", "WaveShaperNode()")}} コンストラクターは {{domxref("WaveShaperNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createWaveShaper();
```

### 引数

なし。

### 返値

{{domxref("WaveShaperNode")}} です。

## 例

以下の例では、 AudioContext を使用して波形整形ノードを作成する基本的な使い方を示しています。応用例や情報については、 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) の[デモ](https://mdn.github.io/voice-change-o-matic/)を参照してください（関連コードは [app.js](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js) を参照してください）。

> **メモ:** シグモイド関数は、その自然な特性から、歪みカーブとしてよく使われます。例えば、その S 字形状は、より滑らかなサウンドを作り出すのに役立ちます。 [Stack Overflow](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion) に、以下のような歪み曲線のコードが掲載されていました。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var distortion = audioCtx.createWaveShaper();

  ...

function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

  ...

distortion.curve = makeDistortionCurve(400);
distortion.oversample = '4x';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
