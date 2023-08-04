---
title: OscillatorNode.setPeriodicWave()
slug: Web/API/OscillatorNode/setPeriodicWave
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ APIRef("Web Audio API") }}

**`setPeriodicWave()`** は {{ domxref("OscillatorNode") }} インターフェイスのメソッドで、 {{domxref("PeriodicWave")}} を指し、発振器の出力とすることができる周期的な波形を定義します。 {{domxref("OscillatorNode.type", "type")}} が `custom` のときに使用されます。

## 構文

```js-nolint
setPeriodicWave(wave)
```

### 引数

- `wave`
  - : {{domxref("PeriodicWave")}} オブジェクトで、発振器の出力とする周期的な波形を表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次の例は `createPeriodicWave()` の簡単な使い方を示し、周期波から正弦波を再現しています。

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();
const osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = ac.createPeriodicWave(real, imag);

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

これは、基本音だけを含む音は定義上正弦波であるため、うまく動作します。

ここでは、 2 つの値を持つ {{domxref("PeriodicWave")}} を作成しています。最初の値は DC オフセットで、これは発振器が開始する値です。ここでは、カーブを \[-1.0; 1.0] 範囲の中央から開始したいので、0 が適しています。

2 つ目以降の値はサイン成分、コサイン成分です。これは、時間領域の値から周波数領域の値を取得するフーリエ変換の結果と考えることができます。ここでは `createPeriodicWave()` で、周波数を指定すると、ブラウザーは逆フーリエ変換を行い、発振器の周波数の時間領域のバッファーが取得されるようになっています。ここでは、基本音にフルボリューム (1.0) のひとつの成分だけを設定しているので、正弦波が得られます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioContext.createPeriodicWave](/ja/docs/Web/API/BaseAudioContext/createPeriodicWave)
