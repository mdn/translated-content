---
title: "AudioWorkletNode: parameters プロパティ"
slug: Web/API/AudioWorkletNode/parameters
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletNode")}} インターフェイスの読み取り専用プロパティ **`parameters`** は、関連付けられた {{domxref("AudioParamMap")}} を返します。これは {{domxref("AudioParam")}} オブジェクトが入った `Map` のようなコレクションです。中身のオブジェクトは、用いる {{domxref("AudioWorkletProcessor")}} の生成時に {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} 静的ゲッターに沿って生成されます。

## 値

{{domxref("AudioParam")}} のインスタンスを持つ {{domxref("AudioParamMap")}} オブジェクトです。
これらはデフォルトの `AudioNode` で行うのと同じ方法で自動化でき、計算された値は自分の {{domxref("AudioWorkletProcessor")}} の {{domxref("AudioWorkletProcessor.process", "process")}} メソッドで使用できます。

## 例

独自の `AudioParam` の作成と使用のデモを行うため、{{domxref("AudioWorkletNode")}} ページにある例を拡張します。このページでは、ホワイトノイズを出力する単純なノードを作成しました。ここでは、独自のゲインパラメーターを追加し、出力の音量を直接変えることができるようにします。(これは {{domxref("GainNode")}} を用いてもできますが)

まず、独自の `AudioWorkletProcessor` を定義して登録する必要があります。
これは別のファイルで行うことに注意してください。

処理器を拡張し、静的な {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} ゲッターを追加します。これは `AudioWorkletNode` のコンストラクター内部で `parameters` に生成した `AudioParam` オブジェクトを入れるのに用いられます。

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] =
          (Math.random() * 2 - 1) *
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
        // メモ: パラメーターは 128 個の値の配列です。(128 サンプルのそれぞれについて 1 個ずつ)
        // ただし、現在自動処理がスケジュールされていない場合、
        // 128 サンプル全てで用いる値が 1 個だけ入っていることがあります。
      }
    });
    return true;
  }
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

次に、メインスクリプトで処理器を読み込み、処理器の名前を渡して `AudioWorkletNode` のインスタンスを作成し、このノードを音声グラフに接続します。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

すると、ノードのゲインをこのようにして変えることができます。

```js
const gainParam = whiteNoiseNode.parameters.get("customGain");
gainParam.setValueAtTime(0, audioContext.currentTime);
gainParam.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.5);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
