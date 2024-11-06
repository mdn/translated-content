---
title: VREyeParameters
slug: Web/API/VREyeParameters
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`VREyeParameters`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで、指定した目のためにシーンを正しくレンダリングするためのすべての情報（視界の情報を含む）を表します。

> [!NOTE]
> このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このインターフェイスは {{domxref("VRDisplay.getEyeParameters()")}} メソッドを通じてアクセスできます。

> [!WARNING]
> このインターフェイスは、ビューおよび投影行列を計算するために使用すべきではありません。ハードウェアの互換性を可能な限り確保するために、{{domxref("VRFrameData")}} で指定された行列を使用してください。

## インスタンスプロパティ

- {{domxref("VREyeParameters.offset")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : ユーザーの目と目の間の中心点から目の中心までのオフセットを、メートル単位で表します。
- {{domxref("VREyeParameters.fieldOfView")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : ユーザーの瞳孔間距離 (IPD) の調整により変化する、目の現在の視野角を記述します。
- {{domxref("VREyeParameters.renderWidth")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : それぞれの目のビューポートの推奨レンダーターゲットの幅をピクセル単位で記述します。
- {{domxref("VREyeParameters.renderHeight")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : それぞれの目のビューポートの推奨レンダーターゲットの高さをピクセル単位で記述します。

## 例

```js
navigator.getVRDisplays().then((displays) => {
  // If a display is available, use it to present the scene
  vrDisplay = displays[0];
  console.log("Display found");
  // Starting the presentation when the button is clicked:
  //   It can only be called in response to a user gesture
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      console.log("Presenting to WebVR display");

      // Set the canvas size to the size of the vrDisplay viewport

      const leftEye = vrDisplay.getEyeParameters("left");
      const rightEye = vrDisplay.getEyeParameters("right");

      canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
      canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

      drawVRScene();
    });
  });
});
```

## 仕様書

このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
