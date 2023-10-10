---
title: "AudioContext: outputLatency プロパティ"
short-title: outputLatency
slug: Web/API/AudioContext/outputLatency
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`outputLatency`** は {{domxref("AudioContext")}} の読み取り専用プロパティで、現在の音声コンテキストにおける出力遅延の見積を提供します。

この値は、ブラウザーが音声バッファーを再生のために音声グラフからホストシステムの音声サブシステムに渡してから、バッファー内の最初のサンプルが実際に音声出力デバイスで処理されるまでの秒数です。

この値は、プラットフォームおよび利用可能なハードウェアによって変わります。

## 値

出力遅延の秒数を表す double 値です。

## 例

```js
const audioCtx = new AudioContext();
console.log(audioCtx.outputLatency);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
