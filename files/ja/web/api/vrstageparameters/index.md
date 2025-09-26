---
title: VRStageParameters
slug: Web/API/VRStageParameters
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`VRStageParameters`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで，ルームスケール体験に対応している機器用にステージエリアを記述する値を表現しています。

> [!NOTE]
> このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このインターフェイスには {{domxref("VRDisplay.stageParameters")}} プロパティを通じてアクセスできます。

## インスタンスプロパティ

- {{domxref("VRStageParameters.sittingToStandingTransform")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : {{domxref("VRFrameData")}} の座位空間ビュー行列を立位空間に変換する行列を格納しています。
- {{domxref("VRStageParameters.sizeX")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : プレイ領域境界の幅を、メートル単位で返します。
- {{domxref("VRStageParameters.sizeY")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : プレイ領域境界の奥行きを、メートル単位で返します。

## 例

```js
const info = document.querySelector("p");
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  const stageParams = vrDisplay.stageParameters;
  // stageParams is a VRStageParameters object

  if (stageParams === null) {
    info.textContent =
      "Your VR Hardware does not support room-scale experiences.";
  } else {
    info.innerHTML =
      `<strong>Display stage parameters</strong><br>` +
      `Sitting to standing transform: ${stageParams.sittingToStandingTransform}<br>` +
      `Play area width (m): ${stageParams.sizeX}<br>` +
      `Play area depth (m): ${stageParams.sizeY}`;
  }
});
```

## 仕様書

このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
