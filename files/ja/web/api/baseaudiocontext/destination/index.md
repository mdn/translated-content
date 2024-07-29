---
title: "BaseAudioContext: destination プロパティ"
short-title: destination
slug: Web/API/BaseAudioContext/destination
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`destination` は {{ domxref("BaseAudioContext") }} のプロパティで、このコンテキストのすべての音声の最終的な出力先を表す {{ domxref("AudioDestinationNode") }} を返します。これは、端末のスピーカーのような、オーディオレンダリング機器と考えることができます。

## 値

{{ domxref("AudioDestinationNode") }} です。

## 例

> [!NOTE]
> より完全な応用例や情報については、[Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモをご覧ください（関連するコードは [app.js の 108 - 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```js
const audioCtx = new AudioContext();
// 古い webkit/blink のブラウザーでは接頭辞が必要です

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
