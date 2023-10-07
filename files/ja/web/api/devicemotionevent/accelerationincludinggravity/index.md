---
title: "DeviceMotionEvent: accelerationIncludingGravity プロパティ"
short-title: accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Device Orientation Events")}}

**`accelerationIncludingGravity`** プロパティは、端末が記録した加速度を[メートル毎秒毎秒 (m/s²)](https://ja.wikipedia.org/wiki/メートル毎秒毎秒)単位で返します。重力の影響を補正する {{DOMxRef("DeviceMotionEvent.acceleration")}} とは異なり、この値はユーザーによって発生させられた端末の加速度と、重力によって発生させられた加速度に反対の加速度の合計値です。言い換えれば、これは [g-force](https://en.wikipedia.org/wiki/G-Force) を測定します。実際には、この値は[加速度計](ja.wikipedia.org/wiki/加速度計)によって測定された生データを表します。

この値は {{DOMxRef("DeviceMotionEvent.acceleration")}} ほど有益な値ではありません。しかし、ジャイロスコープを持たない端末など、加速度データから重力を解除できない端末では、この値しか利用できない場合があります。

> **メモ:** `accelerationIncludingGravity` の名前は誤解を招く可能性があります。このプロパティは重力の影響を含めるために加速度を表します。例えば、機器が水平な画面に横たわり、画面が上向きになっている場合、重力は Z 軸に沿って -9.8 となり、`acceleration.z` は 0、`accelerationIncludingGravity.z` は 9.8 となります。同様に、機器が水平で画面を上に向けて自由落下している場合、重力は Z 軸に沿って -9.8 となり、`acceleration.z` は -9.8、`accelerationIncludingGravity.z` は 0 となります。

## 値

`accelerationIncludingGravity` プロパティは、3 軸の加速度に関する情報を指定されたオブジェクトです。それぞれの軸は、自分自身でプロパティを使って表します。

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

- {{DOMxRef("DeviceMotionEvent.acceleration")}}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} イベント
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} イベント
- {{DOMxRef("DeviceOrientationEvent")}}
- {{DOMxRef("Accelerometer")}}
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
