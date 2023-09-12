---
title: "Magnetometer: x プロパティ"
slug: Web/API/Magnetometer/x
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

{{domxref("Magnetometer")}} インターフェイスの読み取り専用プロパティ **`x`** は、デバイスの x 軸方向の磁場を表す数値を返します。

## 値

{{jsxref('Number')}} です。

## 例

磁場は通常 {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`X 軸方向の磁場 ${magSensor.x}`);
  console.log(`Y 軸方向の磁場 ${magSensor.y}`);
  console.log(`Z 軸方向の磁場 ${magSensor.z}`);
});
magSensor.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
