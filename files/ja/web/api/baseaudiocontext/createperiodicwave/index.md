---
title: BaseAudioContext.createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
---

{{ APIRef("Web Audio API") }}

`createPeriodicWave()` は {{ domxref("AudioContext") }} インターフェイスのメソッドで、周期的な波形を定義するために使われる {{domxref("PeriodicWave")}} を生成します。これは {{ domxref("OscillatorNode") }} の出力を決めるために使われます。

## 構文

```js
createPeriodicWave(real, imag);
createPeriodicWave(real, imag, constraints);
```

### 引数

- `real`
  - : 余弦項（従来は A 項）の配列。
- `imag`
  - : 正弦項（従来は B 項）の配列。

配列 `real` と `imag` は同じ長さでなければならず、そうでない場合はエラーが発生します。

- `constraints` {{optional_inline}}

  - : 正規化を無効にするかどうか（指定しない場合、正規化は既定で有効）を指定する辞書オブジェクトです。 1 つのプロパティを持ちます。

    - `disableNormalization`: `true` に設定すると、周期的な波の正規化を無効にします。既定値は `false` です。

> **メモ:** 正規化した場合、結果の波は最大絶対ピーク値が 1 になります。

### 返値

{{domxref("PeriodicWave")}} です。

## 例

次の例は、 `createPeriodicWave()` を使用して単純な正弦波を含む {{domxref("PeriodicWave")}} オブジェクトを作成する方法を示しています。

```js
var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();
var osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

var wave = ac.createPeriodicWave(real, imag, { disableNormalization: true });

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

これは、基本音だけを含む音は、定義上、正弦波であるため、うまくいきます。

ここでは、 2 つの値を持つ `PeriodicWave` を作成します。最初の値は DC オフセットで、これはオシレーターを開始する値です。ここでは、曲線を \[-1.0; 1.0] 範囲の中央で開始したいので、 0 が適しています。

2 つ目以降の値は正弦波と余弦波成分です。時間領域の値から周波数領域の値を得る、フーリエ変換の結果と考えることができます。ここでは、`createPeriodicWave()`で、周波数を指定すると、ブラウザーは逆フーリエ変換を行い、発振器の周波数の時間領域のバッファーを取得します。ここでは、基本音にフルボリューム（1.0）の 1 成分のみを設定しているので、正弦波が得られます。

フーリエ変換の係数は昇順で与えなければならず（すなわち、<math>
<semantics><mrow><mrow><mo>(</mo>
<mrow><mi>a</mi>
<mo>+</mo>
<mi>b</mi>
<mi>i</mi>
</mrow><mo>)</mo>
</mrow><msup><mi>e</mi>
<mi>i</mi>
</msup><mo>,</mo>
<mrow><mo>(</mo>
<mrow><mi>c</mi>
<mo>+</mo>
<mi>d</mi>
<mi>i</mi>
</mrow><mo>)</mo>
</mrow><msup><mi>e</mi>
<mrow><mn>2</mn>
<mi>i</mi>
</mrow></msup><mo>,</mo>
<mrow><mo>(</mo>
<mrow><mi>f</mi>
<mo>+</mo>
<mi>g</mi>
<mi>i</mi>
</mrow><mo>)</mo>
</mrow><msup><mi>e</mi>
<mrow><mn>3</mn>
<mi>i</mi>
</mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} ,
\left(f+gi\right)e^{3i} </annotation>
</semantics></math>など）、正でも負でも構いません。このような係数を手動で得る簡単な方法は（ベストではありませんが）、グラフ計算機を使うことです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
