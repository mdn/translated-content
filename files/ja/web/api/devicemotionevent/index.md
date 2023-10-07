---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Device Orientation Events")}}

**`DeviceMotionEvent`** インターフェイスは、ウェブ開発者に端末の位置と方向の変化のスピードに関する情報を提供します。

> **警告:** 現在、Firefox と Chrome は同じ方法で座標を処理しません。これらを使用する際は、注意してください。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DeviceMotionEvent.DeviceMotionEvent", "DeviceMotionEvent()")}}
  - : 新しい `DeviceMotionEvent` を生成します。

## プロパティ

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : 3 つの軸 X、Y、Z 上の端末の加速度を与えるオブジェクトです。加速度は [m/s²](https://ja.wikipedia.org/wiki/メートル毎秒毎秒) で表されます。
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : X、Y、Z 上の端末の加速度を重力度込みで与えるオブジェクトです。加速度は [m/s²](https://ja.wikipedia.org/wiki/メートル毎秒毎秒) で表されます。
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : 3 つの方向軸アルファ、ベータ、ガンマ上の端末の向きの変化率を与えるオブジェクトです。回転速度は 1 秒あたりの度数で表されます。
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : 端末からデータを取得する間隔（ミリ秒）を表す数値です。

## 例

```js
window.addEventListener("devicemotion", (event) => {
  console.log(`${event.acceleration.x} m/s2`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window/deviceorientation_event", "deviceorientation")}}
- {{DOMxRef("DeviceOrientationEvent")}}
- {{domxref("Window/devicemotion_event", "devicemotion")}}
- {{DOMxRef("Accelerometer")}}
- {{DOMxRef("LinearAccelerationSensor")}}
- [端末の方向検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向と移動データの説明](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
