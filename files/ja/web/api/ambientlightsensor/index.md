---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`AmbientLightSensor`** インターフェイスは、現在の光レベル、すなわちホストデバイス周辺の環境光の照度を返します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'ambient-light-sensor'` デバイスセンサーを使用する許可を与える必要があります。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AmbientLightSensor.AmbientLightSensor()", "AmbientLightSensor()")}} {{Experimental_Inline}}
  - : 新しい `AmbientLightSensor` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('AmbientLightSensor.illuminance')}} {{Experimental_Inline}}
  - : ホストデバイス周辺の環境光の[ルクス](https://ja.wikipedia.org/wiki/%E3%83%AB%E3%82%AF%E3%82%B9)単位のレベルを、現在の光レベルとして返します。

## インスタンスメソッド

_`AmbientLightSensor` には独自のメソッドはありません。しかし、親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_`AmbientLightSensor` には独自のイベントはありません。しかし、親インターフェイスの {{domxref('Sensor')}} からイベントを継承しています。_

## 例

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("現在の光レベル:", sensor.illuminance);
  });
  sensor.addEventListener("error", (event) => {
    console.log(event.error.name, event.error.message);
  });
  sensor.start();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
