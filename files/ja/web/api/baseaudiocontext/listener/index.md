---
title: BaseAudioContext.listener
slug: Web/API/BaseAudioContext/listener
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ APIRef("Web Audio API") }}

`listener` は {{ domxref("BaseAudioContext") }} インターフェイスのプロパティで、三次元音声空間処理を実装するために使う {{ domxref("AudioListener") }} オブジェクトを返します。

## 値

{{ domxref("AudioListener") }} オブジェクトです。

## 例

> **メモ:** 完全な三次元音声空間処理の例は、 [panner-node](https://github.com/mdn/webaudio-examples/tree/master/panner-node) のデモを参照してください。

```js
const audioCtx = new AudioContext();
// 古い webkit/blink のブラウザーでは接頭辞が必要です

// …

const myListener = audioCtx.listener;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
