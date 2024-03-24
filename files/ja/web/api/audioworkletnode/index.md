---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

> **メモ:** このインターフェイスは[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)の外でも使用可能ですが、{{domxref("BaseAudioContext.audioWorklet")}} プロパティはそうではありません。そのため、独自の {{domxref("AudioWorkletProcessor")}} は安全なコンテキストの外では使用できません。

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の **`AudioWorkletNode`** インターフェイスは、ユーザー定義の {{domxref("AudioNode")}} (他のノードとともに音声ルーティンググラフに接続できる) の基底クラスを表します。これは対応する {{domxref("AudioWorkletProcessor")}} (ウェブオーディオレンダリングスレッドで実際の音声処理を行う) を持ちます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}}
  - : 新しい `AudioWorkletNode` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

_親の {{domxref("AudioNode")}} からもプロパティを継承します。_

- {{domxref("AudioWorkletNode.port")}} {{ReadOnlyInline}}
  - : ノードと対応する {{domxref("AudioWorkletProcessor")}} の間での双方向通信に使用する {{domxref("MessagePort")}} を返します。もう一方の端は、処理器の {{domxref("AudioWorkletProcessor.port", "port")}} プロパティで参照できます。
- {{domxref("AudioWorkletNode.parameters")}} {{ReadOnlyInline}}
  - : {{domxref("AudioParamMap")}} を返します。これは {{domxref("AudioParam")}} オブジェクトのコレクションです。対応する `AudioWorkletProcessor` の生成中に生成されます。この `AudioWorkletProcessor` に静的な {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} ゲッターがある場合、このゲッターが返す {{domxref("AudioParamDescriptor")}} の配列がこの `AudioWorkletNode` において `AudioParam` オブジェクトを生成するのに用いられます。この仕組みにより、`AudioWorkletNode` からアクセスできる独自の `AudioParam` オブジェクトを生成できます。そして、対応する `AudioWorkletProcessor` でこれらの値を使用できます。

### イベント

- {{domxref("AudioWorkletNode.processorerror_event", "processorerror")}}
  - : 対応する {{domxref("AudioWorkletProcessor")}} でエラーが投げられた時発火します。発火した後は、処理器、そして対応するノードはずっと無音を出力します。

## インスタンスメソッド

_親の {{domxref("AudioNode")}} からメソッドを継承します。_

_`AudioWorkletNode` インターフェイスは自身のメソッドを定義していません。_

## 例

この例では、ランダムノイズを出力する独自の `AudioWorkletNode` を生成します。

まず、ランダムノイズを出力する独自の {{domxref("AudioWorkletProcessor")}} を定義する必要があります。注意点として、これは個別のファイルで定義してください。

```js
// random-noise-processor.js
class RandomNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1;
      }
    });
    return true;
  }
}

registerProcessor("random-noise-processor", RandomNoiseProcessor);
```

そして、メインスクリプトファイルで処理器をロードし、この処理器の名前を渡して `AudioWorkletNode` のインスタンスを作成し、作成したノードを音声グラフに接続します。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("random-noise-processor.js");
const randomNoiseNode = new AudioWorkletNode(
  audioContext,
  "random-noise-processor",
);
randomNoiseNode.connect(audioContext.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioWorklet の使用](/ja/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
