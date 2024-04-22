---
title: "DeviceMotionEvent: acceleration プロパティ"
short-title: acceleration
slug: Web/API/DeviceMotionEvent/acceleration
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Device Orientation Events")}}

**`acceleration`** プロパティは、端末によって記録された加速度の量を[メートル毎秒毎秒 (m/s²)](https://ja.wikipedia.org/wiki/メートル毎秒毎秒)単位で返します。
{{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} とは異なり、加速度値は重力の影響を含みません。

> **メモ:** ハードウェアが加速度データから重力を除去する方法を知らない場合、{{DOMxRef("DeviceMotionEvent")}} にこの値が存在しないことがあります。この場合、代わりに {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} を使用する必要があります。

## 値

`acceleration` プロパティは 3 軸の加速度に関する情報を提供するオブジェクトです。それぞれの軸は自分自身でプロパティを使って表します。

- `x`
  - : 西から東へ向かう軸である X 軸の加速度を表します。
- `y`
  - : 南から北へ向かう軸である Y 軸の加速度を表します。
- `z`
  - : 下から上へ向かう軸である Z 軸の加速度を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} イベント
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} イベント
- {{DOMxRef("DeviceOrientationEvent")}}
- {{DOMxRef("LinearAccelerationSensor")}}
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
