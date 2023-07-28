---
title: BaseAudioContext.createConstantSource()
slug: Web/API/BaseAudioContext/createConstantSource
---

{{APIRef("Web Audio API")}}

**`createConstantSource()`** は {{domxref("BaseAudioContext")}} インターフェイスのプロパティで、 {{domxref("ConstantSourceNode")}} オブジェクトを作成します。これはサンプル数がすべて同じ値のモノラル（1 チャンネル）音声信号を連続的に出力する音声ソースです。

> **メモ:** {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}} コンストラクターは {{domxref("ConstantSourceNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createConstantSource();
```

### 引数

なし。

### 返値

{{domxref('ConstantSourceNode')}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
