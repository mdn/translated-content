---
title: VRPose.orientation
slug: Web/API/VRPose/orientation
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`orientation`** は {{domxref("VRPose")}} インターフェイスの読み取り専用プロパティで、現在の {{domxref("VRPose.timestamp")}} におけるセンサーの方向を、クォータニオン値として返します。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

値は {{jsxref("Float32Array")}} で、以下の値から構成されます。

- pitch — X 軸を中心とした回転。
- yaw — Y 軸を中心とした回転。
- roll — Z 軸を中心とした回転。
- w — 4 つ目の次元（ふつうは 1）。

yaw （y 軸周りの回転）の方向は、センサーを最初に読み込んだときの初期値、または{{domxref("VRDisplay.resetPose()")}}が最後に呼び出された時点でのセンサーの yaw を基準としています。

## 値

{{jsxref("Float32Array")}} です。または VR センサーが方向データを提供できない場合は `null` になります。

## 例

コード例については [`VRDisplay.getFrameData()`](/ja/docs/Web/API/VRDisplay/getFrameData#examples) を参照してください。

> [!NOTE]
> `{ x: 0, y: 0, z: 0, w: 1 }` の方向は「前方」と考えられています。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
