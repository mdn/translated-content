---
title: "AudioParam: setValueCurveAtTime() メソッド"
short-title: setValueCurveAtTime()
slug: Web/API/AudioParam/setValueCurveAtTime
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{APIRef("Web Audio API")}}

**`setValueCurveAtTime()`** は {{domxref("AudioParam")}} インターフェイスのメソッドで、引数の値が、値のリストで定義された曲線を定義すること以下で変化するように設定します。

この曲線は、浮動小数点数の配列で定義された一連の値の間の線形補間であり、 `startTime` から始まる指定された間隔と固有の継続時間に収まるように拡大縮小されます。

## 構文

```js-nolint
setValueCurveAtTime(values, startTime, duration)
```

### 引数

- `values`
  - : 浮動小数点数の配列で、{{domxref("AudioParam")}} が指定した `duration` に沿って変化する値のカーブを表します。配列内のすべての値は有限でなければなりません。値が `NaN`、`Infinity`、`-Infinity` のいずれか場合、{{jsxref("TypeError")}} 例外が発生します。
- `startTime`
  - : 倍精度浮動小数点値で、変更される {{ domxref("AudioContext") }} が最初に作成されてから（秒単位の）時間を表します。この値が {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} より小さい場合、 `currentTime` にクランプされます。
- `duration`
  - : 引数の `value` が指定した曲線以下に変化する合計時間（秒単位）を表すダブル値です。指定する値は、この時間に沿って等間隔に配置されます。

### 返値

この `AudioParam` オブジェクトへの参照です。一部の古いブラウザーの実装では、このインターフェイスは 'undefined' を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 指定した `values` 配列の値が 2 未満の場合に発生します。
- {{jsxref("RangeError")}}
  - : 指定する `startTime` が負の値か有限でない値、または `duration` が有限で厳密に正の値でない場合に発生します。
- {{jsxref("TypeError")}}
  - : 配列 `values` に含まれる値の 1 つ以上が有限でない場合に発生します。無限でない値は `NaN`、`Infinity`、`-Infinity` です。

## 使用上の注意

パラメーターの値が曲線を以下に完了したとき、その値は `values` 引数で指定した値の集合の最後の値と一致することが保証されます。

> [!NOTE]
> ウェブオーディオ API の初期の実装では、これが確実に保持されず、予期せぬ結果を発生させるものがありました。

## 例

この単純な例では、2つのコントロールボタンを持つメディア要素のソースが特徴です（ソースコードは [webaudio-examples リポジトリー](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html)を参照するか、または[この例をライブで表示](https://mdn.github.io/webaudio-examples/audio-param/)してください）。このボタンが押されると、 `setValueCurveAtTime()` が使用され、 waveArray 配列に格納されている値の間でゲインの値を変更します。

```js
// 音声コンテキストの作成
const audioCtx = new AudioContext();

// 例のための基本的な値を設定
const myAudio = document.querySelector("audio");

const valueCurve = document.querySelector(".value-curve");

// MediaElementAudioSourceNode を作成
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// ゲインノードを作成し、ゲイン値を 0.5 に設定
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
const currGain = gainNode.gain.value;

// AudioBufferSourceNode を gainNodeに、
// gainNode を出力先に接続
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick で何かするようにボタンを設定

const waveArray = new Float32Array(9);
waveArray[0] = 0.5;
waveArray[1] = 1;
waveArray[2] = 0.5;
waveArray[3] = 0;
waveArray[4] = 0.5;
waveArray[5] = 1;
waveArray[6] = 0.5;
waveArray[7] = 0;
waveArray[8] = 0.5;

valueCurve.onclick = () => {
  gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

Chrome 46 より前のバージョンでは、線形補間ではなく最近傍補間を使用します。

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
