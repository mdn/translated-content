---
title: SensorErrorEvent
slug: Web/API/SensorErrorEvent
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`SensorErrorEvent`** インターフェイスは、{{domxref('Sensor')}} および派生インターフェイスから投げられたエラーに関する情報を提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SensorErrorEvent.SensorErrorEvent", "SensorErrorEvent()")}}
  - : 新しい `SensorErrorEvent` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('SensorErrorEvent.error')}} {{ReadOnlyInline}}
  - : イベントのコンストラクターに渡された {{domxref('DOMException')}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
