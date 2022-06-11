---
title: AudioBuffer.copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
tags:
  - API
  - 音声
  - AudioBuffer
  - コピー
  - フレーム
  - メソッド
  - リファレンス
  - Samples
  - ウェブ音声
  - ウェブ音声 API
  - copy
  - copyFromChannel
  - 音
browser-compat: api.AudioBuffer.copyFromChannel
translation_of: Web/API/AudioBuffer/copyFromChannel
---
{{APIRef("Web Audio API")}}

**`copyFromChannel()`** は {{domxref("AudioBuffer")}} インターフェイスのメソッドで、 `AudioBuffer` の指定されたチャンネルから音声サンプルデータを指定された {{jsxref("Float32Array")}} へコピーします。

## 構文

```js
copyFromChannel(destination, channelNumber, startInChannel);
```

### 引数

- `destination`
  - : チャンネルのサンプルのコピー先となる {{jsxref("Float32Array")}} です。
- `channelNumber`
  - : チャンネルデータをコピーする現在の `AudioBuffer` のチャンネル数です。
- `startInChannel` {{optional_inline}}
  - : オプションで、ソースチャンネルバッファー内でサンプルのコピーを始める位置のオフセットです。指定されていない場合は、既定で 0 の値（バッファーの先頭）とみなされます。

### 返値

`undefined` です。

### 例外

- `indexSizeError`

  - : 入力引数のうちの一つが、受付可能な範囲の外にある場合。

    - `channelNumber` の値が存在しないチャンネル番号を指定している場合（つまり、チャンネルの {{domxref("AudioBuffer.numberOfChannels", "numberOfChannels")}} 以上である場合）。
    - `startInChannel` の値がソースバッファーの中に既に存在するサンプルの現在の範囲の外にある場合。つまり、現在の {{domxref("AudioBuffer.length", "length")}} より大きい場合。

## 例

この例では新しい音声バッファーを生成し、他のチャンネルからサンプルをコピーします。

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
var anotherArray = new Float32Array(length);
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
