---
title: "AudioWorkletGlobalScope: currentFrame プロパティ"
slug: Web/API/AudioWorkletGlobalScope/currentFrame
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletGlobalScope")}} インターフェイスの読み取り専用プロパティ **`currentFrame`** は、処理中の音声ブロックのサンプルフレームを表す単調増加の整数を返します。この値は各音声ブロックを処理するごとに 128 (render quantum のサイズ) 増えます。

## 値

整数値です。

## 例

この {{domxref("AudioWorkletProcessor")}} は {{domxref("AudioWorkletGlobalScope")}} の特定のプロパティにアクセスできます。

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

メインスクリプトでは処理器をロードし、処理器の名前を渡して {{domxref("AudioWorkletNode")}} のインスタンスを生成し、そのノードを音声グラフに接続します。{{domxref("console/log_static", "console.log()")}} の呼び出しによる出力がコンソールに出るはずです。

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
