---
title: "AudioBuffer: duration プロパティ"
short-title: duration
slug: Web/API/AudioBuffer/duration
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

**`duration`** は {{ domxref("AudioBuffer")}} インターフェイスのプロパティで、バッファーに格納された PCM データの再生時間を秒数で表す double 値を返します。

## 値

double 値です。

## 例

```js
// ステレオ
const channels = 2;

// AudioContext のサンプルレートで 2 秒間の空のステレオバッファーを生成する
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // バッファーにホワイトノイズを書き込む
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

  console.log(myArrayBuffer.duration);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
