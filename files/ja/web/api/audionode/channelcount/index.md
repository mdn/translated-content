---
title: "AudioNode: channelCount プロパティ"
short-title: channelCount
slug: Web/API/AudioNode/channelCount
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} インターフェイスの **`channelCount`** プロパティは、このノードへの入力について[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う際、何個のチャンネルを用いるかを決定するとき用いる整数です。

`channelCount` の使用法と正確な定義は、{{domxref("AudioNode.channelCountMode")}} の値によって以下のようになります。

- `channelCountMode` の値が `max` のときは、無視されます。
- `channelCountMode` の値が `clamped-max` のときは、最大値として用いられます。
- `channelCountMode` の値が `explicit` のときは、ちょうどの値として用いられます。

## 値

整数です。

## 例

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCount;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
