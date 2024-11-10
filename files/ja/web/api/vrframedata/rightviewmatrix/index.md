---
title: VRFrameData.rightViewMatrix
slug: Web/API/VRFrameData/rightViewMatrix
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`rightViewMatrix`** は {{domxref("VRFrameData")}} インターフェイスの読み取り専用プロパティで、 4 行 4 列の行列を表す {{jsxref("Float32Array")}} を返します。この行列は、右目の描画に利用されるビュー変換を表します。

> [!NOTE]
> このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

この値は、 WebGL の {{domxref("WebGLRenderingContext.uniformMatrix", "uniformMatrix4fv")}} 関数へ直接渡されるでしょう。

> [!WARNING]
> 描画時にアプリケーションがこの行列を使用することを強く薦めます。

## 値

{{jsxref("Float32Array")}} 型のオブジェクトです。

## 例

例については [`VRDisplay.getFrameData()`](/ja/docs/Web/API/VRDisplay/getFrameData#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
