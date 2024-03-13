---
title: BaseAudioContext.createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
---

{{APIRef("Web Audio API")}}

`createOscillator()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、周期的な波形を表現するソースである {{domxref("OscillatorNode")}} を生成します。基本的には一定の音程を発生させます。

> **メモ:** {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}} コンストラクターは {{domxref("OscillatorNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createOscillator();
```

### 引数

なし。

### 返値

{{domxref("OscillatorNode")}} です。

## 例

次の例は、 AudioContext を使用してオシレーターノードを作成する基本的な使用方法です。応用例や情報については、 [Violent Theremin のデモ](https://mdn.github.io/violent-theremin/)を（関連するコードの [app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js)も）参照してください。また、より詳しい情報は {{domxref("OscillatorNode")}} ページをご覧ください。

```js
// ウェブオーディオ API コンテキストを生成する
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// オシレーターノードを生成する
var oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime); // 値をヘルツで指定
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
