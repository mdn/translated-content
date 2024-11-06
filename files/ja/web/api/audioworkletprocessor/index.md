---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の **`AudioWorkletProcessor`** インターフェイスは、独自の {{domxref("AudioWorkletNode")}} が用いる音声処理コードを表します。これは {{domxref("AudioWorkletGlobalScope")}} に存在し、ウェブオーディオレンダリングスレッドで実行されます。一方、対応する {{domxref("AudioWorkletNode")}} はメインスレッドで実行されます。

## コンストラクター

> **メモ:** `AudioWorkletProcessor` とその派生クラスは、ユーザーのコードから直接生成することはできません。これらは対応する {{domxref("AudioWorkletNode")}} の生成に伴って内部でのみ生成されます。派生クラスのコンストラクターはオプションオブジェクトとともに呼ばれるため、独自の初期化処理を行うことができます。詳しくはコンストラクターのページを参照してください。

- {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}}
  - : 新しい `AudioWorkletProcessor` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

- {{domxref("AudioWorkletProcessor.port", "port")}} {{ReadOnlyInline}}
  - : 処理器と対応する {{domxref("AudioWorkletNode")}} の間の双方向通信に用いる {{domxref("MessagePort")}} を返します。もう一方の端は、ノードの {{domxref("AudioWorkletNode.port", "port")}} プロパティから参照できます。

## インスタンスメソッド

_`AudioWorkletProcessor` インターフェイスは自身のメソッドを定義していません。しかし、音声ストリームを処理するために呼ばれる {{domxref("AudioWorkletProcessor.process", "process()")}} メソッドを定義しなければなりません。_

## イベント

_`AudioWorkletProcessor` インターフェイスはイベントに反応しません。_

## 使用上の注意点

### 派生クラスの作成

独自の音声処理コードを定義するには、`AudioWorkletProcessor` インターフェイスの派生クラスを作る必要があります。このインターフェイスでは定義されていませんが、派生クラスには {{domxref("AudioWorkletProcessor.process", "process")}} メソッドが必要です。このメソッドは 128 サンプルフレームからなるブロックそれぞれについて呼ばれ、入力の配列、出力の配列、(定義されていれば) 独自の {{domxref("AudioParam")}} の計算された値を引数として受け取ります。出力の配列の初期値は無音です。入力と音声パラメーターの値を出力の配列を埋めるのに使用できます。

オプションとして、ノードで独自の {{domxref("AudioParam")}} を使いたい場合、処理器の _静的ゲッター_ として {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} プロパティを定義できます。返される {{domxref("AudioParamDescriptor")}} をベースとするオブジェクトの配列が、`AudioWorkletNode` の生成時に {{domxref("AudioParam")}} を生成するため用いられます。

生成された `AudioParam` はノードの {{domxref("AudioWorkletNode.parameters", "parameters")}} プロパティに配置され、[`linearRampToValueAtTime`](/ja/docs/Web/API/AudioParam/linearRampToValueAtTime) などの標準メソッドを用いて自動化できます。これらで計算された値は処理器の {{domxref("AudioWorkletProcessor.process", "process()")}} メソッドに渡され、ノードの出力の形成に使用できます。

### 音声処理

以下に、独自の音声処理の仕組みを作るアルゴリズムの例を示します。

1. 別のファイルを作ります。
2. このファイルで以下を行います。

   1. `AudioWorkletProcessor` クラスを継承 ([「派生クラスの作成」の節](#%E6%B4%BE%E7%94%9F%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E4%BD%9C%E6%88%90)を参照) し、その中で自身の {{domxref("AudioWorkletProcessor.process", "process()")}} メソッドを定義します。
   2. 作成した処理器を {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} メソッドで登録します。

3. 音声コンテキストの {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} プロパティの {{domxref("Worklet.addModule", "addModule()")}} メソッドで、このファイルを読み込みます。
4. この処理器をベースとする {{domxref("AudioWorkletNode")}} を生成します。処理器は `AudioWorkletNode` のコンストラクター内部で生成されます。
5. 生成したノードを他のノードに接続します。

## 例

以下の例では、ホワイトノイズを出力する独自の {{domxref("AudioWorkletNode")}} を作成します。

まず、ホワイトノイズを出力する独自の `AudioWorkletProcessor` を定義し、登録する必要があります。これは別のファイルで行うことに注意してください。

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
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

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

次に、メインスクリプトで処理器をロードし、処理器の名前を渡して {{domxref("AudioWorkletNode")}} のインスタンスを作成し、そのノードを音声グラフに接続します。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioWorklet の使用](/ja/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
