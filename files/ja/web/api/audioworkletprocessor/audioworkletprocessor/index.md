---
title: "AudioWorkletProcessor: AudioWorkletProcessor() コンストラクター"
slug: Web/API/AudioWorkletProcessor/AudioWorkletProcessor
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`AudioWorkletProcessor()`** コンストラクターは新しい {{domxref("AudioWorkletProcessor")}} オブジェクトを生成します。このオブジェクトは {{domxref("AudioWorkletNode")}} で用いる音声処理の仕組みを表します。

## 構文

> **メモ:** `AudioWorkletProcessor` とその派生クラスは、ユーザーのコードから直接生成することはできません。これらは対応する {{domxref("AudioWorkletNode")}} の生成に伴って内部でのみ生成されます。

```js-nolint
new AudioWorkletProcessor(options)
```

### 引数

- `options`

  - : {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode のコンストラクター")}} の引数 `options` に渡されたオブジェクトです。[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を経由して渡されます。
    以下のプロパティが利用できます。

    <!-- 仕様書ではこのオブジェクトを AudioWorkletNodeOptions と呼んでいます -->

    - `numberOfInputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}} プロパティを初期化する値です。デフォルト値は 1 です。
    - `numberOfOutputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}} プロパティを初期化する値です。デフォルト値は 1 です。
    - `outputChannelCount` {{optional_inline}}
      - : それぞれの出力のチャンネル数を決める **配列** です。たとえば、`outputChannelCount: [n, m]` は最初の出力のチャンネル数を `n` に、2 番目の出力のチャンネル数を `m` に設定します。配列の長さは `numberOfOutputs` に一致しなければなりません。
    - `parameterData` {{optional_inline}}
      - : このノード (の {{domxref("AudioWorkletNode.parameters", "parameters")}} プロパティ) の独自の {{domxref("AudioParam")}} オブジェクトの初期値が入ったオブジェクトです。キーを独自プロパティの名前、値を初期値とします。
    - `processorOptions` {{optional_inline}}
      - : 用いる {{domxref("AudioWorkletProcessor")}} の独自の初期化に用いる任意の追加データです。

    なお、最初の 2 個のプロパティにはデフォルト値があるので、{{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode のコンストラクター")}} に `options` オブジェクトが渡されなかった場合でも、ノードから `AudioWorkletProcessor` のコンストラクターには `options` オブジェクトが渡され、このオブジェクトには少なくとも `numberOfInputs` と `numberOfOutputs` があります。

### 返値

新しく構築された {{domxref("AudioWorkletProcessor")}} のインスタンスを返します。

## 例

この例では、{{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode constructor")}} に独自のオプションを渡し、その[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)が `AudioWorkletProcessor` のコンストラクターに渡される様子を観察します。

まず、独自の {{domxref("AudioWorkletProcessor")}} を定義して登録する必要があります。
これは別のファイルで行うことに注意してください。

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    console.log(options.numberOfInputs);
    console.log(options.processorOptions.someUsefulVariable);
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

次に、メインスクリプトファイルで処理器をロードし、この処理器の名前と `options` オブジェクトを渡して `AudioWorkletNode` のインスタンスを生成します。

`options` オブジェクトでは、`someUsefulVariable` キーに {{jsxref("Map")}} のインスタンスを入れた `processorOptions` を渡します。`numberOfInputs` は渡さず、デフォルト値が設定される様子を観察します。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor", {
  processorOptions: {
    someUsefulVariable: new Map([
      [1, "one"],
      [2, "two"],
    ]),
  },
});
```

コンソールに以下のように出力されます。

```
> 1 // AudioWorkletNode options.numberOfInputs はデフォルトに設定される
> Map(2) { 1 => "one", 2 => "two" } // someUsefulVariable で設定した Map の複製
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} インターフェイス
