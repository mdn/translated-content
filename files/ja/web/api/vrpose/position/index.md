---
title: VRPose.position
slug: Web/API/VRPose/position
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`position`** は {{domxref("VRPose")}} インターフェイスの読み取り専用プロパティで、 現在の {{domxref("VRPose.timestamp")}} の位置を 3D ベクトルで返します。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

座標系は次の通りです。

- 正の X はユーザーから見て右です。
- 正の Y は上です。
- 正の Z はユーザーの背後です。

位置は原点からのメートル単位で、この点はセンサーの最初の読み取り位置か、 {{domxref("VRDisplay.resetPose()")}} が最後に呼び出された時点のセンサーの位置のどちらかとなります。

> [!NOTE]
> 既定では、すべての位置は座ったままの空間位置として指定されます。この点を {{domxref("VRStageParameters.sittingToStandingTransform")}} で変換すると（例えばルームディスプレイで作業する場合）、この点は立っている空間の位置に変換されます。

## 値

{{jsxref("Float32Array")}} です。または VR センサーが位置データを提供できない場合は null になります。

> [!NOTE]
> ユーザーエージェントは、ネックモデリングなどの技術によってエミュレートされた 位置値を提供することがあります。 その場合も {{domxref("VRDisplayCapabilities.hasPosition")}} を false として報告する必要があります。

## 例

コード例については [`VRDisplay.getFrameData()`](/ja/docs/Web/API/VRDisplay/getFrameData#examples) を参照してください。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
