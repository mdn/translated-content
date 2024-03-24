---
title: "AudioParam: linearRampToValueAtTime() メソッド"
short-title: linearRampToValueAtTime()
slug: Web/API/AudioParam/linearRampToValueAtTime
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

`linearRampToValueAtTime()` は {{ domxref("AudioParam") }} インターフェイスのメソッドで、 `AudioParam` の値を徐々に線形的に変化させます。変更は _直前の_ イベントで指定した時刻に始まり、 `value` 引数で指定された新しい値まで直線的なランプが続き、 `endTime` 引数で指定された時刻に新しい値に到達します。

## 構文

```js-nolint
linearRampToValueAtTime(value, endTime)
```

### 引数

- `value`
  - : 浮動小数点数で、指定された時刻までに `AudioParam` が変化する値を表します。
- `endTime`
  - : 倍精度浮動小数点値で、値の変化が開始してから停止するまでの正確な時間（秒単位）を表します。

### 返値

この `AudioParam` オブジェクトを参照します。一部のブラウザーでは、このインターフェイスの古い実装は {{jsxref('undefined')}} を返します。

## 例

この例では、 2 つの制御ボタンを持つメディアソースがあります（ソースコードは [audio-param repo](https://github.com/mdn/webaudio-examples/tree/main/audio-param) を参照するか、または[この例をライブで見てください](https://mdn.github.io/webaudio-examples/audio-param/)）。これらのボタンが押されると、 `linearRampToValueAtTime()` を使用して、それぞれゲイン値を 1.0 までフェードアップし、 0 までフェードダウンします。これはフェードイン/フェードアウトのエフェクトにはかなり有益ですが、 {{ domxref("AudioParam.exponentialRampToValueAtTime()") }} の方が少し自然だと言います。

```js
// 音声コンテキストの作成
const audioCtx = new AudioContext();

// 例のための基本的な値を設定
const myAudio = document.querySelector("audio");

const linearRampPlus = document.querySelector(".linear-ramp-plus");
const linearRampMinus = document.querySelector(".linear-ramp-minus");

// MediaElementAudioSourceNode を作成
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// ゲインノードを作成し、ゲイン値を 0.5 に設定
const gainNode = audioCtx.createGain();

// AudioBufferSourceNode を gainNodeに、
// gainNode を出力先に接続
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick で何かするようにボタンを設定
linearRampPlus.onclick = () => {
  gainNode.gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + 2);
};

linearRampMinus.onclick = () => {
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
