---
title: VRDisplay.displayName
slug: Web/API/VRDisplay/displayName
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`displayName`** は {{domxref("VRDisplay")}} インターフェイスの読み取り専用プロパティで、 `VRDisplay` を識別する人間が読める名前を返します。

> [!NOTE]
> このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

これは通常、 "Oculus VR HMD (HMD)" や "Oculus VR HMD (Sensor)" のようなものになります。

## 値

特定の VR ディスプレイの人間にとって読みやすい名前を含む文字列です。

## 例

例については [`VRDisplayCapabilities`](/ja/docs/Web/API/VRDisplayCapabilities#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
