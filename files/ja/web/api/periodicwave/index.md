---
title: PeriodicWave
slug: Web/API/PeriodicWave
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{ APIRef("Web Audio API") }}

**`PeriodicWave`** インターフェイスは、{{domxref("OscillatorNode")}} の出力を形成するのに利用できる周期的な波形を定義します。

`PeriodicWave` には入力も出力もありません。これは、{{domxref("OscillatorNode.setPeriodicWave()")}} を呼ぶ際にカスタム発振器を定義するために用います。`PeriodicWave` 自体は {{domxref("BaseAudioContext.createPeriodicWave")}} により作成され、返されます。

## コンストラクター

- {{domxref("PeriodicWave.PeriodicWave", "PeriodicWave()")}}
  - : 全てのプロパティについてデフォルトの値を使用し、新しい `PeriodicWave` を作成します。最初からプロパティの値をカスタムしたい場合は、かわりに {{domxref("BaseAudioContext.createPeriodicWave")}} ファクトリーメソッドを使ってください。

## インスタンスプロパティ

なし。`PeriodicWave` はプロパティの継承もしません。

## インスタンスメソッド

なし。`PeriodicWave` はメソッドの継承もしません。

## 例

単純な正弦波を表す `PeriodicWave` オブジェクトを作成する方法のサンプルコードは、{{domxref("BaseAudioContext.createPeriodicWave")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
