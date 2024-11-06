---
title: "AudioParam: exponentialRampToValueAtTime() メソッド"
short-title: exponentialRampToValueAtTime()
slug: Web/API/AudioParam/exponentialRampToValueAtTime
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

**`exponentialRampToValueAtTime()`** は {{ domxref("AudioParam") }} インターフェイスのメソッドで、 {{domxref("AudioParam")}} の値を指数関数的に徐々に変化させます。変更は _直前の_ イベントで指定した時刻に始まり、`value` 引数で指定された新しい値まで指数関数的な変化が続き、 `endTime` 引数で指定された時刻に新しい値に到達します。

> [!NOTE]
> 指数関数的な変化は、周波数や再生レートを変化させる場合、直線的な変化よりも有益であると考えられています。これは、人間の耳の動作に起因しています。

## 構文

```js-nolint
exponentialRampToValueAtTime(value, endTime)
```

### 引数

- `value`
  - : 浮動小数点数で、指定された時刻までに `AudioParam` が変化する値を表します。
- `endTime`
  - : 倍精度浮動小数点値で、値の変化が停止する、変化開始後の正確な時刻（秒単位）を表します。

### 返値

この `AudioParam` オブジェクトへの参照です。一部のブラウザーでは、このインターフェイスの古い実装は {{jsxref('undefined')}} を返します。

## 例

この例では、 2 つの制御ボタンを持つメディアソースがあります（ソースコードは [audio-param リポジトリー](https://github.com/mdn/webaudio-examples/tree/main/audio-param)、または[この例をライブで](https://mdn.github.io/webaudio-examples/audio-param/)参照してください）。これらのボタンが押されると、 `exponentialRampToValueAtTime()` を使用して、それぞれゲイン値を 1.0 までフェードアップし、 0 までフェードダウンします。これはフェードイン/フェードアウトのエフェクトにかなり有益です。

```js
// 音声コンテキストの作成
const audioCtx = new AudioContext();

// 例のための基本的な変数を設定
const myAudio = document.querySelector("audio");

const expRampPlus = document.querySelector(".exp-ramp-plus");
const expRampMinus = document.querySelector(".exp-ramp-minus");

// MediaElementAudioSourceNode を作成
// HTMLMediaElement を投入します。
const source = audioCtx.createMediaElementSource(myAudio);

// ゲインノードを作成し、そのゲイン値を 0.5 に設定します。
const gainNode = audioCtx.createGain();

// AudioBufferSourceNode を gainNodeに、
// gainNode を出力先に接続します。
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick で何かするようにボタンを設定
expRampPlus.onclick = () => {
  gainNode.gain.exponentialRampToValueAtTime(1.0, audioCtx.currentTime + 2);
};

expRampMinus.onclick = () => {
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);
};
```

> [!NOTE]
> 最後の関数で降下する値には、 0 ではなく 0.01 が使用されました。 0 を使用すると、 _invalid or illegal string_ エラーが発生するためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
