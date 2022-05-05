---
title: BaseAudioContext.destination
slug: Web/API/BaseAudioContext/destination
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - プロパティ
  - リファレンス
  - ウェブ音声 API
  - destination
browser-compat: api.BaseAudioContext.destination
translation_of: Web/API/BaseAudioContext/destination
original_slug: Web/API/AudioContext/destination
---
{{ APIRef("Web Audio API") }}

`destination` は {{ domxref("BaseAudioContext") }} のプロパティで、このコンテキストのすべての音声の最終的な出力先を表す {{ domxref("AudioDestinationNode") }} を返します。これは、端末のスピーカーのような、オーディオレンダリング機器と考えることができます。

## 値

{{ domxref("AudioDestinationNode") }} です。

## 例

> **Note:** 完全な実装の例は、 [MDN GitHub リポジトリー](https://github.com/mdn/)の [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic) などを参照してください。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// 古い webkit/blink のブラウザーでは接頭辞が必要です

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
