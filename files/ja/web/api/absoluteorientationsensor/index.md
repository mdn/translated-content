---
title: AbsoluteOrientationSensor
slug: Web/API/AbsoluteOrientationSensor
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`AbsoluteOrientationSensor`** インターフェイスは、地球の参照用座標系に対するデバイスの物理的な向きを表します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'accelerometer'`、`'gyroscope'`、`'magnetometer'` デバイスセンサーを使用する許可を与える必要があります。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AbsoluteOrientationSensor.AbsoluteOrientationSensor", "AbsoluteOrientationSensor()")}}
  - : 新しい `AbsoluteOrientationSensor` オブジェクトを生成します。

## インスタンスプロパティ

_固有のプロパティはありません。祖先の {{domxref('OrientationSensor')}} および {{domxref('Sensor')}} からプロパティを継承します。_

## インスタンスメソッド

_固有のメソッドはありません。祖先の {{domxref('OrientationSensor')}} および {{domxref('Sensor')}} からメソッドを継承します。_

## イベント

_固有のイベントはありません。祖先の {{domxref('Sensor')}} からイベントを継承します。_

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
