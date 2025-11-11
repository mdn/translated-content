---
title: OscillatorNode.type
slug: Web/API/OscillatorNode/type
l10n:
  sourceCommit: 20a58f1383da377a634b48902bff9b4fde9227c3
---

{{ APIRef("Web Audio API") }}

**`type`** は {{ domxref("OscillatorNode") }} インターフェイスのプロパティで、発振器が出力する[波形](https://ja.wikipedia.org/wiki/波形)の形状を指定します。利用できる一般的な波形がいくつかあり、カスタム波形を指定するオプションもあります。波形は、生成される音色に影響を与えます。

## 値

発振器の波形を指定する文字列です。利用できる値は以下のとおりです。

- `sine`
  - : [正弦波](https://ja.wikipedia.org/wiki/正弦波)です。これが既定値です。
- `square`
  - : [矩形波](https://ja.wikipedia.org/wiki/矩形波)で、[デューティサイクル](https://ja.wikipedia.org/wiki/デューティ比)が 0.5 のものです。すなわち、それぞれの周期で半分が「高」の信号です。
- `sawtooth`
  - : [のこぎり波](https://ja.wikipedia.org/wiki/のこぎり波)です。
- `triangle`
  - : [三角波](<https://ja.wikipedia.org/wiki/三角波_(波形)>)です。
- `custom`
  - : カスタム波形です。手動で `type` を `custom` に設定することはありません。代わりに {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}} メソッドを使用して、波形を表すデータを使用してください。そうすることで、自動的に `type` が `custom` に設定されます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 値 `custom` が指定された場合に発生します。カスタム波形を設定するには {{domxref("OscillatorNode.setPeriodicWave", "setPeriodicWave()")}} を呼び出すだけです。そうすることで、自動的に型が設定されます。

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
