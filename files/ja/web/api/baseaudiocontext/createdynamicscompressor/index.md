---
title: BaseAudioContext.createDynamicsCompressor()
slug: Web/API/BaseAudioContext/createDynamicsCompressor
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - メソッド
  - リファレンス
  - ウェブ音声 API
  - createDynamicsCompressor
browser-compat: api.BaseAudioContext.createDynamicsCompressor
translation_of: Web/API/BaseAudioContext/createDynamicsCompressor
original_slug: Web/API/AudioContext/createDynamicsCompressor
---
{{ APIRef("Web Audio API") }}

`createDynamicsCompressor()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{domxref("DynamicsCompressorNode")}} を生成します。これで、音声信号に圧縮をかけることができます。

圧縮は、信号の最も大きな部分の音量を下げ、最も小さな部分の音量を上げます。全体として、より大きく、より豊かで、充実したサウンドを実現することができます。特に、ゲームや音楽など、多数の音を同時に再生するアプリケーションでは、全体の信号レベルを制御し、音声出力のクリッピング（歪み）を回避するのに役立つので、重要です。

> **Note:** {{domxref("DynamicsCompressorNode.DynamicsCompressorNode", "DynamicsCompressorNode()")}} コンストラクターは {{domxref("DynamicsCompressorNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createDynamicsCompressor()
```

### 引数

なし。

### 返値

{{domxref("DynamicsCompressorNode")}} です。

## 例

以下のコードは、音声トラックに圧縮を加えるための `createDynamicsCompressor()` の簡単な使用法を示しています。より完全な例としては、[基本的なコンプレッサーの例](https://mdn.github.io/webaudio-examples/compressor-example/)（[ソースコードを閲覧](https://github.com/mdn/webaudio-examples/tree/master/compressor-example)）をご覧ください。

```js
// MediaElementAudioSourceNode を生成する
// そこに HTMLMediaElement を入れる
var source = audioCtx.createMediaElementSource(myAudio);

// コンプレッサーノードを生成する
var compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

// AudioBufferSourceNode を出力先につなげる
source.connect(audioCtx.destination);

button.onclick = function() {
  var active = button.getAttribute('data-active');
  if(active == 'false') {
    button.setAttribute('data-active', 'true');
    button.textContent = 'Remove compression';

    source.disconnect(audioCtx.destination);
    source.connect(compressor);
    compressor.connect(audioCtx.destination);
  } else if(active == 'true') {
    button.setAttribute('data-active', 'false');
    button.textContent = 'Add compression';

    source.disconnect(compressor);
    compressor.disconnect(audioCtx.destination);
    source.connect(audioCtx.destination);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
