---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
l10n:
  sourceCommit: 92ddca57f093fcae13e474f1eedca2946359f131
---

{{APIRef("Web Audio API")}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の **`AudioWorkletGlobalScope`** インターフェイスは、独自の {{domxref("AudioWorkletProcessor")}} の派生クラスを定義するユーザーコードのグローバル実行コンテキストを表します。

それぞれの {{domxref("BaseAudioContext")}} は {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} プロパティに 1 個の {{domxref("AudioWorklet")}} を持ち、これがコードを 1 個の `AudioWorkletGlobalScope` で実行します。

グローバル実行コンテキストは現在の `BaseAudioContext` で共通なので、`AudioWorkletProcessor` の派生クラスを定義するだけでなく、他の変数を定義するなど、ワークレットでできることはなんでもできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは、親インターフェイスの {{domxref("WorkletGlobalScope")}} で定義されたプロパティも継承します。_

- {{domxref("AudioWorkletGlobalScope.currentFrame", "currentFrame")}} {{ReadOnlyInline}}
  - : 処理されている音声ブロックの現在のサンプルフレームを表す、単調増加の整数を返します。この値は、各音声ブロックを処理するごとに 128 (render quantum のサイズ) 増えます。
- {{domxref("AudioWorkletGlobalScope.currentTime", "currentTime")}} {{ReadOnlyInline}}
  - : 処理中の音声ブロックのコンテキスト時刻を表す単調増加の `double` 値を返します。ワークレットが属している {{domxref("BaseAudioContext")}} の {{domxref("BaseAudioContext.currentTime", "currentTime")}} プロパティと同じ値です。
- {{domxref("AudioWorkletGlobalScope.sampleRate", "sampleRate")}} {{ReadOnlyInline}}
  - : 属している {{domxref("BaseAudioContext")}} のサンプルレートを表す `float` 値を返します。

## インスタンスメソッド

_このインターフェイスは、親インターフェイスの {{domxref("WorkletGlobalScope")}} からもメソッドを継承します。_

- {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}
  - : {{domxref('AudioWorkletProcessor')}} インターフェイスの派生クラスを登録します。これにより、登録したクラスが登録した名前を指定することで {{domxref("AudioWorkletNode")}} の生成に使用できるようになります。

## 例

この例では、独自の {{domxref("AudioWorkletProcessor")}} のコンストラクターで、すべてのグローバルプロパティをコンソールに出力します。

まず、処理器を定義して登録する必要があります。これは別のファイルで行うことに注意してください。

```js
// test-processor.js で定義された AudioWorkletProcessor
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // 生成時のサンプルフレームと時刻を記録する。
    // これらの値には AudioWorkletGlobalScope からアクセスできる。
    console.log(currentFrame);
    console.log(currentTime);
  }

  // process メソッドは必須である。
  // (最初から入っている) 無音を出力する。
  process(inputs, outputs, parameters) {
    return true;
  }
}

// サンプルレートを記録する。
// これは BaseAudioContext の読み取り専用プロパティであり、
// 生成時にのみ設定されるので、変化しない。
console.log(sampleRate);

// 任意の変数を宣言し、処理器で利用できる。
// たとえば、波形テーブルが入った ArrayBuffer を宣言できる。
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

次に、メインスクリプトファイルで処理器をロードし、処理器の名前を渡して {{domxref("AudioWorkletNode")}} のインスタンスを生成し、生成したノードを音声グラフに接続します。コンソールに {{domxref("console/log_static", "console.log()")}} の呼び出しによる出力が出るはずです。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor");
testNode.connect(audioContext.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioWorklet の使用](/ja/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
