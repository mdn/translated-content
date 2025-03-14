---
title: "AudioWorkletGlobalScope: registerProcessor() メソッド"
slug: Web/API/AudioWorkletGlobalScope/registerProcessor
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{domxref("AudioWorkletGlobalScope")}} インターフェイスの **`registerProcessor`** メソッドは、{{domxref("AudioWorkletProcessor")}} インターフェイスから派生したクラスのコンストラクターを指定の `name` で登録します。

## 構文

```js-nolint
registerProcessor(name, processorCtor)
```

### 引数

- `name`
  - : 処理器を登録する名前を表す文字列です。
- `processorCtor`
  - : {{domxref("AudioWorkletProcessor")}} から派生したクラスのコンストラクターです。

> [!NOTE]
> 処理器を登録すると、キーと値のペア `{ name: constructor }` が内部で {{domxref("AudioWorkletGlobalScope")}} に保存されます。登録した処理器をもとに {{domxref("AudioWorkletNode")}} を生成するとき、`name` が参照されます。指定の名前によって新しい処理器が内部で生成され、新しいノードと関連付けられます。

### 返値

なし ({{jsxref("undefined")}})

### 例外

- `NotSupportedError` {{domxref("DOMException")}}

  - : 以下のとき投げられます。

    - `name` が空文字列のとき。
    - 指定の `name` でコンストラクターが既に登録されているとき。
      同じ名前を 2 回登録することは許されません。

- {{jsxref("TypeError")}}

  - : 以下のとき投げられます。

    - `processorCtor` が呼び出し可能なコンストラクターではないとき。
    - コンストラクターに {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} プロパティが存在し、{{domxref("AudioParamDescriptor")}} ベースのオブジェクトの配列を返さなかったとき。

## 例

この例では、無音を出力する独自の `AudioWorkletNode` を作成します。

まず、独自の {{domxref("AudioWorkletProcessor")}} を定義して登録する必要があります。これは別のファイルで行うことに注意してください。

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

次に、メインスクリプトファイルで処理器をロードし、`registerProcessor` を呼ぶときに用いた処理器の名前を渡して `AudioWorkletNode` のインスタンスを生成し、それを音声グラフに接続します。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const node = new AudioWorkletNode(audioContext, "test-processor");
node.connect(audioContext.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
