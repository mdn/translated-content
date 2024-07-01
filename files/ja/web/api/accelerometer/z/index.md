---
title: "Accelerometer: z プロパティ"
slug: Web/API/Accelerometer/z
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

{{domxref("Accelerometer")}} インターフェイスの読み取り専用プロパティ **`z`** は、デバイスの z 軸方向の加速度を表す数値を返します。

## 値

{{jsxref('Number')}} です。

## 例

通常、加速度は {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで取得します。以下の例では、これを 1 秒あたり 60 回行います。

```js
const accelerometer = new Accelerometer({ frequency: 60 });

accelerometer.addEventListener("reading", (e) => {
  console.log(`X 軸方向の加速度 ${accelerometer.x}`);
  console.log(`Y 軸方向の加速度 ${accelerometer.y}`);
  console.log(`Z 軸方向の加速度 ${accelerometer.z}`);
});
accelerometer.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
