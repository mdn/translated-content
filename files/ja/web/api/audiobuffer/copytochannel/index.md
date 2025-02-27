---
title: "AudioBuffer: copyToChannel() メソッド"
short-title: copyToChannel()
slug: Web/API/AudioBuffer/copyToChannel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`copyToChannel()` は {{ domxref("AudioBuffer") }} インターフェイスのメソッドで、元の配列から指定の `AudioBuffer` のチャンネルへとコピーします。

## 構文

```js-nolint
copyToChannel(source, channelNumber)
copyToChannel(source, channelNumber, startInChannel)
```

### 引数

- `source`
  - : コピー元となるチャンネルデータの {{jsxref("Float32Array")}} です。
- `channelNumber`
  - : チャンネルデータのコピー先となる現在の {{domxref("AudioBuffer")}} のチャンネル番号です。 _channelNumber_ が {{domxref("AudioBuffer.numberOfChannels")}} 以上の場合は `INDEX_SIZE_ERR` 例外が発生します。
- `startInChannel` {{optional_inline}}
  - : オプションで、データをコピーする先のオフセット位置です。 _startInChannel_ が {{domxref("AudioBuffer.length")}} より大きければ、 `INDEX_SIZE_ERR` 例外が発生します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const anotherArray = new Float32Array();
// myArrayBuffer の 2 番目のチャンネルからコピーする
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
// anotherArray から、 myArrayBuffer の 1 番目のチャンネルにコピーする。これで 2 つのチャンネルのデータは同じになる
myArrayBuffer.copyToChannel(anotherArray, 0, 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
