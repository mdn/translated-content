---
title: GravitySensor
slug: Web/API/GravitySensor
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`GravitySensor`** インターフェイスは、デバイスの 3 軸それぞれにかかっている重力の測定値を提供します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'accelerometer'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GravitySensor.GravitySensor", "GravitySensor()")}}
  - : 新しい `GravitySensor` オブジェクトを生成します。

## インスタンスプロパティ

_祖先の {{domxref('Accelerometer')}}、{{domxref('Sensor')}}、{{domxref('EventTarget')}} からプロパティを継承しています。_

## インスタンスメソッド

_`GravitySensor` には独自のメソッドはありません。しかし、親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_`GravitySensor` には独自のイベントはありません。しかし、親インターフェイスの {{domxref('Sensor')}} からイベントを継承しています。_

## 例

重力は通常 {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
let gravitySensor = new GravitySensor({ frequency: 60 });

gravitySensor.addEventListener("reading", (e) => {
  console.log(`X 軸方向の重力 ${gravitySensor.x}`);
  console.log(`Y 軸方向の重力 ${gravitySensor.y}`);
  console.log(`Z 軸方向の重力 ${gravitySensor.z}`);
});

gravitySensor.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
