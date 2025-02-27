---
title: OrientationSensor
slug: Web/API/OrientationSensor
l10n:
  sourceCommit: 33eb1ab8fc98ec3a18972a2032b1af49eb57bb85
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`OrientationSensor`** インターフェイスは、向きセンサーのベースクラスです。このインターフェイスを直接使用することはできません。かわりに、このインターフェイスは継承するインターフェイスからアクセスされるプロパティとメソッドを提供します。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## OrientationSensor をベースとするインターフェイス

以下は、`OrientationSensor` インターフェイスをベースとするインターフェイスの一覧です。

- {{domxref('AbsoluteOrientationSensor')}}
- {{domxref('RelativeOrientationSensor')}}

## インスタンスプロパティ

- {{domxref("OrientationSensor.quaternion")}}
  - : 各要素がデバイスの向きを表す単位四元数の成分である 4 要素の {{jsxref('Array')}} を返します。

## インスタンスメソッド

- {{domxref("OrientationSensor.populateMatrix()")}}
  - : 指定のオブジェクトに、センサーの最新の測定値に基づく回転行列を入れます。

## 例

### 基本的な例

以下の例は、だいたい [Intel の Orientation Phone demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) をもとにしており、1 秒に 60 回の周期を設定して `AbsoluteOrientationSensor` のインスタンスを生成しています。測定ごとに、{{domxref('OrientationSensor.quaternion')}} を用いて電話の視覚的なモデルを回転しています。

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new AbsoluteOrientationSensor(options);

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
const sensor = new AbsoluteOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "magnetometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // …
  } else {
    console.log("AbsoluteOrientationSensor を使用する許可がありません。");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
