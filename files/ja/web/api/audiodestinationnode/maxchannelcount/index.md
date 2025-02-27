---
title: "AudioDestinationNode: maxChannelCount プロパティ"
short-title: maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`maxchannelCount` は {{ domxref("AudioDestinationNode") }} インターフェイスのプロパティで、物理的な機器が扱えるチャンネルの最大数を `unsigned long` で定義します。

{{domxref("AudioNode.channelCount")}} プロパティは 0 以上この値以下になります。もし {{domxref("OfflineAudioContext")}} のように `maxChannelCount` が `0` の場合、チャンネルの数は変更できません。

## 値

`unsigned long` です。

## 例

次の例は単純な設定です。`AudioDestinationNode` の `maxChannelCount` を 2 にしています。

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

完全な実装は、MDN Web Audio の [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) や [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) のような例を参考にしてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
