---
title: LinearAccelerationSensor
slug: Web/API/LinearAccelerationSensor
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`LinearAccelerationSensor`** インターフェイスは、デバイスの 3 軸それぞれにかかっている加速度の測定値を、重力の影響を除いて提供します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'accelerometer'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("LinearAccelerationSensor.LinearAccelerationSensor", "LinearAccelerationSensor()")}}
  - : 新しい `LinearAccelerationSensor` オブジェクトを生成します。

## インスタンスプロパティ

_祖先の {{domxref('Accelerometer')}}、{{domxref("Sensor")}}、{{domxref("EventTarget")}} からプロパティを継承しています。_

## インスタンスメソッド

_`LinearAccelerationSensor` には独自のメソッドはありません。しかし、親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_`LinearAccelerationSensor` には独自のイベントはありません。しかし、親インターフェイスの {{domxref('Sensor')}} からイベントを継承しています。_

## 例

線形加速度は通常 {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
let laSensor = new LinearAccelerationSensor({ frequency: 60 });

laSensor.addEventListener("reading", (e) => {
  console.log(`X 軸方向の線形加速度 ${laSensor.x}`);
  console.log(`Y 軸方向の線形加速度 ${laSensor.y}`);
  console.log(`Z 軸方向の線形加速度 ${laSensor.z}`);
});
laSensor.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
