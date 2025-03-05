---
title: VRFrameData.pose
slug: Web/API/VRFrameData/pose
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`pose`** は {{domxref("VRFrameData")}} インターフェイスの読み取り専用プロパティで、現在の {{domxref("VRFrameData.timestamp")}} の時点での {{domxref("VRDisplay")}} の {{domxref("VRPose")}} を返します。

> [!NOTE]
> このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## 値

{{domxref("VRPose")}} オブジェクトです。

## 例

例については [`VRDisplay.getFrameData()`](/ja/docs/Web/API/VRDisplay/getFrameData#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
