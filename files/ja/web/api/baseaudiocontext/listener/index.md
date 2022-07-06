---
title: BaseAudioContext.listener
slug: Web/API/BaseAudioContext/listener
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - プロパティ
  - リファレンス
  - ウェブ音声 API
  - listener
  - spatialization
browser-compat: api.BaseAudioContext.listener
translation_of: Web/API/BaseAudioContext/listener
original_slug: Web/API/AudioContext/listener
---
{{ APIRef("Web Audio API") }}

`listener` は {{ domxref("BaseAudioContext") }} インターフェイスのプロパティで、三次元音声空間処理を実装するために使う {{ domxref("AudioListener") }} オブジェクトを返します。

## 値

{{ domxref("AudioListener") }} オブジェクトです。

## 例

> **Note:** 完全な三次元音声空間処理の例は、 [panner-node](https://github.com/mdn/panner-node) のデモを参照してください。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// 古い webkit/blink のブラウザーでは接頭辞が必要です

...

var myListener = audioCtx.listener;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
