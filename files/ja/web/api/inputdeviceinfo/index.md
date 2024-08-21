---
title: InputDeviceInfo
slug: Web/API/InputDeviceInfo
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

**`InputDeviceInfo`** は {{domxref("Media Capture and Streams API", "メディアキャプチャとストリーム API", "", "nocode")}} のインターフェイスで、これが表す入力機器の能力にアクセスするためのものです。
`InputDeviceInfo` オブジェクトは、返された機器が音声または動画入力機器である場合、{{domxref("MediaDevices.enumerateDevices()")}} によって返されます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{DOMxRef("MediaDeviceInfo")}} から継承したプロパティもあります。_

## インスタンスメソッド

_親インターフェイスである {{DOMxRef("MediaDeviceInfo")}} から継承したメソッドもあります。_

- {{domxref("InputDeviceInfo.getCapabilities()")}}
  - : 機器の `MediaStream` の主音声トラックまたは映像トラックを記述する `MediaTrackCapabilities` オブジェクトを返します。

## 例

次の例では、{{domxref("MediaDevices.enumerateDevices()")}} に従うことで、すべてのメディア機器を取得します。機器のいずれかが入力機器である場合、`console.log(device)` により、`InputDeviceInfo` オブジェクトがコンソールに表示されます。

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device); // 機器が入力機器の場合は InputDeviceInfo オブジェクト、それ以外は MediaDeviceInfo オブジェクトです。
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
