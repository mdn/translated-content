---
title: "DeviceOrientationEvent: absolute プロパティ"
short-title: absolute
slug: Web/API/DeviceOrientationEvent/absolute
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

**`absolute`** は {{domxref("DeviceOrientationEvent")}} インターフェイスの読み取り専用プロパティで、端末が絶対的に（つまり、地球の座標フレームを参照して）方向データを提供しているのか、それとも端末が決定した任意のフレームを使用しているのかを示します。
詳しくは[方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)を参照してください。

## 値

- `instanceOfDeviceOrientationEvent` の方向データが、地球の座標フレームと端末の座標フレームの差として指定された場合に `true` を返します。
- 方向データが、任意の、端末が決定した座標フレームを参照して提供されている場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("DeviceOrientationEvent") }}
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} イベント
