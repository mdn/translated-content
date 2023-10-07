---
title: BaseAudioContext.sampleRate
slug: Web/API/BaseAudioContext/sampleRate
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ APIRef("Web Audio API") }}

`sampleRate` は {{domxref("BaseAudioContext") }} インターフェイスのプロパティで、この音声コンテキスト内のすべてのノードが使用するサンプリングレートを、1 秒あたりのサンプル数で表した浮動小数点数を返すものです。この制限は、サンプリングレートコンバーターに対応していないことを意味します。

## 値

音声コンテキストのサンプリングレートを、 1 秒当たりのサンプル数で示す浮動小数点数です。

## 例

> **メモ:** 完全なウェブオーディオの実装の例は、[GitHub の MDN リポジトリー](https://github.com/mdn/webaudio-examples) にあるいずれかのウェブオーディオのデモを参照してください。
> ブラウザーのコンソールで `audioCtx.sampleRate` と入力してみてください。

```js
const audioCtx = new AudioContext();
// 古い webkit/blink のブラウザーでは接頭辞が必要です

// …

console.log(audioCtx.sampleRate);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
