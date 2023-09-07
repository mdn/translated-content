---
title: "AudioWorkletNode: AudioWorkletNode() コンストラクター"
slug: Web/API/AudioWorkletNode/AudioWorkletNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`AudioWorkletNode()`** コンストラクターは新しい {{domxref("AudioWorkletNode")}} オブジェクトを作成します。このオブジェクトは、JavaScript の関数により独自の音声処理を行う {{domxref("AudioNode")}} を表します。

## 構文

```js-nolint
new AudioWorkletNode(context, name)
new AudioWorkletNode(context, name, options)
```

### 引数

- `context`
  - : このノードを関連付ける {{domxref("BaseAudioContext")}} のインスタンスです。
- `name`
  - : このノードのもととなる {{domxref("AudioWorkletProcessor")}} の名前を表す文字列です。
    指定の名前の処理器が {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} メソッドで登録されている必要があります。
- `options` {{optional_inline}}

  - : 以下の任意のプロパティのうち 0 個以上を持ち、新しいノードの設定をするオブジェクトです。

    <!-- 仕様書ではこのオブジェクトは AudioWorkletNodeOptions と呼ばれています -->

    > **メモ:** このオブジェクトに[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を適用した結果が内部で対応する {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}} コンストラクターに渡されます。
    > これにより、用いるユーザー定義の {{domxref("AudioWorkletProcessor")}} の初期化のカスタマイズが可能になります。

    - `numberOfInputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}} プロパティを初期化する値です。デフォルト値は 1 です。
    - `numberOfOutputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}} プロパティを初期化する値です。デフォルト値は 1 です。
    - `outputChannelCount` {{optional_inline}}
      - : それぞれの出力のチャンネル数を定義する **配列** です。たとえば、`outputChannelCount: [n, m]` は最初の出力のチャンネル数を `n` に、2 番目の出力のチャンネル数を `m` に設定します。配列の長さは `numberOfOutputs` と一致しなければなりません。
    - `parameterData` {{optional_inline}}
      - : このノード (の {{domxref("AudioWorkletNode.parameters", "parameters")}} プロパティ) の独自の {{domxref("AudioParam")}} オブジェクトの初期値を持つオブジェクトです。独自パラメーターの名前をキー、初期値を値とします。
    - `processorOptions` {{optional_inline}}
      - : 用いる {{domxref("AudioWorkletProcessor")}} の初期化のカスタマイズに用いる任意の追加データです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}

  - : 指定された `options.outputChannelCount` が `0` である、または現在の実装が対応する最大値より大きいとき投げられます。

    `options.numberOfInputs` と `options.numberOfOutputs` の両方が 0 であるとき投げられます。

- `IndexSizeError` {{domxref("DOMException")}}
  - : 配列 `options.outputChannelCount` の長さが `options.numberOfOutputs` と一致しないとき投げられます。

## 使用上の注意点

`options` 引数の値によって、以下の効果があります。

入力の数と出力の数を両方 0 に設定すると、`NotSupportedError` が投げられ、生成処理が中断されます。配列 `outputChannelCount` の長さが `numberOfOutputs` と一致しない場合は、`IndexSizeError` {{domxref("DOMException")}} が投げられます。

`outputChannelCount` が指定されておらず、`numberOfInputs` と `numberOfOutputs` がともに 1 の場合は、`AudioWorkletNode` の初期チャンネル数は 1 になります。この場合、出力のチャンネル数を変えることで、入力のチャンネル数と {{domxref("AudioNode")}} の {{domxref("AudioNode.channelCountMode", "channelCountMode")}} プロパティの設定に基づき、計算されたチャンネル数を動的に変えることができます。

`outputChannelCount` が指定されており、_かつ_ `numberOfInputs` と `numberOfOutputs` がともに 1 の場合、このノードのチャンネル数は `outputChannelCount` の値になります。そうでない場合は、それぞれの出力のチャンネル数は配列 `outputChannelCount` の対応する値に従って設定されます。

## 例

_{{domxref("AudioWorkletNode")}} のページに、ユーザー定義の音声処理のデモを行う完全な例があります。_

## 例外

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Background audio processing using AudioWorklet](/ja/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} インターフェイス
