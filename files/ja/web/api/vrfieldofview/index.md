---
title: VRFieldOfView
slug: Web/API/VRFieldOfView
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVR API")}}{{Deprecated_header}}{{Non-standard_header}}

**`VRFieldOfView`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで、中心点からの視野を示す 4 つの角度で定義される視界を表現します。

> [!NOTE]
> このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

## プロパティ

- {{domxref("VRFieldOfView.upDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 視界の上方向への拡張量を示す角度。
- {{domxref("VRFieldOfView.rightDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 視界の右方向への拡張量を示す角度。
- {{domxref("VRFieldOfView.downDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 視界の下方向への拡張量を示す角度。
- {{domxref("VRFieldOfView.leftDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 視界の左方向への拡張量を示す角度。

## 例

```js
const info = document.querySelector("p");
const list = document.querySelector("ul");
let vrDisplay;

if (navigator.getVRDisplays) {
  reportFieldOfView();
} else {
  info.textContent = "WebVR API not supported by this browser.";
}

function reportFieldOfView() {
  navigator.getVRDisplays().then((displays) => {
    vrDisplay = displays[0];
    const lEye = vrDisplay.getEyeParameters("left");
    const rEye = vrDisplay.getEyeParameters("right");
    // lEye and rEye are VREyeParameters objects

    const lFOV = lEye.fieldOfView;
    const rFOV = rEye.fieldOfView;
    // lFOV and rFOV are VRFieldOfView objects

    const listitem1 = document.createElement("li");
    const listitem2 = document.createElement("li");

    listitem1.innerHTML =
      `<strong>Left eye parameters</strong><br>` +
      `Offset: ${lEye.offset}<br>` +
      `Render width: ${lEye.renderWidth}<br>` +
      `Render height: ${lEye.renderHeight}<br>` +
      `Up degrees: ${lFOV.upDegrees}<br>` +
      `Right degrees: ${lFOV.rightDegrees}<br>` +
      `Down degrees: ${lFOV.downDegrees}<br>` +
      `Left degrees: ${lFOV.leftDegrees}`;

    listitem2.innerHTML =
      `<strong>Right eye parameters</strong><br>` +
      `Offset: ${rEye.offset}<br>` +
      `Render width: ${rEye.renderWidth}<br>` +
      `Render height: ${rEye.renderHeight}<br>` +
      `Up degrees: ${rFOV.upDegrees}<br>` +
      `Right degrees: ${rFOV.rightDegrees}<br>` +
      `Down degrees: ${rFOV.downDegrees}<br>` +
      `Left degrees: ${rFOV.leftDegrees}`;

    list.appendChild(listitem1);
    list.appendChild(listitem2);
  });
}
```

## 仕様書

このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
