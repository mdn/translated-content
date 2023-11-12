---
title: "AudioWorkletProcessor: parameterDescriptors プロパティ"
slug: Web/API/AudioWorkletProcessor/parameterDescriptors
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("AudioWorkletProcessor")}} から派生したクラスの読み取り専用プロパティ **`parameterDescriptors`** は、{{domxref("AudioParamDescriptor")}} ベースのオブジェクトを要素とする反復可能オブジェクトを返す _静的ゲッター_ です。

このプロパティは {{domxref("AudioWorkletProcessor")}} インターフェイスには含まれていませんが、定義された場合、{{domxref("AudioWorkletProcessor")}} のコンストラクター内部で呼ばれ、対応する {{domxref("AudioWorkletNode")}} の {{domxref("AudioWorkletNode.parameters", "parameters")}} プロパティに格納する独自の {{domxref("AudioParam")}} オブジェクトのリストの作成に用いられます。

このゲッターの定義は任意です。

## 値

{{domxref("AudioParamDescriptor")}} ベースのオブジェクトを要素とする反復可能オブジェクトです。
これらのオブジェクトのプロパティは、以下のものがあります。

- `name`
  - : `AudioParam` の名前を表す文字列です。ノードの {{domxref("AudioWorkletNode.parameters", "parameters")}} プロパティにおいてこの名前で `AudioParam` が参照可能になり、{{domxref("AudioWorkletProcessor.process")}} メソッドにおいてこの名前で `AudioParam` の計算された値を取得します。
- `automationRate` {{optional_inline}}
  - : [`"a-rate"`](/ja/docs/Web/API/AudioParam#a-rate) または [`"k-rate"`](/ja/docs/Web/API/AudioParam#k-rate) の文字列で、`AudioParam` の自動化レートを表します。デフォルト値は `"a-rate"` です。
- `minValue` {{optional_inline}}
  - : `AudioParam` の最小値を表す `float` 値です。デフォルト値は `-3.4028235e38` です。
- `maxValue` {{optional_inline}}
  - : `AudioParam` の最大値を表す `float` 値です。デフォルト値は `3.4028235e38` です。
- `defaultValue` {{optional_inline}}
  - : `AudioParam` の初期値を表す `float` 値です。デフォルト値は `0` です。

## 例

独自の `AudioWorkletProcessor` に静的な `parameterDescriptors` ゲッターを追加する方法を示すサンプルコードが [`AudioWorkletNode.parameters`](/ja/docs/Web/API/AudioWorkletNode/parameters#%E4%BE%8B) にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
