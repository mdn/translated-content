---
title: "BaseAudioContext: listener プロパティ"
short-title: listener
slug: Web/API/BaseAudioContext/listener
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

`listener` は {{ domxref("BaseAudioContext") }} インターフェイスのプロパティで、三次元音声空間処理を実装するために使う {{ domxref("AudioListener") }} オブジェクトを返します。

## 値

{{ domxref("AudioListener") }} オブジェクトです。

## 例

> [!NOTE]
> 完全な三次元音声空間処理の例は、 [panner-node](https://github.com/mdn/webaudio-examples/tree/main/panner-node) のデモを参照してください。

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
