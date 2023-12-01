---
title: "DeviceMotionEvent: rotationRate プロパティ"
short-title: rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Device Orientation Events")}}

**`DeviceMotionEvent.rotationRate`** は読み取り専用プロパティで、端末がそれぞれの軸を中心に回転している秒あたりの角度を返します。

> **メモ:** ハードウェアがこの情報を提供できない場合、このプロパティは `null` を返します。

## 値

`rotationRate` プロパティは読み取り専用のオブジェクトで、端末の各軸に沿った回転速度を記述します。

- `alpha`
  - : 端末が Z 軸を中心に回転している速度です。つまり、画面に垂直な線を中心に回転している速度です。
- `beta`
  - : 端末が X 軸、つまり後ろから横に向かう軸を中心に回転している速度です。
- `gamma`
  - : 端末が Y 軸、つまり横から横へ向かう軸を中心に回転している速度です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("DeviceMotionEvent") }}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} イベント
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} イベント
- {{DOMxRef("DeviceOrientationEvent") }}
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
