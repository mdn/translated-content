---
title: "Window: deviceorientationabsolute イベント"
short-title: deviceorientationabsolute
slug: Web/API/Window/deviceorientationabsolute_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

**`deviceorientationabsolute`** イベントは、端末の絶対的な方向が変化したときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("deviceorientationabsolute", (event) => {});

ondeviceorientationabsolute = (event) => {};
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
  - : 数値で、端末の Z 軸の回転量を表し、 -90 （含む）から 90 （含まない）までの範囲の値で表します。これは端末の左右方向の動きを表します。
- `DeviceOrientationEvent.webkitCompassHeading` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 数値で、ワールドシステムの Z 軸を中心とした端末の動きと北の方向との差を表し、 0 から 360 の範囲の値で度数で表します。
- `DeviceOrientationEvent.webkitCompassAccuracy` {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : コンパスの精度で、偏差が正の値または負の値を意味しています。通常は 10 です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("window.devicemotion_event", "devicemotion")}} イベント
- {{DOMxRef("window.deviceorientation_event", "deviceorientation")}} イベント
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
