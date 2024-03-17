---
title: "AudioParam: value プロパティ"
short-title: value
slug: Web/API/AudioParam/value
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("AudioParam")}} インターフェイスの **`value`** プロパティは、この {{domxref("AudioParam")}} の現在の値を取得または設定します。初期状態では、値は {{domxref("AudioParam.defaultValue")}} に設定されています。

`value` を設定すると、 `AudioContext` の {{domxref("BaseAudioContext/currentTime", "currentTime")}} プロパティが返す時刻で {{domxref("AudioParam.setValueAtTime")}} を呼び出すのと同じ効果があります。

## 値

現在の時刻におけるパラメーターの値を示す浮動小数点の値 ({{jsxref("Number")}}) です。この値は {{domxref("AudioParam.minValue", "minValue")}} および {{domxref("AudioParam.maxValue", "maxValue")}} プロパティで指定された値の間になります。

## 使用上の注意

### 値の精度とばらつき

内部的に `value` を格納するために使用されるデータ型は単精度（32 ビット）の浮動小数点数ですが、 JavaScript では 64 ビットの倍精度浮動小数点数を用います。そのため、 `value` プロパティから読み込んだ値が、常に設定した値と一致するとは限りません。

この例を考えてください。

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

ログ出力は `false` になります。これは、再生レートのパラメーターである `rate` が 5.3 に最も近い 32 ビット浮動小数点数に変換され、5.300000190734863 となったためです。解決策の 1 つは、 `value` を設定する際に、指定した 64 ビットの JavaScript 値に相当する単精度の値を返す {{jsxref("Math.fround()")}} メソッドを使用することです。

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = Math.fround(5.3);
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

この場合、ログ出力は `true` になります。

### 時間とともに変化するプロパティの値

`AudioParam` の `value` は固定されることもあれば、時間とともに変化することもあります。これは `value` ゲッターによって反映され、音声レンダリングエンジンの最新の**レンダリングクォンタム**（音声バッファーが処理され更新される瞬間）時点でのパラメーターの値を返します。音声バッファーが処理されるだけでなく、それぞれのレンダリングクォンタムは、現在の時刻と確立された時間ベースのパラメーターの値変更が指定された場合、必要に応じてそれぞれの `AudioParam` の `value` を更新します。

パラメーターを最初に作成した時、その値は {{domxref("AudioParam.defaultValue")}} で指定された既定値に設定されます。これは、 0.0 秒の時刻におけるパラメーターの値であり、値が変更される最初のレンダリングクォンタムまで、パラメーターの値のままです。

レンダリングクォンタムの間、ブラウザーはパラメーターの値を管理するために以下のことを行います。

- `value` セッターが使用されてた場合、パラメーターの値は指定された値に変更されます。
- 現在の時刻が前回 {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}} を呼び出して指定した時刻と等しいか超えている場合、 `value` は `setValueAtTime()` に渡された値に変更されます。
- 段階的または漸進的な値変更メソッドが呼び出され、現在の時刻が段階的な値変更を行うべき時間範囲内にある場合、値は適切なアルゴリズムに基づいて更新されます。これらの漸進的または段階的な値変更メソッドには {{domxref("AudioParam.linearRampToValueAtTime", "linearRampToValueAtTime()")}}, {{domxref("AudioParam.setTargetAtTime", "setTargetAtTime()")}}, {{domxref("AudioParam.setValueCurveAtTime", "setValueCurveAtTime()")}} があります。

このように、パラメーターの `value` は、時間経過に伴うパラメーターの状態を正確に反映するように維持されます。

## 例

この例では、 {{domxref("GainNode")}} の音量を即座に 40% に変更します。

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.4;
// 次のものと同じ
gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{domxref("GainNode")}} のゲイン値を変更する際、バージョン 64 （2018 年 1 月）以前の Google Chrome では、デジッパリングを防ぐためにスムーズな補間が行われていました。
バージョン 64 からは、ウェブオーディオ仕様に準拠するため、値が即座に変更されます。詳しくは [Chrome Platform Status](https://chromestatus.com/feature/5287995770929152) をご覧ください。

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
