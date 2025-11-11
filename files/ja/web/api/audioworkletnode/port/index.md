---
title: "AudioWorkletNode: port プロパティ"
slug: Web/API/AudioWorkletNode/port
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletNode")}} インターフェイスの読み取り専用プロパティ **`port`** は、関連付けられた {{domxref("MessagePort")}} を返します。これにより、ノードと対応する {{domxref("AudioWorkletProcessor")}} の間で双方向通信ができます。

> [!NOTE]
> チャネルのもう一方の端にあるポートは、処理器の {{domxref("AudioWorkletProcessor.port", "port")}} プロパティから参照できます。

## 値

この `AudioWorkletNode` と対応する `AudioWorkletProcessor` を繋ぐ {{domxref("MessagePort")}} オブジェクトです。

## 例

双方向通信でできることのデモのため、無音を出力し、`AudioWorkletNode` からの ping 要求に応える `AudioWorkletProcessor` を作成します。

まず、独自の `AudioWorkletProcessor` を定義し、登録します。
これは別のファイルで行うことに注意してください。

```js
// ping-pong-processor.js
class PingPongProcessor extends AudioWorkletProcessor {
  constructor(...args) {
    super(...args);
    this.port.onmessage = (e) => {
      console.log(e.data);
      this.port.postMessage("pong");
    };
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("ping-pong-processor", PingPongProcessor);
```

そして、メインスクリプトファイルで処理器をロードし、処理器の名前を渡して `AudioWorkletNode` のインスタンスを作成し、このノードを音声グラフに接続します。

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("ping-pong-processor.js");
const pingPongNode = new AudioWorkletNode(audioContext, "ping-pong-processor");
// 毎秒、AudioWorkletNode から
// 文字列 'ping' が入ったメッセージを AudioWorkletProcessor に送る
setInterval(() => pingPongNode.port.postMessage("ping"), 1000);
pingPongNode.port.onmessage = (e) => console.log(e.data);
pingPongNode.connect(audioContext.destination);
```

このプログラムは、コンソールに毎秒文字列 `"ping"` と `"pong"` を出力します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
