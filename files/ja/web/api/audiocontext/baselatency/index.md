---
title: AudioContext.baseLatency
slug: Web/API/AudioContext/baseLatency
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

{{domxref("AudioContext")}} インターフェイスの読み取り専用プロパティ **`baseLatency`** は、{{domxref("AudioDestinationNode")}} すなわち音声グラフの終端から音声バッファーをホストシステムで再生の準備ができている音声サブシステムに渡すときに発生する処理の遅延の秒数を表す `double` の値を返します。

> **メモ:** {{domxref("AudioContext.AudioContext()", "コンテキストの生成時", "", "true")}}に `latencyHint` オプションを用いることで特定の遅延を要求することができます。しかし、ブラウザーはこのオプションを無視する可能性があります。

## 値

ベース遅延の秒数を表す `double` の値です。

## 例

```js
// デフォルトの遅延 ("interactive")
const audioCtx1 = new AudioContext();
console.log(audioCtx1.baseLatency); // 0.00

// より大きい遅延 ("playback")
const audioCtx2 = new AudioContext({ latencyHint: "playback" });
console.log(audioCtx2.baseLatency); // 0.15
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
