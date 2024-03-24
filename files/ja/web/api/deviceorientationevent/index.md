---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{apiref("Device Orientation Events")}}{{securecontext_header}}

**`DeviceOrientationEvent`** は{{domxref("Device Orientation Events", "端末方向イベント", "", "nocode")}}のインターフェイスで、ウェブ開発者にウェブページを実行する端末の物理的な方向からの情報を提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DeviceOrientationEvent.DeviceOrientationEvent","DeviceOrientationEvent.DeviceOrientationEvent()")}}
  - : 新しい `DeviceOrientationEvent` を作成します。

## インスタンスプロパティ

- {{domxref("DeviceOrientationEvent.absolute")}} {{ReadOnlyInline}}
  - : 論理値で、端末が絶対に方向データを提供するかどうかを示します。
- {{domxref("DeviceOrientationEvent.alpha")}} {{ReadOnlyInline}}
  - : 数値で、端末の Z 軸の回転量を表し、 0 （含む）から 360 （含まない）までの範囲の値で表します。
- {{domxref("DeviceOrientationEvent.beta")}} {{ReadOnlyInline}}
  - : 数値で、端末の X 軸の回転量を表し、 -180 （含む）から 180 （含まない）までの範囲の値で表します。これは端末の前後方向の動きを表します。
- {{domxref("DeviceOrientationEvent.gamma")}} {{ReadOnlyInline}}
  - : 数値で、端末の Z 軸の回転量を表し、 -90 （含む）から 90 （含まない）までの範囲の値で表します。これは端末の左右方向の動きを表します。
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : 数値で、ワールドシステムの Z 軸を中心とした端末の動きと北の方向との差を表し、 0 から 360 の範囲の値で度数で表します。
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-Standard_Inline}} {{ReadOnlyInline}}
  - : コンパスの精度で、偏差が正の値または負の値を意味しています。通常は 10 です。

## 例

```js
window.addEventListener("deviceorientation", (event) => {
  console.log(`${event.alpha} : ${event.beta} : ${event.gamma}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
- {{ domxref("DeviceMotionEvent") }}
- {{domxref("Window.devicemotion_event", "devicemotion")}}
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [方向および動きとして示されるデータ](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
