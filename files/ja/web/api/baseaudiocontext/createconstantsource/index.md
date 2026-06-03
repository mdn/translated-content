---
title: "BaseAudioContext: createConstantSource() メソッド"
short-title: createConstantSource()
slug: Web/API/BaseAudioContext/createConstantSource
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`createConstantSource()`** は {{domxref("BaseAudioContext")}} インターフェイスのプロパティで、 {{domxref("ConstantSourceNode")}} オブジェクトを作成します。これはサンプル数がすべて同じ値のモノラル（1 チャンネル）音声信号を連続的に出力する音声ソースです。

> [!NOTE]
> {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}} コンストラクターは {{domxref("ConstantSourceNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createConstantSource()
```

### 引数

なし。

### 返値

{{domxref('ConstantSourceNode')}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
