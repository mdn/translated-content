---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`VRDisplayCapabilities`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで、 {{domxref("VRDisplay")}} の利用可能な機能を示しています。この機能は，例えば位置情報を返すことが可能か、といった VR 機器の動作可能テストに使うことができます。

> [!NOTE]
> このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このインターフェイスには {{domxref("VRDisplay.capabilities")}} プロパティを通じてアクセスできます．

## プロパティ

- {{domxref("VRDisplayCapabilities.canPresent")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 論理値で、VR ディスプレイが（例えば HMD を通じて）コンテンツを表示可能かどうかの状態を返します。
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 論理値で、VR ディスプレイが端末の主ディスプレイから分離されているかどうかを返します。
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 論理値で、VR ディスプレイがトラッキング可能で向き情報を返すことができるかを返します。
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 論理値で、VR ディスプレイがトラッキング可能で位置情報を返すことができるかどうかを返します。
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 数値で、VR ディスプレイが同時に表示できる {{domxref("VRLayerInit")}} の最大値を示す値を返します（例えば {{domxref("VRDisplay.requestPresent()")}} が受け取ることのできる配列の最大長です。）

## 例

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap is a VRDisplayCapabilities object
      const listItem = document.createElement("li");
      listItem.innerHTML =
        `<strong>Display ${i + 1}</strong><br>` +
        `VR Display ID: ${display.displayId}<br>` +
        `VR Display Name: ${display.displayName}<br>` +
        `Display can present content: ${cap.canPresent}<br>` +
        `Display is separate from the computer's main display: ${cap.hasExternalDisplay}<br>` +
        `Display can return position info: ${cap.hasPosition}<br>` +
        `Display can return orientation info: ${cap.hasOrientation}<br>` +
        `Display max layers: ${cap.maxLayers}`;
      list.appendChild(listItem);
    });
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
