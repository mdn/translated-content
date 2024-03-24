---
title: "AudioNode: channelCountMode プロパティ"
short-title: channelCountMode
slug: Web/API/AudioNode/channelCountMode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} インターフェイスの `channelCountMode` プロパティは、ノードの入力と出力でチャンネルを対応させる方法を表す列挙値です。

## 値

以下が、列挙値 `channelCountMode` の取りうる値とその意味です。

- `max`

  - : チャンネルの数は、全接続における最大のチャンネル数です。
    この場合、`channelCount` は無視され、アップミキシングのみが発生します。

    以下の `AudioNode` の子におけるデフォルト値です: {{domxref("GainNode")}}, {{domxref("DelayNode")}}, {{domxref("ScriptProcessorNode")}}, {{domxref("BiquadFilterNode")}}, {{domxref("WaveShaperNode")}}

- `clamped-max`

  - : チャンネル数は、全接続における最大のチャンネル数ですが、`channelCount` の値を上限とします。

    以下の `AudioNode` の子におけるデフォルト値です: {{domxref("PannerNode")}}, {{domxref("ConvolverNode")}}, {{domxref("DynamicsCompressorNode")}}

- `explicit`

  - : チャンネル数は、`channelCount` の値になります。

    以下の `AudioNode` の子におけるデフォルト値です: {{domxref("AudioDestinationNode")}}, {{domxref("AnalyserNode")}}, {{domxref("ChannelSplitterNode")}}, {{domxref("ChannelMergerNode")}}

> **メモ:** 仕様書の以前のバージョンでは、{{domxref("ChannelSplitterNode")}} でのデフォルト値は `max` でした。

## 例

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCountMode = "explicit";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
