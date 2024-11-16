---
title: "Window: deviceorientation イベント"
short-title: deviceorientation
slug: Web/API/Window/deviceorientation_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

**`deviceorientation`** イベントは、端末の現在の向きを地球座標フレームと比較した場合に、方角センサーから最新のデータが得られた場合に発生します。このデータは端末内部の方位磁針から収集されます。

詳しくは[方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)を参照してください。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("deviceorientation", (event) => {});

ondeviceorientation = (event) => {};
```

## イベント型

{{domxref("DeviceOrientationEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("DeviceOrientationEvent")}}

## イベントプロパティ

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : 論理値で、端末が絶対に方向データを提供するかどうかを示します。
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : 数値で、端末の Z 軸の回転量を表し、 0 （含む）から 360 （含まない）までの範囲の値で表します。
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : 数値で、端末の X 軸の回転量を表し、 -180 （含む）から 180 （含まない）までの範囲の値で表します。これは端末の前後方向の動きを表します。
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : 数値で、端末の Y 軸の回転量を表し、 -90 （含む）から 90 （含まない）までの範囲の値で表します。これは端末の左右方向の動きを表します。
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : 数値で、ワールドシステムの Z 軸を中心とした端末の動きと北の方向との差を表し、 0 から 360 の範囲の値で度数で表します。
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : コンパスの精度で、偏差が正の値または負の値を意味しています。通常は 10 です。

## 例

```js
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: rotation around z-axis
      const leftToRight = event.gamma; // gamma: left to right
      const frontToBack = event.beta; // beta: front back motion

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true,
  );
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  // do something amazing
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`devicemotion`](/ja/docs/Web/API/Window/devicemotion_event)
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
