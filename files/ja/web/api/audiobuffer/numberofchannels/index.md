---
title: "AudioBuffer: numberOfChannels プロパティ"
short-title: numberOfChannels
slug: Web/API/AudioBuffer/numberOfChannels
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`numberOfChannels` は {{ domxref("AudioBuffer") }} インターフェイスのプロパティで、バッファーに格納された PCM データのチャンネルの数を整数で返します。

## 値

整数です。

## 例

```js
// ステレオ
const channels = 2;

// AudioContext のサンプルレートで2秒間の空のステレオバッファーを生成する
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // バッファーにホワイトノイズを書き込む;
  // 単なる -1.0 から 1.0 の間の乱数の値である
  for (let channel = 0; channel < channels; channel++) {
    // 実際のデータの配列を得る
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() は [0; 1.0] である
      // 音声は [-1.0; 1.0] である必要がある
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  console.log(myArrayBuffer.numberOfChannels);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
