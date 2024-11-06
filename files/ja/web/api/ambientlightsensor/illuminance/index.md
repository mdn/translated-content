---
title: "AmbientLightSensor: illuminance プロパティ"
slug: Web/API/AmbientLightSensor/illuminance
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

{{domxref("AmbientLightSensor")}} インターフェイスの **`illuminance`** プロパティは、ホストデバイス周辺の環境光の[ルクス](https://ja.wikipedia.org/wiki/%E3%83%AB%E3%82%AF%E3%82%B9)単位のレベルを、現在の光レベルとして返します。

## 値

現在のルクス単位の光レベルを表す {{jsxref('Number')}} です。

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
