---
title: AudioContext.outputLatency
slug: Web/API/AudioContext/outputLatency
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

the {{domxref("AudioContext")}} の読み取り専用プロパティ **`outputLatency`** は、現在の音声コンテキストにおける出力遅延の見積もりを提供します。

この値は、ブラウザーが音声バッファーを再生のために音声グラフからホストシステムの音声サブシステムに渡してから、バッファー内の最初のサンプルが実際に音声出力デバイスで処理されるまでの秒数です。

この値は、プラットフォームおよび利用可能なハードウェアによって変わります。

## 値

出力遅延の秒数を表す `double` の値です。

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

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
