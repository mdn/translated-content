---
title: "AudioParam: setTargetAtTime() メソッド"
short-title: setTargetAtTime()
slug: Web/API/AudioParam/setTargetAtTime
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

`setTargetAtTime()` は {{domxref("AudioParam")}} インターフェイスのメソッドで、 `AudioParam` の値を徐々に変化させる開始をスケジュールします。これは ADSR エンベロープのディケイやリリース部分に使用します。

## 構文

```js-nolint
setTargetAtTime(target, startTime, timeConstant)
```

### 引数

- `target`
  - : 指定された開始時刻に引数が変化し始める値。
- `startTime`
  - : 指数変化の開始時刻。 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} と同じ時間座標系で指定します。これが `AudioContext.currentTime` 以下の場合、引数はすぐに変化を始めます。
- `timeConstant`
  - : 秒単位で指定された、指数関数的に対象とする手法に移行する際の時刻定数値。この値が大きいほど、遷移は遅くなります。

### 返値

この `AudioParam` オブジェクトへの参照です。このインターフェイスの古いブラウザーの実装の中には {{jsxref('undefined')}} を返すものもあります。

## 解説

変化は `startTime` で指定した時刻から始まり、指数関数的に `target` 引数で指定された値に向かって移動します。 `timeConstant` 引数で定義されているディケイレートは指数関数的です。 したがって、値が完全に `target` に到達することはありませんが、長さ `timeConstant` の各タイムステップの後、値は別の式 <math>
<semantics><mrow><mn>1</mn>
<mo>-</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mn>1</mn>
</mrow></msup><mo>≈</mo>
<mn>63.2</mn>
<mtext>%</mtext>
</mrow><annotation encoding="TeX">1 - e^{-1} \approx 63.2%</annotation>
</semantics></math> で `target` に近づきます。完全な式（一次線形連続時不変システムを使用しています）については、[ウェブオーディオ API 仕様書](https://webaudio.github.io/web-audio-api/#dom-audioparam-settargetattime)を調べてください。

どうしても特定の時刻までに目標値に到達する必要がある場合は、 {{domxref("AudioParam.exponentialRampToValueAtTime()")}} を使用することができます。ただし、数学的な理由から、このメソッドは現在値や対象とする値が `0` の場合には動作しません。

### 良い `timeConstant` の選択

前述のように、この値は指数関数的に変化し、 `timeConstant` ごとに 63.2% ずつ対象とする値に向かって変化します。目標値に達することを心配する必要はありません。十分に近づけば、それ以上の変化は人間のリスナーには知覚できないでしょう。

使用する用途によっては、対象とする値の 95% になれば十分かもしれません。その場合は、 `timeConstant` を対象とする時間の 3 分の 1 に設定すればよいでしょう。

詳細については、時間の経過とともに値が 0% から 100% までどのように変化するか、以下の表で調べてください。

| `startTime` からの時間 | 値                                |
| ---------------------- | --------------------------------- |
| `0 * timeConstant`     | 0%                                |
| `0.5 * timeConstant`   | 39.3%                             |
| `1 * timeConstant`     | 63.2%                             |
| `2 * timeConstant`     | 86.5%                             |
| `3 * timeConstant`     | 95.0%                             |
| `4 * timeConstant`     | 98.2%                             |
| `5 * timeConstant`     | 99.3%                             |
| `n * timeConstant`     | <math><semantics><mrow><mn>1</mn> |

<math><semantics><mrow><mn>1</mn>
<mo>-</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>n</mi>
</mrow></msup></mrow><annotation encoding="TeX">1 - e^{-n}</annotation></semantics></math>

## 例

この例では、 2 つの制御ボタンを持つメディアソースがあります（ソースコードは [audio-param repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param) を参照するか、または[この例をライブで見てください](https://mdn.github.io/webaudio-examples/audio-param/)）。これらのボタンが押されると、 `setTargetAtTime()` が使用され、それぞれゲイン値を 1.0 まで、 0 までフェードアップさせます。

```js
// 音声コンテキストの作成
const audioCtx = new AudioContext();

// 例のための基本的な値を設定
const myAudio = document.querySelector("audio");

const atTimePlus = document.querySelector(".at-time-plus");
const atTimeMinus = document.querySelector(".at-time-minus");

// MediaElementAudioSourceNode を作成
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// ゲインノードを作成し、ゲイン値を 0.5 に設定
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
let currGain = gainNode.gain.value;

// AudioBufferSourceNode を gainNodeに、
// gainNode を出力先に接続
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick で何かするようにボタンを設定
atTimePlus.onclick = () => {
  currGain = 1.0;
  gainNode.gain.setTargetAtTime(1.0, audioCtx.currentTime + 1, 0.5);
};

atTimeMinus.onclick = () => {
  currGain = 0;
  gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + 1, 0.5);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
