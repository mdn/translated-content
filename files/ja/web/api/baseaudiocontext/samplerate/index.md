---
title: BaseAudioContext.sampleRate
slug: Web/API/BaseAudioContext/sampleRate
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - プロパティ
  - リファレンス
  - ウェブ音声 API
  - sampleRate
browser-compat: api.BaseAudioContext.sampleRate
translation_of: Web/API/BaseAudioContext/sampleRate
original_slug: Web/API/AudioContext/sampleRate
---
{{ APIRef("Web Audio API") }}

`sampleRate` は {{domxref("BaseAudioContext") }} インターフェイスのプロパティで、この音声コンテキスト内のすべてのノードが使用するサンプリングレートを、1 秒あたりのサンプル数で表した浮動小数点数を返すものです。この制限は、サンプリングレートコンバーターに対応していないことを意味します。

## 値

音声コンテキストのサンプリングレートを、 1 秒当たりのサンプル数で示す浮動小数点数です。

## 例

> **Note:** 完全なウェブ音声の実装の例は、 [MDN GitHub リポジトリー](https://github.com/mdn/)のウェブ音声デモの [panner-node](https://github.com/mdn/panner-node) などを参照してください。ブラウザーのコンソールで `audioCtx.sampleRate` と入力してみてください。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// 古い webkit/blink のブラウザーでは接頭辞が必要です

...

console.log(audioCtx.sampleRate);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
