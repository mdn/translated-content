---
title: BaseAudioContext.currentTime
slug: Web/API/BaseAudioContext/currentTime
---

{{ APIRef("Web Audio API") }}

`currentTime` は {{ domxref("BaseAudioContext") }} インターフェイスの読み取り専用プロパティで、再生、タイムラインの可視化などのスケジューリングで使用できる単純増加するハードウェア時間の秒数を倍精度浮動小数点型で返します。 0 から始まります。

## 値

浮動小数点数です。

## 例

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// 古い webkit/blink ブラウザーでは接頭辞が必要です

...

console.log(audioCtx.currentTime);
```

## 時刻の精度の縮小

タイミング攻撃やフィンガープリントに対する保護を提供するために、ブラウザーの設定によっては `audioCtx.currentTime` の値が丸められることがあります。
Firefox では、環境設定の `privacy.reduceTimerPrecision` が既定で有効になっており、 Firefox 59 では 20us、60 では 2ms になっています。

```js
// reduced time precision (2ms) in Firefox 60
audioCtx.currentTime;
// 23.404
// 24.192
// 25.514
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
audioCtx.currentTime;
// 49.8
// 50.6
// 51.7
// ...
```

Firefox では、 `privacy.resistFingerprinting` を有効にすると、精度は 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きいほうになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
