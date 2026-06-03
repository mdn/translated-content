---
title: "AudioContext: baseLatency プロパティ"
short-title: baseLatency
slug: Web/API/AudioContext/baseLatency
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`baseLatency`** は {{domxref("AudioContext")}} インターフェイスの読み取り専用プロパティで、{{domxref("AudioDestinationNode")}} すなわち音声グラフの終端から音声バッファーをホストシステムで再生の準備ができている音声サブシステムに渡すときに発生する処理の遅延の秒数を表す `double` の値を返します。

> [!NOTE]
> {{domxref("AudioContext.AudioContext()", "コンテキストの生成時", "", "true")}}に `latencyHint` オプションを用いることで特定の遅延を要求することができます。しかし、ブラウザーはこのオプションを無視する可能性があります。

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

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
