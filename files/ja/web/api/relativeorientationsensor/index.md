---
title: RelativeOrientationSensor
slug: Web/API/RelativeOrientationSensor
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`RelativeOrientationSensor`** インターフェイスは、地球の参照用座標系は考慮せず、デバイスの物理的な向きを表します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'accelerometer'` および `'gyroscope'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("RelativeOrientationSensor.RelativeOrientationSensor", "RelativeOrientationSensor()")}}
  - : 新しい `RelativeOrientationSensor` オブジェクトを生成します。

## インスタンスプロパティ

_固有のプロパティはありません。祖先の {{domxref('OrientationSensor')}} および {{domxref('Sensor')}} からプロパティを継承します。_

## インスタンスメソッド

_固有のメソッドはありません。祖先の {{domxref('OrientationSensor')}} および {{domxref('Sensor')}} からメソッドを継承します。_

## イベント

_固有のイベントはありません。祖先の {{domxref('Sensor')}} からイベントを継承します。_

## 例

### 基本的な例

以下の例は、だいたい [Intel の Orientation Phone demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) をもとにしており、1 秒に 60 回の周期を設定して `RelativeOrientationSensor` のインスタンスを生成しています。

> [!NOTE]
> もとにした Intel のデモでは `AbsoluteOrientationSensor` を用いています。測定ごとに、{{domxref('OrientationSensor.quaternion')}} を用いて電話の視覚的なモデルを回転しています。

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new RelativeOrientationSensor(options);

sensor.addEventListener("reading", () => {
  // model は別の場所で生成した Three.js のオブジェクト
  model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener("error", (error) => {
  if (event.error.name === "NotReadableError") {
    console.log("センサーが利用できません。");
  }
});
sensor.start();
```

### 許可の例

向きセンサーを使用するには、複数のデバイスセンサーを使用する許可を要求する必要があります。{{domxref('Permissions')}} インターフェイスは Promise を使用するので、許可を要求するのには {{jsxref('Promise.all')}} を使用するとよいです。

```js
const sensor = new RelativeOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // ...
  } else {
    console.log("RelativeOrientationSensor を使用する許可がありません。");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
