---
title: "AudioWorkletProcessor: port プロパティ"
slug: Web/API/AudioWorkletProcessor/port
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletProcessor")}} インターフェイスの読み取り専用プロパティ **`port`** は、関連付けられた {{domxref("MessagePort")}} を返します。これは、処理器と対応する {{domxref("AudioWorkletNode")}} の間の通信に使用できます。

> [!NOTE]
> チャネルのもう一方の端は、ノードの {{domxref("AudioWorkletNode.port", "port")}} プロパティから参照できます。

## 値

`AudioWorkletProcessor` と対応する `AudioWorkletNode` を接続する {{domxref("MessagePort")}} オブジェクトです。

## 例

[`AudioWorkletNode.port`](/ja/docs/Web/API/AudioWorkletNode/port#examples) にサンプルコードがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
