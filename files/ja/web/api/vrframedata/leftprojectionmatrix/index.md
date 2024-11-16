---
title: VRFrameData.leftProjectionMatrix
slug: Web/API/VRFrameData/leftProjectionMatrix
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`leftProjectionMatrix`** は {{domxref("VRFrameData")}} インタフェースの読み取り専用プロパティで、 4 行 4 列の行列を表す {{jsxref("Float32Array")}} を返します。この行列は、左目の描画に利用される射影を表します。

> [!NOTE]
> このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

この値は、 WebGL の {{domxref("WebGLRenderingContext.uniformMatrix", "uniformMatrix4fv")}} 関数へ直接渡されるでしょう。

> [!WARNING]
> アプリケーションは、この行列を改変せずに使用することを強く薦めます。描画時にこの射影行列の使用に失敗すると、表現されたフレームは歪んだり、正しく揃わなかったりし、その結果として、様々な度合いのユーザの不快感を生みます。

## 値

{{jsxref("Float32Array")}} オブジェクトです。

## 例

例については [`VRDisplay.getFrameData()`](/ja/docs/Web/API/VRDisplay/getFrameData#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
