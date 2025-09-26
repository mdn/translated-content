---
title: "AudioParam: setValueAtTime() メソッド"
short-title: setValueAtTime()
slug: Web/API/AudioParam/setValueAtTime
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

`setValueAtTime()` は {{domxref("AudioParam")}} インターフェイスのメソッドで、 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} を基準にした正確な時刻に `AudioParam` の値を瞬時に変更します。新しい値は value 引数で指定します。

## 構文

```js-nolint
setValueAtTime(value, startTime)
```

### 引数

- `value`
  - : 指定された時刻に AudioParam が変更される値を表す浮動小数点数です。
- `startTime`
  - : 倍精度浮動小数点値で、 {{domxref("AudioContext")}} が最初に作成されてから、値の変更が起こるまでの時間（秒単位）を表します。時間が {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} より小さい場合、変更は即座に起こります。この値が負の場合、 {{jsxref("TypeError")}} が発生します。

### 返値

この `AudioParam` オブジェクトへの参照です。一部の古いブラウザーの実装では、このインターフェイスは {{jsxref('undefined')}} を返します。

## 例

この単純な例では、2つのコントロールボタンを持つメディア要素のソースが特徴です（ソースコードは [webaudio-examples リポジトリー](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html)を参照するか、または[この例をライブで表示](https://mdn.github.io/webaudio-examples/audio-param/)してください）。ボタンが押されると、変数 `currGain` は 0.25 ずつ増加/減少します。次に、 `setValueAtTime()` メソッドを使用して、ゲインの値を `currGain` と等しく、現在から 1 秒後 (`audioCtx.currentTime + 1`) に設定します。

```js
// 音声コンテキストの作成
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// 例のための基本的な値を設定
const myAudio = document.querySelector("audio");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

const targetAtTimePlus = document.querySelector(".set-target-at-time-plus");
const targetAtTimeMinus = document.querySelector(".set-target-at-time-minus");

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
targetAtTimePlus.onclick = () => {
  currGain += 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
};

targetAtTimeMinus.onclick = () => {
  currGain -= 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
